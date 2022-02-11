const main = async (inputs, auths, event) => {
  let arr = inputs.arr
  if (!Array.isArray(arr)) {
    arr = JSON.parse(arr)
  }
  const output = {}
  if (arr.length > 0) {
    const oneItem = arr[0]
    const keys = Object.keys(oneItem)
    keys.forEach((key) => {
      output[key] = []
    })
    arr.forEach((item) => {
      keys.forEach((key) => {
        output[key].push(item[key])
      })
    })

    return output
  }
  throw new Error("Array size can't be 0")
}

module.exports.main = main
