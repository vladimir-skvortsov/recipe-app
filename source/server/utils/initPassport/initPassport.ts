import { PassportStatic } from 'passport'
import { Strategy as JWTStrategy, ExtractJwt } from 'passport-jwt'

import { prisma } from '@server/utils/prisma/prisma'

import { SECRET } from '@server/data/environment'


const userSerializer = (user, done) => done(null, user)


const jwtStrategy = new JWTStrategy(
  {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: SECRET,
  },
  async (payload, done) => {
    const user = await prisma.user({ id: payload.id })

    if (user) done(null, user)
    else done(new Error('The user has not been found'), false)
  },
)


const initPassport = (passport: PassportStatic) => {
  passport.serializeUser(userSerializer)
  passport.deserializeUser(userSerializer)


  passport.use(jwtStrategy)
}


export default initPassport