require('dotenv').config()

export const DB_HOST: string = process.env.DB_HOST
export const DB_PORT: number = parseInt(process.env.DB_PORT)
export const DB_USERNAME: string = process.env.DB_USERNAME
export const DB_PASSWORD: string = process.env.DB_PASSWORD
export const DATABASE: string = process.env.DATABASE