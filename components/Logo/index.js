import logoIcon from "../../icons/logo.svg";

import st from "./index.module.scss";

const Logo = () => {
  return (
    <div className={st.logo}>
      <figure>
        <img src={logoIcon} />
      </figure>

      <h1 className={st.logo__title}>
        <span>штрафов</span>&nbsp;нет
      </h1>
    </div>
  );
};

export default Logo;
