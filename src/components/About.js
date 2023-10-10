import '../styles/about.css'

function About(){
	return (
		<section className="about" id='about'>
			<div className='container'>
				<div className='inner'>
					<h2 className='about__title'>About me</h2>
					<div className='about__body'>
						<p className='about__paragraph'>
							Hi, I'm Denis – UX/UI designer from Minsk.<br/>I'm interested in design and everything connected with it.
						</p>
						<p className='about__paragraph'>
							I'm studying at courses "Web and mobile design interfaces" in IT-Academy.
						</p>
						<p className='about__paragraph'>
							Ready to implement excellent projects with wonderful people.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}

export default About