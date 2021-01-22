const deepKeywords = require('.')

console.log(
  deepKeywords.text(
    'um texto de qualquer coisa, você maçã amanhã q a c texto para alguma outra coisa',
  ),
)
console.log('-------------------')
console.log(
  deepKeywords.text(
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eget turpis id massa iaculis gravida.',
  ),
)
console.log('-------------------')
console.log(
  deepKeywords.object(
    {
      name: 'Uma ai qualquer',
      type: 'Guarda-roupa',
      price: {
        pattern: 'BRL',
        value: 10.5,
      },
    },
    ['name', 'type', 'price.value', 'value'],
  ),
)
console.log('-------------------')
console.log(
  deepKeywords.object(
    {
      name: 'Lorem ipsum dolor sit',
      meta: {
        type: 'Quisque eget turpis',
      },
    },
    ['name', 'meta.type'],
  ),
)
