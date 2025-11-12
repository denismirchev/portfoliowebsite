'use client';

import { Hero } from '@/components/sections/hero';
import { About } from '@/components/sections/about';
import { Services } from '@/components/sections/services';
import { TechStack } from '@/components/sections/tech-stack';
import { Projects } from '@/components/sections/projects';
import { Contact } from '@/components/sections/contact';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <main className="bg-background">
      <Navigation />
      <Hero />
      <About />
      <Services />
      <TechStack />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
