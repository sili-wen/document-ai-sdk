// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';

export class FileUploads extends APIResource {
  create(body: FileUploadCreateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/file-uploads', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface FileUploadCreateParams {
  name: string;

  type: 'application/pdf';
}

export declare namespace FileUploads {
  export { type FileUploadCreateParams as FileUploadCreateParams };
}
