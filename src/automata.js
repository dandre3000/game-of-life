var name = 'Life'

export const rules = {
	'Life': {
		B: [3],
		S: [2, 3],
		G: 2
	},
	'Move': {
		B: [3, 6, 8],
		S: [2, 4, 5],
		G: 2
	},
	'Day & Night': {
		B: [3, 6, 7, 8],
		S: [3, 4, 6, 7, 8],
		G: 2
	},
	'Replicator': {
		B: [1, 3, 5, 7],
		S: [1, 3, 5, 7],
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
	'Brian\'s Brain': {
		B: [2],
		S: [],
		G: 3
	},
	'Star Wars': {
		B: [2],
		S: [3, 4, 5],
		G: 4
	}
}