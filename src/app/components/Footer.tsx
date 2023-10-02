import Image from "next/image";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "../../../public/logo.png"
import { Container } from "../styles/util";
import { faFacebookSquare, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";


const Footer = () => {
    return (
        <StyledFooter>
            <StyledFooterContainer>

                <Image src={Logo} width={130} height={60} alt="imagineshop logo" />

                <StyledFooterContact>
                    Imagine Shop - +55 (48) 3771 - 1703 3771 - 1823 - imagine@imagineschool.com.br - Rua Miguel Daux, 129 - Coqueiros - Florianópolis/SC
                </StyledFooterContact>

                <StyledSocialMediaLinks>
                    <li>
                        <StyledSocialMediaIncon icon={faFacebookSquare} />
                    </li>
                    <li>
                        <StyledSocialMediaIncon icon={faInstagram} />
                    </li>
                    <li>
                        <StyledSocialMediaIncon icon={faYoutube} />
                    </li>
                </StyledSocialMediaLinks>
            </StyledFooterContainer>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
   /* width: 100vw; */
    height: 12.5rem;
    background-color: #f4f4f4;
`;

const StyledFooterContainer = styled.div`
    ${Container};
    display: grid;
    grid-template-columns: 130px auto 130px;
    padding: 2.5rem 0;
`;

const StyledFooterContact = styled.p`
    font-size: 0.75rem;
    color: ${({ theme }) => theme.colors.secondary};
    margin: 0%;
    text-align: center;
    margin-top: 8.125rem;
`;

const StyledSocialMediaLinks = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  gap: 1.5rem;
`;

const StyledSocialMediaIncon = styled(FontAwesomeIcon)`
   color: ${({ theme }) => theme.colors.secondary}; 
   font-size: 1.875rem;
`;

export default Footer;