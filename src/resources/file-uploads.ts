// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class FileUploads extends APIResource {
  /**
   * Create a File Upload
   */
  create(body: FileUploadCreateParams, options?: RequestOptions): APIPromise<FileUploadCreateResponse> {
    return this._client.post('/file-uploads', { body, ...options });
  }
}

export interface FileUploadCreateResponse {
  s3Key: string;

  url: string;
}

export interface FileUploadCreateParams {
  name: string;

  type: 'application/pdf';
}

export declare namespace FileUploads {
  export {
    type FileUploadCreateResponse as FileUploadCreateResponse,
    type FileUploadCreateParams as FileUploadCreateParams,
  };
}
