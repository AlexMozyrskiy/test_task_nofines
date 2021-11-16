import { useState } from "react";

import { calculateControlCategory } from "../../helpers";

import st from "./index.module.scss";

const Form = ({ inputValue, setInputValue, fine, setFine }) => {
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

    if (fine?.number || fine === null) {
      setFine({});
    }
  };

  const onHintClickHandler = () => {
    setInputValue(hint);
    setHint(null);
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const response = await fetch(
      `https://test-task.shtrafovnet.com/fines/${inputValue}`
    );
    if (response.status === 200) {
      const res = await response.json();
      setFine(res);
      console.log(res);
    } else {
      setFine(null);
    }
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
