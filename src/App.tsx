import { FC, useEffect, useState } from 'react'
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
import ListMaster from './dashborad/admin/listMaster'
import UsersLayoutPanel from './dashborad/users/layout'
import MainUsersPanel from './dashborad/users/main'
import ListUsers from './dashborad/admin/listUsers'
import ListComments from './dashborad/admin/listComments'
import MyComments from './dashborad/users/myComments'
import MyArz from './dashborad/users/myArz'
import EditInfoUsers from './dashborad/users/editInfo'
import ProtedtedRoutes from './module/protectedRouts'
import AuthContextProvider from './context/AuthContextProvider'
import useLocalStorage from './hooks/useLocalStorage'
import useSaveInfoLocalStorage from './hooks/useSaveInfoLocalStorage'

interface UserInfos {
  username?: string
  password?: string
  is_staff?: string
  full_name?: string
}

const App: FC = (): JSX.Element => {
  const [userInfo, setUserInfo] = useState<UserInfos>({
    username: '',
    password: '',
    is_staff: '',
    full_name: '',
  })

  const getToken = useLocalStorage('', 'GET')
  console.log(getToken)

  useEffect(() => {
    fetch('http://127.0.0.1:8000/digital/customer/me/', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `JWT ${getToken}`,
      },
    })
      .then((res) => res.json())
      .then((result) => useSaveInfoLocalStorage(result, 'SET'))
  }, [])

  return (
    <>
      <AuthContextProvider>
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
          <Route path="/admin-dashboard" element={<AdminLayoutPanel />}>
            <Route
              path="/admin-dashboard/dashboard"
              element={<MainAdminPanel />}
            />
            <Route path="/admin-dashboard/list-arz" element={<ListArz />} />
            <Route path="/admin-dashboard/edit-info" element={<EditInfo />} />
            <Route path="/admin-dashboard/list-users" element={<ListUsers />} />
            <Route
              path="/admin-dashboard/list-commnts"
              element={<ListComments />}
            />
            <Route
              path="/admin-dashboard/list-master-cart"
              element={<ListMaster />}
            />
          </Route>
          <Route path="/users-dashboard" element={<UsersLayoutPanel />}>
            <Route
              path="/users-dashboard/dashboard"
              element={<MainUsersPanel />}
            />
            <Route
              path="/users-dashboard/my-comments"
              element={<MyComments />}
            />
            <Route path="/users-dashboard/my-arz" element={<MyArz />} />
            <Route
              path="/users-dashboard/edit-info"
              element={<EditInfoUsers />}
            />
          </Route>
        </Routes>
      </AuthContextProvider>
    </>
  )
}

export default App
