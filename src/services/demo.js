import request from '@/utils/request';

export default async function queryPrivateCourse() {
  return request('https://my-json-server.typicode.com/zhy1440/demo/posts');
}
