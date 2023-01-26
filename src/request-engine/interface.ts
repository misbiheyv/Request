import { RequestParams } from "../request-builder";

export type AbstractRequest = (url: string, params: RequestParams) => Promise<any>