import { AxiosRequestConfig, Canceler } from 'axios';

export interface EndpointGetParams<T, E = any> {
  url: string;
  params?: any;
  data?: any;
  headers?: any;
  onSuccess?: (param: T) => void;
  onError?: (error: E) => void;
  extra?: AxiosRequestConfig<any>;
}

export interface EndpointPostParams<T, E = any> extends EndpointGetParams<T, E> {
  onUploadProgress?: ((p: number) => void) | null;
}

export interface EndpointReqParams<T, E = any> extends EndpointPostParams<T, E> {
  method: 'POST' | 'GET' | 'PUT';
}

export interface EndpointReqResponse<T = any> {
  run: () => Promise<T>;
  cancel: Canceler;
}
