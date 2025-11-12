'use client';

import { Card } from '@/components/ui/card';
import { CheckCircle2 } from 'lucide-react';

const highlights = [
  'Clear communication and frequent updates',
  'Production-quality code from day one',
  'Scalable architecture ready for future growth',
  'Fast turnaround for MVPs and prototypes',
  'Experience integrating AI automation',
  'Commitment to long-term success',
];

export function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Helping startups and growing companies turn ideas into functional, scalable, and user-friendly web apps
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          <Card className="p-8 border-2 hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-semibold mb-4">Who I Am</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Full Stack Developer specializing in modern web applications, internal business tools,
              AI integrations, and rapid MVP development for startups.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              With a strong background across both frontend and backend technologies - and hands-on
              experience building AI-powered applications and autonomous agents - I can take your
              project from concept to production with clean architecture and clear communication.
            </p>
          </Card>

          <Card className="p-8 border-2 hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-semibold mb-6">Why Choose Me</h3>
            <ul className="space-y-4">
              {highlights.map((highlight, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{highlight}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </div>
    </section>
  );
}
