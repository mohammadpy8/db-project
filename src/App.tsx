import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home";
import Layout from "./layout";
import NotFound from "./pages/notFound";
import About from "./pages/about";
import Arzs from "./pages/arzs";

const App: FC = (): JSX.Element => {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/all-arz" element={<Arzs />}/>
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
};

export default App;
