#!/bin/bash

source .env.servicePrincipal

subscriptionId=$(az account show | jq -r '.id')
resourceGroupName=$(sls info --verbose | grep 'Resource Group Name: ' | cut -c $(echo 'Resource Group Name: ' | wc -c)-)
functionAppName=$(sls info --verbose | grep 'Function App Name: ' | cut -c $(echo 'Function App Name: ' | wc -c)-)
appInsightsName=$(az resource list --resource-group $resourceGroupName | jq -r '.[] | select(.kind=="web" and .type=="microsoft.insights/components") | .name')
storageAccountName=$(az resource list --resource-group $resourceGroupName | jq -r '.[] | select(.kind=="Storage" and .type=="Microsoft.Storage/storageAccounts") | .name')
functionName="eventGridTriggerToEventGrid_fn1"
downstreamBaseUrl="https://uk.testkenan.com/api"

az deployment group create --resource-group $resourceGroupName --template-file azuredeploy.json --parameters resourceGroupName=$resourceGroupName functionAppName=$functionAppName storageAccountName=$storageAccountName appInsightsName=$appInsightsName functionName=$functionName