import * as bindings from '../../node_modules/serverless-azure-functions/lib/shared/bindings.json';
import * as fs from 'fs';
import * as path from 'path';

const functionAppServiceContent = fs.readFileSync(path.join(__dirname, '/functionAppService.js'));

fs.writeFileSync(path.join(__dirname, '../../node_modules/serverless-azure-functions/lib/services/functionAppService.js'), functionAppServiceContent);

let isWrite = false;

if (!bindings.bindings.some(({ type }) => type === "eventGridTrigger")) {

  const eventGridBinding: any =
  {
    "type": "eventGridTrigger",
    "displayName": "$eventGridTrigger_displayName",
    "direction": "trigger",
    "enabledInTryMode": false,
    "documentation": "$content=Documentation\\eventGridTrigger.md",
    "extension": {
      "id": "Microsoft.Azure.WebJobs.Extensions.EventGrid", "version": "2.1.0"
    },
    "settings": [
      {
        "name": "name",
        "value": "string",
        "defaultValue": "EventGridTrigger",
        "required": true,
        "label": "$eventGrid_trigger_name_label",
        "help": "$eventGrid_trigger_name_help",
        "validators": [
          {
            "expression": "(^[a-zA-Z][a-zA-Z0-9]{0,127}$)|^\\$return$",
            "errorText": "[variables('parameterName')]"
          }
        ]
      }
    ]
  };

  isWrite = true;

  bindings.bindings.push(eventGridBinding);
}

if (!bindings.bindings.some(({ type }) => type === "eventGrid")) {
  const eventGridOutBinding: any =
  {
    "type": "eventGrid",
    "displayName": "$eventGridOut_displayName",
    "direction": "out",
    "enabledInTryMode": false,
    "actions": [
      {
        "template": "EventGridTrigger",
        "binding": "eventGridTrigger",
        "settings": [
          "topicEndpointUri",
          "topicKeySetting"
        ]
      }
    ],
    "documentation": "$content=Documentation\\eventGridTrigger.md",
    "extension": {
      "id": "Microsoft.Azure.WebJobs.Extensions.EventGrid", "version": "2.1.0"
    },
    "settings": [
      {
        "name": "name",
        "value": "string",
        "defaultValue": "outputEvent",
        "required": true,
        "label": "$eventGridOut_name_label",
        "help": "$eventGridOut_name_help",
        "validators": [
          {
            "expression": "(^[a-zA-Z][a-zA-Z0-9]{0,127}$)|^\\$return$",
            "errorText": "[variables('parameterName')]"
          }
        ]
      },
      {
        "name": "topicEndpointUri",
        "value": "string",
        "defaultValue": "MyEventGridTopicUriSetting",
        "required": true,
        "resource": "AppSetting",
        "label": "$eventGridOut_topicEndpointUri_label",
        "help": "$eventGridOut_topicEndpointUri_help"
      },
      {
        "name": "topicKeySetting",
        "value": "string",
        "resource": "AppSetting",
        "defaultValue": "MyEventGridTopicKeySetting",
        "required": true,
        "label": "$eventGridOut_topickeySetting_label",
        "help": "$eventGridOut_topickeySetting_help"
      }
    ]
  };

  isWrite = true;

  bindings.bindings.push(eventGridOutBinding);
}

if (isWrite) {
  fs.writeFileSync(path.join(__dirname, '../../node_modules/serverless-azure-functions/lib/shared/bindings.json'), JSON.stringify(bindings, null, 4));

  console.log('EventGrid Trigger Binding is added to serverless-azure-functions package.');
}