import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

/**
 * Browser-safe Supabase client.
 * Uses the anon key — safe to expose publicly.
 */
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
