// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class DocumentContexts extends APIResource {
  /**
   * Create a Document
   */
  create(
    body: DocumentContextCreateParams,
    options?: RequestOptions,
  ): APIPromise<DocumentContextCreateResponse> {
    return this._client.post('/document-contexts', { body, ...options });
  }
}

export interface DocumentContextCreateResponse {
  fileKey: string;

  query: string;
}

export interface DocumentContextCreateParams {
  fileKey: string;

  query: string;
}

export declare namespace DocumentContexts {
  export {
    type DocumentContextCreateResponse as DocumentContextCreateResponse,
    type DocumentContextCreateParams as DocumentContextCreateParams,
  };
}
