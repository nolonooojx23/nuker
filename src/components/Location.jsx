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
			x: 100,
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
				className='location px-20 py-10 mt-20 max-md:px-10 max-sm:px-5 '>
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
						<iframe src="https://yandex.uz/map-widget/v1/?ll=69.279068%2C41.310002&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgoxNzUwNzA5NDM4EhZPyrt6YmVraXN0b24sIFRvc2hrZW50IgoNO4-KQhWjPiVC&z=16.82" className='w-full' height="400" frameborder="1" allowfullscreen="true"></iframe>
					</motion.div>
				</div>
			</motion.div>
		</Element>
	)
}

export default Location