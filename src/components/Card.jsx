import React from 'react'

function Card({ name, img }) {
	return (
		<div className="service-card bg-white rounded-[10px] w-[250px] h-[250px] flex flex-col justify-center items-center relative" onClick={() => {
			document.documentElement.scrollTop = 0
		}}>
			<div className="service-card-info z-[3] flex flex-col justify-center items-center">
				<div className="service-card-img h-[80px] ">
					<img src={img} alt="" />
				</div>
				<h1 className='mt-4 text-lg text-center px-3 font-semibold '>{name}</h1>
			</div>
		</div>

	)
}

export default Card