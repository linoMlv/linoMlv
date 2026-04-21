import React from 'react';
import { Document, Page, Text, View, StyleSheet, Font, Image, Link } from '@react-pdf/renderer';
import {
  PhoneIcon, MailIcon, GithubIcon, MapPinIcon, TerminalIcon, CodeIcon,
  BriefcaseIcon, GraduationCapIcon, WrenchIcon, GlobeIcon, MonitorDotIcon
} from './IconsPdf';
import profilePic from '../../assets/PP.png';

// ---------- Fonts ----------
Font.register({
  family: 'Montserrat',
  fonts: [
    { src: '/fonts/Montserrat-Regular.ttf', fontWeight: 400 },
    { src: '/fonts/Montserrat-Medium.ttf', fontWeight: 500 },
    { src: '/fonts/Montserrat-SemiBold.ttf', fontWeight: 600 },
    { src: '/fonts/Montserrat-Bold.ttf', fontWeight: 700 },
    { src: '/fonts/Montserrat-Black.ttf', fontWeight: 900 },
    { src: '/fonts/Montserrat-Italic.ttf', fontWeight: 400, fontStyle: 'italic' },
    { src: '/fonts/Montserrat-MediumItalic.ttf', fontWeight: 500, fontStyle: 'italic' }
  ]
});

Font.registerHyphenationCallback((word) => [word]);

// ---------- Dimensions / palette ----------
const SIDEBAR_WIDTH = 200;
const HEADER_HEIGHT = 110;
const PAGE_PAD_X = 28;
const PAGE_TOP_GUTTER = 18;

const C = {
  slate900: '#0f172a',
  slate800: '#1e293b',
  slate700: '#334155',
  slate600: '#475569',
  slate500: '#64748b',
  slate300: '#cbd5e1',
  slate200: '#e2e8f0',
  slate100: '#f1f5f9',
  slate50: '#f8fafc',
  cyan700: '#0e7490',
  cyan600: '#0891b2',
  cyan500: '#06b6d4',
  cyan100: '#cffafe',
  white: '#ffffff',
};

