import { useTranslation } from "react-i18next";
import { Container } from "../components/common/Container";
import { SectionReveal } from "../components/common/SectionReveal";
import { SectionHeading } from "../components/common/SectionHeading";
import { CaseStudyCard } from "../components/case-studies/CaseStudyCard";
import { caseStudies } from "../data/caseStudies";

export const ProjectsSection = () => {
  const { t } = useTranslation();

  return (
    <SectionReveal id="projects" className="py-16 md:py-24" variant="projects">
      <Container>
        <SectionHeading
          title={t("caseStudies.title")}
          subtitle={t("caseStudies.subtitle")}
          eyebrow={t("caseStudies.eyebrow")}
        />
        <div className="case-study-list">
          {caseStudies.map((study, index) => (
            <CaseStudyCard
              key={study.id}
              study={study}
              flagship={index === 0}
            />
          ))}
        </div>
      </Container>
    </SectionReveal>
  );
};
