import { AzureFunction, Context, HttpRequest } from "@azure/functions"

const handle: AzureFunction = function (context: Context, req: HttpRequest): void {

    context.log('TypeScript HTTP trigger httpTriggerFromStorageTable_fn1 function processed a request.');

    if (context.bindings.personEntity) {
        context.res = {
            status: 200, /* Defaults to 200 */
            body: context.bindings.personEntity
        };
    } else {
        context.res = {
            status: 400,
            body: ''
        };
    }

    context.done();
};

export { handle };
