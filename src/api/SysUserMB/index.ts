import request from '@/utils/request';

/** 通过Id查找数据对象 */
export const Get = async (params) => {
  return request({
    method: 'GET',
    url: '/api/SysUserMB/Get',
    params,
  });
};

/** /api/SysUserMB/DeleteSysUserMBById */
export const DeleteSysUserMBById = async (params) => {
  return request({
    method: 'DELETE',
    url: '/api/SysUserMB/DeleteSysUserMBById',
    params,
  });
};

/** /api/SysUserMB/CreateSysUserMB */
export const CreateSysUserMB = async (data) => {
  return request({
    method: 'POST',
    url: '/api/SysUserMB/CreateSysUserMB',
    data,
  });
};

/** /api/SysUserMB/GetPageSysUserMBList */
export const GetPageSysUserMBList = async (data) => {
  return request({
    method: 'POST',
    url: '/api/SysUserMB/GetPageSysUserMBList',
    data,
  });
};

/** /api/SysUserMB/UpdateSysUserMB */
export const UpdateSysUserMB = async (data) => {
  return request({
    method: 'PUT',
    url: '/api/SysUserMB/UpdateSysUserMB',
    data,
  });
};