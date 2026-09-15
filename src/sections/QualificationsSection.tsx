import { useTranslation } from "react-i18next";
import { m } from "motion/react";
import { educationItems } from "../data/education";
import { certifications } from "../data/certifications";
import { Container } from "../components/common/Container";
import { SectionReveal } from "../components/common/SectionReveal";
import { SectionHeading } from "../components/common/SectionHeading";
import { BentoCard } from "../components/ui/BentoCard";

export const QualificationsSection = () => {
  const { t } = useTranslation();

  return (
    <SectionReveal
      id="qualifications"
      className="py-16 md:py-24"
      variant="qualifications"
    >
      <Container>
        <SectionHeading
          title={t("qualifications.title")}
          subtitle={t("qualifications.subtitle")}
          eyebrow="05"
        />
        <div className="grid gap-4 lg:grid-cols-2">
          <m.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.16 }}
            transition={{ duration: 0.42, ease: "easeOut" }}
          >
            <BentoCard variant="academic" className="p-5">
              <h3 className="text-xl font-semibold text-[var(--color-text)]">
                {t("qualifications.education.title")}
              </h3>
              <ul className="mt-4 grid gap-3">
                {educationItems.map((item) => (
                  <li
                    key={item.id}
                    className="rounded-xl border border-[var(--color-border)] px-3 py-2"
                  >
                    <p className="text-sm font-medium text-[var(--color-text)]">
                      {t(item.titleKey)}
                    </p>
                    <p className="mt-1 text-sm text-[var(--color-text-muted)]">
                      {t(item.institutionKey)}
                    </p>
                    <p className="mt-1 font-mono text-xs uppercase tracking-[0.14em] text-[var(--color-text-subtle)]">
                      {t(item.periodKey)}
                    </p>
                  </li>
                ))}
              </ul>
            </BentoCard>
          </m.div>

          <m.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.16 }}
            transition={{ duration: 0.42, ease: "easeOut", delay: 0.1 }}
          >
            <BentoCard variant="credentials" className="p-5">
              <h3 className="text-xl font-semibold text-[var(--color-text)]">
                {t("qualifications.certifications.title")}
              </h3>
              <p className="mt-3 text-sm text-[var(--color-text-muted)]">
                {t("qualifications.certifications.subtitle")}
              </p>
              <ul className="mt-4 grid gap-3">
                {certifications.map((certification) => (
                  <li key={certification.id}>
                    <a
                      href={certification.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={t("qualifications.certifications.linkLabel", {
                        name: certification.name,
                      })}
                      className="block rounded-xl border border-[var(--color-border)] px-3 py-2 transition hover:-translate-y-0.5 hover:border-[var(--color-border-active)]"
                    >
                      <p className="text-sm font-medium text-[var(--color-text)]">
                        {certification.name}
                      </p>
                      <p className="mt-1 text-sm text-[var(--color-text-muted)]">
                        {certification.provider}
                      </p>
                    </a>
                  </li>
                ))}
              </ul>
            </BentoCard>
          </m.div>
        </div>
      </Container>
    </SectionReveal>
  );
};
