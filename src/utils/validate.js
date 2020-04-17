export default class Validate {

    static isEmpty (val) {
        return val === '' || val === null || val === undefined;
    }

    static checkMobile(phone) {
        if (phone === '' || phone === null || phone === undefined) {
            return false
        } else {
            return /^1[3456789]\d{9}$/.test(phone);
        }
    }

    static checkEmail(email) {
        if ((email === '' || email === null || email === undefined)) {
            return false
        } else {
            return /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(email);
        }
    }
}
