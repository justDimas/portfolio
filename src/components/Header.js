import '../styles/header.css';

function Header() {
  return (
    <header className="header" id='home'>
		<div className='container'>
			<nav className='header__nav nav'>
				<ul className='nav__list'>
					<li className='nav__item nav__item_black'><a href='#home'>Home</a></li>
					<li className='nav__item'><a href='#about'>About me</a></li>
					<li className='nav__item'><a href='#skills'>Skills</a></li>
					<li className='nav__item'><a href='#portfolio'>Portfolio</a></li>
					<li className='nav__item'><a href='#contacts'>Contacts</a></li>
				</ul>
				<div className='nav__burger'></div>	
			</nav>
			<div className='header__body'>
				<div className='header__title title'>
					<h1 className='title__name'>
						Denis<br/>Novik
					</h1>	
					<div className='title__short-info'>
						UX&nbsp;|&nbsp;UI designer<br/>24 years old, Minsk
					</div>
					<div className='title__lang-switch'>
						<a className='title__lang' id='ru-lang' href='?lang=ru'>RU</a>
						&nbsp;|&nbsp;
						<a className='title__lang title__lang_selected' id='eng-lang' href='?lang=eng'>ENG</a>
					</div>
				</div>

				<div className='header__image-box'>
					<img className='header__image' src='./images/profile.png' alt='profile'/>
				</div>
			</div>
		</div>
    </header>
  );
}

export default Header;
