import { config } from '../config';
import { get } from 'http';
import { appendFileSync, mkdirSync, writeFileSync } from 'fs';
import { generateApi } from './utils';

get(config.url, (res) => {
  let rawData = '';
  res.on('data', (chunk) => {
    rawData += chunk;
  });
  return res.on('end', () => {
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
        // 目录名称
        const apiDirName = fileName[2];
        // API函数名称
        const apiFunctionName = fileName[3];
        // 请求类型
        const method = Object.keys(data.paths[path])[0];
        // 接口注释
        const note = data.paths[path][method]['summary'];

        // 开始生成API
        appendFileSync(
          `${config.outDir}/${apiDirName}/index.ts`,
          generateApi(note, apiFunctionName, path, method)
        );
      });
      console.log('API文件生成结束...');

      console.log('开始API类型文件...');
      // 生成类型文件
      // 生成API文件
      Object.keys(data.components.schemas).forEach((key) => {
        // 开始生成API
        // appendFileSync(`${config.outDir}/api.d.ts`,{});
      });

      console.log('API生成完成');
    } catch (error) {
      console.error(`错误：${error.message}`);
    }
  });
});
