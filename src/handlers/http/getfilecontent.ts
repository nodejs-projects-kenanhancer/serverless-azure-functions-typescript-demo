import { AzureFunction, Context, HttpRequest } from "@azure/functions"

const handle: AzureFunction = function (context: Context, info: HttpRequest): void {

    context.res = {
        status: 200, /* Defaults to 200 */
        body: { data: context.bindings.blobContents }
    };

    context.done();
};

export { handle };
