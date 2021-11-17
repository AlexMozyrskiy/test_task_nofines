import { useState } from "react";

import { useRouter } from "next/router";

import { calculateControlCategory } from "../../helpers";

import st from "./index.module.scss";

const Form = () => {
  const router = useRouter();

  const [inputValue, setInputValue] = useState("");

  const [hint, setHint] = useState(null);

  const onChangeHandler = (e) => {
    const value = e.target.value;

    setInputValue(value);

    /* Если длина согласно ТЗ вычислим контрольный разряд */
    if (value.length === 19 || value.length === 24) {
      setHint(value + calculateControlCategory(value));
      /* Если длина другая и контрольный разряд рассчитан, уберем его, чтобы не показывать посдказку */
    } else if ((value.length !== 19 || value.length !== 24) && hint) {
      setHint(null);
    }
  };

  const onHintClickHandler = () => {
    setInputValue(hint);
    setHint(null);
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    router.push(inputValue);
  };

  return (
    <form className={st.form}>
      <input
        placeholder="Введите УИН"
        type="number"
        value={inputValue}
        onChange={(e) => onChangeHandler(e)}
        maxLength="25"
      />
      {hint !== null && (
        <div className={st.form__hint} onClick={onHintClickHandler}>
          {hint}
        </div>
      )}
      <button onClick={(e) => onSubmitHandler(e)}>Найти</button>
    </form>
  );
};

export default Form;
