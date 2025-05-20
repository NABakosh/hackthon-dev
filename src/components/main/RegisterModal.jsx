import './scss/authmodal.scss'

export default function RegisterModal() {
	return (
		<div className='modal'>
			<form>
				<h3>Регистрация</h3>
				<label>
					<h4>email</h4>
					<input type='text' placeholder='jackdaniels98@gmail.com'></input>
				</label>
				<label>
					<h4>логин</h4>
					<input type='text' placeholder='username'></input>
				</label>
				<label>
					<h4>пароль</h4>
					<input type='password' placeholder='введите пароль'></input>
				</label>
				<label>
					<h4>потвердите пароль</h4>
					<input type='password' placeholder='потвердите пароль'></input>
				</label>
				<input type='submit'></input>
			</form>
		</div>
	)
}
