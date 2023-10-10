import '../styles/skills.css'

function Skills(){
	return (
		<section className='skills' id='skills'>
			<div className='container'>
				<div className='inner'>
					<h2 className='skills__title'>Skills</h2>
					<p className='skills__subtitle'>I work in such programs as</p>
					<ul className='skills__list'>
						<li className='skills__item'>
							<figure className='skills__image-box'>
								<img className='skills__logo' src='./images/ps.png' alt='ps-logo'/>
								<figcaption className='skills__caption'>Adobe Photoshop</figcaption>
							</figure>
							<ul className='skills__rate-list'>
								<li className='skills__rate-item'><img className='skills__rate-image' src='./images/filled-star.svg' alt='filled-star'/></li>
								<li className='skills__rate-item'><img className='skills__rate-image' src='./images/filled-star.svg' alt='filled-star'/></li>
								<li className='skills__rate-item'><img className='skills__rate-image' src='./images/filled-star.svg' alt='filled-star'/></li>
								<li className='skills__rate-item'><img className='skills__rate-image' src='./images/filled-star.svg' alt='filled-star'/></li>
								<li className='skills__rate-item'><img className='skills__rate-image' src='./images/empty-star.svg' alt='empty-star'/></li>
							</ul>
						</li>
						<li className='skills__item'>
							<figure className='skills__image-box'>
								<img className='skills__logo' src='./images/ai.png' alt='ai-logo'/>
								<figcaption className='skills__caption'>Adobe Illustrator</figcaption>
							</figure>
							<ul className='skills__rate-list'>
								<li className='skills__rate-item'><img className='skills__rate-image' src='./images/filled-star.svg' alt='filled-star'/></li>
								<li className='skills__rate-item'><img className='skills__rate-image' src='./images/filled-star.svg' alt='filled-star'/></li>
								<li className='skills__rate-item'><img className='skills__rate-image' src='./images/filled-star.svg' alt='filled-star'/></li>
								<li className='skills__rate-item'><img className='skills__rate-image' src='./images/empty-star.svg' alt='empty-star'/></li>
								<li className='skills__rate-item'><img className='skills__rate-image' src='./images/empty-star.svg' alt='empty-star'/></li>
							</ul>
						</li>
						<li className='skills__item'>
							<figure className='skills__image-box'>
								<img className='skills__logo' src='./images/ae.png' alt='ae-logo'/>
								<figcaption className='skills__caption'>Adobe After Effects</figcaption>
							</figure>
							<ul className='skills__rate-list'>
								<li className='skills__rate-item'><img className='skills__rate-image' src='./images/filled-star.svg' alt='filled-star'/></li>
								<li className='skills__rate-item'><img className='skills__rate-image' src='./images/filled-star.svg' alt='filled-star'/></li>
								<li className='skills__rate-item'><img className='skills__rate-image' src='./images/filled-star.svg' alt='filled-star'/></li>
								<li className='skills__rate-item'><img className='skills__rate-image' src='./images/filled-star.svg' alt='filled-star'/></li>
								<li className='skills__rate-item'><img className='skills__rate-image' src='./images/empty-star.svg' alt='empty-star'/></li>
							</ul>
						</li>
						<li className='skills__item'>
							<figure className='skills__image-box'>
								<img className='skills__logo' src='./images/figma.png' alt='figma-logo'/>
								<figcaption className='skills__caption'>Figma</figcaption>
							</figure>
							<ul className='skills__rate-list'>
								<li className='skills__rate-item'><img className='skills__rate-image' src='./images/filled-star.svg' alt='filled-star'/></li>
								<li className='skills__rate-item'><img className='skills__rate-image' src='./images/filled-star.svg' alt='filled-star'/></li>
								<li className='skills__rate-item'><img className='skills__rate-image' src='./images/filled-star.svg' alt='filled-star'/></li>
								<li className='skills__rate-item'><img className='skills__rate-image' src='./images/filled-star.svg' alt='filled-star'/></li>
								<li className='skills__rate-item'><img className='skills__rate-image' src='./images/empty-star.svg' alt='empty-star'/></li>
							</ul>
						</li>
						
					</ul>
				</div>
			</div>
		</section>
	)
}

export default Skills