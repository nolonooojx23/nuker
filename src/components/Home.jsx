import React from 'react'
import { Link } from 'react-router-dom'
import HomeImg from '../../public/image/i1.png';

function Home() {
	return (
		<div className='home w-full pt-20'>
			<div className="home-header w-full flex justify-between items-center gap-10 h-[100vh] px-16">
				<div className="home-header-text w-1/2">
					<h1 className='text-5xl font-semibold'>Комплексно организуем и проведем рекламное<span className='text-[blue]'> мероприятие в Узбекистане.</span></h1>
					<p className='mt-10 text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum temporibus in incidunt quis, impedit quidem nam reiciendis culpa delectus recusandae cupiditate at exercitationem dolores accusamus officia, aspernatur magni ipsam deserunt.</p>
					<Link to='/contact'>
						<button className='home-header-btn mt-5 text-sm'>связаться с нами
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