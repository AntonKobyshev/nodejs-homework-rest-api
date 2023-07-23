// 1. Given email and password
// 2. Return true if email and passport  or false if not
// 3. If given not valid argument throw error with message.
// const { expect, before } = require('jest');

// const request = require('supertest')
// const mongoose = require('mongoose')
// const app = require('../../app')
// const { describe, test } = require('node:test')

// const { DB_HOST, PORT = 3000 } = process.env

// describe('tests for login/register controllers', () => {
//   beforeAll(() =>
//     mongoose
//       .connect(DB_HOST)
//       .then(() => {
//         console.log('database connection successful')
//         app.listen(PORT, () => {
//           console.log(`Server running. Use our API on port: ${PORT}`)
//         })
//       })
//       .catch((error) => {
//         console.log(`Server is not running. Error message: ${error.message}`)
//         process.exit(1)
//       })
//     )
    
//     test('login returns response status 200 and response body must contain a token ', async () => {
//     const response = await request(app).post('/api/auth/login').send({
//       email: 'Antonkob@gmail.com',
//       password: '123456',
//     })
        
//     expect(response.status).toBe(200)
//     expect(typeof response.body.token).toBe('string')
//   })

//     test('register returns response status 201 and response body must contain name, email and subscription type', async () => {
//     const response = await request(app).post('/api/auth/register').send({
//       username: 'Antonkob',
//       email: 'Antonkob@gmail.com',
//       password: '123456',
//     })
//     const { name, email, subscription } = response.body
//     expect(response.status).toBe(201)
//     expect(typeof name).toBe('string')
//     expect(typeof email).toBe('string')
//     expect(typeof subscription).toBe('string')
//   })
// })

