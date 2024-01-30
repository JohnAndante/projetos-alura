import TextField from "../TextField";
import styled from "styled-components";

const StylizedHeader = styled.header`
  padding: 60px 0;
  display: flex;
  justify-content: space-between;

  img {
    max-width: 212px;
  }
  `

  ;

const Header = ({ filter, setFilter }) => {
  return (
    <StylizedHeader>
      <img src='/images/logo.png' alt='logo' />
      <TextField filter={filter} setFilter={setFilter} />
    </StylizedHeader>
  )
}

export default Header;
