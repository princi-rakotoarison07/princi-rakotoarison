import Head from 'next/head';
import Link from 'next/link';
import type { GetServerSideProps } from 'next';
import Layout from '@/components/Layout';
import { FaClock, FaHeartbeat, FaMapMarkerAlt, FaWifi, FaArrowLeft } from 'react-icons/fa';

interface LiveStatusProps {
  serverTime: string;
  uptime: string;
  isAvailable: boolean;
  userAgent: string;
  madagascarTime: string;
}

export default function LiveStatus({
  serverTime,
  uptime,
  isAvailable,
  userAgent,
  madagascarTime,
}: LiveStatusProps) {
  return (
    <>
      <Head>
        <title>Live Status | Princi Rakotoarison</title>
        <meta name="description" content="Statut en temps réel du serveur et disponibilité de Princi Rakotoarison, développeur fullstack." />
        <link rel="canonical" href="https://princi-rakotoarison.vercel.app/live" />
        <meta property="og:title" content="Statut Live - Princi Rakotoarison" />
        <meta property="og:description" content="Statut en temps réel et disponibilité de Princi Rakotoarison." />
        <meta property="og:url" content="https://princi-rakotoarison.vercel.app/live" />
      </Head>

      <Layout>
        <section className="min-h-screen pt-32 pb-16 bg-sable-white flex flex-col justify-center">
          <div className="max-w-4xl mx-auto px-6 w-full">
            
            {/* Back Button */}
            <div className="mb-8">
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-sm font-semibold text-sable-brown-light hover:text-sable-terracotta transition-colors duration-300"
              >
                <FaArrowLeft className="text-xs" />
                <span>Retour au Portfolio</span>
              </Link>
            </div>

            {/* Dashboard Container */}
            <div className="bg-sable-beige/65 border border-sable-terracotta/20 rounded-3xl p-8 md:p-12 shadow-sm">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10 pb-6 border-b border-sable-terracotta/20">
                <div>
                  <span className="inline-block text-xs font-bold tracking-widest text-sable-white bg-sable-terracotta px-3 py-1 rounded-full uppercase mb-3">
                    Server-Side Rendered (SSR)
                  </span>
                  <h1 className="text-3xl md:text-4xl font-extrabold text-sable-brown">
                    Live Status Dashboard
                  </h1>
                </div>
                <div className="flex items-center gap-3.5">
                  <span className="relative flex h-3.5 w-3.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500"></span>
                  </span>
                  <span className="text-sm font-bold text-emerald-600">Système En Ligne</span>
                </div>
              </div>

              {/* Grid of details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                
                {/* Time Card */}
                <div className="bg-sable-white border border-sable-terracotta/10 rounded-2xl p-6 shadow-xs flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-sable-beige flex items-center justify-center text-sable-terracotta text-xl shrink-0">
                    <FaClock />
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-sable-brown-light uppercase tracking-wider mb-1">
                      Heure de Madagascar (UTC+3)
                    </span>
                    <span className="text-lg md:text-xl font-bold text-sable-brown block">
                      {madagascarTime}
                    </span>
                    <span className="text-xs text-sable-brown-light italic">
                      Généré sur le serveur à la demande
                    </span>
                  </div>
                </div>

                {/* Availability Card */}
                <div className="bg-sable-white border border-sable-terracotta/10 rounded-2xl p-6 shadow-xs flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-sable-beige flex items-center justify-center text-sable-terracotta text-xl shrink-0">
                    <FaWifi />
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-sable-brown-light uppercase tracking-wider mb-1">
                      Statut d&apos;activité
                    </span>
                    <span className="text-lg md:text-xl font-bold text-sable-brown block">
                      {isAvailable ? 'Disponible pour missions' : 'Actuellement occupé'}
                    </span>
                    <span className="text-xs text-sable-brown-light">
                      Mise à jour automatique
                    </span>
                  </div>
                </div>

                {/* Uptime Card */}
                <div className="bg-sable-white border border-sable-terracotta/10 rounded-2xl p-6 shadow-xs flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-sable-beige flex items-center justify-center text-sable-terracotta text-xl shrink-0">
                    <FaHeartbeat />
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-sable-brown-light uppercase tracking-wider mb-1">
                      Temps de fonctionnement (Server)
                    </span>
                    <span className="text-lg md:text-xl font-bold text-sable-brown block">
                      {uptime}
                    </span>
                    <span className="text-xs text-sable-brown-light">
                      Server local uptime
                    </span>
                  </div>
                </div>

                {/* Request Header Card */}
                <div className="bg-sable-white border border-sable-terracotta/10 rounded-2xl p-6 shadow-xs flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-sable-beige flex items-center justify-center text-sable-terracotta text-xl shrink-0">
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-sable-brown-light uppercase tracking-wider mb-1">
                      Navigateur Visiteur (SSR Check)
                    </span>
                    <span className="text-sm font-semibold text-sable-brown block line-clamp-2">
                      {userAgent || 'Inconnu'}
                    </span>
                    <span className="text-xs text-sable-brown-light">
                      Extrait de l&apos;en-tête de requête
                    </span>
                  </div>
                </div>

              </div>

              {/* Extra Info Footer */}
              <div className="p-4 rounded-xl bg-sable-white border border-sable-terracotta/10 text-xs text-sable-brown-light leading-relaxed">
                <p>
                  <strong>Note technique :</strong> Cette page utilise <code>getServerSideProps</code> pour récupérer les en-têtes de votre navigateur (User-Agent), calculer la différence de fuseau horaire pour l&apos;heure locale à Antananarivo, et interroger dynamiquement le processus du serveur à chaque rechargement de page.
                </p>
              </div>

            </div>

          </div>
        </section>
      </Layout>
    </>
  );
}

export const getServerSideProps: GetServerSideProps<LiveStatusProps> = async (context) => {
  const req = context.req;
  const userAgent = req.headers['user-agent'] || 'Unknown';

  // Calculate local time in Madagascar (UTC+3)
  const d = new Date();
  const utc = d.getTime() + d.getTimezoneOffset() * 60000;
  const madagascarOffset = 3;
  const madagascarTimeObj = new Date(utc + 3600000 * madagascarOffset);
  
  const formatter = new Intl.DateTimeFormat('fr-FR', {
    dateStyle: 'full',
    timeStyle: 'medium',
    timeZone: 'Indian/Antananarivo'
  });
  const madagascarTime = formatter.format(madagascarTimeObj);

  // Compute process uptime (mock or process uptime if running in node)
  const processUptimeSeconds = process.uptime();
  const hours = Math.floor(processUptimeSeconds / 3600);
  const minutes = Math.floor((processUptimeSeconds % 3600) / 60);
  const seconds = Math.floor(processUptimeSeconds % 60);
  const uptime = `${hours}h ${minutes}m ${seconds}s`;

  return {
    props: {
      serverTime: new Date().toISOString(),
      uptime,
      isAvailable: true,
      userAgent,
      madagascarTime,
    },
  };
};
