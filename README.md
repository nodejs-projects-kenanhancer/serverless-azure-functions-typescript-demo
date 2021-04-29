# Serverless Azure Functions TypeScript Demo

Just follow this README document to see deployed `Azure Functions` with `Serverless Framework` as shown in the following screenshots :)


![Image1](/images/image1.png)


![Image2](/images/image2.png)

# Installation
Install all packages and dependencies via node package manager

```shell
npm i
```

# Running and Debugging Code Locally with Microsoft Azure Emulator

Refer to [Serverless docs](https://serverless.com/framework/docs/providers/azure/guide/intro/) for more information.

We need to have `Microsoft Azure Emulator` and `Microsoft Azure Storage Explorer` locally.

Start `Microsoft Azure Emulator` firstly.
```shell
npx azurite --silent
```

![Image5](/images/image5.png)

Download and install [Microsoft Azure Storage Explorer](https://azure.microsoft.com/en-us/features/storage-explorer/)

![Image18](/images/image18.png)


To build the function binding files without spawning the process to start the function app.
```shell
npx sls offline build
```

![Image6](/images/image6.png)


Build necessary function binding files and starts the function app.
```shell
npx sls offline
```

or

run `Azure Functions Core Tools` directly.
Refer to [Microsoft Azure docs](https://docs.microsoft.com/en-us/azure/azure-functions/functions-run-local?tabs=macos%2Ccsharp%2Cbash) for more information.
```shell
func host start
```


![Image7](/images/image7.png)


This code will start `Microsoft Azure Emulator` firstly then host `Azure Functions` locally.

```shell
npm run dev
```

- If there are more than one project working with `Microsoft Azure Emulator`, than change value of `LocalHttpPort` field in `local.settings.json` file
    - default value is `"LocalHttpPort": 7071`
- Set value of `AzureWebJobsStorage` field in `local.settings.json` file one of the following values.
    - default value is `"AzureWebJobsStorage": "UseDevelopmentStorage=true;"`
    
    1. `"AzureWebJobsStorage": "UseDevelopmentStorage=true;"` 
    1. `"AzureWebJobsStorage": "DefaultEndpointsProtocol=https;AccountName=devstoreaccount1;AccountKey=Eby8vdM02xNOcqFlqUwJPLlmEtlCDXJ1OUzFT50uSRZ6IFsuFq2UVErCz4I6tq/K1SZFPTOtr/KBHBeksoGMGw==;BlobEndpoint=https://127.0.0.1:10000/devstoreaccount1;QueueEndpoint=https://127.0.0.1:10001/devstoreaccount1;"`



# Testing Azure Http Function Locally

Use one of the following commands to call `Azure Http Function` locally, and `--port` argument should be updated due to value of `LocalHttpPort` field in `local.settings.json` file. Likewise, `curl` port value should be updated as well.

```shell
npx sls invoke local --port 7071 --function hello --data '{\"name\":\"kenan\"}'
```

![Image13](/images/image13.png)

```shell
curl http://localhost:7071/api/hello?name=kenan
```

![Image14](/images/image14.png)

# Testing Deployed Azure Http Function

just without the local and port options.

```shell
npx sls invoke --function hello --data '{\"name\":\"kenan\"}'
```

![Image15](/images/image15.png)

or

use curl command as below.

```shell
curl http://kenan-ukw-dev-azure-functions-typescript.azurewebsites.net/api/hello?name=kenan
```

![Image16](/images/image16.png)

# Azure Deployment Steps

## Install Azure CLI

If you don't have `Azure CLI` in your local, install it from below link.

[https://docs.microsoft.com/en-us/cli/azure/install-azure-cli](https://docs.microsoft.com/en-us/cli/azure/install-azure-cli)

Install Azure CLI on macOS
```shell
brew update && brew install azure-cli
```

1. Login with Azure CLI

Use one of the following Azure Login commands

```shell
az login
```

or

```shell
az login --use-device-code
```

then run the following commands.

```shell
az account list # list all subscriptions
az account set --subscription <SUBSCRIPTION_ID> # choose the one you want
```

2. Run below shell script to create `.env.servicePrincipal` file with new Azure credential tokens in project root folder.
```shell
. sp.sh
```

3. Run below script to export Azure credentials

```shell
source .env.servicePrincipal
```

4. Run one of below codes in terminal to deploy

```shell
npm run deploy
```
or

```shell
$ npx sls deploy --region "West US 2"
$ npx sls deploy --region "North Central US"
$ npx sls deploy --region "West Europe"

$ npx sls deploy --region "West Europe" --prefix "hyperionSquad"

$ npx sls deploy --region "West Europe" --prefix "hyperionSquad" --stage "dev"
$ npx sls deploy --region "West Europe" --prefix "hyperionSquad" --stage "test"
$ npx sls deploy --region "West Europe" --prefix "hyperionSquad" --stage "prod"
```

Deployment is done and screenshot is below.

![Image8](/images/image8.png)


Now we should see deployed Resource Group in Azure Resouce groups
![Image3](/images/image3.png)

![Image4](/images/image4.png)

![Image2](/images/image2.png)

# Remove Azure Deployment

Run the following command in the terminal and enter the full name of the resource group.

```shell
npx sls remove
```

# List Azure Deployment

Run the following command to list information about your deployments.

Refer to [Serverless docs](https://www.serverless.com/framework/docs/providers/azure/cli-reference/deploy-list/) for more information.

```shell
npx sls deploy list
```

![Image10](/images/image10.png)

# Print serverless.yml

Run the following command to print your serverless.yml config file with all variables resolved.

Refer to [Serverless docs](https://www.serverless.com/framework/docs/providers/azure/cli-reference/print/) for more information.

```shell
npx sls print
```

![Image9](/images/image9.png)

# Dry-Run Deployment

Before you deploy your new function app, you may want to double check the resources that will be created, their generated names and other basic configuration info

This will print out a basic summary of what your deployed service will look like

```shell
# -d is short for --dryrun
npx sls deploy --dryrun
```

For a more detailed look into the generated ARM template for your resource group, add the --arm (or -a) flag

```shell
npx sls deploy --dryrun --arm
```

![Image12](/images/image12.png)

# Get a Summary of Deployed Azure Function App

To see a basic summary of your application (same format as the dry-run)

```shell
npx sls info
```

To look at the ARM template for the last successful deployment, add the --arm (or -a) flag

```shell
npx sls info --arm
```

You can also get information services with different stages, regions or resource groups by passing any of those flags. Example

```shell
npx sls info --stage prod --region ukw
```

![Image11](/images/image11.png)

# Deleting Deployed Azure Function App

If at any point you no longer need your service, you can run the following command to delete the resource group containing your Azure Function App and other depoloyed resources using

```shell
npx sls remove
```

You will then be prompted to enter the full name of the resource group as an extra safety before deleting the entire resource group.

You can bypass this check by running

```shell
npx sls remove --force
```

Azure API Management service is soft-deleted so that we can recover it if needed. But in order to delete it permanently, 

- [List deleted services](https://docs.microsoft.com/en-us/rest/api/apimanagement/2020-06-01-preview/deletedservices/listbysubscription#code-try-0)
- [Purge deleted service](https://docs.microsoft.com/en-us/rest/api/apimanagement/2020-06-01-preview/deletedservices/purge#code-try-0)


refer to [Microsoft Azure API Management docs](https://docs.microsoft.com/en-us/azure/api-management/soft-delete) for more details.

# Cleanup serverless.yml

To clean up files generated from the `npx sls offline build`

```shell
npx sls offline cleanup
```

# Creating or Removing Azure Functions

```shell
npx sls func add --name testFunc1
```


```shell
npx sls func remove --name testFunc1
```

# List All Azure Regions

```shell
az account list-locations -o table
```

![Image17](/images/image17.png)
