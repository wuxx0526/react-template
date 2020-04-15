module.exports = {

  /**
   * 对象转查询字符串
   * @param obj
   * @returns {string}
   */
  obj2Str (obj) {
    return '?' + Object.keys(obj).map(function (key) {
      return encodeURIComponent(key) + '=' + encodeURIComponent(obj[key])
    }).join('&')
  },

  getUrlParams (key) {
    const query = window.location.href.split('?')[1]
    const vars = query.split('&')
    for (let i = 0; i < vars.length; i++) {
      const pair = vars[i].split('=')
      if (pair[0] === key) {
        return pair[1]
      }
    }
    return (false)
  },

  validateMobile (mobile) {
    const reg = /^1[3456789]\d{9}$/
    if (reg.test(mobile)) {
      return true
    } else {
      return false
    }
  }
}
