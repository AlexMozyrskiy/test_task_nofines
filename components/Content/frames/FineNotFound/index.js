import fineNotFoundIcon from "../../../../icons/fineNotFound.svg";

import st from "./index.module.scss";

const FineNotFound = ({ inputValue }) => {
  return (
    <div className={st.fineNotFound}>
      <figure>
        <img src={fineNotFoundIcon} />
      </figure>
      <p>Штраф {inputValue} не найден</p>
    </div>
  );
};

export default FineNotFound;
