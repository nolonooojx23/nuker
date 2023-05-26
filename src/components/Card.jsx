import React from 'react'
import { useTranslation } from 'react-i18next';

function Card({ name, img }) {
	const { t } = useTranslation(["profile"]);
	return (
		<div className="service-card bg-white rounded-[10px] w-[250px] h-[250px] max-md:w-[230px] max-md:h-[230px] flex flex-col justify-center items-center relative" onClick={() => {
			document.documentElement.scrollTop = 0
		}}>
			<div className="service-card-info z-[3] flex flex-col justify-center items-center">
				<div className="service-card-img mb-5 ">
					<img src={img} alt="" />
				</div>
				<h1 className='mt-4 text-lg text-center px-3 font-semibold '>{t(name)}</h1>
			</div>
		</div>

	)
}

export default Card