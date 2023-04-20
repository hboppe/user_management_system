import { TUserCreate, TUserWrongCreate } from '../interfaces'

const createUserAdmin: TUserCreate = {
    name: 'Ugo',
    email: 'ugo@kenzie.com.br',
    password: 'Senh@123',
    admin: true,
    active: false,
}

const createUserNotAdmin: TUserCreate = {
    name: 'Fabio',
    email: 'fabio@kenzie.com.br',
    password: 'Senh@123',
    admin: false,
    active: true,
}

const createUserWrongKeys: TUserWrongCreate = {
    name: 1234,
    email: 'joaoerrado',
}

export { createUserAdmin, createUserNotAdmin, createUserWrongKeys }
