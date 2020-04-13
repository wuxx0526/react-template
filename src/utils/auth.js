import jsCookie from 'js-cookie'
const tokenName = 'token'

export default class Auth {
    static setUserInfo (user) {
        jsCookie.set('user', user)
    }

    static getUserInfo (key) {
        if (typeof key === 'string') {
            return jsCookie.getJSON('user')[key]
        } else {
            return jsCookie.getJSON('user')
        }
    }

    static removeUserInfo () {
        jsCookie.remove('user')
    }

    static removeToken () {
        jsCookie.remove(tokenName)
    }

    static setToken (token) {
        jsCookie.set(tokenName, token)
    }

    static getToken () {
        return jsCookie.get(tokenName)
    }

    static checkLoginStatus () {
        const token = this.getToken()
        return token !== undefined && token !== null && token !== ''
    }
}
