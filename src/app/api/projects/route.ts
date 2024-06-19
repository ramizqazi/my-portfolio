import {client} from '../../../../sanity/lib/client';

export const GET = async () => {
  const data = await client.fetch(`*[_type=="project"]`);

  return Response.json(data);
};
