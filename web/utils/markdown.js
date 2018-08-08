export const graphqlRuby = `
  # graphql <img src="https://cloud.githubusercontent.com/assets/2231765/9094460/cb43861e-3b66-11e5-9fbf-71066ff3ab13.png" height="40" alt="graphql-ruby"/>

  [![Build Status](https://travis-ci.org/rmosolgo/graphql-ruby.svg?branch=master)](https://travis-ci.org/rmosolgo/graphql-ruby)
  [![Gem Version](https://badge.fury.io/rb/graphql.svg)](https://rubygems.org/gems/graphql)
  [![Code Climate](https://codeclimate.com/github/rmosolgo/graphql-ruby/badges/gpa.svg)](https://codeclimate.com/github/rmosolgo/graphql-ruby)
  [![Test Coverage](https://codeclimate.com/github/rmosolgo/graphql-ruby/badges/coverage.svg)](https://codeclimate.com/github/rmosolgo/graphql-ruby)
  [![built with love](https://cloud.githubusercontent.com/assets/2231765/6766607/d07992c6-cfc9-11e4-813f-d9240714dd50.png)](http://rmosolgo.github.io/react-badges/)

  A Ruby implementation of [GraphQL](http://graphql.org/).

  - [Website](https://rmosolgo.github.io/graphql-ruby)
  - [API Documentation](http://www.rubydoc.info/gems/graphql)
  - [Newsletter](https://tinyletter.com/graphql-ruby)

  ## Installation

  Install from RubyGems by adding it to your \`Gemfile\`, then bundling.

  \`\`\`ruby
  # Gemfile
  gem 'graphql'
  \`\`\`

  \`\`\`
  $ bundle install
  \`\`\`

  ## Getting Started

  \`\`\`
  $ rails generate graphql:install
  \`\`\`

  After this, you may need to run \`bundle install\` again, as by default graphiql-rails is added on installation.

  Or, see ["Getting Started"](https://rmosolgo.github.io/graphql-ruby/).

  ## Upgrade

  I also sell [GraphQL::Pro](http://graphql.pro) which provides several features on top of the GraphQL runtime, including [authorization](http://rmosolgo.github.io/graphql-ruby/pro/authorization), [Pusher-based subscriptions](http://graphql-ruby.org/subscriptions/pusher_implementation) and [persisted queries](http://rmosolgo.github.io/graphql-ruby/operation_store/overview). Besides that, Pro customers get email support and an opportunity to support graphql-ruby's development!

  ## Goals

  - Implement the GraphQL spec & support a Relay front end
  - Provide idiomatic, plain-Ruby API with similarities to reference implementation where possible
  - Support Ruby on Rails and Relay

  ## Getting Involved

  - __Say hi & ask questions__ in the [#ruby channel on Slack](https://graphql-slack.herokuapp.com/) or [on Twitter](https://twitter.com/rmosolgo)!
  - __Report bugs__ by posting a description, full stack trace, and all relevant code in a  [GitHub issue](https://github.com/rmosolgo/graphql-ruby/issues).
  - __Start hacking__ with the [Development guide](http://graphql-ruby.org/development).
`

