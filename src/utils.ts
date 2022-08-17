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
  path: string,
  method: string
) => {
  /**
   * 判断get和delete
   * 注意：只有get和delete为params对象，其他都为data对象
   */
  const apiParam = method === 'get' || method === 'delete' ? 'params' : 'data';

  return `\n\n/** ${notes} */
export const ${firstUpperCase(apiName)} = async (${apiParam}) => {
  return request({
    method: '${method.toUpperCase()}',
    url: '${path}',
    ${apiParam},
  });
};`;
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
