// Link resolvers
const Link = {

  Query: {

    // Feed of links
    links(parent, args, ctx, info) {
      const { filter, skip, first, orderBy } = args
      return ctx.db.query.links({ skip, first, orderBy }, info)
    },

    // Link
    link(parent, { id }, ctx, info) {
      return ctx.db.query.link({ where: { id: id } }, info)
    }
  }

}

module.exports = { Link }