import React from 'react'

function About() {
	return (
		<div className='about w-full py-20 px-20'>
			<div className="about-start w-full flex justify-center items-center ">
				<div className="about-start-text text-left px-[15px] py-[20px] bg-[red] text-[white] rounded-[10px]"><p>Чем мы занимаемся?</p></div>
			</div>
			<div className="about-card w-full my-20 flex justify-between items-center">
				<div className="about-card-imgs flex justify-center items-center gap-10 w-1/2">
					<div className="about-card-img flex flex-col justify-center items-center gap-10">
						<img className='w-[200px]' src="./image/about1.jpg" alt="" />
						<img className='w-[200px]' src="./image/about3.jpg" alt="" />
					</div>
					<div className="about-card-img">
						<img className='w-[200px]' src="./image/about2.jpg" alt="" />
					</div>
				</div>
				<div className="about-card-text w-1/2 py-10 px-5">
					<h1 className='text-3xl'><span className='text-[red]'>Nuker</span> - рекламное агенство в Узбекистане</h1>
					<p className='text-lg mt-10'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam assumenda culpa aut aliquid doloremque consequuntur veniam voluptate sint est, veritatis enim vel similique porro? Exercitationem, placeat. Dicta, nulla excepturi, doloribus assumenda magni quasi totam aspernatur minima porro, fugiat provident harum quae corrupti impedit voluptatem magnam nam dolorem ratione. Rerum, inventore!</p>
				</div>
			</div>
		</div>
	)
}

export default About