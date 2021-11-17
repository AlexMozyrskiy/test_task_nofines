import { useRouter } from "next/router";

import fineNotFoundIcon from "../../icons/fineNotFound.svg";

import st from "./index.module.scss";

const FineNotFound = ({ number }) => {
  const router = useRouter();

  const { fineNumber } = router.query;

  return (
    <div className={st.fineNotFound}>
      <figure>
        <img src={fineNotFoundIcon} />
      </figure>
      <p>Штраф {number} не найден</p>
    </div>
  );
};

export default FineNotFound;