export const graphqlJs = `
  # GraphQL.js

  The JavaScript reference implementation for GraphQL, a query language for APIs created by Facebook.

  [![npm version](https://badge.fury.io/js/graphql.svg)](http://badge.fury.io/js/graphql)
  [![Build Status](https://travis-ci.org/graphql/graphql-js.svg?branch=master)](https://travis-ci.org/graphql/graphql-js?branch=master)
  [![Coverage Status](https://coveralls.io/repos/graphql/graphql-js/badge.svg?branch=master)](https://coveralls.io/r/graphql/graphql-js?branch=master)

  See more complete documentation at http://graphql.org/ and
  http://graphql.org/graphql-js/.

  Looking for help? Find resources [from the community](http://graphql.org/community/).


  ## Getting Started

  An overview of GraphQL in general is available in the
  [README](https://github.com/facebook/graphql/blob/master/README.md) for the
  [Specification for GraphQL](https://github.com/facebook/graphql). That overview
  describes a simple set of GraphQL examples that exist as [tests](src/__tests__)
  in this repository. A good way to get started with this repository is to walk
  through that README and the corresponding tests in parallel.

  ### Using GraphQL.js

  Install GraphQL.js from npm

  With yarn:

  \`\`\`sh
  yarn add graphql
  \`\`\`

  or alternatively using npm:

  \`\`\`sh
  npm install --save graphql
  \`\`\`

  GraphQL.js provides two important capabilities: building a type schema, and
  serving queries against that type schema.

  First, build a GraphQL type schema which maps to your code base.

  \`\`\`js
  import {
    graphql,
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString
  } from 'graphql';

  var schema = new GraphQLSchema({
    query: new GraphQLObjectType({
      name: 'RootQueryType',
      fields: {
        hello: {
          type: GraphQLString,
          resolve() {
            return 'world';
          }
        }
      }
    })
  });
  \`\`\`

  This defines a simple schema with one type and one field, that resolves
  to a fixed value. The \`resolve\` function can return a value, a promise,
  or an array of promises. A more complex example is included in the top
  level [tests](src/__tests__) directory.

  Then, serve the result of a query against that type schema.

  \`\`\`js
  var query = '{ hello }';

  graphql(schema, query).then(result => {

    // Prints
    // {
    //   data: { hello: "world" }
    // }
    console.log(result);

  });
  \`\`\`

  This runs a query fetching the one field defined. The \`graphql\` function will
  first ensure the query is syntactically and semantically valid before executing
  it, reporting errors otherwise.

  \`\`\`js
  var query = '{ boyhowdy }';

  graphql(schema, query).then(result => {

    // Prints
    // {
    //   errors: [
    //     { message: 'Cannot query field boyhowdy on RootQueryType',
    //       locations: [ { line: 1, column: 3 } ] }
    //   ]
    // }
    console.log(result);

  });
  \`\`\`

  ### Want to ride the bleeding edge?

  The \`npm\` branch in this repository is automatically maintained to be the last
  commit to \`master\` to pass all tests, in the same form found on npm. It is
  recommended to use builds deployed to npm for many reasons, but if you want to use
  the latest not-yet-released version of graphql-js, you can do so by depending
  directly on this branch:

  \`\`\`
  npm install graphql@git://github.com/graphql/graphql-js.git#npm
  \`\`\`

  ### Using in a Browser

  GraphQL.js is a general purpose library and can be used both in a Node server
  and in the browser. As an example, the [GraphiQL](https://github.com/graphql/graphiql/)
  tool is built with GraphQL.js!

  Building a project using GraphQL.js with [webpack](https://webpack.js.org) or
  [rollup](https://github.com/rollup/rollup) should just work and only include
  the portions of the library you use. This works because GraphQL.js is distributed
  with both CommonJS (\`require()\`) and ESModule (\`import\`) files. Ensure that any
  custom build configurations look for \`.mjs\` files!

  ### Contributing

  We actively welcome pull requests, learn how to
  [contribute](https://github.com/graphql/graphql-js/blob/master/.github/CONTRIBUTING.md).

  ### Changelog

  Changes are tracked as [GitHub releases](https://github.com/graphql/graphql-js/releases).

  ### License

  GraphQL.js is [MIT-licensed](https://github.com/graphql/graphql-js/blob/master/LICENSE).
`

