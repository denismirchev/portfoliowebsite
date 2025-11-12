'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const projects = [
  {
    title: 'Pigeon',
    description: 'Social network for sharing short opinions and news. Clone based on the popular social network Twitter(X).',
    tags: ['Vue.js', 'Express.js', 'MySQL', 'Docker'],
    image: '/images/projects/pigeon.svg',
    link: 'https://github.com/denismirchev/pigeon',
  },
  {
    title: 'Beware',
    description: 'Online platform for learning operations security.',
    tags: ['Typescript', 'Next.js', 'Prisma', 'tRPC', 'Docker', 'Webtop', 'NextAuth', 'SASS'],
    image: '/images/projects/beware.svg',
    link: 'https://github.com/false-positive/beware',
  },
  {
    title: 'Notewell - Take notes with ease',
    description: 'Notewell is a set of tools that help you take short and concise notes and study more efficiently. ',
    tags: ['Django', 'Svelte', 'Vite', 'Svelte Material UI'],
    image: '/images/projects/notewell.png',
    link: 'https://github.com/false-positive/notewell',
  },
  {
    title: 'Moneta',
    description: 'Moneta is an interactive web platform that helps children and students build financial literacy through realistic simulations.',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Recharts', 'Vitest', 'Flask API', 'Python', 'Whisper'],
    image: '/images/projects/moneta.svg',
    link: 'https://github.com/false-positive/moneta',
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A selection of projects showcasing my expertise in full-stack development and AI integration
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden border-2 hover:border-blue-600/50 hover:shadow-lg transition-all duration-300 group flex flex-col h-full"
            >
              <div className="relative h-48 overflow-hidden bg-muted">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription className="text-sm leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col flex-1">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="mt-auto">
                  <Button 
                    size="sm" 
                    className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700"
                    onClick={() => window.open(project.link, '_blank', 'noopener,noreferrer')}
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
