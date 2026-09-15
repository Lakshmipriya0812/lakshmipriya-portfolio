import { useTranslation } from "react-i18next";
import { GitBranch } from "lucide-react";
import type { PortfolioProject } from "../../data/projects";
import { InteractiveLink } from "../common/InteractiveButton";
import { getInteractiveCardClasses } from "../common/interactiveCardStyles";
import { TechChip } from "../common/TechChip";
import { ProjectGallery } from "./ProjectGallery";

interface ProjectCardProps {
  project: PortfolioProject;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  const { t } = useTranslation();

  return (
    <article className={getInteractiveCardClasses("project", "space-y-6 p-6")}>
      <div className="space-y-3">
        {project.owner ? (
          <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--color-cyan)]">
            {project.owner}
          </p>
        ) : null}
        <h3 className="text-2xl font-semibold text-[var(--color-text)]">
          {t(`${project.translationKey}.title`)}
        </h3>
        <p className="text-[var(--color-cyan)]">
          {t(`${project.translationKey}.tagline`)}
        </p>
        <p className="text-[var(--color-text-muted)]">
          {t(`${project.translationKey}.description`)}
        </p>
      </div>

      <div className="flex flex-wrap gap-2">
        {project.technologies.map((technology) => (
          <TechChip key={technology} label={technology} />
        ))}
      </div>

      <div className="flex flex-wrap gap-3">
        <InteractiveLink
          href={project.repoUrl || "#projects"}
          target={project.repoUrl ? "_blank" : undefined}
          rel={project.repoUrl ? "noopener noreferrer" : undefined}
          variant="repository"
          className="group/repo w-full sm:w-auto"
        >
          <GitBranch
            size={16}
            className="text-[var(--color-cyan)] transition-[transform,color,filter] duration-200 ease-out [@media(hover:hover)_and_(pointer:fine)]:group-hover/repo:translate-x-[2px] [@media(hover:hover)_and_(pointer:fine)]:group-hover/repo:drop-shadow-[0_0_8px_rgba(86,204,242,0.45)]"
            aria-hidden="true"
          />
          {t("projects.actions.viewRepository")}
        </InteractiveLink>
      </div>

      <div>
        <ProjectGallery project={project} />
      </div>
    </article>
  );
};
