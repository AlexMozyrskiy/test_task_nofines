import st from "./index.module.scss";

const WarningModal = ({ onSubmitClick, close, inputCount }) => {
  return (
    <div className={st.modal__overlay}>
      <article className={st.modal}>
        <p>
          Количество введенных символов должно быть 20 или 25. Вы ввели{" "}
          {inputCount} символов
        </p>
        <div className={st.modal__acceptButton}>
          <button
            onClick={() => onSubmitClick()}
            style={{ backgroundColor: "#63c556" }}
          >
            Все равно найти
          </button>
          <button onClick={() => close()} style={{ backgroundColor: "red" }}>
            Отменить
          </button>
        </div>
        <div className={st.cross} onClick={close}></div>
      </article>
    </div>
  );
};

export default WarningModal;
