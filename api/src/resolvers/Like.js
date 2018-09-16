// Like resolvers
const Like = {

  Mutation: {

    // Like a link
    async likeLink(parent, { slug }, ctx, info) {
      if (!ctx.request.userId) throw new Error('You must be logged in...')

      const like = await ctx.db.mutation.createLike(
        { data: {
            user: { connect: { id: ctx.request.userId }},
            link: { connect: { slug }}
        }},
        info
      )

      return like
    }

  }

}

module.exports = { Like }