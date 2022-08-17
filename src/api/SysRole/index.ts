import request from '@/utils/request';

/** 通过Id查找数据对象 */
export const Get = async (params) => {
  return request({
    method: 'GET',
    url: '/api/SysRole/Get',
    params,
  });
};

/** /api/SysRole/GetPageSysRoleList */
export const GetPageSysRoleList = async (data) => {
  return request({
    method: 'POST',
    url: '/api/SysRole/GetPageSysRoleList',
    data,
  });
};

/** /api/SysRole/GetSysRoleList */
export const GetSysRoleList = async (params) => {
  return request({
    method: 'GET',
    url: '/api/SysRole/GetSysRoleList',
    params,
  });
};

/** /api/SysRole/DeleteSysRoleById */
export const DeleteSysRoleById = async (params) => {
  return request({
    method: 'DELETE',
    url: '/api/SysRole/DeleteSysRoleById',
    params,
  });
};

/** /api/SysRole/CreateSysRole */
export const CreateSysRole = async (data) => {
  return request({
    method: 'POST',
    url: '/api/SysRole/CreateSysRole',
    data,
  });
};

/** /api/SysRole/UpdateSysRole */
export const UpdateSysRole = async (data) => {
  return request({
    method: 'PUT',
    url: '/api/SysRole/UpdateSysRole',
    data,
  });
};

/** /api/SysRole/UpdateSysRolePermissions */
export const UpdateSysRolePermissions = async (data) => {
  return request({
    method: 'PUT',
    url: '/api/SysRole/UpdateSysRolePermissions',
    data,
  });
};