import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

const Header = () => {
  const { t } = useTranslation("home");
  const router = useRouter();

  const handleLocaleChange = (event: any) => {
    const value = event.target.value;

    router.push(router.route, router.asPath, {
      locale: value,
    });
  };

  return (
    <header>
      <nav>
        <Link href="/">
          <a className={router.asPath === "/" ? "active" : ""}>{t("home")}</a>
        </Link>
        <Link href="/about">
          <a className={router.asPath === "/about" ? "active" : ""}>
            {t("about")}
          </a>
        </Link>
      </nav>

      <select onChange={handleLocaleChange} value={router.locale}>
        <option value="en">🇺🇸 English</option>
        <option value="bn">bn Bangla</option>
      </select>

      <style jsx>{`
        a {
          margin-right: 0.5rem;
        }

        a.active {
          color: blue;
        }

        nav {
          margin-bottom: 0.5rem;
        }
      `}</style>
    </header>
  );
};

export default Header;
