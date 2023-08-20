import axios, { AxiosInstance, AxiosRequestConfig, Canceler } from "axios";
import {
  EndpointGetParams,
  EndpointPostParams,
  EndpointReqParams,
  EndpointReqResponse,
} from "../../models/Endpoint";
import { BaseUrl, Timeout } from "./endpoints";
import showFlashMessage from "../../components/atoms/flashMessage/FlashMessage";

const getErrorMessage = (response: any): string => {
  if (response) {
    const { errors, ErrorCode } = response;
    if (Array.isArray(errors)) {
      return errors.join("\n");
    }
    if (typeof errors === "string") {
      return errors;
    }
    if (ErrorCode) {
      return `API error ${ErrorCode}`;
    }
  }

  return "Unknown error occurred!";
};

class requestUtil {
  static instance: requestUtil;
  static getInstance() {
    if (this.instance == null) {
      this.instance = new requestUtil();
    }

    return this.instance;
  }

  private mAxios: AxiosInstance;

  constructor() {
    this.mAxios = axios.create({
      timeout: Timeout,
      baseURL: BaseUrl,
    });
    this.mAxios.interceptors.response.use(
      function (response) {
        if (response.status >= 200 && response.status < 300) {
          if (response.data && response.data.isSuccess === false) {
            return Promise.reject(new Error(getErrorMessage(response.data)));
          }

          return Promise.resolve(response.data);
        } else {
          return Promise.reject(new Error(getErrorMessage("ApiUnknownResult")));
        }
      },
      function (error) {
        if (!error || !error.response) {
          showFlashMessage(
            "Oops, Network Error!",
            "danger",
            5000,
            "Something went wrong! Operation faced with a problem."
          );
        }
      }
    );
  }

  setAuth(auth: string) {
    this.mAxios.defaults.headers.common.Authorization = `Bearer ${auth}`;
  }

  get<G, E = any>(param: EndpointGetParams<G, E>) {
    return this.req<G, E>({ ...param, method: "GET" });
  }

  post<T, E = any>(param: EndpointPostParams<T, E>) {
    return this.req<T, E>({ ...param, method: "POST" });
  }

  put<T, E = any>(param: EndpointPostParams<T, E>) {
    return this.req<T, E>({ ...param, method: "PUT" });
  }

  req<T, E = any>({
    url,
    method,
    params,
    data,
    headers,
    onUploadProgress,
    onSuccess,
    onError = () => {},
    extra,
  }: EndpointReqParams<T, E>): EndpointReqResponse<T> {
    const CancelToken = axios.CancelToken;
    let cancel: Canceler = () => {};

    var config: AxiosRequestConfig = {
      ...extra,
      method,
      url,
      headers,
      cancelToken: new CancelToken(function executor(cnl) {
        cancel = cnl;
      }),
      onUploadProgress: (progressEvent: any) => {
        if (onUploadProgress) {
          onUploadProgress(
            Math.round((progressEvent.loaded * 100) / progressEvent.total)
          );
        }
      },
    };

    if (params) {
      config.params = params;
    }
    if (data) {
      config.data = data;
    }

    return {
      run: () => {
        const req = this.mAxios.request<any, T>(config);
        if (onSuccess) {
          req.then(onSuccess).catch(onError);
        }

        return req;
      },
      cancel,
    };
  }
}

const RequestUtil = requestUtil.getInstance();

export default RequestUtil;
