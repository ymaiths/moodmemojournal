// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://jxcanjekdejpofpzgqnz.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp4Y2FuamVrZGVqcG9mcHpncW56Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDUyOTg4NjMsImV4cCI6MjA2MDg3NDg2M30.ktu0OLr5EiENhNHMHfXBp0gPf9IrxPzMsREMlhLLdLY";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);