import Logo from "../../components/Logo/index";
import IconesHeader from "../../components/IconesHeader";
import OpcoesHeader from "../../components/OpcoesHeader";
import styled from "styled-components";
import { Link } from "react-router-dom";

const HeaderContainer = styled.header`
  background-color: #fff;
  display: flex;
  justify-content: center;

  li {
    list-style: none;
  }
`;

function Header() {
  return (
    <HeaderContainer>
      <Link to={"/"}>
        <Logo />
      </Link>
      <OpcoesHeader />
      <IconesHeader />
    </HeaderContainer>
  );
}

export default Header;
