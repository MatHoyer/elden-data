import {
  Layout,
  LayoutContent,
  LayoutDescription,
  LayoutHeader,
  LayoutTitle,
} from "@/components/layout/Page";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useRequiredUser } from "@/hooks/use-user";
import { setI18nLanguage } from "@/i18n";
import { collection } from "@/lib/pocketbase";
import { LANGUAGES, type Language } from "@/types/language";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export const ProfilePage: React.FC = () => {
  const user = useRequiredUser();
  const { t } = useTranslation();
  const [language, setLanguage] = useState<Language>(user.language ?? "en");
  const [isSaving, setIsSaving] = useState(false);

  const handleLanguageChange = (value: string) => {
    if (value !== "en" && value !== "fr") return;
    const next = value as Language;
    setLanguage(next);
    setI18nLanguage(next);
    setIsSaving(true);

    void collection("users")
      .update(user.id, { language: next })
      .finally(() => setIsSaving(false));
  };

  return (
    <Layout size="sm" className="mx-auto flex-1">
      <LayoutHeader>
        <LayoutTitle className="text-2xl font-semibold tracking-tight">
          {t("pages.profile.title")}
        </LayoutTitle>
        <LayoutDescription className="text-muted-foreground">
          {t("pages.profile.description")}
        </LayoutDescription>
      </LayoutHeader>
      <LayoutContent>
        <Card className="mx-auto w-full max-w-md">
          <CardHeader>
            <CardTitle>{user.email}</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <Label htmlFor="language">{t("pages.profile.language")}</Label>
              <Select
                value={language}
                onValueChange={handleLanguageChange}
                disabled={isSaving}
              >
                <SelectTrigger id="language" className="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {LANGUAGES.map((lang) => (
                    <SelectItem key={lang} value={lang}>
                      {lang === "en" ? "English" : "Français"}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>
      </LayoutContent>
    </Layout>
  );
};
