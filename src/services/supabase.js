import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://ezzfbxbskeqbxycnobpy.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV6emZieGJza2VxYnh5Y25vYnB5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQ3MDU2MDksImV4cCI6MjAyMDI4MTYwOX0.Sb7XfS-23gex15GO1gSXEzBiPcWV4mDk-XtQnbwV85g";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
