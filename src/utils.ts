/** 处理字符串为小驼峰命名 */
const firstUpperCase = (str: string) => {
  return str.replace(/\w+/g, (word) => {
    return word.replace(/^\w/, (first) => first.toUpperCase());
  });
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
    queryParame.includes('{') ? queryParame : 'API.' + queryParame
  }) => {
  return request({
    method: '${method.toUpperCase()}',
    url: '${path}',
    ${apiParam},
  });
};`;
};

// 判断字段类型
const judgmentType = (type: string) => {
  switch (type) {
    case 'integer' || 'int64' || 'int32':
      return 'number';
    default:
      return type;
  }
};

// 生成参数类型对象
export const generateParameType = (parameters: any[], apiTypeName: string) => {
  let parames = [];
  parameters.forEach((item) => {
    let type = judgmentType(item.schema.type);
    parames.push(
      `/** 
  * @param {${type}} ${item.name} - ${item.description || '暂无说明'}
  */ \n ${item.name}${!item.required && '?'}: ${type}\n`
    );
  });
  // 如果是GET请求，优先使用
  return parames.length ? `{\n ${parames.join(',')}}` : apiTypeName;
};

// 生成API函数
export const generateApiType = (dtoName: string) => {
  return `
declare namespace API {
  interface LoginUserDto {
    /** guid */
    guidKey: string;
    /** 密码 */
    pwd: string;
    /** 租户id */
    tenantId: number;
    /** 用户名 */
    userId: string;
    /** 验证码 */
    validateCode: string;
  }
}\n\n`;
};
