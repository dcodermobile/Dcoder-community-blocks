const axios = require("axios");
const main = async(inputs, auths, context) => {
  console.log("Fetching data");
  let { domain, token } = inputs;
  try{
    const {data} = await axios.get(
      `https://${domain}/api/v1/conversations`,
      {
        headers: { 'Authorization': `Bearer ${token}` }
      }
    );
    console.log("Data fetched successfully");
    return data;
  } catch (e) {
    console.log("Failed to fetch data: " + e.message);
  }
}

module.exports.main = main