import React from 'react'
import ClearIcon from '@mui/icons-material/Clear';
import { Link } from 'react-router-dom'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { useTranslation } from 'react-i18next';
import "animate.css"

function Contact() {
	const { t } = useTranslation(["common"]);
	return (
		<div className='contact fixed top-0 left-0 w-full h-[100vh] z-[100000] flex justify-center items-center'>
			<div className="contact-card bg-white w-[400px] min-h-[450px] relative rounded-2xl flex-col justify-start items-center px-10 py-10 flex max-md:w-[350px] max-md:px-5 max-[430px]:px-2 animate__animated animate__fadeInDown">
				<Link to='/' className='absolute top-4 right-4 hover:text-[#2751cd]'><ClearIcon /></Link>
				<div className="text-[#2751cd] text-[30px] font-semibold flex justify-center items-center max-md:text-[25px]">{t("Наши контакты")}</div>
				
				<div className="mt-5 text-[#2751cd] text-[20px] font-semibold flex justify-center items-center cursor-pointer select-none max-md:text-[18px] max-md:mt-2" ><LocalPhoneIcon /><a href='tel:+998903002200'>
				+998903002200
    </a></div>

				<form className="form relative flex items-start flex-col
				gap-[10px] w-[300px] max-md:w-[260px] bg-white py-[20px] rounded-[10px]">
					<input className='outline-none border border-[#dbd5d5] px-[8px] py-[14px] rounded-lg w-full h-[50px]' type="text" placeholder={t("ваш номер +998")} />
					<textarea className='rounded-lg w-full h-[100px] resize-none outline-none px-[8px] py-[14px] border border-[#dbd5d5]' placeholder={t("коментарий")}></textarea>

					<button className='p-[8px] outline-none rounded-lg text-[16px] bg-[#2751cd] text-white cursor-pointer mt-5'>{t("Отправить")}</button>
				</form>

				<div className="contact-links flex items-center gap-10 list-none text-xl mt-10 max-md:mt-5">
					<div className="contact-icons w-[35px] h-[35px] border-transparent rounded-full flex justify-center items-center">
						<a href="https://instagram.com/nn_nuker?igshid=MzRlODBiNWFlZA=="><InstagramIcon className='footer_icon cursor-pointer' /></a>
					</div>
					<div className="contact-icons w-[35px] h-[35px] border-transparent rounded-full flex justify-center items-center">
						<a href="https://t.me/PromoTash_bot"><TelegramIcon className='footer_icon cursor-pointer' /></a>
					</div>

					{/* <div className="contact-icons w-[35px] h-[35px] border-transparent rounded-full flex justify-center items-center">
						<YouTubeIcon className='cursor-pointer' />
					</div> */}
				</div>

				<p className='text-lg text-[#2751cd] mt-4 font-semibold'>Берем на работу</p>
			</div>
		</div>
	)
}

export default Contact