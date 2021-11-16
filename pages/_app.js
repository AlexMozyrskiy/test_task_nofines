const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Component {...pageProps} />
      <style jsx global>{`
        body {
          font-family: "Roboto", sans-serif;
          font-style: normal;
          font-weight: normal;
          font-size: 18px;
          line-height: 21px;
        }
      `}</style>
    </>
  );
};

export default MyApp;
