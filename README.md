# Deep-Keywords

keyword generation tool

\* _does not accept list elements_

## Using with texts

```js
const deepKeywords = require('deep-keywords')

console.log(
  deepKeywords.text(
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eget turpis id massa iaculis gravida.',
  ),
)

/* returns [
  'lorem',      'ipsum',
  'dolor',      'sit',
  'amet',       'consectetur',
  'adipiscing', 'elit',
  'quisque',    'eget',
  'turpis',     'id',
  'massa',      'iaculis',
  'gravida'
]
*/
```

## Using with objects

```js
const deepKeywords = require('deep-keywords')

console.log(
  deepKeywords.text(
    {
      name: 'Lorem ipsum dolor sit',
      meta: {
        type: 'Quisque eget turpis',
      },
    },
    ['name', 'meta.type'],
  ),
)

/*
  returns [
  'lorem',   'ipsum',
  'dolor',   'sit',
  'quisque', 'eget',
  'turpis'
]
*/
```
