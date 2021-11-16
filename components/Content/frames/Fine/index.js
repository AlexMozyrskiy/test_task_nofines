import { useMemo } from "react";

import st from "./index.module.scss";

const Fine = ({ fine }) => {
  const billDate = useMemo(() => new Date(fine.bill_at), []);
  const date = useMemo(
    () =>
      billDate.getFullYear() +
      "-" +
      (billDate.getMonth() + 1) +
      "-" +
      billDate.getDate(),
    []
  );

  const discountDate = useMemo(() => new Date(fine.discount_at), []);
  const discountAtdate = useMemo(
    () =>
      discountDate.getFullYear() +
      "-" +
      (discountDate.getMonth() + 1) +
      "-" +
      discountDate.getDate(),
    []
  );

  console.log(fine);

  return (
    <article className={st.fine}>
      <h2>Постановление #{fine.number}</h2>

      <table>
        <tbody>
          <tr>
            <td width="222">Свидетельство о регистрации:</td>
            <td>{fine.doc_number ?? ""}</td>
          </tr>
          <tr>
            <td>Дата постановления:</td>
            <td>{date ?? ""}</td>
          </tr>
          <tr>
            <td> Нарушение:</td>
            <td>{fine.koap_code ?? ""}</td>
          </tr>
          <tr>
            <td>Получатель платежа:</td>
            <td>{fine.payee_username ?? ""}</td>
          </tr>
          <tr>
            <td>ИНН:</td>
            <td>{fine.payee_inn ?? ""}</td>
          </tr>
          <tr>
            <td>КПП:</td>
            <td>{fine.payee_kpp ?? ""}</td>
          </tr>
          <tr>
            <td>Расчетный счет:</td>
            <td>{fine.payee_bank_account ?? ""}</td>
          </tr>
          <tr>
            <td>Банк получателя:</td>
            <td>{fine.payee_bank_name ?? ""}</td>
          </tr>
          <tr>
            <td>БИК:</td>
            <td>{fine.payee_bank_bik ?? ""}</td>
          </tr>
          <tr>
            <td>ОКТМО(ОКАТО):</td>
            <td>{fine.payee_oktmo ?? ""}</td>
          </tr>
          <tr>
            <td>КБК:</td>
            <td>{fine.number ?? ""}</td>
          </tr>
          <tr>
            <td>Сумма штафа:</td>
            <td>{+fine.amount ?? ""}</td>
          </tr>
          <tr>
            <td>Скидка:</td>
            <td>{fine.discount_at ? "активна до " + discountAtdate : ""}</td>
          </tr>
          <tr>
            <td>К оплате:</td>
            <td>{+fine.amount - +fine.discount_size}</td>
          </tr>
        </tbody>
      </table>
    </article>
  );
};

export default Fine;

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
