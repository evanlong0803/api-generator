import request from '@/utils/request';

/** 通过Id查找数据对象 */
export const Get = async (params) => {
  return request({
    method: 'GET',
    url: '/api/SysOrganization/Get',
    params,
  });
};

/** /api/SysOrganization/GetPageSysOrganizationList */
export const GetPageSysOrganizationList = async (data) => {
  return request({
    method: 'POST',
    url: '/api/SysOrganization/GetPageSysOrganizationList',
    data,
  });
};

/** /api/SysOrganization/GetSysOrganizationFilterByPid */
export const GetSysOrganizationFilterByPid = async (data) => {
  return request({
    method: 'POST',
    url: '/api/SysOrganization/GetSysOrganizationFilterByPid',
    data,
  });
};

/** /api/SysOrganization/DeleteSysOrganizationById */
export const DeleteSysOrganizationById = async (params) => {
  return request({
    method: 'DELETE',
    url: '/api/SysOrganization/DeleteSysOrganizationById',
    params,
  });
};

/** /api/SysOrganization/CreateSysOrganization */
export const CreateSysOrganization = async (data) => {
  return request({
    method: 'POST',
    url: '/api/SysOrganization/CreateSysOrganization',
    data,
  });
};

/** /api/SysOrganization/UpdateSysOrganization */
export const UpdateSysOrganization = async (data) => {
  return request({
    method: 'PUT',
    url: '/api/SysOrganization/UpdateSysOrganization',
    data,
  });
};

/** /api/SysOrganization/GetSysOrganizationList */
export const GetSysOrganizationList = async (data) => {
  return request({
    method: 'POST',
    url: '/api/SysOrganization/GetSysOrganizationList',
    data,
  });
};

/** 根据组织id更新所属车辆 */
export const UpdateSysOrganizationRange = async (data) => {
  return request({
    method: 'POST',
    url: '/api/SysOrganization/UpdateSysOrganizationRange',
    data,
  });
};

/** /api/SysOrganization/GetChildrenListByPid */
export const GetChildrenListByPid = async (data) => {
  return request({
    method: 'POST',
    url: '/api/SysOrganization/GetChildrenListByPid',
    data,
  });
};

/** 获取用户权限的组织机构 */
export const GetChildrenListByToken = async (data) => {
  return request({
    method: 'POST',
    url: '/api/SysOrganization/GetChildrenListByToken',
    data,
  });
};

/** 获取所有的办理点树形结构 */
export const GetSysOrganizationDtoTree = async (data) => {
  return request({
    method: 'POST',
    url: '/api/SysOrganization/GetSysOrganizationDtoTree',
    data,
  });
};

/** 根据id获取字典tree,无最后的办理点 */
export const GetSysOrganizationDtoSecondTree = async (data) => {
  return request({
    method: 'POST',
    url: '/api/SysOrganization/GetSysOrganizationDtoSecondTree',
    data,
  });
};

/** 获取用户权限下的组织机构树形 预约添加代码使用 */
export const GetOrgChildrenListByToken = async (data) => {
  return request({
    method: 'POST',
    url: '/api/SysOrganization/GetOrgChildrenListByToken',
    data,
  });
};

/** 获取用户权限下的组织机构树形加车辆数量，首页地图使用 */
export const GetOrgChildrenMapListByToken = async (data) => {
  return request({
    method: 'POST',
    url: '/api/SysOrganization/GetOrgChildrenMapListByToken',
    data,
  });
};