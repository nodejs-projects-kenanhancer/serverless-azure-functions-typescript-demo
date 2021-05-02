import { AzureFunction, Context, HttpRequest } from "@azure/functions"

const handle: AzureFunction = function (context: Context, info: HttpRequest): void {

    context.log('TypeScript HTTP trigger httpTriggerFromStorageBlob_fn1 function processed a request.');

    if (context.bindings.blobContents) {
        context.res = {
            status: 200, /* Defaults to 200 */
            body: { data: context.bindings.blobContents }
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
