// 生成的模板
// const template = `
// /**
//  * @author ${author}
//  * @date ${date}
//  * @description ${description}
//  */
// const
// `;

export const config = {
  /** 生成链接 */
  url: 'http://127.0.0.1:4523/export/openapi?projectId=1350572&specialPurpose=openapi-generator',
  /** 生成目录位置 */
  outDir: 'src/api',
  /** api类型文件名称 */
  outTypeDir: './src/types',
  /** api类型文件名称 */
  outTypeFile: 'api.d.ts',
  /** 引入axios */
  utilImport: "import request from '@/utils/request';",
};
