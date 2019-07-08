import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import helmet from 'helmet'
import cors from 'cors'
import compression from 'compression'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import { resolve } from 'path'
import morgan from 'morgan'
import passport from 'passport'
import { preloadAll } from 'react-loadable'

import { prisma } from '@server/utils/prisma/prisma'
import { PORT, NODE_ENV } from '@server/data/environment'
import initPassport from '@server/utils/initPassport/initPassport'
import logger from '@server/utils/logger/logger'
import schema from '@server/utils/schema/schema'
import controllers from '@server/utils/controllers/controllers'


const app = express()
const apolloServer = new ApolloServer({
  schema,
  context: ({ req }) => ({
    database: prisma,
    request: req,
  }),
})
const publicPath = resolve(__dirname, 'public')


initPassport(passport)


app.disable('etag')

app.use(helmet())
app.use(cors())
app.use(compression({ level: 9, memLevel: 9 }))
app.use(morgan(NODE_ENV === 'production' ? 'tiny' : 'dev'))
app.use(express.static(publicPath))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cookieParser())
app.use(passport.initialize())
app.use(
  '/graphql',
  (request, response, next) => {
    passport.authenticate(
      'jwt',
      { session: false },
      (error, user) => {
        if (error) next(error)
        else if (user)
          request.logIn(user, error => {
            if (error) next(error)
            else next()
          })
        else next()
      },
    )(request, response, next)
  },
)
apolloServer.applyMiddleware({ app })
app.use(controllers)
app.use((error, request, response, next) => {
  logger.error(error)
  response.sendStatus(500)
})


preloadAll()
  .then(async () => {
    await app.listen(PORT)
    logger.info(`Server is running at http://localhost:${PORT} in ${NODE_ENV} mode.`)
  })
  .catch(error => {
    logger.error(error)
    process.exit(1)
  })
