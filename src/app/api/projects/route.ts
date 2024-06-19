import {NextResponse} from 'next/server';
import {client} from '../../../../sanity/lib/client';

export const GET = async () => {
  const data = await client.fetch(`*[_type=="project"]`);

  return NextResponse.json(data);
};
