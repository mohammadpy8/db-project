import { FC } from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/home'
import Layout from './layout'

const App: FC = () : JSX.Element => {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Layout>
    </>
  )
}

export default App
