module.exports = {
	'env': {
		'commonjs': true,
		'es2021': true,
		'node': true
	},
	'extends': 'eslint:recommended',
	'parserOptions': {
		'ecmaVersion': 12
	},
	'rules': {
		// 'indent': [
		// 	'error',
		// 	'tab'
		// ],
		'linebreak-style': [
			'error',
			'unix'
		],
		// 'quotes': [
		// 	'warn',
		// 	'single'
		// ],
		// 'semi': [
		// 	'warn',
		// 	'never'
		// ],
		// 'prefer-const': [
		// 	'warn'
		// ],
		// 'no-var': [
		// 	'warn'
		// ],
		'no-confusing-arrow': [
			'error'
		],
		'arrow-spacing' : [
			'warn'
		],
		// 'eol-last': [
		// 	"warn",
		// 	"always"
		// ],
		'no-empty': [
			"error",
			{"allowEmptyCatch": true}
		],
		// Allow unused variables for now 2021-01-22
		'no-unused-vars': [
			"off"
		],
	}
}
