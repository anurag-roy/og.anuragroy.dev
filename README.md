<div align="center">

<img src="https://pub-cb12f9144e314eec94d19801ea4a36ee.r2.dev/og-logo.png" width="140" />

# og.anuragroy.dev

OpenGraph Image Generator for [anuragroy.dev](https://anuragroy.dev) using `@vercel/og` and Vercel Edge functions.

![preview](https://pub-cb12f9144e314eec94d19801ea4a36ee.r2.dev/og-ss.png)

</div>

## Usage

Enter your custom values, copy the generated URL or download the generated image and use it wherever you want.

Tips on usage:

- To override default values and hide an element, pass a single space character (' ') as its input.
- All fields which accept image URLs, accept emojis as well!

## Using this repo as a template

If you want to create your own OG Image generator from this repo, you can do so very easily:

### Prerequisites

Make sure you have the following installed before proceeding:

1. Node.js v14.18.0+ (v18+ recommended)
2. Package manager of your choice (npm, yarn, pnpm, etc.)

### Steps

#### 1. Clone this repo:

```sh
git clone https://github.com/anurag-roy/og.anuragroy.dev.git
```

#### 2. Install dependencies

```sh
npm install
```

#### 3. Start server locally

```
npm run dev
```

This will start a local development server where you will be able to make changes to the code and preview them live.

- To customise the actual generated image, you have to edit `pages/api/index.tsx`.

  Here, you can edit the fonts used, parameters accepted by the API, look and feel of the image, etc. The [Vercel docs have a lot of examples](https://vercel.com/docs/concepts/functions/edge-functions/og-image-generation/og-image-examples) which should cover most use cases.

- To customise anything in the UI, you can start by looking at `components/Main/index.tsx` which contains the main form.

#### 4. Building and previewing locally

To build the project and test the production build locally:

```sh
npm run build
npm start
```

This will start a local server with the final production build.

#### 5. Deploying

Currently this can only be deployed on Vercel's Edge platform due to the dependency on `@vercel/og`. But on the bright side, they have a [very generous Hobby plan](https://vercel.com/docs/concepts/limits/overview) and extremely simple deployments.

- Create an account on [Vercel](https://vercel.com/), if you don't have one already.
- Upload this repo to GitHub (or GitLab or whatever). [Create a new project on Vercel](https://vercel.com/docs/concepts/projects/overview#creating-a-project) and link it to your repo.
- Thats it, no other configuration or env variables needed! (Just make sure your selected Node.js version is 18.x).
- Visit the project URL and you should now have your own OG image generator!

## Further reading

- [Vercel edge functions](https://vercel.com/docs/concepts/functions/edge-functions)
- [@vercel/og docs](https://vercel.com/docs/concepts/functions/edge-functions/og-image-generation/og-image-api)
- [Next.js docs](https://nextjs.org/docs) (This project uses the Next's Pages Router)

## Contact

- [Twitter](https://twitter.com/anurag__roy)
- [Email](mailto:anuragroy@duck.com)

## License

[MIT © 2023 Anurag Roy](/LICENSE)

[^1]: The app uses this [Next.js plugin](https://www.npmjs.com/package/next-plugin-websocket) to maintain a WebSocket Server, which patches some files in `node_modules`. I have tried using `pnpm` but it does not work reliably. See other caveats [here](https://github.com/sam3d/next-plugin-websocket#caveats).
