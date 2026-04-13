export default function Footer() {
  return (
    <footer className="border-t border-zinc-200">
      <div className="mx-auto max-w-5xl px-4 py-8 text-xs text-zinc-500">
        © {new Date().getFullYear()} Евгения Дубнова. Сделано на Next.js.
      </div>
    </footer>
  );
}