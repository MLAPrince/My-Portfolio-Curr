import { createClient } from '@supabase/supabase-js'

// Supabase configuration - get credentials from environment variables
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

// Create Supabase client instance
export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Database service functions for contact form
export const contactService = {
  // Submit contact form data to Supabase
  async submitContactForm(formData) {
    try {
      const { data, error } = await supabase
        .from('contacts')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            message: formData.message,
            created_at: new Date().toISOString()
          }
        ])
        .select()

      if (error) {
        console.error('Supabase error:', error)
        throw new Error('Failed to submit contact form')
      }

      return { success: true, data }
    } catch (error) {
      console.error('Contact form submission error:', error)
      return { success: false, error: error.message }
    }
  },

  // Get all contact form submissions (for admin use)
  async getContacts() {
    try {
      const { data, error } = await supabase
        .from('contacts')
        .select('*')
        .order('created_at', { ascending: false })

      if (error) {
        console.error('Supabase error:', error)
        throw new Error('Failed to fetch contacts')
      }

      return { success: true, data }
    } catch (error) {
      console.error('Fetch contacts error:', error)
      return { success: false, error: error.message }
    }
  }
}

// SQL to create the contacts table in Supabase (run this in Supabase SQL editor):
/*
CREATE TABLE contacts (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;

-- Create policy to allow inserts from anyone (for contact form)
CREATE POLICY "Allow public inserts" ON contacts
  FOR INSERT WITH CHECK (true);

-- Create policy to allow reads only for authenticated users (for admin)
CREATE POLICY "Allow authenticated reads" ON contacts
  FOR SELECT USING (auth.role() = 'authenticated');
*/
