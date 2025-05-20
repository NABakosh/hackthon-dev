import { useForm } from 'react-hook-form'
import axios from 'axios'
import './scss/authmodal.scss'

export default function RegisterModal({ status, setRegistryOpen }) {
	if (!status) return null

	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm()

	const onSubmit = async data => {
		if (data.password !== data.confirmPassword) {
			alert('Пароли не совпадают')
			return
		}

		try {
			const response = await axios.post(
				`${import.meta.env.VITE_API_PATH}/auth/register/`,
				{
					email: data.email,
					username: data.username,
					password: data.password,
				}
			)
			console.log('Регистрация прошла успешно:', response.data)
			setRegistryOpen(false)
		} catch (error) {
			console.error(
				'Ошибка регистрации:',
				error.response?.data || error.message
			)
			alert('Ошибка при регистрации')
		}
	}

	const closeModal = () => setRegistryOpen(false)
	const stopClickPropagation = e => e.stopPropagation()

	return (
		<div onClick={closeModal} className='modal'>
			<form onClick={stopClickPropagation} onSubmit={handleSubmit(onSubmit)}>
				<h3>Регистрация</h3>

				<label>
					<h4>Email</h4>
					<input
						type='email'
						placeholder='jackdaniels98@gmail.com'
						{...register('email', {
							required: 'Email обязателен',
							pattern: {
								value: /^\S+@\S+$/i,
								message: 'Некорректный email',
							},
						})}
					/>
					{errors.email && (
						<span className='error'>{errors.email.message}</span>
					)}
				</label>

				<label>
					<h4>Логин</h4>
					<input
						type='text'
						placeholder='username'
						{...register('username', {
							required: 'Логин обязателен',
							minLength: {
								value: 3,
								message: 'Минимум 3 символа',
							},
						})}
					/>
					{errors.username && (
						<span className='error'>{errors.username.message}</span>
					)}
				</label>

				<label>
					<h4>Пароль</h4>
					<input
						type='password'
						placeholder='введите пароль'
						{...register('password', {
							required: 'Пароль обязателен',
							minLength: {
								value: 6,
								message: 'Минимум 6 символов',
							},
						})}
					/>
					{errors.password && (
						<span className='error'>{errors.password.message}</span>
					)}
				</label>

				<label>
					<h4>Потвердите пароль</h4>
					<input
						type='password'
						placeholder='потвердите пароль'
						{...register('confirmPassword', {
							required: 'Подтверждение пароля обязательно',
							validate: value =>
								value === watch('password') || 'Пароли не совпадают',
						})}
					/>
					{errors.confirmPassword && (
						<span className='error'>{errors.confirmPassword.message}</span>
					)}
				</label>

				<input
					className='submit-btn'
					type='submit'
					value='Зарегистрироваться'
				/>
			</form>
		</div>
	)
}
