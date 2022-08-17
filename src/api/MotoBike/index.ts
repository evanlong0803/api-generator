import request from '@/utils/request';

/** 通过Id查找数据对象 */
export const Get = async (params) => {
  return request({
    method: 'GET',
    url: '/api/MotoBike/Get',
    params,
  });
};

/** /api/MotoBike/DeleteMotoBikeById */
export const DeleteMotoBikeById = async (params) => {
  return request({
    method: 'DELETE',
    url: '/api/MotoBike/DeleteMotoBikeById',
    params,
  });
};

/** /api/MotoBike/GetWhere */
export const GetWhere = async (data) => {
  return request({
    method: 'POST',
    url: '/api/MotoBike/GetWhere',
    data,
  });
};

/** /api/MotoBike/GetPageMotoBikeList */
export const GetPageMotoBikeList = async (data) => {
  return request({
    method: 'POST',
    url: '/api/MotoBike/GetPageMotoBikeList',
    data,
  });
};

/** /api/MotoBike/CreateMotoBike */
export const CreateMotoBike = async (data) => {
  return request({
    method: 'POST',
    url: '/api/MotoBike/CreateMotoBike',
    data,
  });
};

/** /api/MotoBike/UpdateMotoBike */
export const UpdateMotoBike = async (data) => {
  return request({
    method: 'PUT',
    url: '/api/MotoBike/UpdateMotoBike',
    data,
  });
};