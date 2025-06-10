// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Documents extends APIResource {
  /**
   * Create a Document
   */
  create(body: DocumentCreateParams, options?: RequestOptions): APIPromise<DocumentCreateResponse> {
    return this._client.post('/documents', { body, ...options });
  }
}

export interface DocumentCreateResponse {
  name: string;

  s3Key: string;

  type: 'application/pdf';
}

export interface DocumentCreateParams {
  name: string;

  s3Key: string;

  type: 'application/pdf';
}

export declare namespace Documents {
  export {
    type DocumentCreateResponse as DocumentCreateResponse,
    type DocumentCreateParams as DocumentCreateParams,
  };
}
