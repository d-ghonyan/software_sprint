import React, {useState} from "react";
import {HeroContainer, 
  HeroBg, 
  VideoBg,  
  HeroContent, 
  HeroH1, 
  HeroP, 
  HeroBtnWrapper, 
  ArrowForward,
  ArrowRight 
} from "./HeroElements"
import {Button} from "../ButtonElement"
import Video from "../../videos/video.mp4";

const HeroSection= () => {

  const [hover, setHover] = useState(false);

  const onHover = ()=>{
    setHover(!hover);
  }
  return (
    <HeroContainer id = "home">
      <HeroBg>
          <VideoBg autoPlay loop muted>
		  	<source src={Video} type="video/mp4" />
		  </VideoBg>
      </HeroBg>
      <HeroContent>
        <HeroH1>Student Union</HeroH1>
        {/* <HeroP>Sign up to join us</HeroP> */}
        <HeroBtnWrapper> 
          {/* <Button  to = 'signup' onMouseEnter = {onHover} onMouseLeave = {onHover}
          primary = "true"
          dark = "false"       
          smooth = "true"
          duration= {400}
          spy = {true}
          exact='true'
          offset={-80}  
          >
            Get Started {hover ? <ArrowForward/> : <ArrowRight/>}
          </Button> */}
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
