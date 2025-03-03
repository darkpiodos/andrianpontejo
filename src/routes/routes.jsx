import Home from "../pages/Home";
import About from "../pages/About";
import Skills from "../pages/Skills";
import Projects from "../pages/Projects";
import HireMe from "../pages/HireMe";
import MainContainer from "../components/MainContainer";
import NotFound from "../components/NotFound";

const routes = [
  {
    path: "/",
    element: (
      <MainContainer>
        <Home />
      </MainContainer>
    ),
  },
  {
    path: "/about",
    element: (
      <MainContainer>
        <About />
      </MainContainer>
    ),
  },
  {
    path: "/skills",
    element: (
      <MainContainer>
        <Skills />
      </MainContainer>
    ),
  },
  {
    path: "/projects",
    element: (
      <MainContainer>
        <Projects />
      </MainContainer>
    ),
  },
  {
    path: "/hire-me",
    element: (
      <MainContainer>
        <HireMe />
      </MainContainer>
    ),
  },

  {
    path: "*",
    element: (
      <MainContainer>
        <NotFound />
      </MainContainer>
    ),
  },
];

export default routes;
