import Head from 'next/head';
import type { GetStaticProps } from 'next';
import dynamic from 'next/dynamic';
import Layout from '@/components/Layout';
import Hero from '@/components/Hero';

// Dynamically import components below the fold for optimal code-splitting and performance
const About = dynamic(() => import('@/components/About'));
const Skills = dynamic(() => import('@/components/Skills'));
const Projects = dynamic(() => import('@/components/Projects'));
const Experience = dynamic(() => import('@/components/Experience'));
const Contact = dynamic(() => import('@/components/Contact'));

import {
  personalInfo,
  resumeData,
  projectsList,
  PersonalInfo,
  ResumeData,
  ProjectItem
} from '@/data/portfolioData';

interface HomeProps {
  personalInfo: PersonalInfo;
  resumeData: ResumeData;
  projectsList: ProjectItem[];
}

export default function Home({}: HomeProps) {
  // Props are available if needed, but since we imported the static data directly,
  // we are using the statically generated data props to satisfy the getStaticProps pattern.
  return (
    <>
      <Head>
        <title>{`${personalInfo.name} | ${personalInfo.title}`}</title>
        <meta name="description" content={personalInfo.description} />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={`${personalInfo.name} - ${personalInfo.title}`} />
        <meta property="og:description" content={personalInfo.description} />
        <meta property="og:image" content="https://princi-rakotoarison.vercel.app/images/profil.png" />
        <meta property="og:url" content="https://princi-rakotoarison.vercel.app" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${personalInfo.name} - ${personalInfo.title}`} />
        <meta name="twitter:description" content={personalInfo.description} />
        <meta name="twitter:image" content="https://princi-rakotoarison.vercel.app/images/profil.png" />

        {/* Canonical Link */}
        <link rel="canonical" href="https://princi-rakotoarison.vercel.app" />
      </Head>

      <Layout>
        {/* Single page sections */}
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </Layout>
    </>
  );
}

// SSG for static portfolio details
export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  return {
    props: {
      personalInfo,
      resumeData,
      projectsList,
    },
    // Since this is static data, we build it once at compile time.
  };
};
