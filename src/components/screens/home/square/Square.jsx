import { animated } from '@react-spring/web'
import styles from './Square.module.css'

const Square = ({ data: { data, springStyles } }) => (
	<animated.div
		className={styles.square}
		style={{ ...springStyles, backgroundColor: data.color }}
		key={data.id}
	/>
)

export default Square
