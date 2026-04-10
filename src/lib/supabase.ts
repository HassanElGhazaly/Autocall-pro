import { createClient } from '@supabase/supabase-js';

const supabaseUrl = (import.meta as any).env.VITE_SUPABASE_URL || 'https://kwhrmemjevdsmpkfhann.supabase.co';
const supabaseAnonKey = (import.meta as any).env.VITE_SUPABASE_ANON_KEY;

if (!supabaseAnonKey) {
  console.error('CRITICAL: VITE_SUPABASE_ANON_KEY is missing. Please add it to your environment variables or .env file.');
}

export const supabase = createClient(
  supabaseUrl,
  supabaseAnonKey || 'MISSING_ANON_KEY'
);
