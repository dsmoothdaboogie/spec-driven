export type HttpMethod = 'GET'|'POST'|'PUT'|'PATCH'|'DELETE'|'HEAD'|'OPTIONS';
export interface KV { key: string; value: string; }
export interface RequestModel {
  id?: string;
  name?: string;
  method: HttpMethod;
  url: string;
  headers: KV[];
  query: KV[];
  body?: string;
  auth?: { type: 'none'|'basic'|'bearer'; username?: string; password?: string; token?: string };
}
export interface EnvironmentVar { key: string; value: string; isSecret?: boolean; }
export interface Environment { id: string; name: string; vars: EnvironmentVar[]; }
export interface Collection { id: string; name: string; items: (RequestModel | {folder: string; items: RequestModel[]})[]; }
