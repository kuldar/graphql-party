// // Libraries
// import * as bcrypt from 'bcryptjs'
// import * as jwt from 'jsonwebtoken'

// // Locals
// import { getUserId } from '../utils'

// // Authentication
// export const Authentication = {

//   Query: {

//     // Me
//     me(parent, args, ctx, info) {
//       const id = getUserId(ctx)
//       return ctx.db.query.user({ where: { id } }, info)
//     }

//   },

//   Mutation: {

//     // Signup mutation
//     async signup(parent, args, ctx, info) {

//       // Lowercase the email
//       args.email = args.email.toLowerCase()

//       // Hash the password and create a new user
//       const password = await bcrypt.hash(args.password, 10)
//       const user = await ctx.db.mutation.createUser(
//         { data: { ...args, password } }, info
//       )

//       // Let's return a signed JWT token and the user
//       const token = jwt.sign({ userId: user.id }, process.env.APP_SECRET)

//       // ctx.response.cookie('token', token, {
//       //   maxAge: 1000 * 60 * 60 * 24 * 365,
//       //   httpOnly: true
//       // })

//       return { token, user }
//     },

//     // Login mutation
//     async login(parent, args, ctx, info) {

//       // Let's check if the user exists
//       const user = await ctx.db.query.user({ where: { email: args.email } })
//       if (!user) {
//         throw new Error(`No such user found for email: ${args.email}`)
//       }

//       // Let's check if the password is valid
//       const valid = await bcrypt.compare(args.password, user.password)
//       if (!valid) {
//         throw new Error('Invalid password')
//       }

//       // If password matches
//       // let's return a signed JWT token and the user
//       return {
//         token: jwt.sign({ userId: user.id }, process.env.APP_SECRET),
//         user
//       }
//     }

//   }
// }