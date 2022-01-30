const cloudinary = require('cloudinary')

const main = async(inputs, auths, context) => {
  const path =  inputs.path
  const filter = inputs.filter
  const cloud_name =  inputs.cloud_name
  const api_key =  inputs.api_key
  const api_secret =  inputs.api_secret
  const mapping = [
    "al_dente", "athena", "audrey", "aurora", "daguerre", "eucalyptus", "fes", "frost", "hairspray", "hokusai", "incognito", "linen", "peacock", "primavera", "quartz", "red_rock", "refresh", "sizzle", "sonnet", "ukulele", "zorro","none"
  ]
  if(isNaN(filter) || filter > 22|| filter <=0){
    throw new Error('Filter should be a number between 1 to 21')
  }
  if(filter)
  cloudinary.config({ 
    cloud_name,
    api_key,
    api_secret
  })

 const image = await cloudinary.uploader.upload(path)
 if(filter == 22){
   return image.url
 }
 const clipIndex = image.url.indexOf('/image/upload/')+14
 return image.url.substring(0,clipIndex)+"e_art:"+mapping[filter-1]+"/"+image.url.substring(clipIndex)
}

module.exports.main = main