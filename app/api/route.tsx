import { ImageResponse } from '@vercel/og';
import { NextRequest } from 'next/server';
import { getThemeColor } from '@/lib/colors';

export const runtime = 'edge';

const getInter = fetch(
  new URL('../../assets/inter.ttf', import.meta.url)
).then((res) => res.arrayBuffer());
const getClashDisplay = fetch(
  new URL('../../assets/clash-display.ttf', import.meta.url)
).then((res) => res.arrayBuffer());
const getAloeVera = fetch(
  new URL('../../assets/aloe-vera.ttf', import.meta.url)
).then((res) => res.arrayBuffer());

export async function GET(req: NextRequest) {
  const DEFAULT_TITLE = 'Anurag Roy';
  const DEFAULT_DESCRIPTION =
    'Full-stack developer and aspiring designer from Kolkata, India.';
  const DEFAULT_AVATAR = 'https://og.anuragroy.dev/memoji.png';
  const DEFAULT_AUTHOR = 'anuragroy.dev';
  const DEFAULT_THEME = 'rose';

  const [inter, clashDisplay, aloeVera] = await Promise.all([
    getInter,
    getClashDisplay,
    getAloeVera,
  ]);

  const { searchParams } = req.nextUrl;

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
    ? searchParams.get('theme')!
    : DEFAULT_THEME;

  const backgroundColor = getThemeColor(theme, '200');
  const avatarBackgroundColor = getThemeColor(theme, '300');
  const authorColor = getThemeColor(theme, '600');

  return new ImageResponse(
    (
      <div
        tw="flex h-full w-full flex-col justify-between px-20 py-16"
        style={{ backgroundColor }}
      >
        <h1 tw="text-8xl leading-none" style={{ fontFamily: 'ClashDisplay' }}>
          {title}
        </h1>
        <p
          tw="mb-16 text-5xl leading-tight text-gray-900"
          style={{ fontFamily: 'Inter' }}
        >
          {description}
        </p>
        <div tw="flex w-full flex-row items-center">
          {avatar?.startsWith('http') ? (
            <img
              src={avatar}
              tw="mr-4 h-14 w-14 rounded-full"
              style={{ backgroundColor: avatarBackgroundColor }}
            />
          ) : (
            <span tw="mr-4 text-5xl">{avatar}</span>
          )}
          <span
            tw="mr-auto text-5xl"
            style={{ fontFamily: 'AloeVera', color: authorColor }}
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
          name: 'Inter',
          data: inter,
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
