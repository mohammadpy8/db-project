import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home";
import Layout from "./layout";
import NotFound from "./pages/notFound";
import Arzs from "./pages/arzs";
import Login from "./pages/login";
import DashboradLayout from "./dashborad";
import AdminPanel from "./dashborad/admin";
import ArzShop from "./pages/arzShop";
import MasterShop from "./pages/masterShop";
import Cart from "./pages/cart";
import DetailsArz from "./pages/detailsArz";
import DetailsMasterCart from "./pages/detailsMasterCart";

const App: FC = (): JSX.Element => {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/all-arz" element={<Arzs />} />
          <Route path="/arz-shop" element={<ArzShop />} />
          <Route path="/arz-shop/:id" element={<DetailsArz />} />
          <Route path="/master-shop" element={<MasterShop />} />
          <Route path="/master-shop/:id" element={<DetailsMasterCart />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route element={<DashboradLayout />}>
          <Route path="/dashboard-admin" element={<AdminPanel />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
