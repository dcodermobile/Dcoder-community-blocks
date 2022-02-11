const axios = require('axios')
const main = async (inputs, auths, event) => {
  //See the API docs here: https://developers.google.com/drive/api/v3/reference/files/get?authuser=2
  const config = {
    url: `https://www.googleapis.com/drive/v3/files/${inputs.fileId}`,
    params: {
      acknowledgeAbuse: inputs.acknowledgeAbuse,
      supportsTeamDrives: inputs.supportsTeamDrives,
      alt: inputs.alt,
      fields: inputs.fields,
      prettyPrint: inputs.prettyPrint,
      quotaUser: inputs.quotaUser,
      userIp: inputs.userIp
    },
    headers: {
      Authorization: `Bearer ${auths.GOOGLE_DRIVE.ACCESS_TOKEN}`
    }
  }
  return (await axios(config)).data
}

module.exports.main = main
