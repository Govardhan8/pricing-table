import Header from './Header'
import Li from './Li'
import './container.css'

const Container = ({ data }) => {
	return (
		<>
			<div className='container'>
				<Header type={data.type} price={data.price} />
				<div className='content'>
					<Li value={data.users.value} available={data.users.available} />
					<Li value={data.storage.value} available={data.storage.available} />
					<Li
						value={data.public_projects.value}
						available={data.public_projects.available}
					/>
					<Li value={data.access.value} available={data.access.available} />
					<Li
						value={data.private_projects.value}
						available={data.private_projects.available}
					/>
					<Li value={data.phone.value} available={data.phone.available} />
					<Li
						highlight
						value={data.subdomain.value}
						available={data.subdomain.available}
					/>
					<Li value={data.reports.value} available={data.reports.available} />
				</div>
				<button>BUTTON</button>
			</div>
		</>
	)
}

export default Container
