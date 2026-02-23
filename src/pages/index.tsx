import type {CSSProperties, ReactNode} from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  const logoUrl = useBaseUrl('/img/logo.png');
  const sections = [
    {
      title: 'Tecnologia Social',
      description:
        'Conceitos, fundamentos e a relação com extensão universitária e participação coletiva.',
      to: '/docs/tecnologia-social',
    },
    {
      title: 'Projetos',
      description:
        'Registros de iniciativas como o TICDeMoS e aprendizados da prática em território.',
      to: '/docs/projetos/ticdemos',
    },
    {
      title: 'Eventos',
      description:
        'Referências sobre EREDS, ENEDS e SIAc para ampliar repertório e articulação.',
      to: '/docs/eventos/eneds',
    },
    {
      title: 'Blog',
      description:
        'Reflexões pessoais sobre estudo, extensão universitária e tecnologia no dia a dia.',
      to: '/blog',
    },
  ];

  return (
    <header
      className={styles.heroBanner}
      style={{'--hero-logo-url': `url('${logoUrl}')`} as CSSProperties}>
      <div className="container">
        <section className={styles.heroGrid}>
          <div className={styles.heroText}>
            <p className={styles.eyebrow}>Diário Solteco</p>
            <Heading as="h1" className={styles.heroTitle}>
              {siteConfig.title}
            </Heading>
            <p className={styles.heroSubtitle}>{siteConfig.tagline}</p>
            <div className={styles.buttons}>
              <Link className="button button--primary button--lg" to="/docs/intro">
                Começar pela Introdução
              </Link>
              <Link className="button button--secondary button--lg" to="/docs/eventos/eneds">
                Ver Eventos
              </Link>
            </div>
          </div>

          <div className={styles.heroArt} aria-hidden="true">
            <img
              src={logoUrl}
              alt=""
              className={styles.heroLogo}
              loading="eager"
            />
          </div>
        </section>

        <section className={styles.quickLinks}>
          {sections.map((section) => (
            <Link key={section.title} to={section.to} className={styles.card}>
              <img src={logoUrl} alt="" className={styles.cardLogo} loading="lazy" />
              <Heading as="h3" className={styles.cardTitle}>
                {section.title}
              </Heading>
              <p className={styles.cardDescription}>{section.description}</p>
            </Link>
          ))}
        </section>

        <section className={styles.githubCta}>
          <img src={logoUrl} alt="" className={styles.githubLogo} loading="lazy" />
          <div>
            <Heading as="h2" className={styles.githubTitle}>
              Acompanhe no GitHub
            </Heading>
            <p className={styles.githubText}>
              Repositório e perfil oficial: <strong>claudio-asj</strong>.
            </p>
          </div>
          <Link
            className="button button--primary button--lg"
            to="https://github.com/claudio-asj">
            github.com/claudio-asj
          </Link>
        </section>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="Diário sobre tecnologia social, extensão universitária, projetos e eventos.">
      <HomepageHeader />
      <main />
    </Layout>
  );
}
