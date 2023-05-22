import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { scroller } from 'react-scroll';
import Logo from '../../public/image/btl-logo.png';
import MenuIcon from '@mui/icons-material/Menu';
import ClearIcon from '@mui/icons-material/Clear';

function Navbar() {
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


	return (
		<div className="navbar-contact relative">
			<div className='navbar w-full px-20 py-1 flex justify-between items-center fixed z-30 max-md:px-10 max-[430px]:px-3 '>
				<div className="navbar-logo">
					<Link to='/'>
						<img className='w-[235px] max-md:w-[200px] max-[430px]:w-[180px]' src={Logo} alt="404 error" />
					</Link>
				</div>
				<div className="navbar-links flex items-center gap-10 list-none text-xl font-medium max-md:hidden">
					<li
						className="cursor-pointer"
						onClick={() => scrollToComponent('aboutSection')}
					>
						О нас
					</li>
					<li
						className="cursor-pointer"
						onClick={() => scrollToComponent('servicesSection')}
					>
						Услуги
					</li>
					<li
						className="cursor-pointer"
						onClick={() => scrollToComponent('locationSection')}
					>
						Локация
					</li>
					<li
						className="cursor-pointer"
						onClick={() => scrollToComponent('contactSection')}
					>
						Контакты
					</li>
				</div>

				<div className="menu hidden max-md:block">
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
				</div>
			</div>
		</div>
	)
}

export default Navbar