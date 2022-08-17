import request from '@/utils/request';

/** /api/MotoGprs/DeleteMotoGprsById */
export const DeleteMotoGprsById = async (params) => {
  return request({
    method: 'DELETE',
    url: '/api/MotoGprs/DeleteMotoGprsById',
    params,
  });
};

/** 通过Id查找数据对象 */
export const Get = async (params) => {
  return request({
    method: 'GET',
    url: '/api/MotoGprs/Get',
    params,
  });
};

/** /api/MotoGprs/CreateMotoGprs */
export const CreateMotoGprs = async (data) => {
  return request({
    method: 'POST',
    url: '/api/MotoGprs/CreateMotoGprs',
    data,
  });
};

/** /api/MotoGprs/GetPageMotoGprsList */
export const GetPageMotoGprsList = async (data) => {
  return request({
    method: 'POST',
    url: '/api/MotoGprs/GetPageMotoGprsList',
    data,
  });
};

/** /api/MotoGprs/UpdateMotoGprs */
export const UpdateMotoGprs = async (data) => {
  return request({
    method: 'PUT',
    url: '/api/MotoGprs/UpdateMotoGprs',
    data,
  });
};

/** 通过车牌号/姓名/设备名/设备号查找数据对象 */
export const GetWhere = async (data) => {
  return request({
    method: 'POST',
    url: '/api/MotoGprs/GetWhere',
    data,
  });
};