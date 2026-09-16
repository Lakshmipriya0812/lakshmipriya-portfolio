import { useState } from "react";
import { useTranslation } from "react-i18next";
import { ChevronDown } from "lucide-react";
import { Container } from "../components/common/Container";
import { SectionReveal } from "../components/common/SectionReveal";
import { SectionHeading } from "../components/common/SectionHeading";
import { TechChip } from "../components/common/TechChip";
import { expertiseCategories } from "../data/expertise";

export const ExpertiseSection = () => {
  const { t } = useTranslation();
  const [openId, setOpenId] = useState<string | null>(
    expertiseCategories[0]?.id ?? null,
  );

  return (
    <SectionReveal
      id="expertise"
      className="py-16 md:py-24"
      variant="expertise"
    >
      <Container>
        <SectionHeading
          title={t("expertise.title")}
          subtitle={t("expertise.subtitle")}
          eyebrow="03"
        />
        <p className="mb-8 font-mono text-xs uppercase tracking-[0.14em] text-[var(--color-text-subtle)] md:mb-10">
          {t("expertise.connector")}
        </p>
        <div className="grid gap-3">
          {expertiseCategories.map((category, index) => {
            const isOpen = openId === category.id;
            const usedIn = t(category.usedInKey, {
              returnObjects: true,
            }) as string[];

            return (
              <div
                key={category.id}
                className={`overflow-hidden rounded-xl border bg-[color-mix(in_srgb,var(--color-surface)_86%,transparent)] transition-colors duration-200 [@media(hover:hover)_and_(pointer:fine)]:hover:border-[var(--color-border-active)] ${isOpen ? "border-[var(--color-border-active)]" : "border-[var(--color-border)]"}`}
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpenId(isOpen ? null : category.id)}
                  className="flex w-full flex-wrap items-center justify-between gap-4 p-5 text-left"
                >
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs text-[var(--color-cyan)]">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <h3 className="text-lg font-semibold text-[var(--color-text)] md:text-xl">
                        {t(category.titleKey)}
                      </h3>
                    </div>
                    <p className="mt-1 text-sm text-[var(--color-text-muted)]">
                      {t(category.taglineKey)}
                    </p>
                  </div>
                  <div className="ml-auto flex items-center gap-6">
                    <div className="text-right">
                      <p className="font-mono text-sm font-semibold text-[var(--color-text)]">
                        {t(category.impactValueKey)}
                      </p>
                      <p className="text-xs text-[var(--color-text-subtle)]">
                        {t(category.impactLabelKey)}
                      </p>
                    </div>
                    <ChevronDown
                      size={18}
                      className={`shrink-0 text-[var(--color-text-subtle)] transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                      aria-hidden="true"
                    />
                  </div>
                </button>

                {isOpen ? (
                  <div className="grid gap-5 border-t border-[var(--color-border)] p-5 pt-4 md:grid-cols-2">
                    <div className="flex flex-wrap gap-2">
                      {category.technologies.map((technology) => (
                        <TechChip key={technology} label={technology} />
                      ))}
                    </div>
                    <div>
                      <h4 className="font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--color-text-subtle)]">
                        {t("expertise.usedInLabel")}
                      </h4>
                      <ul className="mt-2 grid gap-1.5">
                        {usedIn.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-2 text-sm text-[var(--color-text-muted)]"
                          >
                            <span
                              className="mt-0.5 text-[var(--color-cyan)]"
                              aria-hidden="true"
                            >
                              →
                            </span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
      </Container>
    </SectionReveal>
  );
};
