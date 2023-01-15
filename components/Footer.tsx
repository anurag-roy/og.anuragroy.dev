export function Footer() {
  return (
    <footer className="border-t-2 border-gray-200 pt-6">
      <ul className="flex gap-4 justify-center">
        <li>
          <a
            href="https://twitter.com/anurag__roy"
            target="_blank"
            className="text-gray-400 hover:text-gray-600"
            title="Contact me on Twitter"
          >
            <svg role="img" width="24" height="24" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814a11.874 11.874 0 0 1-8.62-4.37a4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101a4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732a11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9c0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z"
              ></path>
            </svg>
          </a>
        </li>
        <li>
          <a
            href="https://github.com/anurag-roy/og.anuragroy.dev"
            target="_blank"
            className="text-gray-400 hover:text-gray-600"
            title="View source on GitHub"
          >
            <svg role="img" width="24" height="24" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M12 2C6.475 2 2 6.475 2 12a9.994 9.994 0 0 0 6.838 9.488c.5.087.687-.213.687-.476c0-.237-.013-1.024-.013-1.862c-2.512.463-3.162-.612-3.362-1.175c-.113-.288-.6-1.175-1.025-1.413c-.35-.187-.85-.65-.013-.662c.788-.013 1.35.725 1.538 1.025c.9 1.512 2.338 1.087 2.912.825c.088-.65.35-1.087.638-1.337c-2.225-.25-4.55-1.113-4.55-4.938c0-1.088.387-1.987 1.025-2.688c-.1-.25-.45-1.275.1-2.65c0 0 .837-.262 2.75 1.026a9.28 9.28 0 0 1 2.5-.338c.85 0 1.7.112 2.5.337c1.912-1.3 2.75-1.024 2.75-1.024c.55 1.375.2 2.4.1 2.65c.637.7 1.025 1.587 1.025 2.687c0 3.838-2.337 4.688-4.562 4.938c.362.312.675.912.675 1.85c0 1.337-.013 2.412-.013 2.75c0 .262.188.574.688.474A10.016 10.016 0 0 0 22 12c0-5.525-4.475-10-10-10z"
              ></path>
            </svg>
          </a>
        </li>
      </ul>
      <p className="mt-4 text-center text-sm text-gray-500 [&>a]:underline-offset-2 [&>a:hover]:text-primary-500">
        © {new Date().getFullYear()} Anurag Roy. Built with{' '}
        <a href="https://nextjs.org/" target="_blank">
          Next.js
        </a>{' '}
        and hosted on{' '}
        <a href="https://vercel.com" target="_blank">
          Vercel
        </a>
        .
      </p>
    </footer>
  );
}
