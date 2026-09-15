import { Container } from "../components/common/Container";
import { CaseStudyCard } from "../components/case-studies/CaseStudyCard";
import { caseStudies } from "../data/caseStudies";
import {SectionHeading} from "../components/common/SectionHeading";

export const ProjectsSection = () => (
  <section id="projects" className="featured-work-section">
    <Container>
      <div className="featured-work-heading">
        <div>
          <p className="section-kicker"> 02 Featured Work</p>
          <h2>Production Engineering Case Studies</h2>
        </div>
        <p>Four production engineering initiatives spanning infrastructure automation, proactive testing, configuration management, and data workflow validation.</p>
      </div>
      <div className="case-study-list">
        {caseStudies.map((study, index) => <CaseStudyCard key={study.id} study={study} flagship={index === 0} />)}
      </div>
    </Container>
  </section>
);
