import MainLayout from "../components/Layouts/mainLayout";
import Loader from "../components/Loader";

const Index = ({ loading }) => {
  return <MainLayout>{loading && <Loader />}</MainLayout>;
};

export default Index;
