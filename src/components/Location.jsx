import React from 'react'
import { useTranslation } from 'react-i18next';
import { Element } from 'react-scroll'
import { motion } from "framer-motion"

function Location() {
	const { t } = useTranslation(["common"]);

	const LocationAnimationFirst = {
		hidden: {
			x: -50,
			opacity: 0,
		},
		visible: {
			x: 0,
			opacity: 1,
		},
	}

	const LocationAnimationSecond = {
		hidden: {
			x: 50,
			opacity: 0,
		},
		visible: {
			x: 0,
			opacity: 1,
		},
	}

	return (
		<Element name="locationSection">
			<motion.div
				initial="hidden"
				whileInView="visible"
				className='location w-full overflow-hidden px-20 py-10 mt-20 max-md:px-10 max-sm:px-5 '>
				<h1 className='text-4xl text-center font-semibold my-10 max-sm:text-3xl max-md:my-5'>{t("Локация")}</h1>
				<div className="location-main flex justify-evenly items-center w-full mt-10 flex-wrap gap-10">
					<motion.div variants={LocationAnimationFirst} className="location-text w-[400px]">
						<h1 className='text-lg max-md:text-base mt-5 text-[grey] '>{t("Телефон")}:</h1>
						<h1 className='text-2xl mt-3 max-md:text-xl'><a href='tel:+998903002200'>+998903002200
						</a></h1>
						<h1 className='text-lg max-md:text-base mt-2 text-[grey] '>E-mail:</h1>
						<h1 className='text-2xl mt-1 max-md:text-xl'>gordon.gko@yandex.ru</h1>
						<h1 className='text-lg max-md:text-base mt-2 text-[grey] '>{t("Адрес")}:</h1>
						<h1 className='text-2xl mt-1 max-md:text-xl'>"GORDON GEKKO" MCHJ
							Фуркат МФЙ, Таллимаржон кучаси, 10/2-уй.</h1>
						<h1 className='text-lg max-md:text-base mt-2 text-[grey] '>{t("График работы:")}</h1>
						<h1 className='text-2xl mt-1 max-md:text-xl'>{t("Пн.-Вс.")}: 07:00 - 22:00</h1>
					</motion.div>
					<motion.div variants={LocationAnimationSecond} className="location-map w-[500px] ">
					<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5042.895180465664!2d69.29432068127471!3d41.27571166104037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8333d503c3da6afd%3A0xbad524f0b486a900!2sNavkar!5e0!3m2!1sru!2s!4v1690391778046!5m2!1sru!2s" className='w-full' height="400" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
					</motion.div>
				</div>
			</motion.div>
		</Element>
	)
}

export default Location