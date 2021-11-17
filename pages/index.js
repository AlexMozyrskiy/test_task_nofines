import { useState } from "react";

import { useHttp } from "../hooks";

import MainLayout from "../components/Layouts/mainLayout";
import Logo from "../components/Logo";
import SubTitle from "../components/SubTitle";
import Form from "../components/Form";
import Content from "../components/Content";
import Fine from "./fine/[number]";

import st from "../styles/index.module.scss";

const Index = () => {
  /*
    может быть три типа: {} - поиск еще не выполнялся (показываем пустой контент),
    null - штраф не найден после поиска (показываем штраф не найден),
    {} - объект с ответом от сервера
  */
  const [fine, setFine] = useState({});

  return <MainLayout></MainLayout>;
};

export default Index;
