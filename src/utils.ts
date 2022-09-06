/** 处理字符串为小驼峰命名 */
const firstUpperCase = (str: string) => {
  return str?.replace(str[0], str[0].toLowerCase());
};

// 生成API函数
export const generateApi = (
  notes: string,
  apiName: string,
  queryParame: string,
  path: string,
  method: string
) => {
  /**
   * 判断get和delete
   * 注意：只有get和delete为params对象，其他都为data对象
   */
  const apiParam = method === 'get' || method === 'delete' ? 'params' : 'data';

  return `\n\n/** ${notes} */
export const ${firstUpperCase(apiName)}API = async (${apiParam}: ${
    queryParame && queryParame.includes('{')
      ? queryParame
      : queryParame
      ? `API.${queryParame}`
      : ''
  }) => {
  return request({
    method: '${method.toUpperCase()}',
    url: '${path}',
    ${apiParam},
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

// 生成接口参数类型对象
export const generateParameType = (parameters: any[], apiTypeName: string) => {
  let parames = [];
  parameters.forEach((item) => {
    let type = judgmentType(item.schema.type);
    parames.push(
      `/** 
  * @param {${type}} ${item.name} - ${item.description || '暂无说明'}
  */ \n ${item.name}${!item.required && '?'}: ${type}`
    );
  });
  // 如果是GET请求，优先使用
  return apiTypeName ? apiTypeName : `{\n ${parames.join(',\n')}\n}`;
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
