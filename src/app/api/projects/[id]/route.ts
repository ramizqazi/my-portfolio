import {NextResponse} from 'next/server';
import {client} from '../../../../../sanity/lib/client';

export const GET = async (
  request: Request,
  {params}: {params: {id: string}},
) => {
  const {id} = params;
  const data = await client.fetch(`*[_type=="project"  && _id=="${id}"][0]`);

  return NextResponse.json(data);
};
