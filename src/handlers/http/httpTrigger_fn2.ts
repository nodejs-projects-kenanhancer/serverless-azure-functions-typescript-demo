import { AzureFunction, Context, HttpRequest } from '@azure/functions';

const handle: AzureFunction = async function (context: Context, req: HttpRequest) {

  context.log('TypeScript HTTP trigger httpTrigger_fn2 function processed a request.');

  const name = req.query?.name || req.body?.name || (`${process.env.FIRST_NAME} ${process.env.LAST_NAME}`);

  if (name) {
    context.res = {
      status: 200,
      body: `Goodbye ${name}`
    };
  } else {
    context.res = {
      status: 400,
      body: 'Please pass a name in the query string or in the request body.'
    };
  }
};

export { handle };