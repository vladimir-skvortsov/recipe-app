import { config } from 'dotenv'

import getVariable from '@server/utils/getVariable/getVariable'


if (process.env.NODE_ENV !== 'production') config()


export const NODE_ENV = getVariable('NODE_ENV', 'development')
export const PORT = getVariable('PORT', '8080')
export const SECRET = getVariable('SECRET', 'unicorn')