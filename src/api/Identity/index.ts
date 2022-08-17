import request from '@/utils/request';

/** /api/Identity/GetGuid */
export const GetGuid = async (data) => {
  return request({
    method: 'POST',
    url: '/api/Identity/GetGuid',
    data,
  });
};

/** /api/Identity/GetMenu */
export const GetMenu = async (data) => {
  return request({
    method: 'POST',
    url: '/api/Identity/GetMenu',
    data,
  });
};

/** /api/Identity/RefreshToken */
export const RefreshToken = async (data) => {
  return request({
    method: 'POST',
    url: '/api/Identity/RefreshToken',
    data,
  });
};

/** /api/Identity/GetTokenByLoginNoValid */
export const GetTokenByLoginNoValid = async (data) => {
  return request({
    method: 'POST',
    url: '/api/Identity/GetTokenByLoginNoValid',
    data,
  });
};

/** /api/Identity/GetVerificationCode */
export const GetVerificationCode = async (params) => {
  return request({
    method: 'GET',
    url: '/api/Identity/GetVerificationCode',
    params,
  });
};

/** /api/Identity/GetTokenByLogin */
export const GetTokenByLogin = async (data) => {
  return request({
    method: 'POST',
    url: '/api/Identity/GetTokenByLogin',
    data,
  });
};

/** /api/Identity/FileUpload */
export const FileUpload = async (data) => {
  return request({
    method: 'POST',
    url: '/api/Identity/FileUpload',
    data,
  });
};