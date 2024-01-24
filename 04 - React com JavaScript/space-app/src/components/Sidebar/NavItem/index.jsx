import styled from "styled-components";

const StyledListItem = styled.li`
  font-size: 20px;
  line-height: 29px;
  margin-bottom: 30px;
  cursor: pointer;
  color: ${({ $active }) => $active ? '#7B78E5' : '#D9D9D9'};
  font-family: ${({ $active }) => $active ? 'GandhiSansBold' : 'GandhiSansRegular'};
  display: flex;
  align-items: center;
  gap: 22px;
`;

const NavItem = ({ children, activeIcon, inactiveIcon, active = false }) => {
  return (
    <StyledListItem $active={active}>
      <img src={active ? activeIcon : inactiveIcon} alt={children} />
      <span>{children}</span>
    </StyledListItem>
  )
}

export default NavItem;
