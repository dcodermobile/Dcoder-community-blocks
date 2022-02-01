import * as fs from 'fs'
const IO_FILE_PATH = '/usr/src/io.json'

export const setOutput = (key, value) => {
  let data : any = null
  const blockId : any = process.env.BLOCK_ID
  
  if (fs.existsSync(IO_FILE_PATH)) {
    data = fs.readFileSync(IO_FILE_PATH, { encoding: 'utf8' })
    data = JSON.parse(data)
    if (!data[blockId]) {
      data[blockId] = {}
    }
    if(!data[blockId]['outputs']){
      data[blockId]['outputs'] = {}
    }
    data[blockId]['outputs'][key] = value
  } else {
    data = {
      [blockId]: {
        ['outputs']: {
          [key]: value
        }
      }
    }
  }
  fs.writeFileSync(IO_FILE_PATH, JSON.stringify(data), { encoding: 'utf8' })
}


export const getInput = (key) => {
  const blockId : any = process.env.BLOCK_ID
  let data : any = null
  if (fs.existsSync(IO_FILE_PATH)) {
    data = fs.readFileSync(IO_FILE_PATH, { encoding: 'utf8' })
    data = JSON.parse(data)
    if (!data[blockId]) {
      throw new Error('Data not exists')
    }

    if (data[blockId]['inputs'] && data[blockId]['inputs'].hasOwnProperty(key)) {
      return data[blockId]['inputs'][key]
    } else {
      throw new Error('Data not exists')
    }
  } else {
    throw new Error('Data not exists')
  }
}


export const logFile = () =>{
  console.log(fs.readFileSync(IO_FILE_PATH, { encoding: 'utf8' }))
}

