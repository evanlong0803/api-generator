import request from '@/utils/request';

/** 通过Id查找数据对象 */
export const Get = async (params) => {
  return request({
    method: 'GET',
    url: '/api/MotoCarPre/Get',
    params,
  });
};

/** /api/MotoCarPre/CreateMotoCarPre */
export const CreateMotoCarPre = async (data) => {
  return request({
    method: 'POST',
    url: '/api/MotoCarPre/CreateMotoCarPre',
    data,
  });
};

/** /api/MotoCarPre/GetPageMotoCarPreList */
export const GetPageMotoCarPreList = async (data) => {
  return request({
    method: 'POST',
    url: '/api/MotoCarPre/GetPageMotoCarPreList',
    data,
  });
};

/** /api/MotoCarPre/DeleteMotoCarPreById */
export const DeleteMotoCarPreById = async (params) => {
  return request({
    method: 'DELETE',
    url: '/api/MotoCarPre/DeleteMotoCarPreById',
    params,
  });
};

/** /api/MotoCarPre/UpdateMotoCarPre */
export const UpdateMotoCarPre = async (data) => {
  return request({
    method: 'PUT',
    url: '/api/MotoCarPre/UpdateMotoCarPre',
    data,
  });
};