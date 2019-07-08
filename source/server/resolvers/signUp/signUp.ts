import { isEmail } from 'validator'
import { sign } from 'jsonwebtoken'

import { SECRET } from '@server/data/environment'


const signUp = async (parent, { email, password }, { database, request }) => {
  if (!email) throw new Error('Email is required')
  if (!isEmail(email)) throw new Error('Email is incorrect')
  if (!password) throw new Error('Password is incorrect')


  const user = await database.createUser({ email, password })
  const token = sign({ id: user.id }, SECRET, { expiresIn: '30 days' })


  return new Promise((resolve, reject) => {
    request.logIn(user, error => {
      if (error) reject(error)
      else resolve({ ...user, token })
    })
  })
}


export default signUp