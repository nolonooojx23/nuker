import React from 'react'
import { Element } from 'react-scroll'

function Location() {
	return (
		<Element name="locationSection">
			<div className='location px-20 py-10 mt-20 '>
				<h1 className='text-4xl text-center font-semibold my-10'>Локация</h1>
				<div className="location-main flex justify-evenly items-center w-full mt-20">
					<div className="location-text w-[500px]">
						<h1 className='text-lg mt-10 text-[grey] '>Телефон:</h1>
						<h1 className='text-2xl mt-3'><a href='tel:+998903002200'>+998903002200
						</a></h1>
						<h1 className='text-lg mt-2 text-[grey] '>E-mail:</h1>
						<h1 className='text-2xl mt-1'>gordon.gko@yandex.ru</h1>
						<h1 className='text-lg mt-2 text-[grey] '>Адрес:</h1>
						<h1 className='text-2xl mt-1'>Lorem ipsum dolor sit amet.</h1>
						<h1 className='text-lg mt-2 text-[grey] '>График работы:</h1>
						<h1 className='text-2xl mt-1'>Пн.-Вс.: 07:00 - 22:00</h1>
					</div>
					<div className="location-map w-[500px] ">
						<iframe src="https://yandex.uz/map-widget/v1/?ll=71.782515%2C40.383121&mode=search&oid=25909629363&ol=biz&z=16.36" className='w-full' height="400" frameborder="1" allowfullscreen="true" ></iframe>
					</div>
				</div>
			</div>
		</Element>
	)
}

export default Location