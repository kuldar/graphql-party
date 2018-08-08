// // Libraries
// import { ApolloClient, HttpLink, InMemoryCache } from 'apollo-boost'
// import fetch from 'isomorphic-unfetch'

// let apolloClient = null

// // Polyfill fetch() on the server
// // (used by apollo-client)
// if (!process.browser) {
//   global.fetch = fetch
// }

// const create = initialState => {
//   return new ApolloClient({
//     connectToDevTools: process.browser,
//     ssrMode: !process.browser, // Disables forceFetch on the server (so queries are only run once)
//     link: new HttpLink({
//       uri: process.env.SERVER_URL, // Server URL
//       credentials: 'same-origin' // Additional fetch() options like `credentials` or `headers`
//     }),
//     cache: new InMemoryCache().restore(initialState || {})
//   })
// }

// const initApollo = initialState => {
//   // Make sure to create a new client for every server-side request so that data
//   // isn't shared between connections (which would be bad)
//   if (!process.browser) {
//     return create(initialState)
//   }

//   // Reuse client on the client-side
//   if (!apolloClient) {
//     apolloClient = create(initialState)
//   }

//   return apolloClient
// }

// export default initApollo