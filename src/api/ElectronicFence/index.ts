import request from '@/utils/request';

/** /api/ElectronicFence/DeleteElectronicFenceById */
export const DeleteElectronicFenceById = async (params) => {
  return request({
    method: 'DELETE',
    url: '/api/ElectronicFence/DeleteElectronicFenceById',
    params,
  });
};

/** /api/ElectronicFence/GetPageElectronicFenceList */
export const GetPageElectronicFenceList = async (data) => {
  return request({
    method: 'POST',
    url: '/api/ElectronicFence/GetPageElectronicFenceList',
    data,
  });
};

/** 通过Id查找数据对象 */
export const Get = async (params) => {
  return request({
    method: 'GET',
    url: '/api/ElectronicFence/Get',
    params,
  });
};

/** /api/ElectronicFence/CreateElectronicFence */
export const CreateElectronicFence = async (data) => {
  return request({
    method: 'POST',
    url: '/api/ElectronicFence/CreateElectronicFence',
    data,
  });
};

/** /api/ElectronicFence/UpdateElectronicFence */
export const UpdateElectronicFence = async (data) => {
  return request({
    method: 'PUT',
    url: '/api/ElectronicFence/UpdateElectronicFence',
    data,
  });
};