export const graphqlRequest = `
  # graphql-request

  [![CircleCI](https://circleci.com/gh/prismagraphql/graphql-request.svg?style=shield)](https://circleci.com/gh/prismagraphql/graphql-request) [![npm version](https://badge.fury.io/js/graphql-request.svg)](https://badge.fury.io/js/graphql-request)

  📡 Minimal GraphQL client supporting Node and browsers for scripts or simple apps

  ## Features

  * Most **simple and lightweight** GraphQL client
  * Promise-based API (works with \`async\` / \`await\`)
  * Typescript support (Flow coming soon)


  ## Install

  \`\`\`sh
  npm install graphql-request
  \`\`\`

  ## Quickstart

  Send a GraphQL query with a single line of code. ▶️ [Try it out](https://runkit.com/593130bdfad7120012472003/593130bdfad7120012472004).

  \`\`\`js
  import { request } from 'graphql-request'

  const query = \`{
    Movie(title: "Inception") {
      releaseDate
      actors {
        name
      }
    }
  }\`

  request('https://api.graph.cool/simple/v1/movies', query).then(data => console.log(data))
  \`\`\`

  ## Usage

  \`\`\`js
  import { request, GraphQLClient } from 'graphql-request'

  // Run GraphQL queries/mutations using a static function
  request(endpoint, query, variables).then(data => console.log(data))

  // ... or create a GraphQL client instance to send requests
  const client = new GraphQLClient(endpoint, { headers: {} })
  client.request(query, variables).then(data => console.log(data))
  \`\`\`

  ## Examples

  ### Authentication via HTTP header

  \`\`\`js
  import { GraphQLClient } from 'graphql-request'

  const client = new GraphQLClient('my-endpoint', {
    headers: {
      Authorization: 'Bearer my-jwt-token',
    },
  })

  const query = \`{
    Movie(title: "Inception") {
      releaseDate
      actors {
        name
      }
    }
  }\`

  client.request(query).then(data => console.log(data))
  \`\`\`

  ### Passing more options to fetch

  \`\`\`js
  import { GraphQLClient } from 'graphql-request'

  const client = new GraphQLClient('my-endpoint', {
   credentials: 'include',
   mode: 'cors'
  })

  const query = \`{
    Movie(title: "Inception") {
      releaseDate
      actors {
        name
      }
    }
  }\`

  client.request(query).then(data => console.log(data))
  \`\`\`

  ### Using variables

  \`\`\`js
  import { request } from 'graphql-request'

  const query = \`query getMovie($title: String!) {
    Movie(title: $title) {
      releaseDate
      actors {
        name
      }
    }
  }\`

  const variables = {
    title: 'Inception',
  }

  request('my-endpoint', query, variables).then(data => console.log(data))
  \`\`\`

  ### Error handling

  \`\`\`js
  import { request } from 'graphql-request'

  const wrongQuery = \`{
    some random stuff
  }\`

  request('my-endpoint', query)
    .then(data => console.log(data))
    .catch(err => {
      console.log(err.response.errors) // GraphQL response errors
      console.log(err.response.data) // Response data if available
    })
  \`\`\`

  ### Using \`require\` instead of \`import\`

  \`\`\`js
  const { request } = require('graphql-request')

  const query = \`{
    Movie(title: "Inception") {
      releaseDate
      actors {
        name
      }
    }
  }\`

  request('my-endpoint', query).then(data => console.log(data))
  \`\`\`

  ### Cookie support for \`node\`

  \`\`\`sh
  npm install fetch-cookie/node-fetch
  \`\`\`

  \`\`\`js
  import { GraphQLClient } from 'graphql-request'

  // use this instead for cookie support
  global['fetch'] = require('fetch-cookie/node-fetch')(require('node-fetch'))

  const client = new GraphQLClient('my-endpoint')

  const query = \`{
    Movie(title: "Inception") {
      releaseDate
      actors {
        name
      }
    }
  }\`

  client.request(query).then(data => console.log(data))
  \`\`\`

  ### Receiving a raw response

  The \`request\` method will return the \`data\` or \`errors\` key from the response.
  If you need to access the \`extensions\` key you can use the \`rawRequest\` method:

  \`\`\`js
  import { rawRequest } from 'graphql-request'

  const query = \`{
    Movie(title: "Inception") {
      releaseDate
      actors {
        name
      }
    }
  }\`

  rawRequest('my-endpoint', query).then(({data, extensions}) => console.log(data, extensions))
  \`\`\`

  ### More examples coming soon...

  * Fragments
  * Using [\`graphql-tag\`](https://github.com/apollographql/graphql-tag)
  * Typed Typescript return values

  ## FAQ

  ### What's the difference between \`graphql-request\`, Apollo and Relay?

  \`graphql-request\` is the most minimal and simplest to use GraphQL client. It's perfect for small scripts or simple apps.

  Compared to GraphQL clients like Apollo or Relay, \`graphql-request\` doesn't have a built-in cache and has no integrations for frontend frameworks. The goal is to keep the package and API as minimal as possible.

  ### So what about Lokka?

  Lokka is great but it still requires [a lot of setup code](https://github.com/kadirahq/lokka-transport-http) to be able to send a simple GraphQL query. \`graphql-request\` does less work compared to Lokka but is a lot simpler to use.


  ## Help & Community [![Slack Status](https://slack.prisma.io/badge.svg)](https://slack.prisma.io)

  Join our [Slack community](http://slack.prisma.io/) if you run into issues or have questions. We love talking to you!

  <p align="center"><a href="https://oss.prisma.io"><img src="https://imgur.com/IMU2ERq.png" alt="Prisma" height="170px"></a></p>
`

