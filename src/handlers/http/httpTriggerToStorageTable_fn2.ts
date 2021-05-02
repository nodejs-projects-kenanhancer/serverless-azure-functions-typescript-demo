import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import { v4 as uuidv4 } from 'uuid';

const handle: AzureFunction = function (context: Context, req: HttpRequest): void {

    context.log('TypeScript HTTP trigger httpTriggerToStorageTable_fn3 function processed a request.');

    if (req.body) {
        // context.bindings.personEntity = [];
        // context.bindings.personEntity.push({
        //     PartitionKey: "Test",
        //     RowKey: i.toString(),
        //     Name: "Name " + i
        // });

        const personEntity: Record<string, any> = Object.keys(req.body).reduce((acc, cur) => ({ ...acc, [cur.toUpperCase()]: req.body[cur] }), { PartitionKey: uuidv4(), RowKey: "PERSONAL_DATA" });

        context.bindings.personEntity = personEntity;

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
