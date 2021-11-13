import Container from './Container'
import dataList from './pricedata'

const PriceTab = () => {
	return (
		<>
			{/* Maping through the prices data to make 3 tabs */}
			{dataList.map((data, index) => (
				<Container key={index} data={data} />
			))}
		</>
	)
}

export default PriceTab
