import { useState } from 'react'
import RegisterModal from './RegisterModal'
import './scss/home.scss'
import LoginModal from './LoginModal'

const Home = () => {
	
	const [registryOpen, setRegistryOpen] = useState(false)
	const [loginOpen, setLoginOpen] = useState(false)
	return (
		<div className='home'>
			<div className='home-background'></div>
			<div className='home-content'>
				<header className='flex items-center '>
					<h3>Mamandyq AI</h3>
					<div className='buttons'>
						<button onClick={() => setRegistryOpen(true)} className='registry'>
							регистрация
						</button>
						<button onClick={() => setLoginOpen(true)}>вход</button>
					</div>
				</header>
				<main>
					<h1>
						Всё о работе — за пару <br></br>секунд.
					</h1>
					<p>
						Задай вопрос. Получи решение. Продолжай<br></br> расти.
					</p>
					<div className='main-input'>
						<textarea placeholder='О чем вы хотели бы узнать?'></textarea>
						<img src='send.svg' alt='send' />
					</div>
				</main>
			</div>
			<RegisterModal
				status={registryOpen}
				setRegistryOpen={setRegistryOpen}
			></RegisterModal>
			<LoginModal
				status={loginOpen}
				setRegistryOpen={setLoginOpen}
			></LoginModal>
		</div>
	)
}

export default Home
