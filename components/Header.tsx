export function Header() {
  return (
    <header className="flex flex-row items-center gap-4 pb-8 border-b-2">
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        className="text-primary-600"
      >
        <path
          fill="currentColor"
          d="M19 2H5a3.009 3.009 0 0 0-3 3v8.86l3.88-3.88a3.075 3.075 0 0 1 4.24 0l2.871 2.887l.888-.888a3.008 3.008 0 0 1 4.242 0L22 15.86V5a3.009 3.009 0 0 0-3-3z"
          opacity=".5"
        />
        <path
          fill="currentColor"
          d="M10.12 9.98a3.075 3.075 0 0 0-4.24 0L2 13.86V19a3.009 3.009 0 0 0 3 3h14a3 3 0 0 0 2.16-.92L10.12 9.98z"
        />
        <path
          fill="currentColor"
          d="m22 15.858l-3.879-3.879a3.008 3.008 0 0 0-4.242 0l-.888.888l8.165 8.209c.542-.555.845-1.3.844-2.076v-3.142z"
          opacity=".25"
        />
      </svg>
      <h1 className="font-bold font-mono text-4xl text-gray-900">
        og.anuragroy.dev
      </h1>
      <a
        href="https://github.com/anurag-roy/og.anuragroy.dev"
        target="_blank"
        className="ml-auto text-gray-400 hover:text-primary-600"
        title="View source on GitHub"
      >
        <svg
          role="img"
          aria-label="GitHub"
          width="32"
          height="32"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M12 2C6.475 2 2 6.475 2 12a9.994 9.994 0 0 0 6.838 9.488c.5.087.687-.213.687-.476c0-.237-.013-1.024-.013-1.862c-2.512.463-3.162-.612-3.362-1.175c-.113-.288-.6-1.175-1.025-1.413c-.35-.187-.85-.65-.013-.662c.788-.013 1.35.725 1.538 1.025c.9 1.512 2.338 1.087 2.912.825c.088-.65.35-1.087.638-1.337c-2.225-.25-4.55-1.113-4.55-4.938c0-1.088.387-1.987 1.025-2.688c-.1-.25-.45-1.275.1-2.65c0 0 .837-.262 2.75 1.026a9.28 9.28 0 0 1 2.5-.338c.85 0 1.7.112 2.5.337c1.912-1.3 2.75-1.024 2.75-1.024c.55 1.375.2 2.4.1 2.65c.637.7 1.025 1.587 1.025 2.687c0 3.838-2.337 4.688-4.562 4.938c.362.312.675.912.675 1.85c0 1.337-.013 2.412-.013 2.75c0 .262.188.574.688.474A10.016 10.016 0 0 0 22 12c0-5.525-4.475-10-10-10z"
          ></path>
        </svg>
      </a>
    </header>
  );
}
