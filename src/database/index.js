import knex from 'knex';
import config from '../../knexfile';
import { NODE_ENV } from '../env';
import { logger } from '../common/utils';

export const knexConnection = knex(config[NODE_ENV]);

export const getTransaction = () => knexConnection.transaction();

export const authenDatabaseConnection = async () => {
    try {
        await knexConnection.raw('SELECT 1');
        logger.info('Database connected');
    } catch (error) {
        logger.error(error.message);
    }
};
