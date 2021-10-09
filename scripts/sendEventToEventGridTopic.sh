#!/bin/bash

resourceGroupName="kenan-ukw-dev-azure-functions-typescript-rg"
topicname="eventgridbroker"
endpoint=$(az eventgrid topic show --name $topicname -g $resourceGroupName --query "endpoint" --output tsv)
key=$(az eventgrid topic key list --name $topicname -g $resourceGroupName --query "key1" --output tsv)
data='"data":{"make":"Ducati","model":"Monster","message":{"insured_name":"CharlieHorton"}}'
event='[ {"id": "2f6b1fc2-12cd-4f0e-98c2-899648eae4b9", "eventType": "recordInsertedlocally", "subject": "PublishOffer", "eventTime": "2021-05-05T09:06:47.575711Z", "dataVersion": "1.0", '$data'} ]'
curl -X POST -H "aeg-sas-key: $key" -d "$event" $endpoint