import React from "react";
import {
  HeroImage,
  MainButtons,
  MainDescription,
  MainDetails,
  MainHero,
  MainImage,
  MainTitleLine,
  MainTitleTextGradient,
  MainTitlte,
} from "../styles/Hero.styled";
import { StyledButton } from "../styles/Button.styled";
import {
  BsArrowUpRightCircleFill as ArrowIcon,
  BsFillPlayCircleFill as PlayIcon,
} from "react-icons/bs";
import heroImg from "../../assets/a3.png";

const Hero = () => {
  return (
    <MainHero>
      <MainDetails>
        <MainTitlte>
           <MainTitleLine>Your body can stand almost anything  </MainTitleLine> <br />
           It’s your mind that you<MainTitleTextGradient>have to convince.</MainTitleTextGradient>
        </MainTitlte>
        <MainDescription>
          Gym center is your new home in boutique wellness. We join the
          dependable standards of Pilates with forefront development to give you
          the most out of each exercise.
        </MainDescription>
        <MainButtons>
          <StyledButton primary={true}>
            Get Started <ArrowIcon />
          </StyledButton>
          <StyledButton>
            Learn More <PlayIcon />{" "}
          </StyledButton>
        </MainButtons>
      </MainDetails>

      <MainImage>
        <HeroImage src={heroImg} alt="main image" />
      </MainImage>
    </MainHero>
  );
};

export default Hero;
