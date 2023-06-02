import React from 'react'
import { useTranslation } from 'react-i18next';
import { Link, useParams } from 'react-router-dom';
import { motion } from "framer-motion"


function ServicesInfo({ services }) {
	const { t } = useTranslation(["profile"]);
	const { id } = useParams()
	const selectedService = services.find(service => service.id === parseInt(id));

	const InfoAnimationFirst = {
		hidden: {
			y: -50,
			opacity: 0,
		},
		visible: {
			y: 0,
			opacity: 1,
		},
	}

	const InfoAnimationSecond = {
		hidden: {
			y: 50,
			opacity: 0,
		},
		visible: {
			y: 0,
			opacity: 1,
		},
	}

	return (
		<div>
			<motion.div
				initial="hidden"
				whileInView="visible"
				className='services-info w-full pt-20'>
				<div className="services-info-header w-full flex justify-between items-center gap-10 py-10 px-10 max-lg:flex-wrap max-lg:justify-center max-lg:px-10 max-sm:px-5 max-[430px]:px-2 ">
					<motion.div variants={InfoAnimationFirst} className="services-info-header-text w-[65%] max-lg:w-full mt-5 ">
						<h1 className='w-full text-[45px] leading-[1] font-semibold max-lg:text-3xl max-md:text-4xl max-sm:text-3xl max-[430px]:text-2xl'>{t(selectedService.name)}{t(selectedService.nameFirst)}</h1>
						<p className='mt-10 text-lg max-lg:text-base max-md:text-lg max-sm:text-base max-[430px]:text-sm max-sm:mt-4'>{t(selectedService.description)}</p>
						<p className='mt-10 text-lg font-semibold text-[#2751cd] max-lg:text-base max-md:text-lg max-sm:text-base max-[430px]:text-sm max-sm:mt-4'>{t(selectedService.anotherDes)}</p>
						<Link to='/contact'>
							<button className='home-header-btn mt-10 text-sm max-sm:py-2 max-sm:px-4'>{t("связаться с нами")}
								<span className='max-sm:border-2 border-4 border-[royalblue]'></span></button>
						</Link>
						
					</motion.div>
					<motion.div variants={InfoAnimationSecond} className="services-info-header-img max-lg:w-[400px]">
						<img src={selectedService.mainImg} alt="" />
					</motion.div>
				</div>
			</motion.div>
		</div>
	);
}

export default ServicesInfo