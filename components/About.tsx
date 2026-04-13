export default function About() {
  return (
    <section id="about" className="scroll-mt-20">
      <div className="mx-auto max-w-5xl px-4 py-12">
        <h2 className="text-2xl font-bold text-zinc-950">Обо мне</h2>
        <p className="mt-3 max-w-3xl text-zinc-700">
          Заниматься разработкой сайтов и веб-приложений начала очень давно и по сей день горю своим делом!
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-zinc-200 p-6">
            <h3 className="text-sm font-semibold text-zinc-900">Опыт</h3>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-zinc-700">
              <li>Сверстала адаптивный лендинг по макету (Figma).</li>
              <li>Фронтенд-разработчик (верстала страницы каталога и карточки товаров).</li>
              <li>Работала по GitFlow: задачи через Trello/Jira, пул-реквесты + проверка кода.</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-zinc-200 p-6">
            <h3 className="text-sm font-semibold text-zinc-900">Образование</h3>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-zinc-700">
              <li>Заведение: Российский университет дружбы народов имени Патриса Лумумбы.</li>
              <li>Специальность: Сетевое и системное администрирование</li>
              <li>Год: 2026</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}