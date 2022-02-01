const moment = require('moment-timezone')
const main = async(inputs, auths, context) => {
  const format =  inputs.format
  let date =  inputs.date
  const timezone =  inputs.timezone
  if(inputs.isTimestampSeconds){
    date = date * 1000
  }
  if(timezone){
    return moment(date).tz(timezone).format(format)
  }else{
    return moment(date).format(format)
  }
}

module.exports.main = main