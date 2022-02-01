const main = async(inputs, auths, event) => {
  let data = inputs.data
  if(typeof data == 'string'){
    data = JSON.parse(data)
  }
  const resData = {}
  data.forEach(d=>{
    d.forEach((val,idx)=>{
      if(idx in resData){
        resData[idx].push(val)
      } else {
        resData[idx] = [val]
      }
    })
  })
  return resData
}

module.exports.main = main