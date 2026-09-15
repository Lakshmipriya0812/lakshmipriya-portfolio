import { useTranslation } from "react-i18next";
import { m } from "motion/react";
import { profile } from "../data/profile";
import { educationItems } from "../data/education";
import { Container } from "../components/common/Container";
import { getInteractiveButtonClasses } from "../components/common/interactiveButtonStyles";
import { SectionReveal } from "../components/common/SectionReveal";
import { SectionHeading } from "../components/common/SectionHeading";
import { BentoCard } from "../components/ui/BentoCard";

export const AcademicSection = () => {
  const { t } = useTranslation();

  return (
    <SectionReveal id="academic" className="py-16 md:py-24" variant="academic">
      <Container>
        <SectionHeading
          title={t("academic.title")}
          subtitle={t("academic.subtitle")}
          eyebrow="06"
        />
        <div className="grid gap-4 lg:grid-cols-2">
          <m.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.16 }}
            transition={{ duration: 0.42, ease: "easeOut" }}
          >
            <BentoCard variant="academic" className="p-5">
              <h3 className="text-lg font-semibold text-[var(--color-text)]">
                {t("academic.education.title")}
              </h3>
              <ul className="mt-4 grid gap-3">
                {educationItems.map((item) => (
                  <li
                    key={item.id}
                    className="rounded-xl border border-[var(--color-border)] px-3 py-2"
                  >
                    <p className="text-sm text-[var(--color-text)]">
                      {t(item.titleKey)}
                    </p>
                    <p className="text-xs text-[var(--color-text-muted)]">
                      {t(item.institutionKey)}
                    </p>
                    <p className="font-mono text-xs text-[var(--color-text-subtle)]">
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
            transition={{ duration: 0.42, ease: "easeOut", delay: 0.16 }}
          >
            <BentoCard variant="academic" className="p-5">
              <h3 className="text-lg font-semibold text-[var(--color-text)]">
                {t("academic.linkedin.title")}
              </h3>
              <p className="mt-4 text-sm leading-6 text-[var(--color-text-muted)]">
                {t("academic.linkedin.description")}
              </p>
              <a
                href={profile.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={getInteractiveButtonClasses({
                  variant: "secondary",
                  className: "mt-5 px-4 py-2 text-sm font-semibold",
                })}
              >
                {t("academic.linkedin.button")}
              </a>
            </BentoCard>
          </m.div>
        </div>
      </Container>
    </SectionReveal>
  );
};
