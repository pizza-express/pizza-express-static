import request from '@/utils/request';
import { stringify } from 'qs';

export default async function queryOrderList(params) {
  return request.get(`/v1/api/order?${stringify(params)}`);
}
