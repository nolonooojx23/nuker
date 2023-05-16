import React from 'react'

function Card({ name, img }) {
	return (
		<div className="" >
			<div className="service-card bg-white rounded-[10px] w-[250px] h-[250px] flex flex-col justify-center items-center " onClick={() => {
				document.documentElement.scrollTop = 0
			}}>
				<img className='w-[80px]' src={img} alt="" />
				<h1 className='mt-4 text-lg text-center '>{name}</h1>
			</div>
		</div>

	)
}

export default Card