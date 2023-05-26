import React from 'react'
import { useTranslation } from 'react-i18next';
import { Element } from 'react-scroll';
import AboutImg1 from '../../public/image/about1.jpg';
import AboutImg2 from '../../public/image/about2.jpg';
import AboutImg3 from '../../public/image/about3.jpg';
function About() {

	const { t } = useTranslation(["common"]);

	return (
		<Element name="aboutSection">
			<div className='about w-full py-20 px-20 max-lg:py-16 max-lg:px-16 max-md:px-5'>
				<div className="about-start w-full flex justify-center items-center ">
					<div className="about-start-text text-center px-[15px] py-[20px] bg-[red] text-[white] rounded-[10px] max-md:text-xs max-sm:py-[10px] "><p>{t("Чем мы занимаемся?")}</p></div>
				</div>
				<div className="about-card w-full my-20 flex justify-between items-center flex-wrap max-lg:justify-center gap-10 ">
					<div className="about-card-imgs flex justify-center items-center gap-10 max-sm:gap-6">
						<div className="about-card-img flex flex-col justify-center items-center gap-10">
							<img className='w-[200px]' src={AboutImg1} alt="" />
							<img className='w-[200px]' src={AboutImg2} alt="" />
						</div>
						<div className="about-card-img">
							<img className='w-[200px]' src={AboutImg3} alt="" />
						</div>
					</div>
					<div className="about-card-text py-10 px-5 w-1/2 max-lg:w-full">
						<h1 className='text-3xl max-sm:text-2xl max-[430px]:text-xl'><span className='text-[red]'>Nuker</span> - {t("рекламное агенство в Узбекистане")}</h1>
						<p className='text-lg mt-10 max-sm:text-base max-[430px]:text-sm'>
							{t("Наша команда экспертов обладает глубокими знаниями и опытом в области маркетинга, стратегического планирования, разработки бизнес-моделей и многое другое. Мы готовы помочь вам с любыми аспектами вашего бизнеса, начиная от разработки маркетинговой стратегии и продвижения продуктов до улучшения операционных процессов и управления проектами.")}</p>
					</div>
				</div>
			</div>
		</Element>
	)
}

export default About