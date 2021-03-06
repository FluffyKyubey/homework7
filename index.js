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
		// default: 'Doing stuff',
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

const createReadme = (data) => {
		var license = '';
		var licenseTXT = '';
		switch (data.license[0]) {
			case 'BSD':
				license =
					'[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
				licenseTXT = `[BSD License](https://opensource.org/licenses/BSD-3-Clause)`;
				break;
			case 'MIT':
				license =
					'[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
				licenseTXT = `[MIT License](https://opensource.org/licenses/MIT)`;
				break;
			case 'GPL':
				license =
					'[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
				licenseTXT = `[GPL License](https://www.gnu.org/licenses/gpl-3.0)`;
	
				break;
			default:
				license = 'No License Chosen';
				licenseTXT = ``;
	
				break;
		}
	
	fs.writeFileSync(
		'./readme.md',
		`# ${data.project}
${license}
## Table of Contents
- [Description](#description)
- [Application Preview](#application-preview)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Test Instructions](#test-instructions)
- [Questions](#questions)
- [License](#license)

## Description
- ${data.description}

## Application Preview
<p align="left">
<img alt="README Gen Demo 1" src="images/read me demo.gif">
</p>

## Installation
- ${data.install}

## Usage
- ${data.usage}

## Contributing
- ${data.contribute}

## Test Instructions
- ${data.test}

## Questions
Questions? Concerns?  Contact Me Below:
- Github Username: ${data.github}
- Github Link: https://github.com/${data.github} 
- Email: ${data.email}


## License
- Licensed under the: ${licenseTXT} 
`
	);
};
		

inquirer
	.prompt(questions)
	.then((data) => {
		createReadme(data)
		console.log(`It worked!`)
	})
	.catch((error) => {
		if (error.isTtyError) {
			console.error(`Prompts no renedering properly`)
		}
		else {
			console.error(`something went wrong`, error)
		}
	})