import { config } from 'dotenv'

import getVariable from '@server/utils/getVariable/getVariable'


if (process.env.NODE_ENV !== 'production') config()


export const NODE_ENV = getVariable('NODE_ENV', 'development')
export const PORT = getVariable('PORT', '8080')
export const SECRET = getVariable('SECRET', 'unicorn')

export const AWS_S3_ACCESS_KEY_ID = getVariable('AWS_S3_ACCESS_KEY_ID')
export const AWS_S3_SECRET_ACCESS_KEY = getVariable('AWS_S3_SECRET_ACCESS_KEY')
export const AWS_S3_BUCKET_NAME = getVariable('AWS_S3_BUCKET_NAME')
