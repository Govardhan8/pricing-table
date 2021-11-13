import Container from './Container'
import dataList from './pricedata'
import './index.css'

const PriceTab = () => {
	return (
		<>
			{dataList.map((data) => (
				<Container data={data} />
			))}
		</>
	)
}

export default PriceTab
