import React from 'react'
import { useTranslation } from 'react-i18next';
import { Element } from 'react-scroll';
import AboutImg1 from '../../public/image/about1.jpg';
import AboutImg2 from '../../public/image/about2.jpg';
import AboutImg3 from '../../public/image/about3.jpg';
import { motion } from "framer-motion"

function About() {

	const { t } = useTranslation(["common"]);


	const AboutAnimationFirst = {
		hidden: {
			y: 100,
			opacity: 0,
		},
		visible: custom => ({
			y: 0,
			opacity: 1,
			transition: { delay: custom * 0.2 },
		}),
	}


	return (
		<Element name="aboutSection">
			<motion.div
				initial="hidden"
				whileInView="visible"
				viewport={{amount: 0.2}}
				className='about w-full py-20 px-20 max-lg:py-16 max-lg:px-16 max-md:px-5 overflow-hidden '>
				<motion.div variants={AboutAnimationFirst} custom={1} className="about-start w-full flex justify-center items-center ">
					<div className="about-start-text text-center px-[15px] py-[20px] bg-[red] text-[white] rounded-[10px] max-md:text-xs max-sm:py-[10px] "><p>{t("Чем мы занимаемся?")}</p></div>
				</motion.div>
				<div className="about-card w-full my-20 flex justify-between items-center flex-wrap max-lg:justify-center gap-10 ">
					<div className="about-card-imgs flex justify-center items-center gap-10 max-sm:gap-6">
						<div className="about-card-img flex flex-col justify-center items-center gap-10">
							<motion.img variants={AboutAnimationFirst} custom={2} className='w-[200px] animate__animated animate__fadeInUp wow' src={AboutImg1} alt="" />
							<motion.img variants={AboutAnimationFirst} custom={3} className='w-[200px] animate__animated animate__fadeInUp wow' src={AboutImg2} alt="" />
						</div>
						<div className="about-card-img">
							<motion.img variants={AboutAnimationFirst} custom={4} className='w-[200px] animate__animated animate__fadeInUp wow' src={AboutImg3} alt="" />
						</div>
					</div>
					<motion.div variants={AboutAnimationFirst} custom={5} className="about-card-text py-10 px-5 w-1/2 max-lg:w-full animate__animated animate__fadeInUp wow">
						<h1 className='text-3xl max-sm:text-2xl max-[430px]:text-xl'><span className='text-[red]'>Nuker</span> - {t("рекламное агенство в Узбекистане")}</h1>
						<p className='text-lg mt-10 max-sm:text-base max-[430px]:text-sm'>
							{t("Наша команда экспертов обладает глубокими знаниями и опытом в области маркетинга, стратегического планирования, разработки бизнес-моделей и многое другое. Мы готовы помочь вам с любыми аспектами вашего бизнеса, начиная от разработки маркетинговой стратегии и продвижения продуктов до улучшения операционных процессов и управления проектами.")}</p>
					</motion.div>
				</div>
			</motion.div>
		</Element>
	)
}

export default About