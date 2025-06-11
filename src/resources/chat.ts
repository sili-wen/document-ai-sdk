// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Chat extends APIResource {
  /**
   * Create an AI Chat Message
   */
  createMessage(
    id: string,
    body: ChatCreateMessageParams,
    options?: RequestOptions,
  ): APIPromise<ChatCreateMessageResponse> {
    return this._client.post(path`/chat/${id}/messages`, { body, ...options });
  }
}

export interface ChatCreateMessageResponse {
  content: string;
}

export interface ChatCreateMessageParams {
  fileKey: string;

  query: string;
}

export declare namespace Chat {
  export {
    type ChatCreateMessageResponse as ChatCreateMessageResponse,
    type ChatCreateMessageParams as ChatCreateMessageParams,
  };
}
