import React from 'react'
import { useTranslation } from 'react-i18next';
import map from "../../public/image/map.png"
import { motion } from "framer-motion"


function Map() {
	const { t } = useTranslation(["common"]);
	const AnimationFirst = {
		hidden: {
			x: -50,
			opacity: 0,
		},
		visible: {
			x: 0,
			opacity: 1,
		},
	}

	const AnimationSecond = {
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
		<motion.div
			initial="hidden"
			whileInView="visible"
			className='w-full overflow-hidden px-20 pb-10 max-md:px-10 max-sm:px-5 '>
			<motion.div variants={AnimationFirst} className="map w-full flex justify-center items-center gap-10 max-lg:flex-wrap">
				<div className="map-text">
					<h1 className='text-4xl font-semibold my-2 max-sm:text-3xl max-md:my-1'>{t("Наше преимущество все промоутеры оснащены")}</h1>
					<p className='text-lg max-md:text-base mt-5'>1. {t("GPS трекером")}</p>
					<p className='text-lg max-md:text-base mt-5'>2. {t("VEB мини камерами.")}</p>
					<p className='text-lg max-md:text-base mt-5'>3. {t("Есть доступ в гос.учреждения.")}</p>
					<p className='text-lg max-md:text-base mt-5'>4. {t("В подарок видеоролик")}</p>
					<p className='text-lg max-md:text-base mt-5'>5. {t("Мы работаем по всей республике и за границей!")}</p>
					<h1 className='text-xl font-semibold mt-5 max-sm:text-lg max-md:my-5'>{t("Также новейшие услуги «NAVKAR» «SELLER» «BUYER» подробнее читайте в рубрике 'благодарные руки помощи'")}</h1>
				</div>
				<motion.img src={map} alt="" variants={AnimationSecond} className='w-[600px]' />
			</motion.div>
		</motion.div>
	)
}

export default Map