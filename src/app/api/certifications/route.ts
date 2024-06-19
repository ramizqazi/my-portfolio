import {NextResponse} from 'next/server';
import {client} from '../../../../sanity/lib/client';

export const GET = async () => {
  const payload = await client.fetch(`*[_type=="certification"]`);

  return NextResponse.json(payload);
};
