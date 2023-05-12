import React from 'react'

function Navbar() {
	return (
		<div className='navbar w-full px-20 py-1 flex justify-between items-center '>
			<div className="navbar-logo">
				<img className='w-[235px]' src="./image/btl-logo.png" alt="404 error" />
			</div>
			<div className="navbar-links flex items-center gap-10 list-none text-xl font-medium">
				<li className='cursor-pointer'>О нас</li>
				<li className='cursor-pointer'>Услуги</li>
				<li className='cursor-pointer'>Контакты</li>
				<li className='cursor-pointer'>Локация</li>
			</div>
		</div>
	)
}

export default Navbar