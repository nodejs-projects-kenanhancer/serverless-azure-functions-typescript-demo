import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import { v4 as uuidv4 } from 'uuid';

const handle: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {

    context.log('TypeScript HTTP trigger httpTriggerToStorageQueue_fn2 function processed a request.');

    if (req.body) {
        // Add a message to the Storage queue,
        // which is the name passed to the function.

        const personEntity: Record<string, any> = Object.keys(req.body).reduce((acc, cur) => ({ ...acc, [cur.toUpperCase()]: req.body[cur] }), { PartitionKey: uuidv4(), RowKey: "PERSONAL_DATA" });

        context.bindings.message = personEntity;

        context.res = {
            status: 200,
            body: `done`
        };
    }
    else {
        context.res = {
            status: 400,
            body: "Please pass a name on the query string or in the request body"
        };
    }
};

export { handle };
