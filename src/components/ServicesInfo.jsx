import React from 'react'
import { useParams } from 'react-router-dom';
import HomeImg from '../../public/image/i1.png';

function ServicesInfo({ services }) {
	const { id } = useParams()
	const selectedService = services.find(service => service.id === parseInt(id));
	return (
		<div>
			<div className='services-info w-full pt-20'>
				<div className="services-info-header w-full flex justify-between items-center gap-10 h-[100vh] px-16">
					<div className="services-info-header-text w-1/2">
						<h1 className='text-5xl font-semibold'>{selectedService.name}</h1>
						<p className='mt-10 text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum temporibus in incidunt quis, impedit quidem nam reiciendis culpa delectus recusandae cupiditate at exercitationem dolores accusamus officia, aspernatur magni ipsam deserunt.</p>
					</div>
					<div className="services-info-header-img ">
						<img src={HomeImg} alt="" />
					</div>
				</div>
			</div>
		</div>
	);
}

export default ServicesInfo