import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import { v4 as uuidv4 } from 'uuid';

const handle: AzureFunction = function (context: Context, req: HttpRequest): void {

    context.log('TypeScript HTTP trigger httpTriggerToStorageTable_fn2 function processed a request.');

    const name = req.query?.name || req.body?.name;

    if (name) {
        // context.bindings.personEntity = [];
        // context.bindings.personEntity.push({
        //     PartitionKey: "Test",
        //     RowKey: i.toString(),
        //     Name: "Name " + i
        // });

        context.bindings.personEntity = { PartitionKey: uuidv4(), RowKey: 'PERSONAL_DATA', Name: name };

        context.res = {
            status: 200, /* Defaults to 200 */
            body: { data: "done" }
        };
    } else {
        context.res = {
            status: 400,
            body: "Please pass a name on the query string or in the request body"
        };
    }

    context.done();
};

export { handle };
