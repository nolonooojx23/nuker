import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../public/image/btl-logo.png';

function Navbar() {
	return (
		<div className="navbar-contact">
			<div className='navbar w-full px-20 py-1 flex justify-between items-center fixed z-30 '>
				<div className="navbar-logo">
					<Link to='/'>
						<img className='w-[235px]' src={Logo} alt="404 error" />
					</Link>
				</div>
				<div className="navbar-links flex items-center gap-10 list-none text-xl font-medium">
					<li className='cursor-pointer' onClick={() => {
						window.scrollTo({ top: 700, behavior: 'smooth' })
					}}>О нас</li>
					<li className='cursor-pointer' onClick={() => {
						window.scrollTo({ top: 1500, behavior: 'smooth' })
					}}>Услуги</li>
					<li className='cursor-pointer' onClick={() => {
						window.scrollTo({ top: 2300, behavior: 'smooth' })
					}}>Локация</li>
					<li className='cursor-pointer' onClick={() => {
						window.scrollTo({ top: 2800, behavior: 'smooth' })
					}}>Контакты</li>
					<Link to='/contact'>
						<button className='home-header-btn mt-0 text-sm'>связаться с нами
							<span></span></button>
					</Link>
				</div>
			</div>
		</div>
	)
}

export default Navbar