import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home";
import Layout from "./layout";
import NotFound from "./pages/notFound";
import About from "./pages/about";
import Arzs from "./pages/arzs";
import Login from "./pages/login";
import Register from "./pages/register";
import DashboradLayout from "./dashborad";
import AdminPanel from "./dashborad/admin";
import ArzShop from "./pages/arzShop";

const App: FC = (): JSX.Element => {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/all-arz" element={<Arzs />} />
          <Route path="/arz-shop" element={<ArzShop />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route element={<DashboradLayout />}>
          <Route path="/dashboard-admin" element={<AdminPanel />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
};

export default App;
