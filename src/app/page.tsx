'use client';

import styled from "styled-components";

import Banner from "./components/Banner";
import Products from "./components/Products";
import BannerImage from '../../public/banner01.png'

async function getProducts() {
  const res = await fetch('http://localhost:3333/products');
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  const productsData: any[] = await res.json();
  productsData.forEach(product => {
    product.image = `http://localhost:3333/uploads/${product.fileName}`;
    product.formattedPrice = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(product.price);
  })

  console.log(productsData);
  return productsData;
}

export default async function Home() {
  const data = await getProducts();

  return (
    <StyledMain>
      <Banner image={BannerImage} width={1140} height={325} />
      <p>Homer Work</p>
      <Products />
    </StyledMain>
  )
}

const StyledMain = styled.main`
  min-height: 60.5vh;
`;
