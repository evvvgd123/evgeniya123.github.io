"use client";

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 border-t border-zinc-200">
      <div className="mx-auto max-w-5xl px-4 py-12">
        <h2 className="text-2xl font-bold text-zinc-950">Контакты</h2>
        <p className="mt-2 text-sm text-zinc-600">
          Можно написать в соцсети или отправить сообщение через форму.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-zinc-200 p-6">
            <h3 className="text-sm font-semibold text-zinc-900">Прямые ссылки</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a className="flex items-center gap-2 text-zinc-800 hover:text-zinc-950" href="mailto:dubnova2005@mail.ru">
                  <span role="img" aria-label="Почта">📧</span> dubnova2005@mail.ru
                </a>
              </li>
              <li>
                <a className="flex items-center gap-2 text-zinc-800 hover:text-zinc-950" href="https://t.me/evvvgd" target="_blank" rel="noreferrer">
                  <span role="img" aria-label="Telegram">✈️</span> evvvgd
                </a>
              </li>
              <li>
                <a className="flex items-center gap-2 text-zinc-800 hover:text-zinc-950" href="https://vk.com/evvvgd" target="_blank" rel="noreferrer">
                  <span role="img" aria-label="VK">❤️</span> https://vk.com/evvvgd
                </a>
              </li>
              <li>
                <a className="flex items-center gap-2 text-zinc-800 hover:text-zinc-950" href="https://github.com/evvvgd123" target="_blank" rel="noreferrer">
                  <span role="img" aria-label="GitHub">🐙</span> evgeniya123.github.io
                </a>
              </li>
            </ul>

            <p className="mt-6 text-xs text-zinc-500">
              
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-200 p-6">
            <h3 className="text-sm font-semibold text-zinc-900">Форма обратной связи</h3>

            <form
              className="mt-4 space-y-3"
              action="https://formspree.io/f/XXXXXXXX"
              method="POST"
            >
              <label className="block">
                <span className="text-xs font-medium text-zinc-700">Имя</span>
                <input
                  name="name"
                  required
                  className="mt-1 w-full rounded-xl border border-zinc-300 px-3 py-2 text-sm"
                  placeholder="Ваше имя"
                />
              </label>

              <label className="block">
                <span className="text-xs font-medium text-zinc-700">Email</span>
                <input
                  name="email"
                  type="email"
                  required
                  className="mt-1 w-full rounded-xl border border-zinc-300 px-3 py-2 text-sm"
                  placeholder="name@example.com"
                />
              </label>

              <label className="block">
                <span className="text-xs font-medium text-zinc-700">Сообщение</span>
                <textarea
                  name="message"
                  required
                  rows={4}
                  className="mt-1 w-full rounded-xl border border-zinc-300 px-3 py-2 text-sm"
                  placeholder="Текст сообщения"
                />
              </label>

              <button
                type="submit"
                className="w-full rounded-xl bg-zinc-900 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-800"
              >
                Отправить
              </button>

              <p className="text-xs text-zinc-500">
                Форма работает через Formspree после публикации сайта.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}