// ---------- Styles ----------
const styles = StyleSheet.create({
  page: {
    fontFamily: 'Montserrat',
    backgroundColor: C.white,
    paddingTop: PAGE_TOP_GUTTER,
    paddingLeft: SIDEBAR_WIDTH,
    paddingRight: PAGE_PAD_X,
    fontSize: 9.5,
    lineHeight: 1.45,
    color: C.slate700,
  },
  sidebarBg: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    width: SIDEBAR_WIDTH,
    backgroundColor: C.slate50,
    borderRightWidth: 1,
    borderRightColor: C.slate100,
  },

  // ---------- HEADER ----------
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: HEADER_HEIGHT,
    backgroundColor: C.white,
    borderBottomWidth: 1.5,
    borderBottomColor: C.slate100,
    paddingTop: 22,
    paddingBottom: 14,
    paddingLeft: PAGE_PAD_X,
    paddingRight: PAGE_PAD_X,
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  headerTopLine: {
    position: 'absolute',
    top: 0, left: 0, right: 0,
    height: 6,
    backgroundColor: C.slate900,
  },
  ppContainer: {
    width: 72, height: 72,
    borderRadius: 36,
    borderWidth: 3,
    borderColor: C.slate100,
    backgroundColor: C.slate200,
    overflow: 'hidden',
  },
  ppImage: {
    width: 66, height: 66,
    borderRadius: 33,
    objectFit: 'cover',
    objectPosition: '50% 20%',
  },
  headerTextCol: {
    marginLeft: 18,
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: 2,
  },
  title: {
    fontSize: 25,
    fontWeight: 900,
    color: C.slate900,
    textTransform: 'uppercase',
    letterSpacing: -0.4,
    lineHeight: 1,
  },
  subtitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 7,
  },
  subtitle: {
    fontSize: 10,
    fontWeight: 600,
    color: C.cyan600,
    marginLeft: 6,
    lineHeight: 1.35,
  },

  // ---------- SIDEBAR ----------
  sidebar: {
    position: 'absolute',
    top: HEADER_HEIGHT,
    left: 0,
    width: SIDEBAR_WIDTH,
    bottom: 0,
    paddingTop: 20,
    paddingBottom: 20,
    paddingHorizontal: 18,
  },
  sidebarSection: {
    marginBottom: 18,
  },
  sidebarTitle: {
    fontSize: 9.5,
    fontWeight: 700,
    color: C.slate900,
    textTransform: 'uppercase',
    letterSpacing: 1.6,
    marginBottom: 10,
  },

  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  contactIconBox: {
    width: 20, height: 20,
    borderRadius: 10,
    backgroundColor: C.cyan100,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 7,
  },
  contactText: {
    fontSize: 8.8,
    fontWeight: 500,
    color: C.slate600,
    flex: 1,
  },

  skillGroup: {
    marginBottom: 12,
  },
  skillGroupHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  skillGroupTitle: {
    fontSize: 9.5,
    fontWeight: 700,
    color: C.slate800,
    marginLeft: 5,
  },
  skillTags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  skillTag: {
    backgroundColor: C.white,
    borderWidth: 0.75,
    borderColor: C.slate200,
    borderRadius: 3,
    paddingHorizontal: 6,
    paddingTop: 1.5,
    paddingBottom: 3.5,
    marginRight: 4,
    marginBottom: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  skillTagText: {
    fontSize: 8,
    fontWeight: 600,
    color: C.slate600,
    lineHeight: 1,
  },
  langItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  langDot: {
    width: 4, height: 4,
    backgroundColor: C.cyan500,
    borderRadius: 1,
    marginRight: 6,
  },
  langText: {
    fontSize: 8.8,
    fontWeight: 500,
    color: C.slate600,
  },

  // ---------- MAIN ----------
  main: {
    marginTop: HEADER_HEIGHT + 16 - PAGE_TOP_GUTTER,
    paddingLeft: 18,
    paddingBottom: 18,
  },
  section: {
    marginBottom: 14,
  },
  sectionHead: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  iconBoxDark: {
    width: 20, height: 20,
    borderRadius: 3,
    backgroundColor: C.slate900,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
  },
  iconBoxCyan: {
    width: 20, height: 20,
    borderRadius: 3,
    backgroundColor: C.cyan600,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
  },
  sectionTitle: {
    fontSize: 13,
    fontWeight: 700,
    color: C.slate900,
  },

  // Profil
  paragraph: {
    fontSize: 9,
    lineHeight: 1.5,
    color: C.slate600,
    fontWeight: 500,
    textAlign: 'justify',
  },

  // Projets
  projectsBox: {
    backgroundColor: C.slate50,
    borderLeftWidth: 3,
    borderLeftColor: C.cyan500,
    paddingTop: 10,
    paddingBottom: 4,
    paddingHorizontal: 12,
    borderTopRightRadius: 4,
    borderBottomRightRadius: 4,
  },
  projectItem: {
    marginBottom: 6,
  },
  projectHead: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 1,
  },
  projectDot: {
    width: 4, height: 4,
    backgroundColor: C.cyan500,
    marginRight: 5,
  },
  projectTitle: {
    fontSize: 10,
    fontWeight: 700,
    color: C.slate900,
  },
  projectDesc: {
    fontSize: 9,
    color: C.slate600,
    fontWeight: 500,
    marginLeft: 9,
    lineHeight: 1.4,
  },

  // Expériences
  expTimeline: {
    borderLeftWidth: 1.5,
    borderLeftColor: C.slate200,
    marginLeft: 4,
    paddingLeft: 14,
  },
  expItem: {
    marginBottom: 10,
    position: 'relative',
  },
  expDot: {
    position: 'absolute',
    left: -17.5,
    top: 3,
    width: 7, height: 7,
    backgroundColor: C.white,
    borderWidth: 1.5,
    borderColor: C.slate900,
    borderRadius: 3.5,
  },
  expHead: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 2,
  },
  expTitle: {
    fontSize: 10,
    fontWeight: 700,
    color: C.slate900,
    flex: 1,
    paddingRight: 6,
  },
  expBadge: {
    backgroundColor: C.cyan100,
    paddingHorizontal: 5,
    paddingTop: 1.5,
    paddingBottom: 3.5,
    borderRadius: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  expBadgeText: {
    fontSize: 8.2,
    fontWeight: 700,
    color: C.cyan700,
    lineHeight: 1,
  },
  expBadgeGray: {
    backgroundColor: C.slate100,
    paddingHorizontal: 5,
    paddingTop: 1.5,
    paddingBottom: 3.5,
    borderRadius: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  expBadgeGrayText: {
    fontSize: 8.2,
    fontWeight: 700,
    color: C.slate500,
    lineHeight: 1,
  },
  expCompany: {
    fontSize: 9.2,
    fontWeight: 600,
    color: C.slate500,
    marginBottom: 4,
  },
  bulletRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 2,
  },
  bulletDot: {
    width: 3, height: 3,
    backgroundColor: C.cyan500,
    borderRadius: 0.5,
    marginTop: 4,
    marginRight: 6,
  },
  bulletText: {
    fontSize: 9,
    fontWeight: 500,
    color: C.slate600,
    flex: 1,
    lineHeight: 1.4,
  },

  // Formation
  eduTimeline: {
    borderLeftWidth: 1.5,
    borderLeftColor: C.slate100,
    paddingLeft: 12,
  },
  eduItem: {
    marginBottom: 8,
    position: 'relative',
  },
  eduDotCyan: {
    position: 'absolute',
    left: -15,
    top: 3,
    width: 5, height: 5,
    backgroundColor: C.cyan500,
    borderRadius: 2.5,
  },
  eduDotGray: {
    position: 'absolute',
    left: -15,
    top: 3,
    width: 5, height: 5,
    backgroundColor: C.slate300,
    borderRadius: 2.5,
  },
  eduDate: {
    fontSize: 8.5,
    fontWeight: 700,
    color: C.cyan700,
    marginBottom: 1,
  },
  eduDateGray: {
    fontSize: 8.5,
    fontWeight: 700,
    color: C.slate500,
    marginBottom: 1,
  },
  eduTitle: {
    fontSize: 9.5,
    fontWeight: 700,
    color: C.slate900,
  },
  eduPlace: {
    fontSize: 9,
    fontWeight: 500,
    color: C.slate600,
    marginTop: 1,
  },
  italicCyber: {
    fontStyle: 'italic',
    color: C.cyan600,
    fontSize: 8.5,
  },
});

