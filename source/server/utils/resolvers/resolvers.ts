import ping from '@server/resolvers/ping/ping'


const resolvers = {
  Query: {
    ping,
  },
}


export default resolvers
