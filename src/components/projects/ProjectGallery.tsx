import { useRef, useState } from "react";
import { Search } from "lucide-react";
import { useTranslation } from "react-i18next";
import type { PortfolioProject } from "../../data/projects";
import { getInteractiveButtonClasses } from "../common/interactiveButtonStyles";
import { ProjectImageModal } from "./ProjectImageModal";

interface ProjectGalleryProps {
  project: PortfolioProject;
}

export const ProjectGallery = ({ project }: ProjectGalleryProps) => {
  const { t } = useTranslation();
  const [isExpanded, setIsExpanded] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const toggleId = `gallery-${project.id}`;

  const focusBackToTrigger = () => {
    triggerRef.current?.focus();
  };

  if (project.images.length === 0) {
    return null;
  }

  return (
    <>
      <div className="space-y-4">
        <button
          type="button"
          className={getInteractiveButtonClasses({ variant: "secondary" })}
          aria-expanded={isExpanded}
          aria-controls={toggleId}
          onClick={() => setIsExpanded((current) => !current)}
        >
          {isExpanded
            ? t("projects.actions.hideProjectGallery")
            : t("projects.actions.projectGallery")}
        </button>

        {isExpanded ? (
          <div
            id={toggleId}
            className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4"
          >
            {project.images.map((image, index) => (
              <button
                key={image.src}
                type="button"
                className="group relative overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-elevated)]"
                onClick={(event) => {
                  triggerRef.current = event.currentTarget;
                  setOpenIndex(index);
                }}
                aria-label={t("accessibility.openImage")}
              >
                <img
                  src={image.src}
                  alt={t(image.altKey)}
                  width={image.width}
                  height={image.height}
                  loading="lazy"
                  className="aspect-[4/3] h-full w-full object-cover transition duration-300 [@media(hover:hover)_and_(pointer:fine)]:group-hover:scale-[1.03] [@media(hover:hover)_and_(pointer:fine)]:group-hover:brightness-60 group-focus-visible:brightness-60"
                />
                <span className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-0 transition duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
                  <span className="rounded-full border border-white/15 bg-[rgba(5,11,20,0.72)] p-3 text-white shadow-lg">
                    <Search className="h-5 w-5" aria-hidden="true" />
                  </span>
                </span>
              </button>
            ))}
          </div>
        ) : null}
      </div>

      {openIndex !== null ? (
        <ProjectImageModal
          project={project}
          openIndex={openIndex}
          onClose={() => setOpenIndex(null)}
          onRequestNextFocus={focusBackToTrigger}
        />
      ) : null}
    </>
  );
};
