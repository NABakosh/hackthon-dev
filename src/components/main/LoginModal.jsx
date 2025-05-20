import './scss/authmodal.scss'

export default function LoginModal({ status, setRegistryOpen }) {
	if (!status) return null

	const closeModal = () => setRegistryOpen(false)

	const stopClickPropagation = e => e.stopPropagation()

	const handleSubmit = e => {
		e.preventDefault()
		// Можно добавить валидацию/отправку данных сюда
		console.log('Форма отправлена')
	}

	return (
		<div onClick={closeModal} className='modal'>
			<form onClick={stopClickPropagation}>
				<h3>Войти</h3>
				<label>
					<h4>email или логин</h4>
					<input type='text' placeholder='jackdaniels98@gmail.com'></input>
				</label>
				<label>
					<h4>пароль</h4>
					<input type='password' placeholder='введите пароль'></input>
				</label>
				<input className='submit-btn' type='submit' value={'Войти'}></input>
			</form>
		</div>
	)
}
