// Locals
import { graphqlRequest, graphqlJs, graphqlRuby } from './markdown'

// Links
export const links = [
  {
    id: '1',
    slug: 'graphql-js',
    url: 'https://github.com/graphql/graphql-js',
    title: 'GraphQL.js',
    oneliner: 'A reference implementation of GraphQL for JavaScript.',
    description: graphqlJs,
    readmeUrl: 'https://raw.githubusercontent.com/graphql/graphql-js/master/README.md',
    tags: ['javascript', 'tools'],
    commentsCount: 13,
    votesCount: 53,
    isVoted: true,
    status: 'ACTIVE',
  },
  {
    id: '2',
    slug: '',
    url: 'https://github.com/prismagraphql/graphql-request',
    title: 'graphql-request',
    oneliner: '📡 Minimal GraphQL client supporting Node and browsers for scripts or simple apps',
    description: graphqlRequest,
    readmeUrl: 'https://github.com/prismagraphql/graphql-request/blob/master/README.md',
    tags: ['javascript', 'tools'],
    commentsCount: 7,
    votesCount: 25,
    isVoted: false,
    status: 'ACTIVE',
  },
  {
    id: '3',
    slug: 'graphql-ruby',
    url: 'https://github.com/rmosolgo/graphql-ruby',
    title: 'GraphQL Ruby',
    oneliner: 'Ruby implementation of GraphQL',
    description: graphqlRuby,
    readmeUrl: 'https://raw.githubusercontent.com/rmosolgo/graphql-ruby/master/readme.md',
    tags: ['ruby'],
    commentsCount: 15,
    votesCount: 7,
    isVoted: false,
    status: 'ACTIVE',
  },
  {
    id: '4',
    slug: '',
    url: '',
    title: 'graphql-tools',
    oneliner: 'Tool library for building and maintaining GraphQL-JS servers.',
    description: graphqlRequest,
    readmeUrl: 'https://raw.githubusercontent.com/apollographql/graphql-tools/master/README.md',
    tags: ['javascript', 'tools'],
    commentsCount: 7,
    votesCount: 11,
    isVoted: true,
    status: 'ACTIVE',
  },
]

// Tags
export const tags = [
  {
    title: 'Javascript',
    slug: 'javascript',
    oneliner: 'Various selection of GraphQL tools and recources',
    image: '/static/tags/javascript.svg',
  }
]