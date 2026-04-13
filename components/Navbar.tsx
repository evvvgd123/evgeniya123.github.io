export default function Navbar() {
  const linkClass =
    "text-sm font-medium text-zinc-700 hover:text-zinc-950 transition";

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        <a href="#home" className="font-semibold text-zinc-950">
          Моё портфолио
        </a>

        <nav aria-label="Основная навигация" className="flex gap-4">
          <a className={linkClass} href="#about">Обо мне</a>
          <a className={linkClass} href="#projects">Проекты</a>
          <a className={linkClass} href="#contact">Контакты</a>
        </nav>
      </div>
    </header>
  );
}
