import RegisterModal from './RegisterModal'
import './scss/home.scss'
import { motion } from 'framer-motion'

const Home = () => {
	return (
		<div className='home'>
			<div className='neon-spot spot1'></div>
			<div className='neon-spot spot2'></div>
			<div className='neon-spot spot5'></div>
			<div className='neon-spot spot3'></div>
			<div className='neon-spot spot4'></div>
			<main className=''>
				<motion.article
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6, delay: 0.2 }}
				>
					<h1>MAMANDYQ AI</h1>
					<p>
						В рамках Года рабочих профессий намечены важные мероприятия и
						проекты, предстоит предметная работа по повышению авторитета
						человека труда. Пора начать масштабную трансформацию системы
						технического и профессионального образования
					</p>
				</motion.article>
				<motion.aside
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6, delay: 0.2 }}
				>
					<textarea
						class='main-input'
						placeholder='Ваш текст здесь...'
					></textarea>
					<img src='send.svg' alt='send' />
				</motion.aside>
			</main>
			<motion.div
				className='aboutus'
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				viewport={{ once: true }}
				transition={{ duration: 0.6, delay: 0.2 }}
			>
				<h2>О нашем продукте</h2>
				<div className='card-container'>
					<div className='card'>
						<h3>
							Основа нашей<br></br> нейросети
						</h3>
						<p>
							Наша нейросеть обучена на гигантском объеме данных из тысяч
							реальных кейсов. Она анализирует и постоянно совершенствуется,
							чтобы дать вам самые точные решения. Это фундамент вашей
							эффективной работы.
						</p>
					</div>
					<div className='card'>
						<h3>
							Ваш незаменимый <br></br>помощник
						</h3>
						<p>
							Наш ИИ повышает качество работы и развивает вашу квалификацию. Это
							ваш персональный ассистент, который всегда подскажет и
							оптимизирует процессы. Работайте эффективнее и растите как
							профессионал!
						</p>
					</div>
					<div className='card'>
						<h3>
							ИИ в действии:<br></br> реальные примеры
						</h3>
						<p>
							Как наш ИИ помогает? Производство: оптимизировал графики, сократив
							простои на 15%. Обслуживание: ускорил обработку запросов, улучшив
							удовлетворенность клиентов на 20%. Логистика: сократил время в
							пути и расходы на топливо на 10% благодаря оптимальным маршрутам.
						</p>
					</div>
				</div>
			</motion.div>
		</div>
	)
}

export default Home
