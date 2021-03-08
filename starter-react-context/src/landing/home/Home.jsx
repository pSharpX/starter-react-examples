import React, { useContext } from "react";
import MainLayout from "../../common/layout/MainLayout";
import { DataContext } from "../../context/DataContext";
// import ItemList from '../../item/ItemList';
// import { SecureButton } from '../../core/routing/PrivateRoute';

function Home() {
  const [data, setData] = useContext(DataContext);

  const changeFirstname = () => {
    setData({
      ...data,
      nombre: "Christian",
    });
  };

  const changeLastname = () => {
    setData({
      ...data,
      apellido: "Ronaldo",
    });
  };

  return (
    <MainLayout HeaderBox={<span>This is the header box section</span>}>
      {/* <SecureButton />
            <ItemList /> */}
      <p>
        Welcome {data.nombre} {data.apellido}!!, this is our home page
      </p>
      <button onClick={changeFirstname} className="btn btn-primary mr-2">
        Change firstname
      </button>
      <button onClick={changeLastname} className="btn btn-primary">
        Change lastname
      </button>
    </MainLayout>
  );
}

export default Home;
