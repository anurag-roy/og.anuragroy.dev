export function Header() {
  return (
    <header className="flex flex-row items-center gap-4">
      <img
        src="/memoji.webp"
        className="mr-2 h-14 w-14 bg-rose-300 rounded-full"
      />
      <h1 className="font-bold leading-none text-6xl text-rose-600">
        og.anuragroy.dev
      </h1>
    </header>
  );
}
