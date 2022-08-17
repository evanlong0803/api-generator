import request from '@/utils/request';

/** 通过Id查找数据对象 */
export const Get = async (params) => {
  return request({
    method: 'GET',
    url: '/api/SysDataDictionary/Get',
    params,
  });
};

/** /api/SysDataDictionary/GetPageSysDataDictionaryList */
export const GetPageSysDataDictionaryList = async (data) => {
  return request({
    method: 'POST',
    url: '/api/SysDataDictionary/GetPageSysDataDictionaryList',
    data,
  });
};

/** /api/SysDataDictionary/DeleteSysDataDictionaryById */
export const DeleteSysDataDictionaryById = async (params) => {
  return request({
    method: 'DELETE',
    url: '/api/SysDataDictionary/DeleteSysDataDictionaryById',
    params,
  });
};

/** /api/SysDataDictionary/UpdateSysDataDictionary */
export const UpdateSysDataDictionary = async (data) => {
  return request({
    method: 'PUT',
    url: '/api/SysDataDictionary/UpdateSysDataDictionary',
    data,
  });
};

/** /api/SysDataDictionary/GetSysDataDictionaryList */
export const GetSysDataDictionaryList = async (data) => {
  return request({
    method: 'POST',
    url: '/api/SysDataDictionary/GetSysDataDictionaryList',
    data,
  });
};

/** /api/SysDataDictionary/CreateSysDataDictionary */
export const CreateSysDataDictionary = async (data) => {
  return request({
    method: 'POST',
    url: '/api/SysDataDictionary/CreateSysDataDictionary',
    data,
  });
};

/** 根据id获取字典tree */
export const GetSysDataDictionaryFilterByPid = async (data) => {
  return request({
    method: 'POST',
    url: '/api/SysDataDictionary/GetSysDataDictionaryFilterByPid',
    data,
  });
};