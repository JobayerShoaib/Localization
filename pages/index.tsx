import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "home"])),
    },
  };
}
const Home: NextPage = () => {
  const { t } = useTranslation("common");
  console.log(t);
  debugger;

  return <main>{t("greeting")}</main>;
};

export default Home;
