export type HttpMethod = 'GET'|'POST'|'PUT'|'PATCH'|'DELETE'|'HEAD'|'OPTIONS';
export type KV = { key: string; value: string };
export type Auth = { type: 'none'|'basic'|'bearer'; username?: string; password?: string; token?: string };

export type RequestModel = {
  id?: string;
  name?: string;
  method: HttpMethod;
  url: string;
  headers: KV[];
  query: KV[];
  body?: string;
  auth?: Auth;
};

export type EnvironmentVar = { key: string; value: string; isSecret?: boolean };
export type Environment = { id: string; name: string; vars: EnvironmentVar[] };
export type Collection = { id: string; name: string; items: (RequestModel | {folder: string; items: RequestModel[]})[] };
