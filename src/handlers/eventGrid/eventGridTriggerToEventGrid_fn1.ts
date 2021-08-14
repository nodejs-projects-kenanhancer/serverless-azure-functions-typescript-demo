import { AzureFunction, Context } from "@azure/functions"
import { v4 as uuidv4 } from 'uuid';

const handle: AzureFunction = function (context: Context, eventGridEvent: any): void {

    context.log("JavaScript Event Grid function processed a request.");
    context.log("Subject: " + eventGridEvent.subject);
    context.log("Time: " + eventGridEvent.eventTime);
    context.log("Data: " + JSON.stringify(eventGridEvent.data));

    const timeStamp = new Date().toISOString();

    context.bindings.outputEvent = {
        "id": uuidv4(),
        "eventType": "recordInserted",
        "subject": "myapp/vehicles/motorcycles",
        "eventTime": timeStamp,
        "data": {
            "make": "Ducati",
            "model": "Monster",
            "firstname": "kenan"
        },
        "dataVersion": "1.0"
    };

    context.done();
};

export { handle };
