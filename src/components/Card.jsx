import React from 'react'
import { useTranslation } from 'react-i18next';

function Card({ name, img }) {
	const { t } = useTranslation(["profile"]);
	return (
		<div className="service-card bg-white rounded-[10px] w-[250px] h-[250px] max-md:w-[200px] max-md:h-[200px] max-[430px]:w-[150px] max-[430px]:h-[150px] flex flex-col justify-center items-center relative max-[430px]:mt-5" onClick={() => {
			document.documentElement.scrollTop = 0
		}}>
			<div className="service-card-info z-[3] flex flex-col justify-center items-center">
				<div className="service-card-img mb-5 max-md:w-[50px] object-contain ">
					<img  src={img} alt="" />
				</div>
				<h1 className='mt-4 text-lg text-center px-3 font-semibold max-md:text-sm max-[430px]:text-[12px] max-[430px]:mt-1 '>{t(name)}</h1>
			</div>
		</div>

	)
}

export default Card