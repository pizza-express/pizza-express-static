import request from '@/utils/request';

export default async function querydishesList() {
  return request.get('/v1/api/menu');
}

export async function create(payload) {
  console.log(payload);
  return request.post('/v1/api/dishes', { data: payload });
}

export async function update(id, payload) {
  console.log(id, payload);
  return request.put(`/v1/api/dishes/${id}`, { data: payload });
}
