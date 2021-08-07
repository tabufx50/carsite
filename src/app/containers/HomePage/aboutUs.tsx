import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { SCREENS } from '../../components/responsive';

import JeepImg from "../../../assets/images/jeep.png";

const AboutUsContainer = styled.div`
    ${tw`
        w-full 
        flex
        flex-wrap
        items-center
        2xl:justify-center
        pt-4 
        pb-4 
        pr-7 
        pl-7 
        md:pl-0 
        md:pr-0 
        bg-white

    `};

`;

const CarContainer = styled.div`
    width: auto;
    height: 15em;
    margin-left: -30px;

    img {
        width: auto;
        height: 100%;
    }

    @media (min-width: ${SCREENS.md}) {
        height: 28em;
    }
    @media (min-width: ${SCREENS.lg}) {
        height: 30em;
    }
    @media (min-width: ${SCREENS["2xl"]}) {
        height: 35em;
        margin-left: 0;
    }
`;

const InfoContainer = styled.div`
    ${tw`
        md:w-1/2 
        flex
        flex-col
        md:ml-6 
        2xl:ml-16 

    `};
`;

const Title = styled.h1`
    ${tw`
        text-black
        text-2xl 
        md:text-5xl 
        font-extrabold
        md:font-black
        md:leading-normal

    `};
`;

const InfoText = styled.p`
    ${tw`
        md:max-w-2xl 
        text-sm
        md:text-base
        text-gray-500 
        font-normal
        mt-4 
    `};
`;

export function AboutUs() {
    return <AboutUsContainer>
        <CarContainer>
            <img src={JeepImg} />
        </CarContainer>
        <InfoContainer>
            <Title>
                Feel The Best Experieince With Our Rental Deals
            </Title>
            <InfoText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla in eros sodales, viverra odio a, maximus nunc. Nunc sit amet tempus elit. Mauris posuere interdum est a elementum. Phasellus sodales tristique mi, vitae faucibus massa placerat quis. Proin vestibulum nisl ac consequat placerat. Nunc sit amet tempus elit. Mauris posuere interdum est a elementum.
            </InfoText>
        </InfoContainer>
    </AboutUsContainer>
    
}


