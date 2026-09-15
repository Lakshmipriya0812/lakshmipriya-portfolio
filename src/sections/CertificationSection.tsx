import { useTranslation } from "react-i18next";
import { Container } from "../components/common/Container";
import { getInteractiveCardClasses } from "../components/common/interactiveCardStyles";
import { SectionReveal } from "../components/common/SectionReveal";
import { SectionHeading } from "../components/common/SectionHeading";
import { certifications } from "../data/certifications";

export const CertificationsSection = () => {
  const { t } = useTranslation();

  return (
    <SectionReveal
      id="certifications"
      className="py-16 md:py-24"
      variant="certifications"
    >
      <Container>
        <SectionHeading
          title={t("certifications.title")}
          subtitle={t("certifications.subtitle")}
          eyebrow="05"
        />

        <h3 className="mb-4 text-xl font-semibold text-[var(--color-text)]">
          {t("certifications.certificationsTitle")}
        </h3>
        {certifications.length === 0 ? (
          <p className="mb-8 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5 text-[var(--color-text-muted)]">
            {t("certifications.subtitle")}
          </p>
        ) : null}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <article className={getInteractiveCardClasses("credentials", "flex flex-col rounded-2xl p-5 md:col-span-2")}>
            <h3 className="text-lg font-semibold text-[var(--color-text)]">Neo4j Certifications</h3>
            <p className="mt-2 text-sm text-[var(--color-text-muted)]">Graph data science and professional certification certifications earned in May 2025.</p>
            <div className="mt-5 grid gap-3 md:grid-cols-2">
              {certifications.map((certification) => (
                <a
                  key={certification.id}
                  href={certification.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={t("certifications.certificationLinkLabel", { name: certification.name })}
                  className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-elevated)] p-4 transition hover:-translate-y-0.5 hover:border-[var(--color-border-active)]"
                >
                  <h4 className="text-base font-semibold text-[var(--color-text)]">{certification.name}</h4>
                  <p className="mt-2 text-sm text-[var(--color-text-muted)]">{certification.provider}</p>
                </a>
              ))}
            </div>
          </article>
        </div>

      </Container>
    </SectionReveal>
  );
};
