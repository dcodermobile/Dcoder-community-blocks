const monitoring = require('@google-cloud/monitoring');

const main = async(inputs, auths, event) => {
  const projectId = inputs.projectId;
  let serviceAccountKey = inputs.serviceAccountKey
  if(typeof serviceAccountKey == 'string'){
   serviceAccountKey = JSON.parse(serviceAccountKey)
  }
  
  // Creates a client
  const client = new monitoring.MetricServiceClient({ credentials: serviceAccountKey  });
  // Prepares the time series request
  const request = {
    name: client.projectPath(projectId)+ '/metricDescriptors/compute.googleapis.com/instance/disk/read_ops_count',
    filter: `metric.type="compute.googleapis.com/instance/disk/read_ops_count" AND metric.labels.instance_name="${inputs.instanceName}"`,
    interval: {
      startTime: {
        seconds: (Date.now() / 1000) - 60*60
      },
      endTime: {
        seconds: Date.now() / 1000
      }
    },
    view: 'FULL'
  };
  
  const [result] = await client.listTimeSeries(request)

  const xData = []
  const yData = []
  result.forEach(res => {
    res.points.forEach(p => {
      const dateObj = new Date(parseInt(p.interval.startTime.seconds) * 1000)
      const hr = dateObj.getHours()
      const mins = dateObj.getMinutes()
      const indexOfData = xData.indexOf(`${hr}:${mins}`)
      if (indexOfData !== -1) {
        yData[indexOfData] += parseInt(p.value.int64Value)
      } else {
        xData.unshift(`${hr}:${mins}`)
        yData.unshift(parseInt(p.value.int64Value))
      }
    })
  })
  return { xData, yData }
}

module.exports.main = main
