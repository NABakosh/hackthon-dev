import './scss/header.scss'
import { motion } from 'framer-motion'
const Header = () => {
	return (
		<motion.header
			className='header'
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			viewport={{ once: true }}
			transition={{ duration: 0.6, delay: 0.4 }}
		>
			<h1 className='font-akira'>MANANDYQ AI</h1>
			<nav></nav>
			<div className='buttons'>
				<button className='log'>Login</button>
				<button className='sign'>Sign Up</button>
			</div>
		</motion.header>
	)
}
export default Header
