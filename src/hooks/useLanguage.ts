import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const setMetaDescription = (description: string): void => {
  const tag = document.querySelector('meta[name="description"]');
  if (tag) {
    tag.setAttribute("content", description);
  }
};

export const useLanguage = (): void => {
  const { t } = useTranslation();

  useEffect(() => {
    document.documentElement.lang = "en";
    document.title = t("meta.title");
    setMetaDescription(t("meta.description"));
  }, [t]);
};
