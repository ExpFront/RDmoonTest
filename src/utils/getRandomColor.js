// Took from stackoverflow. Might be better variant like library. But do not want to import additional bytes now

const getRandomColor = () => {
	const letters = '0123456789ABCDEF'
	let color = '#'

	for (let i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)]
	}

	return color
}

export default getRandomColor
