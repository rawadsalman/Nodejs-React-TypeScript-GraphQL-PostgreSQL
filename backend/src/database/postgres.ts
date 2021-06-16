import Knex from 'knex'
import knexConf from '../config/knex'
import { types } from 'pg'
import utc from 'dayjs/plugin/utc'
import dayjs from 'dayjs'

dayjs.extend(utc)
types.setTypeParser(1082, (str: string) => dayjs.utc(str).toISOString())

const knex = Knex(knexConf)

export default knex
