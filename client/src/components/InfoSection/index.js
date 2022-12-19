import {Button} from '../ButtonElement'
import {
  Img, 
  ImgWrapp,
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TexrWrapper,
  BtnWrapp,
  TopLine,
  Heading,
  Subtitle
 } from "./InfoElements";

const InfoSection = ({lightBg, id, imgStart, topLine, lightText, headline, darkText, description, 
  img, buttonLabel, alt, primary, dark, dark2}) => {

  return (
      <InfoContainer lightBg = {lightBg} id = {id}>
      <InfoWrapper>
          <InfoRow imgStart = {imgStart}>
            <Column1>
              <TexrWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText = {lightText}>{headline}</Heading>
                <Subtitle darkText = {darkText}>{description}</Subtitle>
                <BtnWrapp>
                  <Button to = 'home'
                  smooth = "true"
                  duration={500}
                  spy = {true}
                  exacr="true"
                  offset = {-80}
                  primary={primary ? 1:0}
                  dark = {dark ? 1 : 0}
                  dark2 = {dark2 ? 1 : 0}

                  >{buttonLabel}</Button>
                </BtnWrapp>
              </TexrWrapper>
            </Column1>
            <Column2>
              <ImgWrapp>
                <Img src = {img} alt = {alt}/>
              </ImgWrapp>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
  )
};

export default InfoSection;