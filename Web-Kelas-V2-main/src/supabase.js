import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://vxnrsksoexsrtebjrvki.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ4bnJza3NvZXhzcnRlYmpydmtpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzAxOTgwMzAsImV4cCI6MjA4NTc3NDAzMH0.tAPpmoDLBzsv_z9xdC6h7ktkOTiNdd3J2eBrQMAu0z8'

export const supabase = createClient(
  supabaseUrl,
  supabaseAnonKey
)
