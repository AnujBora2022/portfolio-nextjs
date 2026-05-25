import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="text-muted-foreground text-sm tracking-widest uppercase mb-2">
          My Work
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-12">
          Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="border border-border rounded-xl p-6 flex flex-col gap-4 hover:bg-muted/50 transition-colors"
            >
              <h3 className="font-semibold text-lg">{project.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded-md"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-4 text-sm">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >

                  GitHub →
                </a>
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Live →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}