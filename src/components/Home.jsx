import React from 'react'
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom'
import HomeImg from '../../public/image/i1.png';
import { motion } from "framer-motion"

function Home() {
	const { t } = useTranslation(["common"]);

	const HomeAnimationFirst = {
		hidden: {
			x: -50,
			opacity: 0,
		},
		visible: {
			x: 0,
			opacity: 1,
		},
	}

	const HomeAnimationSecond = {
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
			className='home overflow-hidden w-full pt-20'>
			<div className="home-header w-full flex justify-between items-center gap-10 py-10 px-16 max-lg:flex-wrap max-lg:justify-center max-lg:px-10 max-sm:px-5 max-[430px]:px-2">
				<motion.div className="home-header-text w-1/2 max-lg:w-full" variants={HomeAnimationFirst}>
					<h1 className='text-[40px] leading-[1] font-semibold max-lg:text-3xl max-md:text-4xl max-sm:text-3xl max-[430px]:hidden
					'>{t("Организуем рекламу вашей компании")}<span className='text-[#2751cd]'> {t("по всему Узбекистану!")}</span></h1>
					<p className='max-[430px]:hidden mt-10 text-xl max-lg:text-base max-md:text-lg max-sm:text-base max-[430px]:text-sm max-[430px]:text-center max-sm:mt-4 max-[430px]:mt-5'>{t("Мы тесно сотрудничаем, чтобы ваши объявления, которые вам больше всего нужны для вашей компании, стали достоянием общественности. С уникальной стратегией каждого пункта назначения!")}</p>
					<p className='max-[430px]:hidden mt-10 text-xl max-lg:text-base max-md:text-lg max-sm:text-base max-[430px]:text-sm max-[430px]:text-center max-sm:mt-4 max-[430px]:mt-5'>{t("Наше рекламное агентство предлагает вам 18 различных услуг по всей территории Узбекистана!")}</p>
					<h1 className='text-[#2751cd] font-semibold max-[430px]:block hidden max-[430px]:text-2xl text-center border-b-2 border-[#2751cd] pb-1
					'>{t("Рекламное агентство BTL")}</h1>
					<p className='max-[430px]:block hidden mt-10 text-xl max-lg:text-base max-md:text-lg max-sm:text-base max-[430px]:text-sm max-[430px]:text-center max-sm:mt-4 max-[430px]:mt-5'>{t("Наше агентство проложит путь для развития вашего бизнеса и произведет положительное впечатление на публику. Мы стремимся к действиям, которые принесут пользу в долгосрочной перспективе, и создадим для вас максимальные шансы на результат.Свяжитесь с нами сейчас и стройте вместе с нами светлое будущее своего бизнеса!")}</p>
					< Link to = '/contact' >
					<button className='home-header-btn mt-8 text-sm max-sm:py-2 max-sm:px-4 max-[430px]:m-auto max-[430px]:mt-8'>{t("связаться с нами")}
						<span className='max-sm:border-2 border-4 border-[royalblue]'></span></button>
					</Link>
				</motion.div>
				<motion.div className="home-header-img" variants={HomeAnimationSecond}>
					<img src={HomeImg} alt="" className='max-lg:w-[400px]' />
				</motion.div>
			</div>
		</motion.div>
	)
}

export default Home