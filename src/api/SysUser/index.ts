import request from '@/utils/request';

/** 获取所有的用户列表 */
export const GetAllSysUserList = async (params) => {
  return request({
    method: 'GET',
    url: '/api/SysUser/GetAllSysUserList',
    params,
  });
};

/** 根据条件获取用户 */
export const GetUserList = async (data) => {
  return request({
    method: 'POST',
    url: '/api/SysUser/GetUserList',
    data,
  });
};

/** 根据用户id获取用户详细信息 */
export const Get = async (params) => {
  return request({
    method: 'GET',
    url: '/api/SysUser/Get',
    params,
  });
};

/** 分页获取用户列表 */
export const GetPageUserList = async (data) => {
  return request({
    method: 'POST',
    url: '/api/SysUser/GetPageUserList',
    data,
  });
};

/** 删除用户账号 */
export const DeleteUserById = async (params) => {
  return request({
    method: 'DELETE',
    url: '/api/SysUser/DeleteUserById',
    params,
  });
};

/** 用户创建 */
export const CreateUser = async (data) => {
  return request({
    method: 'POST',
    url: '/api/SysUser/CreateUser',
    data,
  });
};

/** 修改用户 */
export const UpdateUser = async (data) => {
  return request({
    method: 'PUT',
    url: '/api/SysUser/UpdateUser',
    data,
  });
};

/** 初始化密码 */
export const UpdateUserpasswrodById = async (data) => {
  return request({
    method: 'PUT',
    url: '/api/SysUser/UpdateUserpasswrodById',
    data,
  });
};

/** 根据安装点id查询所有的安装工 */
export const GetInstallerByIId = async (params) => {
  return request({
    method: 'GET',
    url: '/api/SysUser/GetInstallerByIId',
    params,
  });
};