import request from '@/utils/request';

/** 根据电动车id获取电动车实时数据 */
export const GetRealDataByMotoId = async (params) => {
  return request({
    method: 'GET',
    url: '/api/MotoRealData/GetRealDataByMotoId',
    params,
  });
};

/** 根据电动车id获取电动车历史数据 */
export const GetHisDataByMotoId = async (params) => {
  return request({
    method: 'GET',
    url: '/api/MotoRealData/GetHisDataByMotoId',
    params,
  });
};

/** 定位监控根据业务办理点获取所属车辆状态以及状态 */
export const GetMotoCarByorgName = async (params) => {
  return request({
    method: 'GET',
    url: '/api/MotoRealData/GetMotoCarByorgName',
    params,
  });
};

/** 根据业务办理点获取所属范围内的报警记录 */
export const GetMotoCarAlermByorgName = async (params) => {
  return request({
    method: 'GET',
    url: '/api/MotoRealData/GetMotoCarAlermByorgName',
    params,
  });
};