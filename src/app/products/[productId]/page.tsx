'use client';

import styled from "styled-components";

import { Product } from "@/app/interfaces/products";
import { Conteainer } from "@/app/styles/util";

async function getProduct(id: String): Promise<any> {

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


const ProductItem = async ({ params }: { params: { productId: string } }) => {
    const product: Product = await getProduct(params.productId);
    return (
        <StyledProduct>
            {product.name}
        </StyledProduct>
    )
}

const StyledProduct = styled.main`
    ${Conteainer}
`;

export default ProductItem;