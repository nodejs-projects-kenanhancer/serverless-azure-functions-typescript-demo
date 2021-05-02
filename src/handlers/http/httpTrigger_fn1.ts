import { AzureFunction, Context, HttpRequest } from '@azure/functions';

const handle: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {

  context.log('TypeScript HTTP trigger httpTrigger_fn1 function processed a request.');
  context.log(`Environment variables\nFIRST_NAME: ${process.env.FIRST_NAME}\nLAST_NAME: ${process.env.LAST_NAME}`);

  const name: string = (req.query?.name || req.body?.name);

  if (name) {
    context.res = {
      status: 200, /* Defaults to 200 */
      body: `Hello, ${name}.`
    };
  } else {
    context.res = {
      status: 400,
      body: 'Please pass a name in the query string or in the request body.'
    };
  }
}

export { handle };