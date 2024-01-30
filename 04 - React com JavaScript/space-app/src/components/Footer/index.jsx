import { styled } from 'styled-components';

const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 100px;
  background-color: #04244f;
  padding: 20px;
  box-sizing: border-box;
`;

const ContainerIcon = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  li {
    display: inline-block;
    margin-right: 32px;
  }
`;

const FooterText = styled.p`
  font-size: 16px;
  color: #FFF;
  margin: 0;
  a {
    text-decoration: none;
    cursor: pointer;
    color: #b8bdff;
  }
`;


const Footer = () => {
  return (
    <StyledFooter>
      <ContainerIcon>
        <li>
          <a href="#">
            <img src="/images/socials/facebook.svg" alt="Facebook Icon" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src="/images/socials/twitter.svg" alt="Twitter Icon" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src="/images/socials/instagram.svg" alt="Instagram Icon" />
          </a>
        </li>
      </ContainerIcon>
      <FooterText>Desenvolvido por <a href="https://github.com/johnAndante/" target="_blank">JohnAndante</a></FooterText>
    </StyledFooter>
  )
}

export default Footer;
