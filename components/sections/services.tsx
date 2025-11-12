'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Globe, Gauge, Rocket, Bot } from 'lucide-react';

const services = [
  {
    icon: Globe,
    title: 'Web Applications',
    description: 'High-performance apps built with React, Next.js, Vue.js, Nuxt, and TypeScript for modern user experiences.',
  },
  {
    icon: Gauge,
    title: 'Business Tools & Dashboards',
    description: 'Custom CRMs, analytics dashboards, and internal automation tools that streamline workflows and boost productivity.',
  },
  {
    icon: Rocket,
    title: 'Startup MVPs',
    description: 'Rapidly built, investor-ready prototypes using Django, Next.js, Nuxt, and REST APIs to validate your ideas fast.',
  },
  {
    icon: Bot,
    title: 'AI-Powered Development',
    description: 'Building and integrating AI agents, chatbots, automation systems, and OpenAI API-based features.',
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">What I Do</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From concept to production, I deliver comprehensive solutions tailored to your needs
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="border-2 hover:border-blue-600/50 hover:shadow-lg transition-all duration-300 group"
              >
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
