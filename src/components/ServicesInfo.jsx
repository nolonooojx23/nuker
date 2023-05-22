import React from 'react'
import { Link, useParams } from 'react-router-dom';
import HomeImg from '../../public/image/i1.png';

function ServicesInfo({ services }) {
	const { id } = useParams()
	const selectedService = services.find(service => service.id === parseInt(id));
	return (
		<div>
			<div className='services-info w-full pt-20'>
				<div className="services-info-header w-full flex justify-between items-center gap-10 px-16 max-lg:flex-wrap max-lg:px-10 max-sm:px-5 max-[430px]:px-2">
					<div className="services-info-header-text w-1/2 max-md:w-full mt-10">
						<h1 className='text-[48px] leading-[1] font-semibold max-lg:text-3xl max-md:text-4xl max-sm:text-3xl max-[430px]:text-2xl'>{selectedService.name}</h1>
						<p className='mt-10 text-lg max-lg:text-base max-md:text-lg max-sm:text-base max-[430px]:text-sm max-sm:mt-4'>{selectedService.description}</p>
						<Link to='/contact'>
						<button className='home-header-btn mt-16 text-sm max-sm:py-2 max-sm:px-4'>связаться с нами
							<span className='max-sm:border-2 border-4 border-[royalblue]'></span></button>
					</Link>
					</div>
					<div className="services-info-header-img max-lg:w-[400px] max-md:hidden">
						<img src={HomeImg} alt="" />
					</div>
				</div>
			</div>
		</div>
	);
}

export default ServicesInfo