import React from 'react'
import { useDispatch } from 'react-redux'
import { add, remove } from '../../../../redux/squaresSlice'
import getRandomColor from './../../../../utils/getRandomColor'
import styles from './Management.module.css'

const Management = () => {
	const dispatch = useDispatch()

	return (
		<div className={styles.management}>
			<button
				className={styles.button}
				aria-label='Add square'
				onClick={() => dispatch(add({ color: getRandomColor() }))}
			>
				Add square
			</button>

			<button
				className={styles.button}
				aria-label='Remove Square'
				onClick={() => dispatch(remove())}
			>
				Remove square
			</button>
		</div>
	)
}

export default Management
