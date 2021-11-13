import CloseIcon from '@mui/icons-material/Close'
import CheckIcon from '@mui/icons-material/Check'

const Li = ({ value, available, highlight }) => {
	return (
		<div className='list' style={{ color: available ? 'black' : 'slategrey' }}>
			<b>{available ? <CheckIcon /> : <CloseIcon />}</b>
			{highlight && value.substring(0, 9) === 'Unlimited' ? (
				<p>
					<strong>{value.substring(0, 9)}</strong>
					{value.substring(9, value.length)}
				</p>
			) : (
				<p> {value}</p>
			)}
		</div>
	)
}

export default Li
