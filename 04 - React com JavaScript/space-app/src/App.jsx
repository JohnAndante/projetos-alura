import styled from "styled-components"
import GlobalStyles from "./components/GlobalStyles"
import Sidebar from "./components/Sidebar"
import Header from "./components/Header"
import Banner from "./components/Banner"

const FundoGradiente = styled.div`
    background: linear-gradient(
      174.61deg,
      #041833 4.16%,
      #04244F 48%,
      #154580 96.76%
      );
    width: 100%;
    min-height: 100vh;
  `

function App() {

  return (
    <FundoGradiente>
      <GlobalStyles />
      <Header />
      <Sidebar />
      <Banner
        backgroundImage={'/src/assets/banner.png'}
        texto={'Aprenda programação direto ao ponto'}
      />
    </FundoGradiente>
  )
}

export default App
