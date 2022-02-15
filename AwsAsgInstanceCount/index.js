const { CloudWatchClient, GetMetricStatisticsCommand } = require('@aws-sdk/client-cloudwatch')

const main = async (inputs, auths, event) => {
  const client = new CloudWatchClient({
    region: inputs.region,
    credentials: {
      accessKeyId: inputs.awsAccessKeyId,
      secretAccessKey: inputs.awsSecretAccessKey
    }
  })

  const dimensionArray = []
  dimensionArray.push({
    Name: 'AutoScalingGroupName',
    Value: inputs.autoScalingGroupName
  })

  const command = new GetMetricStatisticsCommand({
    MetricName: 'GroupTotalInstances',
    Dimensions: dimensionArray,
    Namespace: 'AWS/AutoScaling',
    StartTime: new Date(inputs.startTime),
    EndTime: new Date(inputs.endTime),
    Period: inputs.interval,
    Statistics: ['Maximum', 'Minimum', 'Average']
  })

  const data = await client.send(command)
  const output = {
    minimum: {
      xData: [],
      yData: []
    },
    maximum: {
      xData: [],
      yData: []
    },
    average: {
      xData: [],
      yData: []
    }
  }

  if (data && data.Datapoints) {
    console.log
    const sortedData = data.Datapoints.sort((a, b) => {
      if (new Date(a.Timestamp) > new Date(b.Timestamp)) {
        return 1
      }
      if (new Date(a.Timestamp) < new Date(b.Timestamp)) {
        return -1
      }
      return 0
    })
    //console.log(sortedData)

    sortedData.forEach((d) => {
      output.minimum.xData.push(d.Timestamp)
      output.average.xData.push(d.Timestamp)
      output.maximum.xData.push(d.Timestamp)
      output.minimum.yData.push(d.Minimum.toFixed(4))
      output.average.yData.push(d.Average.toFixed(4))
      output.maximum.yData.push(d.Maximum.toFixed(4))
    })
  }
  return output
}

module.exports.main = main
