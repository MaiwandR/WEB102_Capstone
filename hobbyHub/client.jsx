import { createClient} from '@supabase/supabase-js';


const URL = 'https://vjynddkkxorvacroqbtm.supabase.co'
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZqeW5kZGtreG9ydmFjcm9xYnRtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU2MzkyNzYsImV4cCI6MjA2MTIxNTI3Nn0.Pab5z0YOnl8MxULl7GpA7ecs95qxv0BxgDhTp5ESZZ8"


export const supabase = createClient(URL, API_KEY)