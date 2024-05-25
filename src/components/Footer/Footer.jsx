import React from 'react';
import {
	FaInstagram,

} from 'react-icons/fa';
import {
	FooterContainer,
	FooterWrap,
	SocialMedia,
	SocialMediaWrap,
	SocialIcons,
	SocialIconLink,
} from './FooterElements';

function Footer() {
	return (
		<FooterContainer>
			<FooterWrap>
				<SocialMedia>
					<SocialMediaWrap>
						<SocialIconLink >
							<a target='__blank' href="https://wa.me/34613380771" style={{ "color": "white", textDecoration: "none" }}>

								+34 613 38 07 71
							</a>
						</SocialIconLink>
						<SocialIcons>

							<SocialIconLink
								href='https://instagram.com/deliciouscake.bcn'
								target='_blank'
								aria-label='Instagram'
								rel='noopener noreferrer'
							>
								<FaInstagram />
							</SocialIconLink>

						</SocialIcons>
					</SocialMediaWrap>
				</SocialMedia>
			</FooterWrap>
		</FooterContainer>
	);
}

export default Footer;
