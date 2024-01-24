import styled from "styled-components";
import NavItem from "./NavItem";

const StyledList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 212px;
`;

const Sidebar = () => {
  return (
    <aside>
      <nav>
        <StyledList>
          <NavItem
            activeIcon='/public/icons/home-ativo.png'
            inactiveIcon='/public/icons/home-inativo.png'
            active={true}
          >
            Início
          </NavItem>
          <NavItem
            activeIcon='/public/icons/mais-vistas-ativo.png'
            inactiveIcon='/public/icons/mais-vistas-inativo.png'
          >
            Mais vistas
          </NavItem>
          <NavItem
            activeIcon='/public/icons/mais-curtidas-ativo.png'
            inactiveIcon='/public/icons/mais-curtidas-inativo.png'
          >
            Mais curtidas
          </NavItem>
          <NavItem
            activeIcon='/public/icons/novas-ativo.png'
            inactiveIcon='/public/icons/novas-inativo.png'
          >
            Novas
          </NavItem>
          <NavItem
            activeIcon='/public/icons/surpreenda-me-ativo.png'
            inactiveIcon='/public/icons/surpreenda-me-inativo.png'
          >
            Surpreenda-me
          </NavItem>
        </StyledList>
      </nav>
    </aside>
  )
}

export default Sidebar;
