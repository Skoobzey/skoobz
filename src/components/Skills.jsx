const skillGroups = [
  {
    category: 'Frontend',
    skills: ['React', 'JavaScript', 'TypeScript', 'HTML & CSS', 'Tailwind CSS', 'Vite'],
  },
  {
    category: 'Backend',
    skills: ['Node.js', 'Express', 'REST APIs', 'PostgreSQL', 'MongoDB', 'MySQL'],
  },
  {
    category: 'Tools & Workflow',
    skills: ['Git & GitHub', 'VS Code', 'Azure DevOps', 'Docker', 'Ansible', 'Linux'],
  },
  {
    category: 'Learning',
    skills: ['Kubernetes', 'AWS', 'CI/CD', 'C++', 'Terraform'],
  },
]

function SkillGroup({ category, skills }) {
  return (
    <div className="bg-gray-100/80 dark:bg-gray-900/50 border border-black/5 dark:border-white/5 rounded-2xl p-6">
      <h3 className="text-sm font-semibold text-accent tracking-widest uppercase mb-4">
        {category}
      </h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span key={skill} className="inline-flex items-center px-3 py-1.5 rounded-lg bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-sm text-gray-700 dark:text-gray-300 hover:border-accent/50 hover:text-gray-900 dark:hover:text-white transition-colors">
            {skill}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-2">
            What I work with
          </p>
          <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white">Skills</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group) => (
            <SkillGroup key={group.category} {...group} />
          ))}
        </div>
      </div>
    </section>
  )
}
