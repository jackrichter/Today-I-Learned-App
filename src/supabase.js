import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://wzcsfsnuwoqpbujxchsk.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind6Y3Nmc251d29xcGJ1anhjaHNrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODkzNzk3MTMsImV4cCI6MjAwNDk1NTcxM30.PwanSOBJ4-qqAtejBPOfPLCDwwCZJoMDWFg7eu90bk8";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
