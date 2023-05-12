import React from 'react'

function Location() {
	return (
		<div className='location px-20 py-10 '>
			<h1 className='text-4xl text-center font-semibold my-10'>Локация</h1>
			<div className="location-main flex justify-between items-center w-full">
				<div className="location-map w-[500px] ">
						<iframe src="https://yandex.uz/map-widget/v1/?ll=71.782515%2C40.383121&mode=search&oid=25909629363&ol=biz&z=16.36" className='w-full' height="400" frameborder="1" allowfullscreen="true" ></iframe>
				</div>
				<div className="location-text w-[500px]">
				<h1 className='text-4xl my-10'>Локация...</h1>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur soluta nulla quos cum impedit minus voluptatum exercitationem quis dolores voluptatem, minima porro fugit qui repellendus non ipsum facere saepe blanditiis.</p>
				<h1 className='text-4xl my-10'>+998907777777</h1>
				</div>
			</div>
		</div>
	)
}

export default Location