import { createClient } from "@supabase/supabase-js";

// Use placeholder URL and key if environment variables are not set (e.g., during build)
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://placeholder.supabase.co";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "placeholder-anon-key";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Administrative client for backend operations
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY || "placeholder-service-role-key";
export const supabaseAdmin = createClient(supabaseUrl, supabaseServiceRoleKey);
