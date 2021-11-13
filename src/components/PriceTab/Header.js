const Header = ({ type, price }) => {
	return (
		<div className='head'>
			<h3>{type}</h3>
			<h2>
				${price}
				<span>/month</span>
			</h2>
		</div>
	)
}

export default Header
