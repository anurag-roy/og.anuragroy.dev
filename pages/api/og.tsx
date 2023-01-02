import { ImageResponse } from '@vercel/og';
import { NextRequest } from 'next/server';

export const config = {
  runtime: 'edge',
};

const getSatoshi = fetch(
  new URL('../../assets/Satoshi.ttf', import.meta.url)
).then((res) => res.arrayBuffer());
const getClashDisplay = fetch(
  new URL('../../assets/ClashDisplay.ttf', import.meta.url)
).then((res) => res.arrayBuffer());
const getAloeVera = fetch(
  new URL('../../assets/AloeVera.ttf', import.meta.url)
).then((res) => res.arrayBuffer());

export default async function handler(req: NextRequest) {
  const WEBSITE = 'anuragroy.dev';
  const DEFAULT_TITLE = 'OG Image';
  const DEFAULT_DESCRIPTION =
    'Add `title` and `description` to the URL as query params to populate the card with your own content.';
  const DEFAULT_COLOR = 'rose';

  const [satoshi, clashDisplay, aloeVera] = await Promise.all([
    getSatoshi,
    getClashDisplay,
    getAloeVera,
  ]);

  const { searchParams } = req.nextUrl;

  // get content from query params
  const title = searchParams.has('title')
    ? searchParams.get('title')
    : DEFAULT_TITLE;

  const description = searchParams.has('description')
    ? searchParams.get('description')
    : DEFAULT_DESCRIPTION;

  const color = searchParams.has('color')
    ? searchParams.get('color')
    : DEFAULT_COLOR;

  return new ImageResponse(
    (
      <div
        tw={`h-full w-full px-20 py-16 bg-${color}-200 flex flex-col justify-between`}
      >
        <h1 tw="text-8xl leading-none" style={{ fontFamily: 'ClashDisplay' }}>
          {title}
        </h1>
        <p
          tw="mb-16 text-5xl text-gray-900 leading-tight"
          style={{ fontFamily: 'Satoshi' }}
        >
          {description}
        </p>
        <div tw="w-full flex flex-row items-center">
          <img
            src="https://og.anuragroy.dev/assets/memoji.png"
            height="56px"
            width="56px"
            tw={`mr-2 bg-${color}-300 rounded-full`}
          />
          <span
            tw={`text-5xl text-${color}-600 mr-auto`}
            style={{ fontFamily: 'AloeVera' }}
          >
            {WEBSITE}
          </span>
          <span tw="text-5xl">🐦</span>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: 'Satoshi',
          data: satoshi,
        },
        {
          name: 'ClashDisplay',
          data: clashDisplay,
        },
        {
          name: 'AloeVera',
          data: aloeVera,
        },
      ],
    }
  );
}
