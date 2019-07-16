import { S3 } from 'aws-sdk'

import {
  AWS_S3_ACCESS_KEY_ID,
  AWS_S3_SECRET_ACCESS_KEY,
  AWS_S3_BUCKET_NAME,
} from '@server/data/environment'


const s3Bucket = new S3({
  accessKeyId: AWS_S3_ACCESS_KEY_ID,
  secretAccessKey: AWS_S3_SECRET_ACCESS_KEY,
  params: { Bucket: AWS_S3_BUCKET_NAME },
})


export const upload = (path: string, data: Buffer): Promise<any> => {
  const params = {
    Bucket: AWS_S3_BUCKET_NAME,
    Key: path,
    Body: data,
  }

  return new Promise((resolve, reject) => {
    s3Bucket.upload(params, (error, data) => {
      if (error) reject(error)
      else resolve(data)
    })
  })
}

export const remove = (path: string) => {
  const params = {
    Bucket: AWS_S3_BUCKET_NAME,
    Key: path,
  }

  return new Promise((resolve, reject) => {
    s3Bucket.deleteObject(params, (error, data) => {
      if (error) reject(error)
      else resolve(data)
    })
  })
}
