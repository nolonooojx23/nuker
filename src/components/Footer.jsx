import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Logo from '../../public/image/btl-logo.png';
import { Element } from 'react-scroll';

function Footer() {
	return (
		<Element name="contactSection">
		<div className="footer">
			<div className='footer-main w-full px-20 pt-6 pb-2 mt-20 flex justify-between items-center max-[430px]:flex-wrap max-[430px]:justify-center border-t-2 max-md:px-10 max-sm:px-5 '>
			<div className="footer-logo">
				<img className='w-[235px] max-md:w-[200px]' src={Logo} alt="404 error" />
			</div>
			<div className="footer-links flex items-center gap-10 list-none text-xl max-md:gap-3">
				<div className="footer-icons w-[35px] h-[35px] border-transparent rounded-full flex justify-center items-center">
					<InstagramIcon className='footer_icon cursor-pointer' />
				</div>
				<div className="footer-icons w-[35px] h-[35px] border-transparent rounded-full flex justify-center items-center">
					<TelegramIcon className='footer_icon cursor-pointer' />
				</div>

				<div className="footer-icons w-[35px] h-[35px] border-transparent rounded-full flex justify-center items-center">
					<YouTubeIcon className='footer_icon cursor-pointer' />
				</div>
			</div>
		</div>
		</div>
		</Element>
	)
}

export default Footer