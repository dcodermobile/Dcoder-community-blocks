
// Import the Google Cloud client library
const {BigQuery} = require('@google-cloud/bigquery');
const fs = require('fs')
const main = async(inputs, auths, event) => {
  const project = inputs.project
  let package =  inputs.package
  const regex = new RegExp('\\.','g')
  package = package.replace(regex,'_')
  let platform =  inputs.platform.toUpperCase()
  const days =  inputs.days
  const location =  inputs.location
  const build_version =  inputs.build_version
  let service_account =  inputs.service_account
  const display_version =  inputs.display_version
  //service_account = JSON.parse(service_account)
  fs.writeFileSync('/tmp/service_account.json', service_account)

  const option = {
    projectId: project ,
    keyFilename: '/tmp/service_account.json'
  }
  let queryDisplayVersion =""
  if(display_version){
    queryDisplayVersion = ` AND application.display_version = '${display_version}'`
  }
  
  let queryBuildVersion =""
  if(build_version){
    queryBuildVersion = ` AND application.build_version = '${build_version}'`
  }
  
  const bigquery = new BigQuery(option)
  // The SQL query to run
  const sqlQuery = `SELECT
  FORMAT_TIMESTAMP("%F", event_timestamp) AS date,
  COUNT(DISTINCT(event_id)) AS crashes
  FROM ${project}.firebase_crashlytics.${package}_${platform}
  WHERE
    DATE(event_timestamp) >= DATE_SUB(CURRENT_DATE(), INTERVAL @days DAY)
    AND is_fatal = true 
    ${ queryDisplayVersion }
    ${ queryBuildVersion }
  GROUP BY
    date
  ORDER BY
    date ASC`;

  const options = {
    query: sqlQuery,
    // Location must match that of the dataset(s) referenced in the query.
    location: location,
    params: {days: days},
  };

  // Run the query
  const [rows] = await bigquery.query(options);

  console.log('Rows:');
  rows.forEach(row => console.log(row));
  return rows
}


module.exports.main = main