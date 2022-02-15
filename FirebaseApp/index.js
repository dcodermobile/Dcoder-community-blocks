var sleep = require('system-sleep')
var request = require('request')
var admin = require('firebase-admin')

const main = async (inputs, auths, event) => {
  const firebase_token = inputs.FIREBASE_KEY
  let fcm_id_array = inputs.FCM_ID_ARRAY
  if (typeof fcm_id_array == 'string') {
    fcm_id_array = JSON.parse(fcm_id_array)
  }
  const resArray = []
  const promiseArray = []
  for (let i = 0; i < fcm_id_array.length; i++) {
    const fcm_id = fcm_id_array[i]
    let start = 0
    var message = {
      data: {},
      //topic: topic
      to: fcm_id
    }

    // prepare the header
    var postheaders = {
      'Content-Type': 'application/json',
      Authorization: `key=${firebase_token}`
    }

    let temp_promise = new Promise((resolve) => {
      //Lets configure and request
      request(
        {
          url: 'https://fcm.googleapis.com/fcm/send', //URL to hit
          method: 'POST',
          form: message,
          headers: postheaders
        },
        function (err, response, body) {
          start++
          if (err) {
            console.error(err)
            resArray.push(true)
          } else if (body == 'Error=NotRegistered') {
            resArray.push(false)
          } else {
            resArray.push(true)
          }
          resolve()
        }
      )
    })

    promiseArray.push(temp_promise)
  }

  const resArray = await Promise.allSettled(promiseArray)
  if (resArray.includes(true) || resArray.length == 0) {
    return true
  } else {
    return false
  }
}

module.exports.main = main
