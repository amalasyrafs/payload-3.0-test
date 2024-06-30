// Force this page to be dynamic so that Next.js does not cache it
// See the note in '../../../[slug]/page.tsx' about this
export const dynamic = 'force-dynamic';
import { Metadata } from 'next';
import { draftMode } from 'next/headers';
import { getPayload, type Payload } from 'payload';
import configPromise from '@payload-config';
import TestComponent from '@/components/TestComponent';

export default async function TestPage() {
  const payload = getPayload({ config: configPromise });
  const data = await (await payload).find({ collection: 'achievement' });

  return <TestComponent data={data} />;
}
