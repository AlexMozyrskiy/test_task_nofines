import { useState } from "react";

import { useHttp } from "../hooks";

import MainLayout from "../components/mainLayout";
import Logo from "../components/Logo";
import SubTitle from "../components/SubTitle";
import Form from "../components/Form";
import Content from "../components/Content";

import st from "../styles/index.module.scss";

const Index = () => {
  const [inputValue, setInputValue] = useState("");

  const { getFine: getFineService, isFetching } = useHttp();

  /*
    может быть три типа: {} - поиск еще не выполнялся (показываем пустой контент),
    null - штраф не найден после поиска (показываем штраф не найден),
    {} - объект с ответом от сервера
  */
  const [fine, setFine] = useState({});

  return (
    <MainLayout>
      <section className={st.main}>
        <section className={st.main__logo}>
          <Logo />
        </section>

        <section className={st.main__subTitle}>
          <SubTitle />
        </section>

        <section className={st.main__form}>
          <Form
            inputValue={inputValue}
            setInputValue={setInputValue}
            fine={fine}
            setFine={setFine}
            getFineService={getFineService}
          />
        </section>

        <section className={st.main__content}>
          <Content
            fine={fine}
            inputValue={inputValue}
            isFetching={isFetching}
          />
        </section>
      </section>
    </MainLayout>
  );
};

export default Index;
