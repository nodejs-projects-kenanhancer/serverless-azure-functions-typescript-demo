import { AzureFunction, Context, HttpRequest } from "@azure/functions"

const handle: AzureFunction = function (context: Context, req: HttpRequest): void {

    context.log('TypeScript HTTP trigger httpTriggerToStorageBlob_fn1 function processed a request.');

    if (req.body) {
        // write string to blobOutput,
        context.bindings.blobOutput = req.body;

        context.res = {
            status: 200, /* Defaults to 200 */
            body: "done"
        };
    } else {
        context.res = {
            status: 400,
            body: "Please pass a string in the request body"
        };
    }

    context.done();
};

export { handle };
