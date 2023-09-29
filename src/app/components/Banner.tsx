'use client';
import Image, { StaticImageData } from "next/image";
import styled from "styled-components";
import { Conteainer } from "../styles/util";

interface BannerProps {
    image: StaticImageData;
    width: number;
    height: number;
}

const Banner = ({ image, width, height }: BannerProps) => {
    return (
        <StyladBanner>
            <Image src={image} width={width} height={height} alt="banner" />
        </StyladBanner>
    );
};

const StyladBanner = styled.section`
    ${Conteainer};
    border-top: 3px solid ${({ theme }) => theme.colors.primary};
    border-bottom: 3px solid ${({ theme }) => theme.colors.primary};;
`;

export default Banner;