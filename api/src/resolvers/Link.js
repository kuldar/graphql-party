// Libraries
const slugify = require('slugify')

// Link resolvers
const Link = {

  Query: {

    // Feed of links
    links(parent, args, ctx, info) {
      const { filter, skip, first, orderBy } = args
      return ctx.db.query.links({ skip, first, orderBy }, info)
    },

    // Link
    link(parent, { slug }, ctx, info) {
      return ctx.db.query.link({ where: { slug: slug } }, info)
    }
  },

  Mutation: {

    // Create a new link
    async createLink(parent, args, ctx, info) {
      if (!ctx.request.userId) throw new Error('You must be logged in...')

      const link = await ctx.db.mutation.createLink(
        { data: {
            author: { connect: { id: ctx.request.userId }},
            slug: slugify(args.title, { replacement: '-', lower: true }),
            ...args
        }},
        info
      )

      return link
    }

  }

}

module.exports = { Link }