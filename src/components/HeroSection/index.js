import React from 'react'
import { HeroContainer, HeroLeftContainer, Img, SubHead, ClickButtons, HeroRightContainer, HeroInnerContainer, TextLoop, Title, Span, SubTitle, ResumeButton } from './HeroStyle'
import HeroImg from '../../Assets/DeepProfile.jpg'
import Typewriter from 'typewriter-effect';
import { Bio } from '../../data/constants';

const HeroSection = () => {
    return (
        <div id="about">
            <HeroContainer>
                <HeroInnerContainer >
                    <HeroLeftContainer id="Left">
                        <Title> {Bio.name}</Title>
                        <TextLoop>
                            I am a 
                            <Span>
                                <Typewriter
                                    options={{
                                        strings: Bio.roles,
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </Span>
                        </TextLoop>
                        <SubHead>{Bio.descriptionhead}</SubHead>
                        <SubTitle>{Bio.description}</SubTitle>
                        <SubHead>{Bio.descriptionhead2}</SubHead>
                        <SubTitle>{Bio.description2}</SubTitle>
                        <SubHead>{Bio.descriptionhead3}</SubHead>
                        <SubTitle>{Bio.description3}</SubTitle>
                        <ClickButtons> 
                            <ResumeButton href={Bio.resume} target='display'>Resume</ResumeButton>
                            <ResumeButton href={Bio.coverletter} target='display'>Cover Letter</ResumeButton>
                        </ClickButtons>
                    </HeroLeftContainer>

                    <HeroRightContainer id="Right">

                        <Img src={HeroImg} alt="hero-image" />
                    </HeroRightContainer>
                </HeroInnerContainer>

            </HeroContainer>
        </div>
    )
}

export default HeroSection