const main = async (inputs, auths, event) => {
  const moment = require('moment-timezone')
  const inputDate = inputs.inputDate

  console.log(moment(inputDate).toISOString())
  return moment(inputDate).toISOString()

  //console.log(moment(moment(inputDate).toISOString()).tz("Asia/Kolkata"))
}

module.exports.main = main
