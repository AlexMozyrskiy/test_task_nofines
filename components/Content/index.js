import Loader from "../Loader";
import FineNotFound from "./frames/FineNotFound";

import st from "./index.module.scss";

const Content = ({ fine, inputValue, isFetching }) => {
  return (
    <div className={st.content}>
      {isFetching && <Loader />}
      {fine === null && !isFetching && <FineNotFound inputValue={inputValue} />}
      {fine?.number !== undefined && !isFetching && <>Штраф</>}
    </div>
  );
};

export default Content;
