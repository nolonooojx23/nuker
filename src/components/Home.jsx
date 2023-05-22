import React from 'react'
import { Link } from 'react-router-dom'
import HomeImg from '../../public/image/i1.png';

function Home() {
	return (
		<div className='home w-full pt-20'>
			<div className="home-header w-full flex justify-between items-center gap-10 py-10 px-16 max-lg:flex-wrap max-lg:px-10 max-sm:px-5 max-[430px]:px-2">
				<div className="home-header-text w-1/2 max-md:w-full">
					<h1 className='text-[42px] leading-[1] font-semibold max-lg:text-3xl max-md:text-4xl max-sm:text-3xl max-[430px]:text-2xl
					'>Комплексно организуем и проведем рекламное<span className='text-[blue]'> мероприятие в Узбекистане.</span></h1>
					<p className='mt-10 text-xl max-lg:text-base max-md:text-lg max-sm:text-base max-[430px]:text-sm max-sm:mt-4'>Сотрудничество с нашим агентством откроет перед вами новые возможности для роста и процветания вашего бизнеса. Мы стремимся к долгосрочным партнерским отношениям и готовы внести максимальный вклад в ваш успех. Свяжитесь с нами прямо сейчас и давайте вместе построим успешное будущее для вашего бизнеса!</p>
					<Link to='/contact'>
						<button className='home-header-btn mt-8 text-sm max-sm:py-2 max-sm:px-4'>связаться с нами
							<span className='max-sm:border-2 border-4 border-[royalblue]'></span></button>
					</Link>
				</div>
				<div className="home-header-img">
					<img src={HomeImg} alt="" className='max-lg:w-[400px] max-md:hidden'/>
				</div>
			</div>
		</div>
	)
}

export default Home