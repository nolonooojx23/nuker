import React from 'react'
import { Element } from 'react-scroll';
import AboutImg1 from '../../public/image/about1.jpg';
import AboutImg2 from '../../public/image/about2.jpg';
import AboutImg3 from '../../public/image/about3.jpg';
function About() {
	return (
		<Element name="aboutSection">
		<div className='about w-full py-20 px-20'>
			<div className="about-start w-full flex justify-center items-center ">
				<div className="about-start-text text-left px-[15px] py-[20px] bg-[red] text-[white] rounded-[10px]"><p>Чем мы занимаемся?</p></div>
			</div>
			<div className="about-card w-full my-20 flex justify-between items-center">
				<div className="about-card-imgs flex justify-center items-center gap-10 w-1/2">
					<div className="about-card-img flex flex-col justify-center items-center gap-10">
						<img className='w-[200px]' src={AboutImg1} alt="" />
						<img className='w-[200px]' src={AboutImg2} alt="" />
					</div>
					<div className="about-card-img">
						<img className='w-[200px]' src={AboutImg3} alt="" />
					</div>
				</div>
				<div className="about-card-text w-1/2 py-10 px-5">
					<h1 className='text-3xl'><span className='text-[red]'>Nuker</span> - рекламное агенство в Узбекистане</h1>
					<p className='text-lg mt-10'>
					Наша команда экспертов обладает глубокими знаниями и опытом в области маркетинга, стратегического планирования, разработки бизнес-моделей и многое другое. Мы готовы помочь вам с любыми аспектами вашего бизнеса, начиная от разработки маркетинговой стратегии и продвижения продуктов до улучшения операционных процессов и управления проектами.</p>
				</div>
			</div>
		</div>
		</Element>
	)
}

export default About