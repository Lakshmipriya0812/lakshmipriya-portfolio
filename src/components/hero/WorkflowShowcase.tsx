import {
  AlertTriangle,
  Check,
  ChevronDown,
  CloudCog,
  Database,
  GitBranch,
  HardDrive,
  Network,
  Server,
  ShieldCheck,
  User,
} from "lucide-react";
import { useTranslation } from "react-i18next";

const workflowIcons = [ShieldCheck, Server, Network, HardDrive, Check];

export const WorkflowShowcase = () => {
  const { t } = useTranslation();
  const steps = t("workflow.steps", { returnObjects: true }) as Array<{
    title: string;
    detail: string;
    status: string;
  }>;

  return (
    <article className="overflow-hidden rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] shadow-[0_24px_70px_rgba(0,0,0,0.24)]">
      <div className="flex items-center justify-between border-b border-[var(--color-border)] px-5 py-4">
        <div className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[rgba(47,140,255,0.15)] text-[var(--color-cyan)]">
            <CloudCog size={19} aria-hidden="true" />
          </span>
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-text-subtle)]">
              {t("workflow.eyebrow")}
            </p>
            <h2 className="text-base font-semibold text-[var(--color-text)]">
              {t("workflow.title")}
            </h2>
          </div>
        </div>
        <span className="rounded-full border border-[rgba(45,212,191,0.35)] bg-[rgba(45,212,191,0.08)] px-3 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-[var(--color-cyan)]">
          {t("workflow.status")}
        </span>
      </div>

      <div className="p-5 sm:p-6">
        <div className="mb-5 rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-elevated)] p-4">
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--color-border-active)] text-[var(--color-cyan)]">
              <User size={16} aria-hidden="true" />
            </span>
            <div>
              <p className="text-sm font-semibold text-[var(--color-text)]">
                {t("workflow.actor")}
              </p>
              <p className="text-xs text-[var(--color-text-muted)]">
                {t("workflow.actorDetail")}
              </p>
            </div>
          </div>
        </div>

        <div className="mb-4 flex justify-center text-[var(--color-text-subtle)]" aria-hidden="true">
          <ChevronDown size={18} />
        </div>

        <div className="mb-5 rounded-2xl border border-[var(--color-border-active)] bg-[rgba(47,140,255,0.08)] p-4 shadow-[0_0_30px_rgba(47,140,255,0.08)]">
          <div className="flex items-start gap-3">
            <GitBranch className="mt-0.5 shrink-0 text-[var(--color-azure)]" size={18} aria-hidden="true" />
            <div>
              <p className="text-sm font-semibold text-[var(--color-text)]">
                {t("workflow.orchestrator")}
              </p>
              <p className="mt-1 text-xs leading-5 text-[var(--color-text-muted)]">
                {t("workflow.orchestratorDetail")}
              </p>
            </div>
          </div>
        </div>

        <div className="grid gap-2">
          {steps.map((step, index) => {
            const Icon = workflowIcons[index] ?? Database;
            const isErrorBranch = index === 1;
            const isFinal = index === steps.length - 1;

            return (
              <div key={step.title}>
                <div className="flex items-stretch gap-3">
                  <div className="flex w-7 shrink-0 flex-col items-center">
                    <span className={`flex h-7 w-7 items-center justify-center rounded-full border text-xs font-semibold ${isFinal ? "border-[rgba(45,212,191,0.48)] bg-[rgba(45,212,191,0.12)] text-[var(--color-cyan)]" : "border-[var(--color-border-active)] bg-[var(--color-bg-elevated)] text-[var(--color-azure)]"}`}>
                      {isFinal ? <Check size={15} /> : index + 1}
                    </span>
                    {!isFinal ? <span className="mt-1 h-full w-px bg-[var(--color-border)]" /> : null}
                  </div>
                  <div className="min-w-0 flex-1 rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-elevated)] p-3 transition duration-200 hover:-translate-y-0.5 hover:border-[var(--color-border-active)] hover:bg-[var(--color-surface-strong)]">
                    <div className="flex items-start gap-3">
                      <Icon className={`mt-0.5 shrink-0 ${isErrorBranch ? "text-amber-300" : "text-[var(--color-cyan)]"}`} size={17} aria-hidden="true" />
                      <div className="min-w-0">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <h3 className="text-sm font-semibold text-[var(--color-text)]">{step.title}</h3>
                          <span className={`font-mono text-[10px] uppercase tracking-[0.1em] ${isErrorBranch ? "text-amber-300" : "text-[var(--color-text-subtle)]"}`}>
                            {step.status}
                          </span>
                        </div>
                        <p className="mt-1 text-xs leading-5 text-[var(--color-text-muted)]">{step.detail}</p>
                      </div>
                    </div>
                  </div>
                </div>
                {isErrorBranch ? (
                  <div className="ml-10 mt-2 flex items-center gap-2 rounded-xl border border-amber-300/20 bg-amber-300/5 px-3 py-2 text-xs text-amber-100/80">
                    <AlertTriangle size={14} aria-hidden="true" />
                    {t("workflow.rollback")}
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </article>
  );
};
