'use client';
import styled from "styled-components";
import { Conteainer } from "../styles/util";
import Link from "next/link";
import Image from "next/image";

//temporario
import Logo from '../../../public/logo.png';

const Products = () => {
    return (
        <StyledProducts>
            <StyledTitle><span>Des</span>taque</StyledTitle>
            <StyledProductList>
                <StyledProductItem>
                    <Link href='/'>
                        <Image src={Logo} width={230} height={230} alt="produto" />
                        <StyledProductName>Smartphone Samsung Galaxy J8 64GB Dual Chip Android 8.0</StyledProductName>
                        <StyledProductPrice>R$ 1200,00</StyledProductPrice>
                        <StyledProductSpritPrice>10x de R$ 129,90 sem juros</StyledProductSpritPrice>
                    </Link>
                </StyledProductItem>
            </StyledProductList>
        </StyledProducts>
    );
};

const StyledProducts = styled.section`
    ${Conteainer}
`;

const StyledTitle = styled.h2`
    font-size: 1.875rem;
    font-weight: 700;
    margin-top: 3.125rem;
    margin-bottom: 2.8rem;
    span {
       text-decoration: underline ${({ theme }) => theme.colors.primary};
    }
`;

const StyledProductList = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2.125rem;
    margin-bottom: 11.25rem;
`;

const StyledProductItem = styled.div`
    height: 23.125rem;
    border: 1px solid #eaeaea;
    border-radius: 4px;
    box-shadow: 5px 0px 10px #d9d9d9;
    padding: 1rem;

    &:hover {
        box-shadow: 5px 10px 10px #d9d9d9;
        p {
            color: ${({ theme }) => theme.colors.primary};
        }
    }
`;

const StyledProductName = styled.p`
    font-size: 0.875rem;
`;

const StyledProductPrice = styled.p`
    font-size: 1.125rem;
    font-weight: 700;
    margin: 1.125rem 0;
`;

const StyledProductSpritPrice = styled.small`
    font-size: 0.75rem;
    font-weight: 700;
    color: #999;
`;

export default Products;