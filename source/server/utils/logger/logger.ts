import winston from 'winston'
import moment from 'moment'


const NODE_ENV = process.env.NODE_ENV || 'development'
const logger = winston.createLogger({
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.printf(information => {
      return `${moment(information.timestamp).format('DD.MM.YYYY HH:mm:ss:SSS')} ${information.level}: ${information.message}`
    }),
  ),
  level: NODE_ENV === 'production' ? 'error' : 'debug',
  transports: [new winston.transports.Console()],
})


if (NODE_ENV !== 'production') {
  logger.info('Logging initialized at debug level')
}


export default logger