// ---------- Helpers ----------
const Bullet: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <View style={styles.bulletRow}>
    <View style={styles.bulletDot} />
    <Text style={styles.bulletText}>{children}</Text>
  </View>
);

const SectionHead: React.FC<{ icon: React.ReactNode; title: string; cyan?: boolean }> = ({ icon, title, cyan }) => (
  <View style={styles.sectionHead} minPresenceAhead={40}>
    <View style={cyan ? styles.iconBoxCyan : styles.iconBoxDark}>{icon}</View>
    <Text style={styles.sectionTitle}>{title}</Text>
  </View>
);

// ---------- Composant principal ----------
export const CVPdf = () => (
  <Document title="CV_Lino_Mallevaey" author="Lino Mallevaey">
    <Page size="A4" style={styles.page} wrap>

      <View style={styles.sidebarBg} fixed />

      <View style={styles.header}>
        <View style={styles.headerTopLine} />
        <View style={styles.ppContainer}>
          <Image src={profilePic} style={styles.ppImage} />
        </View>
        <View style={styles.headerTextCol}>
          <Text style={styles.title}><Link style={styles.title} href="https://lino.coodlab.fr">Lino Mallevaey</Link></Text>
          <View style={styles.subtitleRow}>
            <TerminalIcon color={C.slate900} size={14} />
            <Text style={styles.subtitle}>
              Recherche d&apos;alternance (12 ou 24 mois){'\n'}Informatique, Systèmes &amp; Cybersécurité
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.sidebar}>
        <View style={styles.sidebarSection}>
          <Text style={styles.sidebarTitle}>Contact</Text>
          <View style={styles.contactItem}>
            <View style={styles.contactIconBox}><PhoneIcon color={C.cyan700} size={10} /></View>
            <Text style={styles.contactText}><Link style={styles.contactText} href="tel:+33749183468">07 49 18 34 68</Link></Text>
          </View>
          <View style={styles.contactItem}>
            <View style={styles.contactIconBox}><MailIcon color={C.cyan700} size={10} /></View>
            <Text style={styles.contactText}><Link style={styles.contactText} href="mailto:lino.mallevaey@ynov.fr">lino.mallevaey@ynov.com</Link></Text>
          </View>
          <View style={styles.contactItem}>
            <View style={styles.contactIconBox}><GithubIcon color={C.cyan700} size={10} /></View>
            <Text style={styles.contactText}><Link style={styles.contactText} href="https://github.com/linoMlv">github.com/linoMlv</Link></Text>
          </View>
          <View style={styles.contactItem}>
            <View style={styles.contactIconBox}><MapPinIcon color={C.cyan700} size={10} /></View>
            <Text style={styles.contactText}>Région Lilloise</Text>
          </View>
        </View>

        <View style={styles.sidebarSection}>
          <Text style={styles.sidebarTitle}>Compétences</Text>

          <View style={styles.skillGroup}>
            <View style={styles.skillGroupHeader}>
              <MonitorDotIcon color={C.cyan600} size={10} />
              <Text style={styles.skillGroupTitle}>Systèmes &amp; Déploiement</Text>
            </View>
            <View style={styles.skillTags}>
              {['Linux', 'Windows', 'Docker', 'Bash'].map(s => (
                <View key={s} style={styles.skillTag}><Text style={styles.skillTagText}>{s}</Text></View>
              ))}
            </View>
          </View>

          <View style={styles.skillGroup}>
            <View style={styles.skillGroupHeader}>
              <CodeIcon color={C.cyan600} size={10} />
              <Text style={styles.skillGroupTitle}>Dev &amp; Ingénierie</Text>
            </View>
            <View style={styles.skillTags}>
              {['JavaScript', 'TypeScript', 'React', 'Node.js', 'Python', 'HTML/CSS', 'Git', 'GitHub'].map(s => (
                <View key={s} style={styles.skillTag}><Text style={styles.skillTagText}>{s}</Text></View>
              ))}
            </View>
          </View>

          <View style={styles.skillGroup}>
            <View style={styles.skillGroupHeader}>
              <WrenchIcon color={C.cyan600} size={10} />
              <Text style={styles.skillGroupTitle}>Bureautique &amp; Design</Text>
            </View>
            <View style={styles.skillTags}>
              {['Office 365', 'Figma', 'Photoshop', 'Canva', 'Lightroom'].map(s => (
                <View key={s} style={styles.skillTag}><Text style={styles.skillTagText}>{s}</Text></View>
              ))}
            </View>
          </View>

          <View style={styles.skillGroup}>
            <View style={styles.skillGroupHeader}>
              <GlobeIcon color={C.cyan600} size={10} />
              <Text style={styles.skillGroupTitle}>Langues</Text>
            </View>
            <View style={styles.langItem}>
              <View style={styles.langDot} />
              <Text style={styles.langText}>Français (Maternelle)</Text>
            </View>
            <View style={styles.langItem}>
              <View style={styles.langDot} />
              <Text style={styles.langText}>Anglais (A2 - Doc Technique)</Text>
            </View>
          </View>
        </View>
      </View>

      {/* MAIN */}
      <View style={styles.main}>
        <View style={styles.section} wrap={false}>
          <SectionHead icon={<TerminalIcon color={C.white} size={11} />} title="Profil" />
          <Text style={styles.paragraph}>
            Admis en BTS CIEL (Cybersécurité, Informatique et Réseaux) à Ynov Lille, je recherche une alternance pour la rentrée 2026. Je souhaite apprendre à maîtriser l&apos;infrastructure, l&apos;administration système et la sécurité pour comprendre l&apos;intégralité du cycle de vie d&apos;une application. Pragmatique, rigoureux et passionné, je suis prêt à m&apos;investir concrètement dans l&apos;évolution de vos infrastructures ou le déploiement de vos solutions.
          </Text>
        </View>

        <View style={styles.section} wrap={false}>
          <SectionHead icon={<CodeIcon color={C.white} size={11} />} title="Projets" cyan />
          <View style={styles.projectsBox}>
            <View style={styles.projectItem}>
              <View style={styles.projectHead}>
                <View style={styles.projectDot} />
                <Text style={styles.projectTitle}><Link style={styles.projectTitle} href="https://github.com/linoMlv/Jaspe">Jaspe</Link></Text>
              </View>
              <Text style={styles.projectDesc}>Outil de déploiement zero-friction pour FastAPI + Vite/React/TypeScript.</Text>
            </View>
            <View style={styles.projectItem}>
              <View style={styles.projectHead}>
                <View style={styles.projectDot} />
                <Text style={styles.projectTitle}><Link style={styles.projectTitle} href="https://github.com/linoMlv/Abacus">Abacus</Link></Text>
              </View>
              <Text style={styles.projectDesc}>Application web conçue spécifiquement pour la gestion comptable des associations.</Text>
            </View>
            <View style={styles.projectItem}>
              <View style={styles.projectHead}>
                <View style={styles.projectDot} />
                <Text style={styles.projectTitle}><Link style={styles.projectTitle} href="https://github.com/linoMlv/Steven-Spy">Steven-Spy</Link></Text>
              </View>
              <Text style={styles.projectDesc}>Agent IA autonome de veille qui code ses propres scrapers.</Text>
            </View>
          </View>
        </View>

        <View style={styles.section}>
          <SectionHead icon={<BriefcaseIcon color={C.white} size={11} />} title="Expériences Professionnelles" />
          <View style={styles.expTimeline}>

            <View style={styles.expItem} wrap={false}>
              <View style={styles.expDot} />
              <View style={styles.expHead}>
                <Text style={styles.expTitle}>Développeur Web &amp; Gestionnaire de site</Text>
                <View style={styles.expBadge}><Text style={styles.expBadgeText}>2024 - Aujourd&apos;hui</Text></View>
              </View>
              <Text style={styles.expCompany}>Institut de beauté Palmarosa, Bagnères-de-Bigorre</Text>
              <Bullet>Développement, administration et maintenance technique du site internet de l&apos;institut.</Bullet>
              <Bullet>Gestion autonome du projet (architecture du site, hébergement) et respect strict des délais de mise en production.</Bullet>
              <Bullet>Création de visuels et intégration web nécessitant une grande rigueur technique et esthétique.</Bullet>
            </View>

            <View style={styles.expItem} wrap={false}>
              <View style={styles.expDot} />
              <View style={styles.expHead}>
                <Text style={styles.expTitle}>Président de l&apos;Association Informatique</Text>
                <View style={styles.expBadge}><Text style={styles.expBadgeText}>Mai 2025 - Mai 2026</Text></View>
              </View>
              <Text style={styles.expCompany}>Université de Lille</Text>
              <Bullet>Coordination d&apos;équipe et organisation d&apos;événements dynamiques pour la communauté étudiante de la filière informatique.</Bullet>
              <Bullet>Administration de l&apos;association : utilisation quotidienne d&apos;outils collaboratifs, gestion rigoureuse des adhésions et de la trésorerie.</Bullet>
              <Bullet>Accueil et accompagnement des nouveaux étudiants.</Bullet>
            </View>

            <View style={styles.expItem} wrap={false}>
              <View style={styles.expDot} />
              <View style={styles.expHead}>
                <Text style={styles.expTitle}>Agent d&apos;accueil (MDE Cité Scientifique)</Text>
                <View style={styles.expBadge}><Text style={styles.expBadgeText}>Mars - Juin 2026</Text></View>
              </View>
              <Text style={styles.expCompany}>Université de Lille</Text>
              <Bullet>Gestion des flux et des pics d&apos;affluence des étudiants avec dynamisme et maintien d&apos;une posture professionnelle.</Bullet>
              <Bullet>Écoute, analyse des besoins et orientation technique/administrative vers les services adaptés.</Bullet>
            </View>

            <View style={styles.expItem} wrap={false}>
              <View style={styles.expDot} />
              <View style={styles.expHead}>
                <Text style={styles.expTitle}>Stage : Environnement technique</Text>
                <View style={styles.expBadgeGray}><Text style={styles.expBadgeGrayText}>Stage</Text></View>
              </View>
              <Text style={styles.expCompany}>Imprimerie Péré, Bagnères-de-Bigorre</Text>
              <Bullet>Préparation technique des fichiers et paramétrage hardware/software des machines d&apos;impression.</Bullet>
              <Bullet>Contrôle qualité rigoureux et utilisation intensive d&apos;outils informatiques spécialisés (PAO).</Bullet>
            </View>
          </View>
        </View>

        <View style={styles.section}>
          <SectionHead icon={<GraduationCapIcon color={C.white} size={11} />} title="Formation" />
          <View style={styles.eduTimeline}>
            <View style={styles.eduItem} wrap={false}>
              <View style={styles.eduDotCyan} />
              <Text style={styles.eduDate}>2026 - 2028</Text>
              <Text style={styles.eduTitle}>BTS CIEL (Cybersécurité, Informatique et Réseaux)</Text>
              <Text style={styles.eduPlace}>
                Ynov Campus, Lille <Text style={styles.italicCyber}>(En recherche d&apos;alternance)</Text>
              </Text>
            </View>
            <View style={styles.eduItem} wrap={false}>
              <View style={styles.eduDotGray} />
              <Text style={styles.eduDateGray}>2025 - 2026</Text>
              <Text style={styles.eduTitle}>Licence 2 Mathématiques</Text>
              <Text style={styles.eduPlace}>Université de Lille</Text>
            </View>
            <View style={styles.eduItem} wrap={false}>
              <View style={styles.eduDotGray} />
              <Text style={styles.eduDateGray}>2024 - 2025</Text>
              <Text style={styles.eduTitle}>Licence 1 Mathématiques et Informatique</Text>
              <Text style={styles.eduPlace}>Université de Lille</Text>
            </View>
            <View style={styles.eduItem} wrap={false}>
              <View style={styles.eduDotGray} />
              <Text style={styles.eduDateGray}>2021 - 2024</Text>
              <Text style={styles.eduTitle}>Baccalauréat Général (Spécialités Maths &amp; NSI)</Text>
              <Text style={styles.eduPlace}>Mention Très Bien, Lycée Victor Duruy, Bagnères-de-Bigorre</Text>
            </View>
          </View>
        </View>

      </View>
    </Page>
  </Document>
);
