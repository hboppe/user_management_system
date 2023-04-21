import { TUserLogin } from '../interfaces'

const userAdminLogin: TUserLogin = {
    email: 'ugo@kenzie.com.br',
    password: 'Senh@123',
}

const userNotAdminLogin: TUserLogin = {
    email: 'fabio@kenzie.com.br',
    password: 'Senh@123',
}

const userWrongPasswordLogin: TUserLogin = {
    email: 'fabio@kenzie.com.br',
    password: 'senhaerrada',
}

const userWrongEmailLogin: TUserLogin = {
    email: 'emailerrado@email.com',
    password: '1234',
}

const userWrongKeysLogin: Partial<TUserLogin> = {
    email: 'emailerrado',
}

export {
    userAdminLogin,
    userNotAdminLogin,
    userWrongKeysLogin,
    userWrongEmailLogin,
    userWrongPasswordLogin,
}
