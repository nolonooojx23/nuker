import React from 'react'
import { Link } from 'react-router-dom'
import { scroller } from 'react-scroll';
import Logo from '../../public/image/btl-logo.png';

function Navbar() {
	const scrollToComponent = (component) => {
		scroller.scrollTo(component, {
			duration: 800,
			delay: 0,
		});
	};
	return (
		<div className="navbar-contact">
			<div className='navbar w-full px-20 py-1 flex justify-between items-center fixed z-30 '>
				<div className="navbar-logo">
					<Link to='/'>
						<img className='w-[235px]' src={Logo} alt="404 error" />
					</Link>
				</div>
				<div className="navbar-links flex items-center gap-10 list-none text-xl font-medium">
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
			</div>
		</div>
	)
}

export default Navbar