import styles from './Home.module.css'
import Management from './management/Management'
import Squares from './squares/Squares'

const Home = () => (
	<div className={styles.home}>
		<h1>Tap add or remove to change squares list!</h1>
		<Management />
		<Squares />
	</div>
)

export default Home
