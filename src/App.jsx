import { Route, Routes } from 'react-router'
import './App.scss'
import Home from './components/main/Home'
import Header from './components/main/Header'
import Chat from './components/chat/Chat'
const App = () => {
	return (
		<div className='App'>
			<Routes>
				<Route path='/' element={<Home />}></Route>
				<Route path='/chat' element={<Chat />}></Route>
			</Routes>
		</div>
	)
}

export default App
