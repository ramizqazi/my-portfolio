import {client} from '../../../../sanity/lib/client';

export const GET = async () => {
  const payload = await client.fetch(`*[_type=="certification"]`);

  return Response.json(payload);
};
