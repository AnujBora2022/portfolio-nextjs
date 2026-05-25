export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-5xl w-full flex flex-col gap-6">
        <p className="text-muted-foreground text-sm tracking-widest uppercase">
          Full Stack Developer
        </p>
        <h1 className="text-5xl sm:text-7xl font-bold tracking-tight">
          Hi, I'm <span className="text-primary">Anuj Bora</span>
        </h1>
        <p className="text-muted-foreground text-lg max-w-xl leading-relaxed">
          I build fast, clean, and scalable web applications. Focused on great
          user experience and solid backend architecture.
        </p>
        <div className="flex items-center gap-4 mt-2">
          <a
            href="#projects"
            className="bg-primary text-primary-foreground px-6 py-3 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="border border-border px-6 py-3 rounded-lg text-sm font-medium hover:bg-muted transition-colors"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}