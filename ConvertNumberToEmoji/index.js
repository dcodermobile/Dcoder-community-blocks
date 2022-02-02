const main = async(inputs, auths, event) => {
  const number = inputs.number
  console.log(number)
  const numberArray = 
    ["0️⃣","1️⃣","2️⃣","3️⃣","4️⃣","5️⃣","6️⃣","7️⃣","8️⃣","9️⃣"]
  try{
    parseInt(number)
  }catch(err){
    console.log("Not a number.")
    throw new Error("Not a number.")
    return
  }
  let output = ""
  for(let i=0; i< number.length;i++){
      if(number.charAt(i) == '.' || number.charAt(i) == ','){
        output+=number.charAt(i)
      }else{
        if(numberArray[number.charAt(i)] == undefined){
          console.log("Not a number.")
          throw new Error("Not a number.")
          return
        }
        output+=numberArray[number.charAt(i)]
      }
      
  }
  console.log(output)
  return output
}

module.exports.main = main