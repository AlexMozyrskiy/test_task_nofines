import Head from "next/head";

import Logo from "../Logo";
import SubTitle from "../SubTitle";
import Form from "../Form";

import st from "../../styles/mainLayout.module.scss";

const MainLayout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Штрафов нет</title>
        <meta name="keywords" content="Штрафов нет,next,js"></meta>
        <meta
          name="description"
          content="this is test task for Штрафов нет"
        ></meta>
        <meta charSet="utf-8"></meta>
      </Head>

      <main>
        <section className={st.main}>
          <section className={st.main__logo}>
            <Logo />
          </section>

          <section className={st.main__subTitle}>
            <SubTitle />
          </section>

          <section className={st.main__form}>
            <Form />
          </section>
        </section>

        {children}
      </main>
    </>
  );
};

export default MainLayout;
