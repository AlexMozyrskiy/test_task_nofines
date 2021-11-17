import { useState } from "react";

import { useRouter } from "next/router";

const MyApp = ({ Component, pageProps }) => {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  router.events?.on("routeChangeStart", () => {
    setLoading(true);
  });
  router.events?.on("routeChangeComplete", () => {
    setLoading(false);
  });

  return (
    <>
      <Component {...pageProps} loading={loading} />

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