export const markdown = `
  # This is the main heading

  ## This is the secondary heading
  A small paragraph to _emphasis_ and show **important** bits.

  # H1
  ## H2
  ### H3
  #### H4
  ##### H5
  ###### H6

  Alternatively, for H1 and H2, an underline-ish style:

  Alt-H1
  ======

  Alt-H2
  ------

  Emphasis, aka italics, with *asterisks* or _underscores_.

  Strong emphasis, aka bold, with **asterisks** or __underscores__.

  Combined emphasis with **asterisks and _underscores_**.

  ![alt text](https://raw.githubusercontent.com/kuldar/kuldar-com/master/src/pages/blog/developing-habits/gatsby.jpg?token=ABoaJYqxQRQ8OZEBdrzTteV3W1juMgu8ks5bXC2EwA%3D%3D)
  ![alt text](https://raw.githubusercontent.com/kuldar/kuldar-com/master/src/pages/blog/developing-habits/gatsby.jpg?token=ABoaJYqxQRQ8OZEBdrzTteV3W1juMgu8ks5bXC2EwA%3D%3D "Some caption")

  Strikethrough uses two tildes. ~~Scratch this.~~

  ![alt text](https://raw.githubusercontent.com/kuldar/kuldar-com/master/src/pages/blog/developing-habits/bag.jpeg?token=ABoaJY20E1lNwLirnraV3raRrTPFVZDwks5bXC1VwA%3D%3D "Some caption")
  ![alt text](https://raw.githubusercontent.com/kuldar/kuldar-com/master/src/pages/blog/developing-habits/bag.jpeg?token=ABoaJY20E1lNwLirnraV3raRrTPFVZDwks5bXC1VwA%3D%3D)

  1. First ordered list item
  2. Another item
    * Unordered sub-list.
  1. Actual numbers don't matter, just that it's a number
    1. Ordered sub-list
  4. And another item.

    You can have properly indented paragraphs within list items. Notice the blank line above, and the leading spaces (at least one, but we'll use three here to also align the raw Markdown).

    To have a line break without a paragraph, you will need to use two trailing spaces.
    Note that this line is separate, but within the same paragraph.

  * Unordered list can use asterisks
  - Or minuses
  + Or pluses

  [I'm an inline-style link](https://www.google.com)

  [I'm an inline-style link with title](https://www.google.com "Google's Homepage")

  [I'm a reference-style link][Arbitrary case-insensitive reference text]

  [I'm a relative reference to a repository file](../blob/master/LICENSE)

  [You can use numbers for reference-style link definitions][1]

  Or leave it empty and use the [link text itself].

  URLs and URLs in angle brackets will automatically get turned into links.
  http://www.example.com or <http://www.example.com> and sometimes
  example.com (but not on GitHub, for example).

  Some text to show that the reference links can follow later.

  [arbitrary case-insensitive reference text]: https://www.mozilla.org
  [1]: http://slashdot.org
  [link text itself]: http://www.reddit.com

  Pellentesque habitant morbi tristique \`senectus et netus\` et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.

  ### Hi, have you seen [our H3](http://en.wikipedia.org/) yet?

  Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae.

  Some javascript code

  \`\`\`javascript
  // Libraries
  import React from 'react'
  import Helmet from 'react-helmet'

  // Locals
  import './styles.css'
  import './prism2.css'

  // Template
  class Template extends React.Component {
    render() {
      const { children } = this.props
      return (
        <div>
          <Helmet>
          </Helmet>
          { children() }
        </div>
      )
    }
  }

  export default Template
  \`\`\`
  <figcaption>Some code description</figcaption>

  \`\`\`javascript
  import React from "react";
  import PostLink from "../components/post-link";

  const IndexPage = ({
    data: {
      allMarkdownRemark: { edges },
    },
  }) => {
    const Posts = edges
      .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
      .map(edge => <PostLink key={edge.node.id} post={edge.node} />);

    return <div>{Posts}</div>;
  };

  export default IndexPage;

  export const pageQuery = graphql\`
    query IndexQuery {
      allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
        edges {
          node {
            id
            excerpt(pruneLength: 250)
            frontmatter {
              date(formatString: "MMMM DD, YYYY")
              path
              title
            }
          }
        }
      }
    }
  \`;
  \`\`\`
  <figcaption>Some styles</figcaption>

  Ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.

  Colons can be used to align columns.

  | Tables        | Are           | Cool  |
  | ------------- |:-------------:| -----:|
  | col 3 is      | right-aligned | $1600 |
  | col 2 is      | centered      |   $12 |
  | zebra stripes | are neat      |    $1 |

  There must be at least 3 dashes separating each header cell.
  The outer pipes (|) are optional, and you don't need to make the
  raw Markdown line up prettily. You can also use inline Markdown.

  Markdown | Less | Pretty
  --- | --- | ---
  *Still* | \`renders\` | **nicely**
  1 | 2 | 3

  #### A sub heading of H4 which is not as important as the above

  > Blockquotes are very handy in email to emulate reply text.
  > This line is part of the same quote.

  Quote break.

  > This is a very long line that will still be quoted properly when it wraps. Oh boy let's keep writing to make sure this is long enough to actually wrap for everyone. Oh, you can *put* **Markdown** into a blockquote.

  Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.

  ##### This is H5. So yeah, everything from H4 to H6 looks pretty much the same to be honest

  Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.
`