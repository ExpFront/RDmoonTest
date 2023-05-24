import { useTransition } from '@react-spring/web'
import React from 'react'
import { useSelector } from 'react-redux'
import Square from './../square/Square'

import styles from './Squares.module.css'

// TODO: do not like amount of rerenders. Think about using useCallback, React.Memo, useEffect etc.

const Squares = () => {
	const squares = useSelector(state => state.squares)
	const width = 20
	const transitions = useTransition(
		squares.map((data, i) => ({ ...data, x: i * width })),
		{
			from: { position: 'absolute', x: -100 },
			leave: { x: 100 },
			enter: { x: 0 },
			update: ({ x }) => ({ x }),
			key: item => item?.name,
		}
	)

	return (
		<div className={styles.squares}>
			{transitions((springStyles, data) => (
				<Square props={{ springStyles, data }} key={data.name} />
			))}
		</div>
	)
}

export default React.memo(Squares)
