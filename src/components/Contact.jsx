import React from 'react'
import ClearIcon from '@mui/icons-material/Clear';
import { Link } from 'react-router-dom'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import YouTubeIcon from '@mui/icons-material/YouTube';

function Contact() {
	return (
		<div className='contact fixed top-0 left-0 w-full h-[100vh] z-[100000] flex justify-center items-center'>
			<div className="contact-card bg-white w-[400px] min-h-[520px] relative rounded-2xl flex-col justify-start items-center px-10 py-10 flex">
				<Link to='/' className='absolute top-4 right-4 hover:text-[royalblue]'><ClearIcon /></Link>
				<div className="text-[royalblue] text-[30px] font-semibold flex justify-center items-center">Наши контакты</div>
				<div className="mt-5 text-[royalblue] text-[20px] font-semibold flex justify-center items-center cursor-pointer select-none" ><LocalPhoneIcon /><a href='tel:+998903002200'>
				+998903002200
    </a></div>

				<form className="form relative flex items-start flex-col
				gap-[10px] w-[300px] bg-white py-[20px] rounded-[10px]">
					<input className='outline-none border border-[#dbd5d5] px-[8px] py-[14px] rounded-lg w-full h-[50px]' type="text" placeholder="ваш номер +998" />
					<textarea className='rounded-lg w-full h-[100px] resize-none outline-none px-[8px] py-[14px] border border-[#dbd5d5]' placeholder="коментарий"></textarea>

					<button className='p-[8px] outline-none rounded-lg text-[16px] bg-[royalblue] text-white cursor-pointer mt-5'>Отправить</button>
				</form>

				<div className="contact-links flex items-center gap-10 list-none text-xl mt-10">
					<div className="contact-icons w-[35px] h-[35px] border-transparent rounded-full flex justify-center items-center">
						<InstagramIcon className='cursor-pointer' />
					</div>
					<div className="contact-icons w-[35px] h-[35px] border-transparent rounded-full flex justify-center items-center">
						<TelegramIcon className='cursor-pointer' />
					</div>

					<div className="contact-icons w-[35px] h-[35px] border-transparent rounded-full flex justify-center items-center">
						<YouTubeIcon className='cursor-pointer' />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Contact