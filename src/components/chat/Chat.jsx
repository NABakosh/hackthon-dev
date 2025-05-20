import { useState } from 'react'
import './scss/chat.scss'
import { Link } from 'react-router'
const Chat = () => {
	const handleSendMessage = () => {
		if (input.trim() === '') return

		const newMessages = [...messages, { from: 'user', text: input }]

		// Добавляем "ответ" от ИИ (заглушка)
		newMessages.push({ from: 'ai', text: 'Это ответ от ИИ на: ' + input })

		setMessages(newMessages)
		setInput('')
	}
	const API_PATH = import.meta.env.VITE_API_PATH
	const [messages, setMessages] = useState([])
	const [input, setInput] = useState('')
	const [currentChat, setCurrentChat] = useState('')
	return (
		<div className='chat'>
			<aside className='sidebar'>
				<Link to={'/'}>
					<h2>MAMANDYQ AI</h2>
				</Link>
				<div className='history-container'>
					<span>Навыавфывфв</span>
					<span>фывффвфвфыв</span>
					<span>фывфвыфвфвфasdadadas</span>
				</div>
			</aside>
			<main className='chat-body'>
				<section className='dialog'>
					{messages.map((msg, index) => (
						<div
							key={index}
							className={msg.from === 'user' ? 'user-message' : 'ai-message'}
						>
							<p>{msg.text}</p>
						</div>
					))}
				</section>
				<section className='dialog-input'>
					<input
						value={input}
						onChange={e => setInput(e.target.value)}
						onKeyDown={e => e.key === 'Enter' && handleSendMessage()}
					></input>
					<img onClick={handleSendMessage} src='send2.svg' alt='send2api' />
				</section>
			</main>
		</div>
	)
}
export default Chat
