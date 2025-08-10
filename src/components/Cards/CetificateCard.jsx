import React from 'react'
import styled from 'styled-components'

import WSIB from '../../Assets/Certificates/WSIB.jpg'
import Maskfit from '../../Assets/Certificates/Maskfit.jpg'
import BLS from '../../Assets/Certificates/BLS.png'
import Degree from '../../Assets/Certificates/Degree.png'
import FirstAid from '../../Assets/Certificates/FirstAid.png'
import PCC from '../../Assets/Certificates/PCC.png'

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    padding: 20px;
    justify-items: center;

    @media only screen and (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`

const Card = styled.div`
    border-radius: 10px;
    padding: 12px 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    transition: all 0.3s ease-in-out;
    border: 0.1px solid #306EE8;
    box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
   
    
    &:hover {
        box-shadow: 0px 0px 20px rgba(0,0,0,0.2);
        transform: translateY(-5px);
    }
`

const ImageWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 100%;
    max-height: 300px;
    overflow: hidden;
`

const Image = styled.img`
    width: auto;
    height: auto;
    max-width: 100%;
    max-height: 300px;
    border-radius: 10px;
    object-fit: contain;
    background-color: #f8f8f8;
`

const Role = styled.div`
    font-size: 18px;
    font-weight: 600;
    color: ${({ theme }) => theme.text_primary + 99};
    text-align: center;
    word-break: break-word;
    
    @media only screen and (max-width: 768px){
        font-size: 14px;
    }
`

const CertificateCard = ({ src, name }) => {
    return (
        <Card>
            <ImageWrapper>
                <Image src={src} alt={name} />
            </ImageWrapper>
            <Role>{name}</Role>
        </Card>
    );
}

const CertificateList = [
    { img: WSIB, name: 'WSIB', type: 'Other' },
    { img: Maskfit, name: 'Maskfit', type: 'Other' },
    { img: BLS, name: 'BLS', type: 'Other' },
    { img: FirstAid, name: 'First AID', type: 'Other' },
    { img: Degree, name: 'Bachelors of Science', type: 'Other' },
    { img: PCC, name: 'Vulnerable Sector Check', type: 'Other' },
]

const CertificateCardList = () => {
    return (
        <Grid>
            {CertificateList.map((certi, index) => (
                <CertificateCard key={index} src={certi.img} name={certi.name} />
            ))}
        </Grid>
    );
}

export default CertificateCardList
