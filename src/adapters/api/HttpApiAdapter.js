import axios from 'axios';
import { ApiAdapter } from './ApiAdapter';
import { API_URL } from '../../config/constants';
import { supabase } from '../../config/supabaseClient';

export class HttpApiAdapter extends ApiAdapter {
  constructor() {
    super();
    this.client = axios.create({ baseURL: API_URL });

    this.client.interceptors.request.use(async (config) => {
      const { data: { session } } = await supabase.auth.getSession();
      if (session?.access_token) {
        config.headers.Authorization = `Bearer ${session.access_token}`;
      }
      return config;
    });
  }

  async get(path, options = {}) {
    const res = await this.client.get(path, options);
    return res.data;
  }

  async post(path, body = {}, options = {}) {
    const res = await this.client.post(path, body, options);
    return res.data;
  }

  async put(path, body = {}, options = {}) {
    const res = await this.client.put(path, body, options);
    return res.data;
  }

  async del(path, options = {}) {
    const res = await this.client.delete(path, options);
    return res.data;
  }
}
