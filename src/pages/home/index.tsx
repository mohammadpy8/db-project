import { FC, useEffect } from 'react'
import Main from '../../template/main'
import Popular from '../../template/popular'
import MasterCart from '../../template/masterCart'
import Details from '../../template/details'
import PriceCrypto from '../../template/priceCrypto'
import SupportCrypto from '../../template/supportCrypto'
import Arz from '../../template/Arz'
import CommentsUsers from '../../template/commetsUser'
import Question from '../../template/question'
import EndSectoinHome from '../../template/endSectionHome'
import LastSection from '../../template/lastSection'
import useLocalStorage from '../../hooks/useLocalStorage'

const HomePage = ({ setUserInfo }: any) => {
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
      .then((result) => setUserInfo(result))
  }, [])

  return (
    <div className="container">
      <Main />
      <Popular />
      <MasterCart />
      <Details />
      <PriceCrypto />
      <SupportCrypto />
      <Arz />
      <CommentsUsers />
      <Question />
      <LastSection />
      <EndSectoinHome />
    </div>
  )
}

export default HomePage
