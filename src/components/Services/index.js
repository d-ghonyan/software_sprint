import React from "react";
import {
  ServicesContainer,
  ServicesH1,
  ServicesH2,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesP
} from "./SeviceElements"


const Services = () => {
  return (
    <ServicesContainer id="sevices">
      <ServicesH1>Our Programm</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={"../../images/svg_1.svg"} />
          <ServicesH2>Our Program</ServicesH2>
          <ServicesP>chgitem</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={"../../images/svg_2.svg"} />
          <ServicesH2>Programm</ServicesH2>
          <ServicesP>chgitem</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={"../../images/svg_1.svg"} />
          <ServicesH2>Programm</ServicesH2>
          <ServicesP>chgitem</ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
