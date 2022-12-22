import { Button } from '../ButtonElement'
import ImageSlider from '../Slide/ImageSlider';
import { SliderData } from '../Slide/SliderData';
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
import "./Slider.css";

const InfoSection = ({ lightBg, id, imgStart, topLine, lightText, headline, darkText, description,
	img, buttonLabel, alt, primary, dark, dark2 }) => {

	return (
		<InfoContainer lightBg={lightBg} id={id}>
			<InfoWrapper>
				<InfoRow imgStart={imgStart}>
					<Column1>
						<TexrWrapper>
							<TopLine>{topLine}</TopLine>
							<Heading lightText={lightText}>{headline}</Heading>
							<Subtitle darkText={darkText}>We are here to raise your voice.
								Our Student Union is a free space to share, give feedback and find new friends. <br></br>
								<br></br>We will help you make your ideas come true, assist in creating events and give answers to all of your questions about TUMO Labs.
								Who can join us? <br></br>
								Any TUMO Labs student who is <br></br><br></br>
								Motivated<br></br><br></br>
								Has a lot of ideas to share<br></br><br></br>
								Wants to help TUMO Labs students <br></br><br></br>
								If you want to join our team write your motivational letter and send it to labs.student.union@tumo.org.`</Subtitle>
							{/* <BtnWrapp>
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
                </BtnWrapp> */}
						</TexrWrapper>
					</Column1>
					<Column2>
						<ImgWrapp>
							<ImageSlider slides={SliderData} />
							{/* <ImageSlider slides={SliderData} />                 */}
							{/* <Img src = {img} alt = {alt}/> */}
						</ImgWrapp>
					</Column2>
				</InfoRow>
			</InfoWrapper>
		</InfoContainer>
	)
};

export default InfoSection;