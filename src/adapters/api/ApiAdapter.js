/**
 * API adapter interface.
 * Abstracts communication with the backend.
 */
export class ApiAdapter {
  async get(path, options) { throw new Error('Not implemented'); }
  async post(path, body, options) { throw new Error('Not implemented'); }
  async put(path, body, options) { throw new Error('Not implemented'); }
  async del(path, options) { throw new Error('Not implemented'); }
}
