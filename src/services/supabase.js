import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://zoakmvqoujdiubldmiiv.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpvYWttdnFvdWpkaXVibGRtaWl2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjA2NzkyNTMsImV4cCI6MjA3NjI1NTI1M30.oFHaIavAibwZek808atMQz6Qaix0IbF-0rjYGLWinfY";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
