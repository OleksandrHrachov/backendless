import "./App.scss";
import Navigation from "./components/Navigation/Navigation";
import { Routes, Route, Navigate } from "react-router-dom";
import { Path } from "./path";
import Table from "./pages/Table/Table";
import Chart from "./pages/Chart/Chart";
import List from "./pages/List/List";

export const App = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path={Path.TABLE} element={<Table />} />
        <Route path={Path.CHART} element={<Chart />} />
        <Route path={Path.LIST} element={<List />} />
        <Route path="*" element={<Navigate to={Path.TABLE} />} />
      </Routes>
    </>
  );
};
