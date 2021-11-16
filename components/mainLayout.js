import Head from "next/head";

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

      <main>{children}</main>
    </>
  );
};

export default MainLayout;
