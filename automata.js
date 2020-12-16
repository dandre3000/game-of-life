var name = 'Life'

const rules = {
	'Life': {
		B: [3],
		S: [2, 3],
		G: 2
	},
	'Day & Night': {
		B: [3, 6, 7, 8],
		S: [3, 4, 6, 7, 8],
		G: 2
	},
	'Seeds': {
		B: [2],
		S: [],
		G: 2
	},
	'Lines': {
		B: [4, 5, 8],
		S: [0, 1, 2, 3, 4, 5],
		G: 7
	},
	'Star Wars': {
		B: [2],
		S: [3, 4, 5],
		G: 4
	}
}

const born = ({ B }, n) => {
	for(let i in B) {
		if (n == B[i]) return true
	}
	
	return false
}
const survive = ({ S }, n) => {
	for(let i in S) {
		if (n == S[i]) return true
	}
	
	return false
}