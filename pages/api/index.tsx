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
  const DEFAULT_TITLE = 'Anurag Roy';
  const DEFAULT_DESCRIPTION =
    'Full-stack developer and aspiring designer from Kolkata, India.';
  const DEFAULT_AVATAR = 'https://og.anuragroy.dev/memoji.png';
  const DEFAULT_AUTHOR = 'anuragroy.dev';
  const DEFAULT_THEME = 'rose';

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

  const avatar = searchParams.has('avatar')
    ? searchParams.get('avatar')!
    : DEFAULT_AVATAR;

  const author = searchParams.has('author')
    ? searchParams.get('author')
    : DEFAULT_AUTHOR;

  const logo = searchParams.has('logo') ? searchParams.get('logo') : null;

  const theme = searchParams.has('theme')
    ? searchParams.get('theme')
    : DEFAULT_THEME;

  return new ImageResponse(
    (
      <div
        tw={`h-full w-full px-20 py-16 bg-${theme}-200 flex flex-col justify-between`}
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
          {avatar?.startsWith('http') ? (
            <img
              src={avatar}
              tw={`mr-4 h-14 w-14 bg-${theme}-300 rounded-full`}
            />
          ) : (
            <span tw="mr-4 text-5xl">{avatar}</span>
          )}
          <span
            tw={`text-5xl text-${theme}-600 mr-auto`}
            style={{ fontFamily: 'AloeVera' }}
          >
            {author}
          </span>
          {logo?.startsWith('http') ? (
            <img src={logo} tw="h-14 w-14" />
          ) : (
            <span tw="text-5xl">{logo}</span>
          )}
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
