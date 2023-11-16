import { BrowserRouter, Route, Routes } from "react-router-dom";
import { FC } from "react";
import AddMovie from "../pages/AddMovie";
import MyMovies from "../pages/MyMovies";
import { MainLayout } from "../layouts/MainLayout";
import Watched from "../pages/Watched";
import Login from "../pages/Login";

const RouterPaths: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<MainLayout />}>
          <Route path="/watchlist" element={<MyMovies />} />
          <Route path="/add" element={<AddMovie />} />
          <Route path="/watched" element={<Watched />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RouterPaths;
