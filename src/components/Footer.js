import '../styles/footer.css'

function Footer(){
	return (
		<footer className='contacts' id='contacts'>
				<div className='container'>
					<div className='inner'>
						<h2 className='contacts__title'>Contacts</h2>
						<div className='contacts__subtitle'>Want to know more or just chat?<br/>You are welcome!</div>
						<a className='contacts__chat' href='#'>Send message</a>
						<ul className='contacts__social-list'>
							<li className='contacts__social-item'><a className='contacts__social-link' href='#'><img className='contacts__social-logo' src='./images/in.svg' alt='in-logo'/></a></li>
							<li className='contacts__social-item'><a className='contacts__social-link' href='#'><img className='contacts__social-logo' src='./images/inst.svg' alt='inst-logo'/></a></li>
							<li className='contacts__social-item'><a className='contacts__social-link' href='#'><img className='contacts__social-logo' src='./images/behance.svg' alt='behance-logo'/></a></li>
							<li className='contacts__social-item'><a className='contacts__social-link' href='#'><img className='contacts__social-logo' src='./images/dribble.svg' alt='dribble-logo'/></a></li>
						</ul>
						<div className='contacts__afterword'>Like me on<br/>LinkedIn, Instagram, Behance, Dribble</div>
					</div>
				</div>
		</footer>
	)
}

export default Footer