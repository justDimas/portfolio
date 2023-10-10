import '../styles/portfolio.css'

function Portfolio(){
	return (
		<section className='portfolio' id='portfolio'>
			<div className='container'>
				<div className='inner'>
					<h2 className='portfolio__title'>Portfolio</h2>

					<ul className='portfolio__list'>
						<li className='portfolio__item'>
							<img className='portfolio__image' src='./images/fashion-store.png' alt='fashion-store'/>
							<a className='portfolio__link' href='#'>Online fashion store - Homepage</a>
						</li>

						<li className='portfolio__item'>
							<img className='portfolio__image' src='./images/reebok-store.png' alt='reebok-store'/>
							<a className='portfolio__link' href='#'>Reebok Store - Concept</a>
						</li>

						<li className='portfolio__item'>
							<img className='portfolio__image' src='./images/braun-landing.png' alt='braun-landing'/>
							<a className='portfolio__link' href='#'>Braun Landing Page - Concept</a>
						</li>
					</ul>
					<div></div>
					<div></div>
				</div>
			</div>
		</section>
	)
}

export default Portfolio;