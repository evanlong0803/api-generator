import request from '@/utils/request';

/** 通过Id查找数据对象 */
export const Get = async (params) => {
  return request({
    method: 'GET',
    url: '/api/SysUserSysOrganization/Get',
    params,
  });
};

/** /api/SysUserSysOrganization/DeleteSysUserSysOrganizationById */
export const DeleteSysUserSysOrganizationById = async (params) => {
  return request({
    method: 'DELETE',
    url: '/api/SysUserSysOrganization/DeleteSysUserSysOrganizationById',
    params,
  });
};

/** /api/SysUserSysOrganization/CreateSysUserSysOrganization */
export const CreateSysUserSysOrganization = async (data) => {
  return request({
    method: 'POST',
    url: '/api/SysUserSysOrganization/CreateSysUserSysOrganization',
    data,
  });
};

/** /api/SysUserSysOrganization/GetPageSysUserSysOrganizationList */
export const GetPageSysUserSysOrganizationList = async (data) => {
  return request({
    method: 'POST',
    url: '/api/SysUserSysOrganization/GetPageSysUserSysOrganizationList',
    data,
  });
};

/** /api/SysUserSysOrganization/UpdateSysUserSysOrganization */
export const UpdateSysUserSysOrganization = async (data) => {
  return request({
    method: 'PUT',
    url: '/api/SysUserSysOrganization/UpdateSysUserSysOrganization',
    data,
  });
};