import { useTransition } from '@react-spring/web'
import { useSelector } from 'react-redux'
import Square from './../square/Square'

import styles from './Squares.module.css'

const Squares = () => {
	const squares = useSelector(state => state.squares)

	const transition = useTransition(squares, {
		from: {
			transform: 'translateX(-100vw)',
		},
		enter: {
			transform: 'translateX(0%)',
		},
		leave: {
			transform: 'translateX(500vw)',
		},
	})

	return (
		<div className={styles.squares}>
			{transition((springStyles, data) => (
				<Square data={{ springStyles, data }} />
			))}
		</div>
	)
}

export default Squares
