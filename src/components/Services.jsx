import React from 'react'
import { Link } from 'react-router-dom';
import Card from './Card';
import myImage from '../../public/image/icon1.png';

function Services() {

	const services = [
		{ id: 1, name: 'распростронение листовок', description: 'Description 1', img: myImage },
		{ id: 2, name: 'расклейка объявлений', description: 'Description 2', img: myImage },
		{ id: 3, name: 'печать и дизайн листовок', description: 'Description 3', img: myImage },
		{ id: 4, name: 'услуга промоутеров с рупором', description: 'Description 4', img: myImage },
		{ id: 5, name: 'проведение промо акций, дегустаций,семплингов.', description: 'Description 5', img: myImage },
		{ id: 6, name: 'аренда и продажа промостойек', description: 'Description 6', img: myImage },
		{ id: 7, name: 'Украшение шарами в Узбекистане', description: 'Description 7', img: myImage },
		{ id: 8, name: 'опросы,маркетинговое исследование', description: 'Description 8', img: myImage },
		{ id: 9, name: 'кастинг менеджер', description: 'Description 8', img: myImage },
		{ id: 10, name: 'опросы,маркетинговое исследование', description: 'Description 8', img: myImage },
	];

	return (
		<div className='services w-full px-16 py-6 bg-[#d5def8] relative flex flex-col justify-center items-center'>
			<h1 className='text-center text-4xl font-semibold mt-6'>Услуги</h1>
			<div className="services-cards flex justify-around items-center mt-10 pb-10 flex-wrap gap-10 max-h-[100vh] overflow-y-scroll px-10" >
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