const moment = require('moment-timezone')
const main = async(inputs, auths, context) => {
  const output =[]
  const format =  inputs.format
  const dates =  inputs.dates
  const timezone =  inputs.timezone
  
  dates.forEach(d =>{
    if(inputs.isTimestampSeconds){
      d = d*1000
    }
    if(timezone)
      output.push(moment(d).tz(timezone).format(format))
    else output.push(moment(d).format(format))
  })
  return output
}

module.exports.main = main