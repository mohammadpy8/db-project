import { FC } from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/home'
import Layout from './layout'
import NotFound from './pages/notFound'
import Arzs from './pages/arzs'
import Login from './pages/login'
import ArzShop from './pages/arzShop'
import MasterShop from './pages/masterShop'
import Cart from './pages/cart'
import DetailsArz from './pages/detailsArz'
import DetailsMasterCart from './pages/detailsMasterCart'
import AdminLayoutPanel from './dashborad/admin/layout'
import MainAdminPanel from './dashborad/admin/main'
import ListArz from './dashborad/admin/listArz'
import EditInfo from './dashborad/admin/editInfo'

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
        <Route element={<AdminLayoutPanel />}>
          <Route path="/admin-dashboard" element={<MainAdminPanel />} />
          <Route path="/admin-dashboard/list-arz" element={<ListArz />} />
          <Route path='/admin-dashboard/edit-info' element={<EditInfo />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
