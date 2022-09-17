import { config } from '../config';
import { get } from 'http';
import { appendFileSync, mkdirSync, writeFileSync } from 'fs';
import {
  generateApi,
  generateApiType,
  generateQueryStringType,
  generateUploadParameType,
} from './utils';

get(config.url, (res) => {
  let rawData = '';
  res.on('data', (chunk) => {
    rawData += chunk;
  });
  res.on('end', () => {
    try {
      const data = JSON.parse(rawData);
      // 创建API目录
      console.log('开始生成API目录...');
      data.tags.forEach((item) => {
        // API目录
        const apiDir = `${config.outDir}/${item.name}`;
        mkdirSync(apiDir, { recursive: true });
        // 开始生成API引用
        writeFileSync(
          `${config.outDir}/${item.name}/index.ts`,
          `${config.utilImport}`
        );
      });
      console.log('API目录生成结束...');

      console.log('开始生成API文件...');
      // 生成API文件
      Object.keys(data.paths).forEach((path) => {
        const fileName = path.split('/');
        const api = data.paths[path];

        // API函数名称
        const apiFunctionName = fileName[3] || fileName[2];

        // 请求类型
        const method = Object.keys(data.paths[path])[0];

        // 接口注释
        const note = api[method]['summary'];

        // 目录名称
        const apiDirName = api[method]['x-apifox-folder'];

        // queryString参数（不管是GET还是POST请求都有queryString参数）
        const parameters = api[method].parameters;
        const requestQueryStringType = generateQueryStringType(parameters);

        // body参数体（除了GET、DELETE请求以外，都会有body参数）
        const requestBodyContent =
          api[method]?.requestBody?.content['application/json']?.schema.$ref;
        const requestBodyType = requestBodyContent?.split('/')?.pop();

        // 特殊处理：上传接口
        // const properties =
        //   api[method]?.requestBody?.content['multipart/form-data']?.schema
        //     .properties;

        // const uploadParame = generateUploadParameType(properties);

        // // 判断是上传还是其他接口
        // const parames = api[method]?.requestBody?.content['application/json']
        //   ? requestQueryStringType
        //   : uploadParame;

        // 开始生成API
        appendFileSync(
          `${config.outDir}/${apiDirName}/index.ts`,
          generateApi(
            note,
            apiFunctionName,
            requestQueryStringType,
            requestBodyType,
            path,
            method
          )
        );
      });
      console.log('API文件生成结束...');

      console.log('开始生成api.d.ts文件...');
      // 生成类型文件

      // 生成api.d.ts文件
      appendFileSync(`${config.outDir}/api.d.ts`, 'declare namespace API {\n');
      Object.keys(data.components.schemas).forEach((key) => {
        const dto = data.components.schemas[key];
        // 开始生成API
        appendFileSync(
          `${config.outDir}/api.d.ts`,
          generateApiType(dto.properties || {}, key)
        );
      });
      appendFileSync(`${config.outDir}/api.d.ts`, '}');

      console.log('api.d.ts文件生成完成');

      console.log('文件生成结束...😆');
    } catch (error) {
      console.error(error);
      // console.error(`错误：${error.message}`);
    }
  });
});
