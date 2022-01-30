# Google Analytics for UA property
[![Run On Dcoder](https://static-content.dcoder.tech/dcoder-assets/run-on-dcoder.svg)](https://code.dcoder.tech/files/project/60f92cadaeabfd86e8e4ae84)

## Description
Get Google Analytics data with filters, metrics and dimensions.
This works for Universal analytics properties only, not intended for new GA-4 properties.

## Inputs
#### **viewId**  *Text*
Your Google Analytics viewId, this is not tracking id. Go to Analytics, select your property and go to admin setting for the property, there in view setting, you will see the view id.
#### **metrics**  *Text*
comma separated metrics that you want to get as result, some example values can be:
ga:pageviews
ga:users
ga:sessions
ga:organicSearches
For a list of metrics and dimensions visit: https://ga-dev-tools.web.app/dimensions-metrics-explorer/
#### **startDate**  *Text*
Can be date in yyyy-mm-dd format or today, yesterday, 30daysAgo,7daysAgo
#### **endDate**  *Text*
Can be date in yyyy-mm-dd format or today, yesterday, 30daysAgo,7daysAgo
#### **dimensions**  *Text*
comma separated dimensions as text, dimensions works along with metrics. example value 
ga:date
ga:hour
ga:source
For a list of metrics and dimensions visit: https://ga-dev-tools.web.app/dimensions-metrics-explorer/
#### **sort**  *Text*
To sort the results, example value
-ga:date
or
ga:date
#### **filters**  *Text*
filters for the result.ex values
ga:medium==organic
ga:browser==Chrome
#### **maxResults**  *Number*
max results to returned in output.

## Output
#### **response**  *JsonObject*
api response of the http get call

