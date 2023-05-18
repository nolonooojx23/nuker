import React from 'react'
import { Link } from 'react-router-dom';
import Card from './Card';

function Services({services}) {

	return (
		<div className='services w-full px-16 py-6 bg-[#d5def8] relative flex flex-col justify-center items-center'>
			<h1 className='text-center text-4xl font-semibold mt-6'>Услуги</h1>
			<div className="services-cards flex justify-around items-center mt-10 py-10 flex-wrap gap-10 max-h-[100vh] overflow-y-scroll px-10" >
				{services.map(item => {
					return (
						<div key={item.id}>
							<Link to={`/services/${item.id}`}>
								<Card name={item.name} id={item.id} img={item.img} />
							</Link>
						</div>
					)
				})}
			</div>
		</div >
	)
}

export default Services