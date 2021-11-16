import { useState } from "react";

import MainLayout from "../components/mainLayout";
import Logo from "../components/Logo";
import SubTitle from "../components/SubTitle";
import Form from "../components/Form";
import Content from "../components/Content";

import st from "../styles/index.module.scss";

const Index = () => {
  const [inputValue, setInputValue] = useState("");

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
            setFine={setFine}
          />
        </section>

        <section className={st.main__content}>
          <Content fine={fine} inputValue={inputValue} />
        </section>
      </section>
    </MainLayout>
  );
};

export default Index;

const respone = {
  number: "0356043010119111100023005",
  bill_at: "2019-11-11T00:00:00Z",
  amount: "3000.00",
  amount_to_pay: "0.00",
  discount_at: null,
  discount_size: null,
  payment_status: "paid",
  quittance: "1",
  pay_status: "3",
  is_revoked: null,
  name: "0356043010119111100023005//Штраф за нарушение ПДД. Постановление № 0356043010119111100023005 от 11-11-2019 г.",
  koap_code: null,
  koap_text: null,
  location: null,
  doc_type: "rawid",
  doc_number: "25024117159502401001",
  reg_cert: null,
  violation_at: null,
  violator_name: "-",
  division_name: "УФК по г.Москве (МАДИ л/с 04732224150)",
  division_code: null,
  fssp_ip: null,
  fssp_uin: null,
  payee_username:
    "Московская административная дорожная инспекция(УФК по г.Москве (МАДИ л/с 04732224150))",
  payee_inn: "7707821043",
  payee_kpp: "770701001",
  payee_oktmo: "45382000",
  payee_bank_name: "ГУ Банка России по ЦФО",
  payee_bank_bik: "044525000",
  payee_bank_account: "40101810045250010041",
  kbk: "78211630020018000140",
  docs: [{ type: "rawid", number: "25024117159502401001", main: true }],
  pics: [],
  is_cached: false,
};
