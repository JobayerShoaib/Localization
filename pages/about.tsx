import { useRouter } from "next/router";
import React from "react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["about", "home"])),
    },
  };
}
const about = () => {
  const { t } = useTranslation("about");
  const { locale } = useRouter();

  return <main>{t("about")}</main>;
};

export default about;
