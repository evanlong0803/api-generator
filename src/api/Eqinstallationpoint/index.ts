import request from '@/utils/request';

/** /api/Eqinstallationpoint/DeleteEqinstallationpointById */
export const DeleteEqinstallationpointById = async (params) => {
  return request({
    method: 'DELETE',
    url: '/api/Eqinstallationpoint/DeleteEqinstallationpointById',
    params,
  });
};

/** 通过Id查找数据对象 */
export const Get = async (params) => {
  return request({
    method: 'GET',
    url: '/api/Eqinstallationpoint/Get',
    params,
  });
};

/** 判断安装点名称是否存在 */
export const GetExistEqinstallname = async (data) => {
  return request({
    method: 'POST',
    url: '/api/Eqinstallationpoint/GetExistEqinstallname',
    data,
  });
};

/** /api/Eqinstallationpoint/UpdateEqinstallationpoint */
export const UpdateEqinstallationpoint = async (data) => {
  return request({
    method: 'PUT',
    url: '/api/Eqinstallationpoint/UpdateEqinstallationpoint',
    data,
  });
};

/** 根据关键字分页查询，为空是是所有的， */
export const GetPageEqinstallationpointList = async (data) => {
  return request({
    method: 'POST',
    url: '/api/Eqinstallationpoint/GetPageEqinstallationpointList',
    data,
  });
};

/** /api/Eqinstallationpoint/CreateEqinstallationpoint */
export const CreateEqinstallationpoint = async (data) => {
  return request({
    method: 'POST',
    url: '/api/Eqinstallationpoint/CreateEqinstallationpoint',
    data,
  });
};

/** 获取所有的安装点 */
export const GetAllEqinstallationpoint = async (data) => {
  return request({
    method: 'POST',
    url: '/api/Eqinstallationpoint/GetAllEqinstallationpoint',
    data,
  });
};