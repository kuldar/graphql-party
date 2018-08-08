// import * as jwt from 'jsonwebtoken'

// // Get user ID
// export const getUserId = (ctx) => {

//   // Let's grab the Authorization header from the request
//   const Authorization = ctx.request.get('Authorization')

//   // If Authorization header exists,
//   // let's extract the user ID
//   // with token and app secret
//   if (Authorization) {
//     const token = Authorization.replace('Bearer ', '')
//     const { userId } = jwt.verify(token, process.env.APP_SECRET)
//     return userId
//   }

//   // Otherwise let's return an error
//   throw new AuthError()
// }

// // Auth error
// export class AuthError extends Error {
//   constructor() { super('Not authorized') }
// }