import styled from "styled-components"
import { Link } from "react-router-dom";

export const ServicesContainer = styled.div`
  height: 100wh;
  display:flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
  background: #010606;

  @media screen and (max-width: 768px){
    height: 100wh; 
  }
  @media screen and (max-width: 480px){
    height:100wh;
  }
`;

export const ServicesH1 = styled.h1`
  font-size: 2.5rem;
  color:#fff;
  margin-bottom:64px;

  @media screen and (max-width: 480px){
    font-size: 2rem;
  }
`;

export const ServicesWrapper = styled.div`
  margin :0 auto;
  display:grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px; 
  marhin-bottom: 2000px;
  @media screen and (max-width: 1000px){
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 768px){
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const ServicesCard = styled.div`
  max-wigth: 300px;
  width: 300px;
  background : #fff;
  display : flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items:center;
  border-radius: 10px;
  max-height: 340px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.2);
  transition: all 0.2s ease-in-out;
  &:hover{
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor:pointer;
  }
  margin-bottom: 20px;
`;

export const ServicesIcon = styled.img`
  height: 160px;
  width:160px;
  margin-bottom:10px;

`;

export const ServicesH2 = styled.h2`
  font-size:1rem;
  margin-bottom:10px;

`;

export const ServicesP = styled.p`
    font-size:1rem;
    text-align:center;
    color: black;
`;

export const Icon = styled(Link)`
  margin-left: 32px;
  margin-top: 32px;
  text-decoration: none;
  color: #fff;
  font-weight: 700;
  font-size: 32px;
  @media screen and (max-width: 480px) {
    margin-left: 16px;
    margin-top: 8px;
  }
`;