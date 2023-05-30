import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { scroller } from 'react-scroll';
import Logo from '../../public/image/btl-logo.png';
import MenuIcon from '@mui/icons-material/Menu';
import ClearIcon from '@mui/icons-material/Clear';
import { useTranslation } from 'react-i18next';
import { motion } from "framer-motion"

function Navbar() {
	const { t, i18n } = useTranslation(["common"]);
	const handelChange = (e) => {
		i18n.changeLanguage(e.target.value)
	}

	const lng = localStorage.getItem("i18nextLng");

	const scrollToComponent = (component) => {
		scroller.scrollTo(component, {
			duration: 800,
			delay: 0,
		});
	};

	const [showMenu, setShowMenu] = useState(false)

	const handelClick = () => {
		setShowMenu(true)
	}

	const handleDelete = () => {
		setShowMenu(false)
	}

	const NavAnimation = {
		hidden: {
			y: 50,
			opacity: 0,
		},
		visible: custom => ({
			y: 0,
			opacity: 1,
		}),
	}


	return (
		<motion.div
			initial="hidden"
			animate="visible"
			viewport={{ once: true }}
			className="navbar-contact relative">
			<div className='navbar w-full px-20 py-1 flex justify-between items-center fixed z-30 max-md:px-10 max-[430px]:px-3'>
				<motion.div variants={NavAnimation} className="navbar-logo">
					<Link to='/'>
						<img className='w-[235px] max-md:w-[200px] max-[430px]:w-[180px]' src={Logo} alt="404 error" />
					</Link>
				</motion.div>
				<motion.div variants={NavAnimation} className="navbar-links flex items-center gap-10 list-none text-xl font-medium max-md:hidden">
					<li
						className="cursor-pointer"
						onClick={() => scrollToComponent('aboutSection')}
					>
						{t("О нас")}
					</li>
					<li
						className="cursor-pointer"
						onClick={() => scrollToComponent('servicesSection')}
					>
						{t("Услуги")}
					</li>
					<li
						className="cursor-pointer"
						onClick={() => scrollToComponent('locationSection')}
					>
						{t("Локация")}
					</li>
					<li
						className="cursor-pointer"
						onClick={() => scrollToComponent('contactSection')}
					>
						{t("Контакты")}
					</li>
					<select className='max-md:hidden' name="" id="" onChange={handelChange} value={lng}>
						<option value="ru">Русский</option>
						<option value="en">English</option>
						<option value="uz">Uzbek</option>
						<option value="uzcy">Ўзбек</option>
					</select>
				</motion.div>

				<motion.div variants={NavAnimation} className="menu hidden max-md:flex justify-center items-center gap-5">
					<select className='max-md:w-[50px]' name="" id="" onChange={handelChange} value={lng}>
					<option value="ru">RU</option>
						<option value="en">EN</option>
						<option value="uz">UZ</option>
						<option value="uzcy">ЎЗ</option>
					</select>
					<MenuIcon className='menu-icon cursor-pointer' fontSize="large" onClick={handelClick} />
					<div className={showMenu ? "navbar-menu active flex-col items-center gap-10 list-none text-xl font-semibold flex justify-center absolute" : "navbar-menu flex-col items-center gap-10 list-none text-xl font-semibold flex justify-center absolute"}>
						<ClearIcon className='menu-icon2 absolute top-5 right-5 cursor-pointer' fontSize="large" onClick={handleDelete} />
						<li
							className="cursor-pointer"
							onClick={() => {
								scrollToComponent('aboutSection')
								handleDelete()
							}}
						>
							О нас
						</li>
						<li
							className="cursor-pointer"
							onClick={() => {
								handleDelete()
								scrollToComponent('servicesSection')
							}}
						>
							Услуги
						</li>
						<li
							className="cursor-pointer"
							onClick={() => {
								handleDelete()
								scrollToComponent('locationSection')
							}}
						>
							Локация
						</li>
						<li
							className="cursor-pointer"
							onClick={() => {
								handleDelete()
								scrollToComponent('contactSection')
							}}
						>
							Контакты
						</li>
					</div>
				</motion.div>
			</div>
		</motion.div>
	)
}

export default Navbar