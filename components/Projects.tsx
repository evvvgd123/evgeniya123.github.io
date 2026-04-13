import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-20 border-t border-zinc-200">
      <div className="mx-auto max-w-5xl px-4 py-12">
        <h2 className="text-2xl font-bold text-zinc-950">Проекты</h2>
        <p className="mt-2 text-sm text-zinc-600">
          Карточки проектов: описание, технологии, ссылки на демо и код.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {projects.map((p) => (
            <article
              key={p.title}
              className="rounded-2xl border border-zinc-200 p-6 hover:shadow-sm transition"
            >
              <h3 className="text-lg font-semibold text-zinc-950">{p.title}</h3>
              <p className="mt-2 text-sm text-zinc-700">{p.description}</p>

              <ul className="mt-4 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <li
                    key={t}
                    className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-700"
                  >
                    {t}
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex flex-wrap gap-3">
                <a
                  href={p.demoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl bg-zinc-900 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-800"
                >
                  Демо
                </a>
                <a
                  href={p.codeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-900 hover:bg-zinc-50"
                >
                  Код
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}