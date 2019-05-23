import request from '@/utils/request';

export async function queryPrivateCourse() {
  return request('https://my-json-server.typicode.com/zhy1440/demo/posts');
}

export async function queryProjectNotice() {
  return request('/api/project/notice');
}
