const projects = [
  {
    title: 'Portfolio Site',
    description: 'This site — built with React, Vite, and Tailwind CSS.',
    tags: ['React', 'Tailwind', 'Vite'],
    github: 'https://github.com/Skoobzey/skoobz',
    live: null,
  },
  {
    title: 'GT Remake',
    description: 'Complete website for Growtopia Private Server with store functionality and admin dashboard. The dashboard can manage products and orders, completed with game login integration for developers and account verification over API.',
    tags: ['React', 'Stripe API', 'Tailwind', 'Node.js', 'MongoDB', 'REST API'],
    github: null,
    live: 'https://gtremake.com/',
  },
  {
    title: 'GTPS.app',
    description: 'SaaS platform that lets Growtopia private server owners build and host their own site without writing any code. Drag-and-drop builder, custom domain support, live server status, and Stripe-powered paid tiers. All deployed on hardware provided by OVH.',
    tags: ['React', 'Next.js', 'Fastify', 'TypeScript', 'PostgreSQL', 'Redis', 'Stripe', 'Tailwind', 'Caddy', 'S3', 'GitHub Actions'],
    github: null,
    live: 'https://gtps.app',
  },
]

function ProjectCard({ title, description, tags, github, live }) {
  return (
    <div className="group flex flex-col bg-gray-100/80 dark:bg-gray-900/50 border border-black/5 dark:border-white/5 rounded-2xl p-6 hover:border-accent/30 transition-colors">
      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-accent transition-colors">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed flex-1 mb-4">
        {description}
      </p>
      <div className="flex flex-wrap gap-2 mb-6">
        {tags.map((tag) => (
          <span
            key={tag}
            className="text-xs px-2 py-1 rounded-md bg-accent/10 text-accent-light border border-accent/20"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="flex gap-4 mt-auto">
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
            GitHub
          </a>
        )}
        {live && (
          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            Live
          </a>
        )}
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-2">
            Things I've built
          </p>
          <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white">Projects</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  )
}
