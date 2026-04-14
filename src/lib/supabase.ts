import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Create a dummy client if credentials are missing to prevent app crash
// This allows the UI to render even if Supabase is not configured yet
const createNoopProxy = (): any => {
  const noop = () => {};
  const proxy: any = new Proxy(noop, {
    get: (_target, prop) => {
      if (prop === 'then') {
        return (resolve: any) => resolve({ data: null, error: new Error('Supabase not configured') });
      }
      return proxy;
    },
    apply: () => proxy
  });
  return proxy;
};

export const supabase = (supabaseUrl && supabaseAnonKey) 
  ? createClient(supabaseUrl, supabaseAnonKey)
  : createNoopProxy();
