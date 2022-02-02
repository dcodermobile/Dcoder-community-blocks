const main = async (inputs, auths, event) => {


  // To get block input
  const item = inputs.item
  const separator = inputs.separator
  const x = Array.from(new Set(item.split('|')))
  let out = ''
  x.forEach(i => {
    out += i + separator
  })
  if (out.indexOf(separator) > 0) {
    out = out.substring(0, out.lastIndexOf(separator))
  }
  console.log(out)
  // Simillarly to set block's ouput
  return out
}

module.exports.main = main