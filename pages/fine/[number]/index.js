import { useRouter } from "next/router";

import FineNotFound from "../../../components/FineNotFound";
import Fine from "../../../components/Fine";
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

const FineNumber = ({ fine }) => {
  const router = useRouter();
  const { number } = router.query;

  return (
    <MainLayout>
      {/* {isFetching && <Loader />} */}
      {fine === null && <FineNotFound number={number} />}
      {fine?.number !== undefined && (
        <div className={st.fine}>
          <Fine fine={fine} />
        </div>
      )}
    </MainLayout>
  );
};

export default FineNumber;
