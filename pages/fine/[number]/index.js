import { useRouter } from "next/router";

import FineNotFound from "../../../components/FineNotFound";
import Fine from "../../../components/Fine";
import Loader from "../../../components/Loader";
import MainLayout from "../../../components/Layouts/mainLayout";

import st from "./index.module.scss";

export async function getServerSideProps(context) {
  const res = await fetch(
    `https://test-task.shtrafovnet.com/fines/${context.params.number}`
  );

  if (res.status === 200) {
    const fine = await res.json();

    return { props: { fine } };
  }

  return { props: { fine: null } };
}

const FineNumber = ({ fine = undefined, loading }) => {
  /*
    может быть три типа fine: undefined - поиск выполняется (показываем лоадер),
    null - штраф не найден после поиска (показываем штраф не найден),
    {данные} - объект с ответом от сервера
  */

  const router = useRouter();
  const { number } = router.query;

  return (
    <MainLayout>
      {loading && <Loader />}
      {fine === null && !loading && <FineNotFound number={number} />}
      {fine?.number && !loading && (
        <div className={st.fine}>
          <Fine fine={fine} />
        </div>
      )}
    </MainLayout>
  );
};

export default FineNumber;
