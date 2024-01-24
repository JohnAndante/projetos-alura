import TextField from "../TextField";
import styled from "styled-components";

const StylizedHeader = styled.header`
  padding: 60px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    max-width: 212px;
    height: auto;
  }
  `

;

const Header = () => {
  return (
    <StylizedHeader>
      <img src='/public/images/logo.png' alt='logo' />

      <TextField />
    </StylizedHeader>
  )
}

export default Header;
