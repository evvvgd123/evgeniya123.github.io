export default function Hero() {
  return (
    <section id="home" className="border-b border-zinc-200">
      <div className="mx-auto grid max-w-5xl gap-6 px-4 py-14 md:grid-cols-2 md:items-center">
        <div className="space-y-4">
          <p className="text-sm text-zinc-600">Привет! Меня зовут</p>
          <h1 className="text-3xl font-bold tracking-tight text-zinc-950 md:text-4xl">
            Евгения Дубнова
          </h1>
          <p className="text-zinc-700">
            Я начинающий разработчик. Делаю сайты и веб-приложения.
            Здесь — вся информация обо мне.
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              className="rounded-xl bg-zinc-900 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-800"
              href="#projects"
            >
              Смотреть проекты
            </a>
            <a
              className="rounded-xl border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-900 hover:bg-zinc-50"
              href="#contact"
            >
              Связаться
            </a>
          </div>

          <p className="text-xs text-zinc-500">
            Город: Сочи • Формат: работа
          </p>
        </div>

        <div className="rounded-2xl border border-zinc-200 bg-gradient-to-br from-zinc-50 to-zinc-100 p-6">
          <h2 className="mb-3 text-sm font-semibold text-zinc-900">Ключевые навыки</h2>
          <ul className="grid list-disc gap-2 pl-5 text-sm text-zinc-700">
            <li>HTML, CSS, адаптивная верстка</li>
            <li>JavaScript (база)</li>
            <li>Next.js / React (база)</li>
            <li>Git/GitHub</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
