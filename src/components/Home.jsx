import React from 'react'
import { Link } from 'react-router-dom'
import HomeImg from '../../public/image/i1.png';

function Home() {
	return (
		<div className='home w-full pt-20'>
			<div className="home-header w-full flex justify-between items-center gap-10 h-[100vh] px-16">
				<div className="home-header-text w-1/2">
					<h1 className='text-5xl font-semibold'>Комплексно организуем и проведем рекламное<span className='text-[blue]'> мероприятие в Узбекистане.</span></h1>
					<p className='mt-10 text-xl'>Сотрудничество с нашим агентством откроет перед вами новые возможности для роста и процветания вашего бизнеса. Мы стремимся к долгосрочным партнерским отношениям и готовы внести максимальный вклад в ваш успех. Свяжитесь с нами прямо сейчас и давайте вместе построим успешное будущее для вашего бизнеса!</p>
					<Link to='/contact'>
						<button className='home-header-btn mt-8 text-sm'>связаться с нами
							<span></span></button>
					</Link>
				</div>
				<div className="home-header-img ">
					<img src={HomeImg} alt="" />
				</div>
			</div>
		</div>
	)
}

export default Home