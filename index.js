//Welcome to NinJS, trust me this is a super cool library

function filterInt(value) {
    //Filters a string into a number
    if (/^[-+]?(\d+|Infinity)$/.test(value)) {
      return Number(value)
    } else {
      return NaN
    }
}