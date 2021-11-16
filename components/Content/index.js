import Loader from "../Loader";
import Fine from "./frames/Fine";
import FineNotFound from "./frames/FineNotFound";

import st from "./index.module.scss";

const Content = ({ fine, inputValue, isFetching }) => {
  return (
    <div className={st.content}>
      {isFetching && <Loader />}
      {fine === null && !isFetching && <FineNotFound inputValue={inputValue} />}
      {fine?.number !== undefined && !isFetching && <Fine fine={fine} />}
    </div>
  );
};

export default Content;
