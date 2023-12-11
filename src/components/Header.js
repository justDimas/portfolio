import { useRef } from 'react';
import '../styles/header.css';

function Header() {
  const nav = useRef(null)
  const burger = useRef(null)
  const lang = useRef(null)

  return (
    <header className="header" id='home'>
		<div className='container'>
			<div className='header__body'>
				<nav className='header__nav' ref={nav}>
					<ul className='header__list'>
						<li className='header__list-item header__list-item_black'><a href='#home'>Home</a></li>
						<li className='header__list-item'><a href='#about'>About me</a></li>
						<li className='header__list-item'><a href='#skills'>Skills</a></li>
						<li className='header__list-item'><a href='#portfolio'>Portfolio</a></li>
						<li className='header__list-item'><a href='#contacts'>Contacts</a></li>
					</ul>
				</nav>
				<div className='header__burger' ref={burger} onClick={()=>{
					nav.current.classList.toggle('header__nav_active')
					burger.current.classList.toggle('header__burger_active')
					lang.current.classList.toggle('title__lang-switch_active')
				}}>
					<span className='header__burger-line header__burger-line_top'></span>	
					<span className='header__burger-line header__burger-line_middle'></span>	
					<span className='header__burger-line header__burger-line_bottom'></span>	
				</div>	
				<div className='header__main'>
					<div className='header__title title'>
						<h1 className='title__name'>
							Denis<br/>Novik
						</h1>	
						<div className='title__short-info'>
							UX<span className='vertical-separator'>|</span>UI designer<br/>24 years old, Minsk
						</div>
						<div className='title__lang-switch' ref={lang}>
							<a className='title__lang' id='ru-lang' href='?lang=ru'>RU</a>
							<span className='vertical-separator'>|</span>
							<a className='title__lang title__lang_selected' id='eng-lang' href='?lang=eng'>ENG</a>
						</div>
					</div>
					<div className='header__image-box'>
						<img className='header__image' src='./images/profile.png' alt='profile'/>
					</div>
				</div>
			</div>
		</div>
    </header>
  );
}

export default Header;
