// Tag resolvers
const Tag = {

  Query: {

    // Feed of tags
    tags(parent, args, ctx, info) {
      const { filter, skip, first, orderBy } = args
      return ctx.db.query.tags({ skip, first, orderBy }, info)
    },

    // Tag
    tag(parent, { id }, ctx, info) {
      return ctx.db.query.tag({ where: { id: id } }, info)
    }
  }

}

module.exports = { Tag }