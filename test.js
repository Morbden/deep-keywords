const deepKeywords = require('.')

console.log(
  deepKeywords(
    'um texto de qualquer coisa, você maçã amanhã q a c texto para alguma outra coisa',
  ),
)
console.log('-------------------')
console.log(
  deepKeywords({
    name: 'Uma ai qualquer',
    price: {
      pattern: 'BRL',
      value: 10.5,
    },
  }),
)
console.log('-------------------')
console.log(
  deepKeywords([
    'um texto de qualquer coisa, você maçã amanhã',
    {
      name: 'Uma ai qualquer',
      price: {
        pattern: 'BRL',
        value: 10.5,
      },
    },
  ]),
)
