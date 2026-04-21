import {
  Phone,
  Mail,
  Github,
  MapPin,
  Terminal,
  Code,
  Briefcase,
  GraduationCap,
  Wrench,
  Globe,
  MonitorDot,
  Download
} from "lucide-react";
import { PDFDownloadLink } from "@react-pdf/renderer";

import { ImageWithFallback } from "./components/ui/ImageWithFallback";
import profilePic from "../../assets/PP.png";
import { CVPdf } from "./CVPdf";

export default function App() {

  return (
    <>
      <PDFDownloadLink
        document={<CVPdf />}
        fileName="CV_Lino_Mallevaey.pdf"
        className="fixed bottom-6 right-6 bg-cyan-600 hover:bg-cyan-700 text-white rounded-full p-4 shadow-xl flex items-center gap-3 print:hidden z-50 transition-transform hover:scale-105"
        title="Télécharger le CV au format PDF"
        style={{ textDecoration: 'none' }}
      >
        {({ loading }) => (
          <>
            <Download size={24} />
            <span className="font-bold hidden md:inline pr-2">
              {loading ? "Génération en cours..." : "Télécharger PDF"}
            </span>
          </>
        )}
      </PDFDownloadLink>

      <div
        className="min-h-screen bg-slate-200/60 py-8 px-4 font-sans text-slate-800 print:bg-white print:p-0"
        style={{ fontFamily: "'Montserrat', sans-serif" }}
      >
        <div className="max-w-[1024px] mx-auto bg-white shadow-xl rounded-sm overflow-hidden print:shadow-none print:w-full print:max-w-none">
          <header className="bg-white pt-16 pb-12 px-8 md:px-16 border-b-2 border-slate-100 flex flex-col md:flex-row justify-start items-center md:items-end gap-6 relative">
            <div className="absolute top-0 left-0 w-full h-2 bg-slate-900" />

            <div className="shrink-0 relative">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-slate-100 shadow-sm relative z-10 bg-slate-200">
                <ImageWithFallback
                  src={profilePic}
                  alt="Portrait de Lino Mallevaey"
                  className="mt-[-18px] object-top"
                />
              </div>
            </div>

            <div className="flex-1 text-center md:text-left mt-4 md:mt-0">
              <h1 className="text-5xl md:text-6xl font-black text-slate-900 tracking-tight uppercase">
                <a href="https://lino.coodlab.fr" target="_blank">Lino Mallevaey</a>
              </h1>
              <h2 className="text-xl md:text-2xl font-semibold text-cyan-600 mt-4 flex items-center justify-center md:justify-start gap-3">
                <Terminal size={26} strokeWidth={2.5} className="hidden md:block text-slate-900 shrink-0" />
                <span>Recherche d'alternance (12 ou 24 mois)<br /> Informatique, Systèmes & Cybersécurité</span>
              </h2>
            </div>
          </header>

          <div className="flex flex-col md:flex-row">

            <aside className="w-full md:w-1/3 bg-slate-50 border-r border-slate-100 p-8 md:p-12 flex flex-col gap-10">
              <section>
                <h3 className="text-lg font-bold text-slate-900 uppercase tracking-widest mb-6 flex items-center gap-2">
                  Contact
                </h3>
                <ul className="space-y-5">
                  <li className="flex items-center gap-3 text-slate-600 font-medium">
                    <div className="w-8 h-8 rounded-full bg-cyan-100 flex items-center justify-center shrink-0">
                      <Phone size={16} className="text-cyan-700" />
                    </div>
                    <span><a href="tel:+33749183468" target="_blank">07 49 18 34 68</a></span>
                  </li>
                  <li className="flex items-center gap-3 text-slate-600 font-medium">
                    <div className="w-8 h-8 rounded-full bg-cyan-100 flex items-center justify-center shrink-0">
                      <Mail size={16} className="text-cyan-700" />
                    </div>
                    <a href="mailto:lino.mallevaey@ynov.com" className="hover:text-cyan-600 transition-colors">
                      <a href="mailto:lino.mallevaey@ynov.com" target="_blank">lino.mallevaey@ynov.com</a>
                    </a>
                  </li>
                  <li className="flex items-center gap-3 text-slate-600 font-medium">
                    <div className="w-8 h-8 rounded-full bg-cyan-100 flex items-center justify-center shrink-0">
                      <Github size={16} className="text-cyan-700" />
                    </div>
                    <a href="https://github.com/linoMlv" target="_blank" rel="noreferrer" className="hover:text-cyan-600 transition-colors">
                      github.com/linoMlv
                    </a>
                  </li>
                  <li className="flex items-center gap-3 text-slate-600 font-medium">
                    <div className="w-8 h-8 rounded-full bg-cyan-100 flex items-center justify-center shrink-0">
                      <MapPin size={16} className="text-cyan-700" />
                    </div>
                    <span>Région Lilloise</span>
                  </li>
                </ul>
              </section>

              <section>
                <h3 className="text-lg font-bold text-slate-900 uppercase tracking-widest mb-6 flex items-center gap-2">
                  Compétences
                </h3>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-bold text-slate-800 mb-3 flex items-center gap-2 text-sm">
                      <MonitorDot size={16} className="text-cyan-600" />
                      Systèmes & Déploiement
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {["Linux", "Windows", "Docker", "Bash"].map((skill) => (
                        <span key={skill} className="px-3 py-1 bg-white border border-slate-200 text-slate-600 rounded text-sm font-semibold shadow-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-bold text-slate-800 mb-3 flex items-center gap-2 text-sm">
                      <Code size={16} className="text-cyan-600" />
                      Dev & Ingénierie
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {["JavaScript", "TypeScript", "React", "Node.js", "Python", "HTML/CSS", "Git", "GitHub"].map((skill) => (
                        <span key={skill} className="px-3 py-1 bg-white border border-slate-200 text-slate-600 rounded text-sm font-semibold shadow-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-bold text-slate-800 mb-3 flex items-center gap-2 text-sm">
                      <Wrench size={16} className="text-cyan-600" />
                      Bureautique & Design
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {["Office 365", "Figma", "Photoshop", "Canva", "Lightroom"].map((skill) => (
                        <span key={skill} className="px-3 py-1 bg-white border border-slate-200 text-slate-600 rounded text-sm font-semibold shadow-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-bold text-slate-800 mb-3 flex items-center gap-2 text-sm">
                      <Globe size={16} className="text-cyan-600" />
                      Langues
                    </h4>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2 text-sm font-medium text-slate-600">
                        <div className="w-1.5 h-1.5 bg-cyan-500 rounded-sm" />
                        Français (Maternelle)
                      </li>
                      <li className="flex items-center gap-2 text-sm font-medium text-slate-600">
                        <div className="w-1.5 h-1.5 bg-cyan-500 rounded-sm" />
                        Anglais (A2 - Doc Technique)
                      </li>
                    </ul>
                  </div>
                </div>
              </section>
            </aside>

            <main className="w-full md:w-2/3 p-8 md:p-12 flex flex-col gap-10">

              <section>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 rounded bg-slate-900 text-white flex items-center justify-center shadow-sm">
                    <Terminal size={18} />
                  </span>
                  Profil
                </h3>
                <p className="text-slate-600 leading-relaxed font-medium text-justify">
                  Admis en BTS CIEL (Cybersécurité, Informatique et Réseaux) à Ynov Lille, je recherche une alternance pour la rentrée 2026. Je souhaite apprendre à maîtriser l'infrastructure, l'administration système et la sécurité pour comprendre l'intégralité du cycle de vie d'une application. Pragmatique, rigoureux et passionné, je suis prêt à m'investir concrètement dans l'évolution de vos infrastructures ou le déploiement de vos solutions.
                </p>
              </section>

              <section>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 rounded bg-cyan-600 text-white flex items-center justify-center shadow-sm">
                    <Code size={18} />
                  </span>
                  Projets
                </h3>
                <div className="bg-slate-50 border-l-4 border-cyan-500 p-6 rounded-r-md shadow-sm relative overflow-hidden">
                  <div className="absolute -right-12 -top-12 opacity-5 text-cyan-500">
                    <Code size={120} />
                  </div>

                  <ul className="space-y-5 relative z-10">
                    <li>
                      <h4 className="font-bold text-slate-900 text-lg flex items-center gap-2">
                        <div className="w-2 h-2 bg-cyan-500" />
                        <a href="https://github.com/linoMlv/Jaspe" target="_blank">Jaspe</a>
                      </h4>
                      <p className="text-slate-600 mt-1 pl-4 font-medium">Outil de déploiement zero-friction pour FastAPI + Vite/React/TypeScript.</p>
                    </li>
                    <li>
                      <h4 className="font-bold text-slate-900 text-lg flex items-center gap-2">
                        <div className="w-2 h-2 bg-cyan-500" />
                        <a href="https://github.com/linoMlv/Abacus" target="_blank">Abacus</a>
                      </h4>
                      <p className="text-slate-600 mt-1 pl-4 font-medium">Application web conçue spécifiquement pour la gestion comptable des associations.</p>
                    </li>
                    <li>
                      <h4 className="font-bold text-slate-900 text-lg flex items-center gap-2">
                        <div className="w-2 h-2 bg-cyan-500" />
                        <a href="https://github.com/linoMlv/Steven-Spy" target="_blank">Steven-Spy</a>
                      </h4>
                      <p className="text-slate-600 mt-1 pl-4 font-medium">Agent IA autonome de veille qui code ses propres scrapers.</p>
                    </li>
                  </ul>
                </div>
              </section>

              <section>
                <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 rounded bg-slate-900 text-white flex items-center justify-center shadow-sm">
                    <Briefcase size={18} />
                  </span>
                  Expériences Professionnelles
                </h3>

                <div className="space-y-8 relative border-l-2 border-slate-200 ml-3 pl-6">

                  <div className="relative">
                    <div className="absolute -left-[31px] top-1.5 w-3 h-3 bg-white border-2 border-slate-900 rounded-full z-10" />
                    <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-2">
                      <h4 className="font-bold text-slate-900 text-lg">Développeur Web & Gestionnaire de site</h4>
                      <span className="text-cyan-700 font-bold text-sm bg-cyan-50 px-3 py-1 rounded">2024 - Aujourd'hui</span>
                    </div>
                    <p className="text-slate-500 font-semibold mb-3">Institut de beauté Palmarosa, Bagnères-de-Bigorre</p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2 text-slate-600 font-medium">
                        <div className="w-1.5 h-1.5 bg-cyan-500 rounded-sm mt-2 shrink-0" />
                        <span>Développement, administration et maintenance technique du site internet de l'institut.</span>
                      </li>
                      <li className="flex items-start gap-2 text-slate-600 font-medium">
                        <div className="w-1.5 h-1.5 bg-cyan-500 rounded-sm mt-2 shrink-0" />
                        <span>Gestion autonome du projet (architecture du site, hébergement) et respect strict des délais de mise en production.</span>
                      </li>
                      <li className="flex items-start gap-2 text-slate-600 font-medium">
                        <div className="w-1.5 h-1.5 bg-cyan-500 rounded-sm mt-2 shrink-0" />
                        <span>Création de visuels et intégration web nécessitant une grande rigueur technique et esthétique.</span>
                      </li>
                    </ul>
                  </div>

                  <div className="relative">
                    <div className="absolute -left-[31px] top-1.5 w-3 h-3 bg-white border-2 border-slate-900 rounded-full z-10" />
                    <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-2">
                      <h4 className="font-bold text-slate-900 text-lg">Président de l'Association Informatique</h4>
                      <span className="text-cyan-700 font-bold text-sm bg-cyan-50 px-3 py-1 rounded">Mai 2025 - Mai 2026</span>
                    </div>
                    <p className="text-slate-500 font-semibold mb-3">Université de Lille</p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2 text-slate-600 font-medium">
                        <div className="w-1.5 h-1.5 bg-cyan-500 rounded-sm mt-2 shrink-0" />
                        <span>Coordination d'équipe et organisation d'événements dynamiques pour la communauté étudiante de la filière informatique.</span>
                      </li>
                      <li className="flex items-start gap-2 text-slate-600 font-medium">
                        <div className="w-1.5 h-1.5 bg-cyan-500 rounded-sm mt-2 shrink-0" />
                        <span>Administration de l'association : utilisation quotidienne d'outils collaboratifs, gestion rigoureuse des adhésions et de la trésorerie.</span>
                      </li>
                      <li className="flex items-start gap-2 text-slate-600 font-medium">
                        <div className="w-1.5 h-1.5 bg-cyan-500 rounded-sm mt-2 shrink-0" />
                        <span>Accueil et accompagnement des nouveaux étudiants.</span>
                      </li>
                    </ul>
                  </div>

                  <div className="relative">
                    <div className="absolute -left-[31px] top-1.5 w-3 h-3 bg-white border-2 border-slate-900 rounded-full z-10" />
                    <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-2">
                      <h4 className="font-bold text-slate-900 text-lg">Agent d'accueil (MDE Cité Scientifique)</h4>
                      <span className="text-cyan-700 font-bold text-sm bg-cyan-50 px-3 py-1 rounded">Mars - Juin 2026</span>
                    </div>
                    <p className="text-slate-500 font-semibold mb-3">Université de Lille</p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2 text-slate-600 font-medium">
                        <div className="w-1.5 h-1.5 bg-cyan-500 rounded-sm mt-2 shrink-0" />
                        <span>Gestion des flux et des pics d'affluence des étudiants avec dynamisme et maintien d'une posture professionnelle.</span>
                      </li>
                      <li className="flex items-start gap-2 text-slate-600 font-medium">
                        <div className="w-1.5 h-1.5 bg-cyan-500 rounded-sm mt-2 shrink-0" />
                        <span>Écoute, analyse des besoins et orientation technique/administrative vers les services adaptés.</span>
                      </li>
                    </ul>
                  </div>

                  <div className="relative">
                    <div className="absolute -left-[31px] top-1.5 w-3 h-3 bg-white border-2 border-slate-900 rounded-full z-10" />
                    <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-2">
                      <h4 className="font-bold text-slate-900 text-lg">Stage : Environnement technique</h4>
                      <span className="text-slate-500 font-bold text-sm bg-slate-100 px-3 py-1 rounded">Stage</span>
                    </div>
                    <p className="text-slate-500 font-semibold mb-3">Imprimerie Péré, Bagnères-de-Bigorre</p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2 text-slate-600 font-medium">
                        <div className="w-1.5 h-1.5 bg-cyan-500 rounded-sm mt-2 shrink-0" />
                        <span>Préparation technique des fichiers et paramétrage hardware/software des machines d'impression.</span>
                      </li>
                      <li className="flex items-start gap-2 text-slate-600 font-medium">
                        <div className="w-1.5 h-1.5 bg-cyan-500 rounded-sm mt-2 shrink-0" />
                        <span>Contrôle qualité rigoureux et utilisation intensive d'outils informatiques spécialisés (PAO).</span>
                      </li>
                    </ul>
                  </div>

                </div>
              </section>

              <section>
                <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 rounded bg-slate-900 text-white flex items-center justify-center shadow-sm">
                    <GraduationCap size={18} />
                  </span>
                  Formation
                </h3>

                <ul className="space-y-5 pl-1 border-l-2 border-slate-100">
                  <li className="relative pl-6">
                    <div className="absolute left-[-5px] top-2 w-2 h-2 bg-cyan-500 rounded-full" />
                    <div className="flex flex-col">
                      <span className="text-cyan-700 font-bold text-sm mb-1">2026 - 2028</span>
                      <h4 className="font-bold text-slate-900">BTS CIEL (Cybersécurité, Informatique et Réseaux)</h4>
                      <p className="text-slate-600 font-medium">Ynov Campus, Lille <span className="italic text-cyan-600 text-sm ml-1">(En recherche d'alternance)</span></p>
                    </div>
                  </li>
                  <li className="relative pl-6">
                    <div className="absolute left-[-5px] top-2 w-2 h-2 bg-slate-300 rounded-full" />
                    <div className="flex flex-col">
                      <span className="text-slate-500 font-bold text-sm mb-1">2025 - 2026</span>
                      <h4 className="font-bold text-slate-900">Licence 2 Mathématiques</h4>
                      <p className="text-slate-600 font-medium">Université de Lille</p>
                    </div>
                  </li>
                  <li className="relative pl-6">
                    <div className="absolute left-[-5px] top-2 w-2 h-2 bg-slate-300 rounded-full" />
                    <div className="flex flex-col">
                      <span className="text-slate-500 font-bold text-sm mb-1">2024 - 2025</span>
                      <h4 className="font-bold text-slate-900">Licence 1 Mathématiques et Informatique</h4>
                      <p className="text-slate-600 font-medium">Université de Lille</p>
                    </div>
                  </li>
                  <li className="relative pl-6">
                    <div className="absolute left-[-5px] top-2 w-2 h-2 bg-slate-300 rounded-full" />
                    <div className="flex flex-col">
                      <span className="text-slate-500 font-bold text-sm mb-1">2021 - 2024</span>
                      <h4 className="font-bold text-slate-900">Baccalauréat Général (Spécialités Maths & NSI)</h4>
                      <p className="text-slate-600 font-medium">Mention Très Bien, Lycée Victor Duruy, Bagnères-de-Bigorre</p>
                    </div>
                  </li>
                </ul>
              </section>

            </main>
          </div>
        </div>
      </div>
    </>
  );
}
