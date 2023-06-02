import React from 'react'
import { useTranslation } from 'react-i18next';
import { motion } from "framer-motion"

function Card({ name, img, id , secondName}) {
	const { t } = useTranslation(["profile"]);

	const CardAnimation = {
		hidden: {
			y: 20,
			opacity: 0,
		},
		visible: custom => ({
			y: 0,
			opacity: 1,
			transition: { delay: custom * 0.1 },
		}),
	}

	return (
		<motion.div
		initial="hidden"
		whileInView="visible"
		variants={CardAnimation}
			custom={id}
			viewport={{once: true}}
			className="service-card bg-white rounded-[10px] mt-5 w-[200px] h-[200px] max-[430px]:w-[150px] max-[430px]:h-[150px] flex flex-col items-center relative" onClick={() => {
				document.documentElement.scrollTop = 0
			}}>
			<div className="service-card-info z-[3] flex flex-col justify-center items-center">
				<div className="service-card-img mb-5 w-[50px] h-[50px] object-cover mt-10 max-[430px]:mt-4">
					<img src={img} alt=""/>
				</div>
				<h1 className='mt-4 text-sm text-center px-3 font-semibold max-[430px]:text-[11px] max-[430px]:mt-1 max-[430px]:leading-4 '>{t(name)}{t(secondName)}</h1>
			</div>
		</motion.div>

	)
}

export default Card