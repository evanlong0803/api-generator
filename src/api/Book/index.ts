import request from '@/utils/request';

/** 查查默认1页10条 */
export const GetAll = async (params) => {
  return request({
    method: 'GET',
    url: '/api/Book/GetAll',
    params,
  });
};

/** /api/Book/DeleteById */
export const DeleteById = async (params) => {
  return request({
    method: 'DELETE',
    url: '/api/Book/DeleteById',
    params,
  });
};

/** /api/Book/Get */
export const Get = async (params) => {
  return request({
    method: 'GET',
    url: '/api/Book/Get',
    params,
  });
};

/** /api/Book/GetPageEntityList */
export const GetPageEntityList = async (params) => {
  return request({
    method: 'GET',
    url: '/api/Book/GetPageEntityList',
    params,
  });
};

/** 分页查询,高亮处理 */
export const GetPageBookList = async (data) => {
  return request({
    method: 'POST',
    url: '/api/Book/GetPageBookList',
    data,
  });
};

/** /api/Book/UpdateEntity */
export const UpdateEntity = async (data) => {
  return request({
    method: 'PUT',
    url: '/api/Book/UpdateEntity',
    data,
  });
};

/** /api/Book/Create */
export const Create = async (data) => {
  return request({
    method: 'POST',
    url: '/api/Book/Create',
    data,
  });
};