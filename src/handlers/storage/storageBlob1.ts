import { AzureFunction, Context } from "@azure/functions"

const handle: AzureFunction = async function (context: Context, item: any): Promise<void> {

    const { bindingData: {blobname, blobextension} } = context;

    context.log(`Received file: ${blobname}.${blobextension}\n`, item.toString('utf8'));

    context.done();
};

export { handle };
