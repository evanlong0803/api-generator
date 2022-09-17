/** 处理字符串为小驼峰命名 */
const firstUpperCase = (str: string) => {
  return str?.replace(str[0], str[0].toLowerCase());
};

// 生成API函数
export const generateApi = (
  note: string,
  apiName: string,
  requestQueryStringType: string,
  requestBodyType: string,
  path: string,
  method: string
) => {
  /**
   * 判断get和delete
   * 注意：只有get和delete为params对象，其他都为data对象
   */
  const apiParamName =
    method === 'get' || method === 'delete' ? 'params' : 'data';
  /**
   * 判断get和delete
   * 注意：只有get和delete为params对象，其他都为data对象
   */
  // 判断查询字符串对象是否为空对象
  const isNullObj = requestQueryStringType.includes('/**');

  // 查询字符串类型对象
  const requestQueryStringTypeObj = isNullObj
    ? `params: ${requestQueryStringType}, `
    : '';

  // Body参数类型对象
  const requestBodyTypeObj = requestBodyType
    ? `data: API.${requestBodyType}, `
    : '';

  const apiParamObjs = `${requestQueryStringTypeObj}${requestBodyTypeObj}config: AxiosRequestConfig`;

  return `\n\n/** ${note} */
export const ${firstUpperCase(apiName)}API = async (${apiParamObjs}) => {
  return request({
    method: '${method.toUpperCase()}',
    url: '${path}',
    ${isNullObj ? `params,` : ''}
    ${requestBodyType ? `data,` : ''}
    ...config,
  });
};`;
};

// 判断字段类型
const judgmentType = (type: string, itemType?: string) => {
  switch (type) {
    case 'integer' || 'int64' || 'int32':
      return 'number';
    case 'object':
      return 'any';
    case 'array':
      return `${itemType ?? 'any'}[]`;
    default:
      return type;
  }
};

// 生成接口queryString参数类型对象
export const generateQueryStringType = (parameters: any[]) => {
  let parames = [];
  parameters.forEach((item) => {
    let type = judgmentType(item.schema.type);
    parames.push(
      `/** 
  * @param {${type}} ${item.name} - ${item.description || '暂无说明'}
  */ \n ${item.name}${!item.required && '?'}: ${type}`
    );
  });
  return `{\n ${parames.join(',\n')}\n}`;
};

// 生成上传接口参数类型对象
export const generateUploadParameType = (properties: any) => {
  let parames = [];
  properties &&
    Object.keys(properties).forEach((key) => {
      let type = judgmentType(properties[key].type);
      parames.push(
        `/** 
  * @param {${type}} ${key} - 文件名称
  */ \n ${key}: ${type}`
      );
    });
  return `{\n ${parames.join(',\n')}\n}`;
};

// 生成API类型
export const generateApiType = (properties: any, dtoName: string) => {
  let parames = [];
  Object.keys(properties).forEach((key) => {
    const itemType = properties[key]?.['$ref']?.split('/').pop();
    let type = judgmentType(properties[key].type, itemType);
    parames.push(`    /**
     * @param {${type}} ${key} - ${properties.description || '暂无说明'}
     */
    ${key}${!properties.nullable && '?'}: ${type};
  `);
  });
  return `  interface ${dtoName} {\n${parames.join('')}}\n\n`;
};
