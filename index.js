const inquirer = require('inquirer');
const fs = require('fs');

const questions = [
	{
		type: 'input',
		name: 'project',
		message: 'What is your project name?',
		// default: 'Node Project',
	},
	{
		type: 'input',
		message: 'Describe your application?',
		name: 'description',
		// default: 'It does stuff',
	},
	{
		type: 'input',
		message: 'Link to preview Video/Picture URL?',
		name: 'preview',
		// default: 'It does stuff',
	},
	{
		type: 'input',
		message: 'How do I install your application?',
		name: 'install',
		// default: 'Copy Pasta',
	},
	{
		type: 'input',
		message: 'What is your application used for?',
		name: 'usage',
		// default: 'Gaining EXP with Node',
	},
	{
		type: 'checkbox',
		message: 'What kind of license is used?',
		name: 'license',
		choices: ['BSD', 'MIT', 'GPL'],
	},
	{
		type: 'input',
		message: 'What are the guidelines to contributing?',
		name: 'contribute',
		// default: 'You can NOT',
	},
	{
		type: 'input',
		message: 'How do I test your application?',
		name: 'test',
		// default: 'Play with it',
	},
	{
		type: 'input',
		message: 'What is your Github Username?',
		name: 'github',
		// default: 'FluffyKyubey',
	},
	{
		type: 'input',
		message: 'Please enter in your email',
		name: 'email',
		// default: 'john.alex.hull@gmail.com',
	},
];