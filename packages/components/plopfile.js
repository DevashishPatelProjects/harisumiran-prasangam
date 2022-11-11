export default function (plop) {
	// create your generators here
	plop.setGenerator("component", {
		description: "Lets generate Component",
		prompts: [
			{
				type: "rawlist",
				choices: ["atoms", "molecules", "organisms", "sections"],
				name: "componenttype",
				message: "What is the type of Component",
			},
			{
				type: "input",
				name: "componentname",
				message: "What will be the name of component",
			},
		], // array of inquirer prompts
		actions: [
			{
				type: "add",
				path: "src/{{componenttype}}/{{pascalCase componentname}}/{{pascalCase componentname}}.jsx",
				templateFile: "ploptemplate/component.jsx.hbs",
			},
			{
				type: "add",
				path: "src/{{componenttype}}/{{pascalCase componentname}}/{{pascalCase componentname}}.module.scss",
				templateFile: "ploptemplate/component.module.scss.hbs",
			},
			{
				type: "add",
				path: "src/{{componenttype}}/{{pascalCase componentname}}/index.js",
				templateFile: "ploptemplate/index.js.hbs",
			},
			{
				type: "add",
				path: "src/{{componenttype}}/{{pascalCase componentname}}/{{pascalCase componentname}}.stories.jsx",
				templateFile: "ploptemplate/component.stories.jsx.hbs",
			},
			{
				path: "src/{{componenttype}}/index.jsx",
				pattern: /(\/\/ COMPONENT IMPORTS)/g,
				template:
					"export {default as {{pascalCase componentname}} } from './{{pascalCase componentname}}';\n$1",
				type: "modify",
			},
		], // array of actions
	});
}
