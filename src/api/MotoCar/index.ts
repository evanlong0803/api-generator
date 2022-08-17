import request from '@/utils/request';

/** 通过Id查找数据对象 */
export const Get = async (params) => {
  return request({
    method: 'GET',
    url: '/api/MotoCar/Get',
    params,
  });
};

/** 删除电动车 */
export const DeleteMotoCarById = async (params) => {
  return request({
    method: 'DELETE',
    url: '/api/MotoCar/DeleteMotoCarById',
    params,
  });
};

/** 获取所有的分页数据，可加筛选关键字 */
export const GetPageMotoCarList = async (data) => {
  return request({
    method: 'POST',
    url: '/api/MotoCar/GetPageMotoCarList',
    data,
  });
};

/** 预约登记信息 */
export const CreateMotoCar = async (data) => {
  return request({
    method: 'POST',
    url: '/api/MotoCar/CreateMotoCar',
    data,
  });
};

/** 编辑接口 */
export const UpdateMotoCar = async (data) => {
  return request({
    method: 'PUT',
    url: '/api/MotoCar/UpdateMotoCar',
    data,
  });
};

/** /api/MotoCar/GetMotoCarListByKey */
export const GetMotoCarListByKey = async (data) => {
  return request({
    method: 'POST',
    url: '/api/MotoCar/GetMotoCarListByKey',
    data,
  });
};

/** /api/MotoCar/GetMotoCarListBbySysOrganizationID */
export const GetMotoCarListBbySysOrganizationID = async (data) => {
  return request({
    method: 'POST',
    url: '/api/MotoCar/GetMotoCarListBbySysOrganizationID',
    data,
  });
};

/** 分页显示state 未审核0和已审核1的数据，查询参数在filter queryString中输入，查询参数支持多种查询 */
export const GetPageMotoCarListByState = async (data) => {
  return request({
    method: 'POST',
    url: '/api/MotoCar/GetPageMotoCarListByState',
    data,
  });
};

/** 判断车牌号是否存在 */
export const GetExistMotoNumber = async (data) => {
  return request({
    method: 'POST',
    url: '/api/MotoCar/GetExistMotoNumber',
    data,
  });
};

/** 安装工通过手机号码查询已审核过的数据 */
export const GetMotoDataByOwnerTel = async (data) => {
  return request({
    method: 'POST',
    url: '/api/MotoCar/GetMotoDataByOwnerTel',
    data,
  });
};

/** 审核预约车辆 */
export const ExamineMotoCarStateById = async (data) => {
  return request({
    method: 'POST',
    url: '/api/MotoCar/ExamineMotoCarStateById',
    data,
  });
};

/** 安装工派单（支持批量派单） */
export const DistributionMotoCarInstallerById = async (data) => {
  return request({
    method: 'POST',
    url: '/api/MotoCar/DistributionMotoCarInstallerById',
    data,
  });
};

/** 参数多种条件查询 */
export const GetPageMotoCarListByMore = async (data) => {
  return request({
    method: 'POST',
    url: '/api/MotoCar/GetPageMotoCarListByMore',
    data,
  });
};