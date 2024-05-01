import React from 'react';
import {
	FaFacebook,
	FaInstagram,
	FaYoutube,
	FaTwitter,
	FaLinkedin,
} from 'react-icons/fa';
import {
	FooterContainer,
	FooterWrap,
	SocialMedia,
	SocialMediaWrap,
	SocialLogo,
	SocialIcons,
	SocialIconLink,
} from './FooterElements';

function Footer() {
	return (
		<FooterContainer>
			<FooterWrap>
				<SocialMedia>
					<SocialMediaWrap>
						<SocialLogo to='/'>Siguenos en nuestras Redes Sociales</SocialLogo>
						<SocialIcons>
							{/* <SocialIconLink
								href='https://www.facebook.com/Delicious Cakevzla'
								target='_blank'
								aria-label='Facebook'
								rel='noopener noreferrer'
							>
								<FaFacebook />
							</SocialIconLink> */}
							<SocialIconLink
								href='https://instagram.com/deliciouscake.bcn'
								target='_blank'
								aria-label='Instagram'
								rel='noopener noreferrer'
							>
								<FaInstagram />
							</SocialIconLink>
							{/* <SocialIconLink
								href='https://www.youtube.com/@Delicious Cake.v'
								target='_blank'
								aria-label='YouTube'
								rel='noopener noreferrer'
							>
								<FaYoutube />
							</SocialIconLink> */}
							{/* <SocialIconLink
								href='/'
								target='_blank'
								aria-label='Twitter'
								rel='noopener noreferrer'
							>
								<FaTwitter />
							</SocialIconLink>
							<SocialIconLink
								href='/'
								target='_blank'
								aria-label='Linkedin'
								rel='noopener noreferrer'
							>
								<FaLinkedin />
							</SocialIconLink> */}
						</SocialIcons>
					</SocialMediaWrap>
				</SocialMedia>
			</FooterWrap>
		</FooterContainer>
	);
}

export default Footer;
