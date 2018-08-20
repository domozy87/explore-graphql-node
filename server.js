import express from 'express'
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express'
import bodyParser from 'body-parser'

const server = express()

server.use('/graphiql', graphiqlExpress({
  endpointURL: "/graphql",
}))

server.use('/graphql', bodyParser.json(), graphqlExpress({

}))

server.listen(3000, () => {
  console.log('server is running on port 3000')
})
