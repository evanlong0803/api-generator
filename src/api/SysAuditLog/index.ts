import request from '@/utils/request';

/** 通过Id查找数据对象 */
export const Get = async (params) => {
  return request({
    method: 'GET',
    url: '/api/SysAuditLog/Get',
    params,
  });
};

/** 获取日志分页数据 */
export const GetPageSysAuditLogList = async (data) => {
  return request({
    method: 'POST',
    url: '/api/SysAuditLog/GetPageSysAuditLogList',
    data,
  });
};

/** /api/SysAuditLog/DeleteSysAuditLogById */
export const DeleteSysAuditLogById = async (params) => {
  return request({
    method: 'DELETE',
    url: '/api/SysAuditLog/DeleteSysAuditLogById',
    params,
  });
};

/** /api/SysAuditLog/UpdateSysAuditLog */
export const UpdateSysAuditLog = async (data) => {
  return request({
    method: 'PUT',
    url: '/api/SysAuditLog/UpdateSysAuditLog',
    data,
  });
};

/** /api/SysAuditLog/CreateSysAuditLog */
export const CreateSysAuditLog = async (data) => {
  return request({
    method: 'POST',
    url: '/api/SysAuditLog/CreateSysAuditLog',
    data,
  });
};