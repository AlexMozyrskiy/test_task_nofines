import Loader from "../Loader";
import FineNotFound from "./frames/FineNotFound";

import st from "./index.module.scss";

const Content = ({ fine, inputValue }) => {
  return (
    <div className={st.content}>
      {fine === null && <FineNotFound inputValue={inputValue} />}
      {fine?.number !== undefined && <>Штраф</>}
    </div>
  );
};

export default Content;
