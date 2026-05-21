import { Layout, LayoutContent, LayoutDescription, LayoutHeader, LayoutTitle } from "@/components/layout/Page";
import { AppLoader } from "@/components/ui/AppLoader";
import type { ReactNode } from "react";
import { useTranslation } from "react-i18next";

type CatalogPageShellProps = {
  titleKey: string;
  descriptionKey: string;
  isLoading: boolean;
  isEmpty: boolean;
  children: ReactNode;
};

export const CatalogPageShell: React.FC<CatalogPageShellProps> = ({
  titleKey,
  descriptionKey,
  isLoading,
  isEmpty,
  children,
}) => {
  const { t } = useTranslation();

  return (
    <Layout size="lg" className="flex-1">
      <LayoutHeader>
        <LayoutTitle className="text-2xl font-semibold tracking-tight">{t(titleKey)}</LayoutTitle>
        <LayoutDescription className="text-muted-foreground">{t(descriptionKey)}</LayoutDescription>
      </LayoutHeader>
      <LayoutContent>
        {isLoading ? (
          <div className="flex justify-center py-16">
            <AppLoader />
          </div>
        ) : isEmpty ? (
          <p className="py-8 text-center text-sm text-muted-foreground">{t("catalog.empty")}</p>
        ) : (
          children
        )}
      </LayoutContent>
    </Layout>
  );
};
