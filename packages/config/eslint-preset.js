module.exports = {
	extends: ['next', 'prettier'],
	settings: {
		next: {
			rootDir: ['sites/*/', 'packages/*/'],
		},
	},
	rules: {
		'@next/next/no-html-link-for-pages': 'off',
		'react/jsx-key': 'off',
	},
};
