// MongoDB Configuration (commented out for future use)
// Uncomment and configure when you want to use MongoDB instead of Supabase

/*
import { MongoClient } from 'mongodb'

// MongoDB connection configuration
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017'
const DB_NAME = process.env.MONGODB_DB_NAME || 'portfolio_db'

let client = null
let db = null

// Connect to MongoDB
export const connectToMongoDB = async () => {
  try {
    if (!client) {
      client = new MongoClient(MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      await client.connect()
      db = client.db(DB_NAME)
      console.log('Connected to MongoDB successfully')
    }
    return db
  } catch (error) {
    console.error('MongoDB connection error:', error)
    throw new Error('Failed to connect to MongoDB')
  }
}

// Close MongoDB connection
export const closeMongoDB = async () => {
  try {
    if (client) {
      await client.close()
      client = null
      db = null
      console.log('MongoDB connection closed')
    }
  } catch (error) {
    console.error('Error closing MongoDB connection:', error)
  }
}

// MongoDB service functions for contact form
export const mongoContactService = {
  // Submit contact form data to MongoDB
  async submitContactForm(formData) {
    try {
      const database = await connectToMongoDB()
      const collection = database.collection('contacts')
      
      const contactData = {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        createdAt: new Date(),
        status: 'unread'
      }

      const result = await collection.insertOne(contactData)
      
      return { 
        success: true, 
        data: { 
          id: result.insertedId, 
          ...contactData 
        } 
      }
    } catch (error) {
      console.error('MongoDB contact form submission error:', error)
      return { success: false, error: error.message }
    }
  },

  // Get all contact form submissions from MongoDB
  async getContacts() {
    try {
      const database = await connectToMongoDB()
      const collection = database.collection('contacts')
      
      const contacts = await collection
        .find({})
        .sort({ createdAt: -1 })
        .toArray()

      return { success: true, data: contacts }
    } catch (error) {
      console.error('MongoDB fetch contacts error:', error)
      return { success: false, error: error.message }
    }
  },

  // Mark contact as read
  async markContactAsRead(contactId) {
    try {
      const database = await connectToMongoDB()
      const collection = database.collection('contacts')
      
      const result = await collection.updateOne(
        { _id: contactId },
        { $set: { status: 'read', readAt: new Date() } }
      )

      return { success: true, data: result }
    } catch (error) {
      console.error('MongoDB mark as read error:', error)
      return { success: false, error: error.message }
    }
  }
}

// Export database instance getter
export const getDB = () => db

// Example usage:
// import { mongoContactService } from './config/mongodb.js'
// const result = await mongoContactService.submitContactForm(formData)
*/
