
import React from 'react';
import { motion } from 'framer-motion';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Projects } from '../components/Projects';
import { Skills } from '../components/Skills';
import { Contact } from '../components/Contact';
import { Navigation } from '../components/Navigation';
import { SocialLinks } from '../components/SocialLinks';

const Index = () => {
  return (
    <div className="bg-gray-900 text-white overflow-x-hidden">
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <SocialLinks />
    </div>
  );
};

export default Index;
