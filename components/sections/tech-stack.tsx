'use client';

import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const techCategories = [
  {
    title: 'Frontend',
    skills: ['TypeScript', 'React', 'Next.js', 'Vue.js', 'Nuxt', 'Tailwind CSS'],
    color: 'from-blue-600 to-cyan-600',
  },
  {
    title: 'Backend',
    skills: ['Django', 'Node.js', 'Express', 'REST APIs'],
    color: 'from-green-600 to-emerald-600',
  },
  {
    title: 'AI & Automation',
    skills: ['OpenAI API', 'LangChain', 'LlamaIndex', 'Pinecone', 'Vector DBs'],
    color: 'from-purple-600 to-pink-600',
  },
  {
    title: 'Databases',
    skills: ['PostgreSQL', 'MySQL', 'MongoDB'],
    color: 'from-orange-600 to-red-600',
  },
  {
    title: 'Deployment',
    skills: ['Vercel', 'AWS', 'Docker', 'CI/CD pipelines'],
    color: 'from-slate-600 to-gray-600',
  },
];

export function TechStack() {
  return (
    <section id="tech-stack" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Tech Stack</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Modern technologies and tools I use to build scalable, production-ready applications
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {techCategories.map((category, index) => (
            <Card
              key={index}
              className="p-6 border-2 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-1 h-8 rounded-full bg-gradient-to-b ${category.color}`} />
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge
                    key={skillIndex}
                    variant="secondary"
                    className="text-sm px-3 py-1"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
