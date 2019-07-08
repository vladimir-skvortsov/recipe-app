import logger from '@server/utils/logger/logger'


const getVariable = (name: string, defaultValue?: string) => {
  const value = process.env[name]

  if (!value && defaultValue)
    logger.warn(`Set ${name} environment variable. The default value '${defaultValue}' is used.`)
  else if (!value && !defaultValue) {
    logger.error(`Set ${name} environment variable.`)
    process.exit(1)
  }

  return value || defaultValue
}


export default getVariable