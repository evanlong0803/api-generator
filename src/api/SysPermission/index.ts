import request from '@/utils/request';

/** 通过Id查找数据对象 */
export const Get = async (params) => {
  return request({
    method: 'GET',
    url: '/api/SysPermission/Get',
    params,
  });
};

/** /api/SysPermission/GetPageSysPermissionList */
export const GetPageSysPermissionList = async (data) => {
  return request({
    method: 'POST',
    url: '/api/SysPermission/GetPageSysPermissionList',
    data,
  });
};

/** /api/SysPermission/DeleteSysPermissionById */
export const DeleteSysPermissionById = async (params) => {
  return request({
    method: 'DELETE',
    url: '/api/SysPermission/DeleteSysPermissionById',
    params,
  });
};

/** /api/SysPermission/GetSysPermissionList */
export const GetSysPermissionList = async (data) => {
  return request({
    method: 'POST',
    url: '/api/SysPermission/GetSysPermissionList',
    data,
  });
};

/** /api/SysPermission/UpdateSysPermission */
export const UpdateSysPermission = async (data) => {
  return request({
    method: 'PUT',
    url: '/api/SysPermission/UpdateSysPermission',
    data,
  });
};

/** /api/SysPermission/CreateSysPermission */
export const CreateSysPermission = async (data) => {
  return request({
    method: 'POST',
    url: '/api/SysPermission/CreateSysPermission',
    data,
  });
};

/** /api/SysPermission/GetSysPermissionFilterByPid */
export const GetSysPermissionFilterByPid = async (data) => {
  return request({
    method: 'POST',
    url: '/api/SysPermission/GetSysPermissionFilterByPid',
    data,
  });
};