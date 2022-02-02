const convertDataFromKB = (val, to)=>{
  switch(to){
      case 'B':
        return val*1024
      case 'KB':
        return val
      case 'MB':
        return val/1024
      case 'GB':
        return val/(1024*1024)
      case 'TB':
        return val/(1024*1024*1024)
    }
}


const main = async(inputs, auths, event) => {
  const from = inputs.from
  const baseData = []
  if(typeof inputs.dataArray == 'string'){
    inputs.dataArray = JSON.parse(inputs.dataArray)
  }
  inputs.dataArray.forEach(d=>{
    switch(from){
      case 'B':
        baseData.push(convertDataFromKB(parseFloat(d)/1024, inputs.to))
        break
      case 'KB':
        baseData.push(convertDataFromKB(parseFloat(d), inputs.to))
        break
      case 'MB':
        baseData.push(convertDataFromKB(parseFloat(d)*1024, inputs.to))
        break
      case 'GB':
        baseData.push(convertDataFromKB(parseFloat(d)*1024*1024, inputs.to))
        break
      case 'TB':
        baseData.push(convertDataFromKB(parseFloat(d)*1024*1024*1024, inputs.to))
        break
    }
  })
  
  return baseData
}

module.exports.main = main