import { animated } from '@react-spring/web'
import styles from './Square.module.css'

const Square = ({ props }) => {
	const { springStyles, data } = props

	return (
		<animated.div
			className={styles.square}
			style={{
				...springStyles,
				transform: springStyles.x.to(x => `translate3d(${x}vw,0,0)`),
				backgroundColor: data.color,
			}}
		>
			{data.name}
		</animated.div>
	)
}

export default Square
