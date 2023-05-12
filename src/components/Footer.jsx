import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import YouTubeIcon from '@mui/icons-material/YouTube';

function Footer() {
	return (
		<div className="footer">
			<div className='footer-main w-full px-20 pt-6 pb-2 mt-20 flex justify-between items-center border-t-2 '>
			<div className="footer-logo">
				<img className='w-[235px]' src="./image/btl-logo.png" alt="404 error" />
			</div>
			<div className="footer-links flex items-center gap-10 list-none text-xl">
				<div className="footer-icons">
					<InstagramIcon className='footer_icon cursor-pointer' />
				</div>
				<div className="footer-icons">
					<TelegramIcon className='footer_icon cursor-pointer' />
				</div>

				<div className="footer-icons">
					<YouTubeIcon className='footer_icon cursor-pointer' />
				</div>
			</div>
		</div>
		</div>
	)
}

export default Footer