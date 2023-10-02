'use client';

import { Product } from "@/app/interfaces/product";
import Image from "next/image";
import { styled } from "styled-components";
import useSWR from 'swr';

import BannerImage from '../../../../public/banner02.png';
import Banner from "@/app/components/Banner";
import { Container } from "@/app/styles/util";


/// carrega pagina pelo servidor
/*
async function getProduct2(id: string): Promise<any> {

    const res = await fetch(`http://localhost:3333/products/${id}`);

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    const productData: any = await res.json();
    productData.image = `http://localhost:3333/uploads/${productData.fileName}`;
    productData.formattedPrice = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(productData.price);
    productData.splitPrice = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format((productData.price / 10));

    return productData;
}
*/

/// caregar pagina pelo cliente
interface GetProduct {
    product: Product;
    isLoading: boolean;
    isError: boolean;
}

const fetcher = (url: string) => fetch(url, { mode: "cors" }).then(r => r.json());

const getProduct = (id: string): GetProduct => {
    const { data, error, isLoading } = useSWR(`http://localhost:3333/products/${id}`, fetcher);
    if (data) {
        data.image = `http://localhost:3333/uploads/${data.fileName}`;
        data.formattedPrice = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(data.price);
        data.splitPrice = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format((data.price / 10));
    }

    return {
        product: data,
        isLoading,
        isError: error
    }
}

const ProductItem = ({ params }: { params: { productId: string } }) => {
    const { product, isLoading, isError } = getProduct(params.productId);
    if (isError) return <StyledMinHeight>falhou ao carregar</StyledMinHeight>
    if (isLoading) return <StyledMinHeight>carregando...</StyledMinHeight>
    return (
      <>
      <StyledProduct>
        <Banner image={BannerImage} width={1140} height={145}/>
        <ProductDetail>
          <ImageContainer>
            <Image src={product.image} width={200} height={200} alt="imagem do produto"/>
          </ImageContainer>

          <div>
            <ProductName>
              {product.name}
            </ProductName>

            <ProductPrice>
              {product.formattedPrice}
            </ProductPrice>

            <ProductSplitPrice>
              10x de {product.splitPrice} sem juros
            </ProductSplitPrice>

            <Button onClick={() => { }}>
              Adicionar ao carrinho
            </Button>

            <ProductDescription>
              {product.description}
            </ProductDescription>
          </div>
        </ProductDetail>

        <SummaryTitle>
          <span>Inf</span>ormações do produto
        </SummaryTitle>

        <Summary>
          {product.summary}
        </Summary>
      </StyledProduct>
    </>
    )
}

const StyledMinHeight = styled.div`
  min-height: 60vh;
  text-align: center;
`;

const StyledProduct = styled.div`
  ${Container};
`;

const ProductDetail = styled.div`
  display: grid;
  grid-template-columns: 31.25rem auto;
  gap: 1rem;
  margin: 3.125rem 0;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #eaeaea;
  border-radius: 4px;
`;

const ProductName = styled.p`
  font-size: 1.875rem;
  font-weight: 700;
  margin: 0;
`;

const ProductPrice = styled.p`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 2.125rem;
  font-weight: 700;
  margin: 0;
  margin-top: 2.8125rem;
`;

const ProductSplitPrice = styled.small`
  font-size: 0.875rem;
  color: #999;
`;

const Button = styled.button`
  display: block;
  border: unset;
  border-radius: 4px;
  width: 290px;
  height: 60px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: #fff;
  font-weight: 700;
  font-size: 1rem;
  font-family: 'Montserrat', sans-serif;
  cursor: pointer;
  margin: 2.25rem 0;
`;

const ProductDescription = styled.small`
  font-size: 0.875rem;
`;

const SummaryTitle = styled.p`
  font-size: 1.875rem;
  font-weight: 700;
  margin: 0;
  margin-bottom: 2.8rem;
  span {
    text-decoration: underline ${({ theme }) => theme.colors.primary};
  }
`;

const Summary = styled.div`
  min-height: 800px;
`;


export default ProductItem;