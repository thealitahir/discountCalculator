

import * as jwt from 'jsonwebtoken'
import  { User, UserModel }  from '../models/user'

export class UserController {
    private readonly _jwtSecret = '0.rfyj3n9nzh'

    static get userAttributes() {
        return ['id', 'email', 'password']
    }
    private static _user: any;
    static get user() {
        return UserController._user
    }

    register({ email, password }: UserModel) {  
        return User.create({ email, password })
            .then((u: any) => this.getUserById(u!.id))
    }

    login({ email }: UserModel) {
        return User.findOne({ where: { email } }).then((u: any) => {
            const { id, email } = u!
            return { token: jwt.sign({ id, email }, this._jwtSecret) }
        })
    }

    verifyToken(token: string) {
        return new Promise((resolve, reject) => {
            jwt.verify(token, this._jwtSecret, (err, decoded) => {
                if (err) {
                    resolve(false)
                    return
                }

                UserController._user = User.findByPk(decoded['id'])
                resolve(true)
                return
            })
        }) as Promise<boolean>
    }

    getUserById(id: number) {
        return User.findByPk(id, {
            attributes: UserController.userAttributes
        });
    }
}