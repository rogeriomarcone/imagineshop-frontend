'use client';

import { styled } from "styled-components";

import Image from "next/image";
import Link from "next/link";
import Logo from "../../../public/logo.png";
import ShoppinCartImage from "../../../public/carrinho.png"
import { Conteainer } from "../styles/util";


const Header = () => {

  return (
    <>
      <StyledHeader>
        <StyledNavbar>
          <Image src={Logo} width={200} height={100} alt="imagineshop logo" />
          <StayledMenu>

            <StyledMenuItem>
              <Link href="/">Home</Link>
            </StyledMenuItem>

            <StyledMenuItem>
              <Link href="/about">Sobre</Link>
            </StyledMenuItem>

            <StyledMenuItem>
              <Link href="/shopping-cart">
                <Image src={ShoppinCartImage} width={52} height={52} alt="shopping cart image" />
              </Link>

            </StyledMenuItem>
          </StayledMenu>
        </StyledNavbar>
      </StyledHeader>

    </>
  )
}

const StyledHeader = styled.header`
  width: 100vw;
  margin: 1.87rem 0 3.125rem 0;
`;

const StyledNavbar = styled.nav`
  ${Conteainer};
  display: flex;
  align-items: center;
  justify-content: space-between;

`;

const StayledMenu = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  gap: 2.5rem;
  align-items: center;
`;

const StyledMenuItem = styled.li`
  font-size: 16px;
  font-weight: 700;


  a {
    text-decoration: none;
    color: #000;
  }

  a:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export default Header;