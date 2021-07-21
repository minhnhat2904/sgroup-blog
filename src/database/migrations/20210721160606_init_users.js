// @ts-check

import { registerInput } from 'api-rest/auth/dto/register-input';
import { BcryptService } from 'api-rest/auth/services/bcrypt.service';
import { Role } from 'common/enum/role.enum';
import { ConfigService } from 'libs/config/config.service';

let PATH_LOOKUP = `${process.cwd()}/.env`;

ConfigService.config({
    cache: false,
    pathLookup: PATH_LOOKUP
});

PATH_LOOKUP = null;

/**
 * @param {import("knex")} knex
 */
export async function up(knex) {
    const roles = await knex.table('roles').select();
    const [id] = await knex.table('users').insert([
        registerInput({
            username: 'minhnhat2904@gmail.com',
            password: BcryptService.getSingleton().hash('333333'),
            fullName: 'Minh Nhat'
        })
    ]);

    await knex.table('users_roles').insert([
        {
            user_id: id,
            role_id: roles.find(role => role.name === Role.ADMIN).id
        }
    ]);
}

/**
 * @param {import("knex")} knex
 */
export function down(knex) { return knex.schema.dropTableIfExists('users'); }
