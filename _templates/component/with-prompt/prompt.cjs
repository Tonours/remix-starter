// see types of prompts:
// https://github.com/enquirer/enquirer/tree/master/examples
//
module.exports = [
  {
    type: 'select',
    name: 'type',
    message: 'Select component type',
    choices: ['ui', 'logical']
  },
  {
    type: 'input',
    name: 'name',
    message: "What's your component name ?"
  }
]
