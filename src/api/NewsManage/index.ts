import request from '@/utils/request';

/** 通过Id查找数据对象 */
export const Get = async (params) => {
  return request({
    method: 'GET',
    url: '/api/NewsManage/Get',
    params,
  });
};

/** /api/NewsManage/GetPageNewsManageList */
export const GetPageNewsManageList = async (data) => {
  return request({
    method: 'POST',
    url: '/api/NewsManage/GetPageNewsManageList',
    data,
  });
};

/** /api/NewsManage/CreateNewsManage */
export const CreateNewsManage = async (data) => {
  return request({
    method: 'POST',
    url: '/api/NewsManage/CreateNewsManage',
    data,
  });
};

/** /api/NewsManage/DeleteNewsManageById */
export const DeleteNewsManageById = async (params) => {
  return request({
    method: 'DELETE',
    url: '/api/NewsManage/DeleteNewsManageById',
    params,
  });
};

/** /api/NewsManage/UpdateNewsManage */
export const UpdateNewsManage = async (data) => {
  return request({
    method: 'PUT',
    url: '/api/NewsManage/UpdateNewsManage',
    data,
  });
};