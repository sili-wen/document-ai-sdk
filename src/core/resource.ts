// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { DocumentAI } from '../client';

export abstract class APIResource {
  protected _client: DocumentAI;

  constructor(client: DocumentAI) {
    this._client = client;
  }
}
