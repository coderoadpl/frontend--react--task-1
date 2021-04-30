const TEXTS = ['Declarative', 'Component-Based', 'Learn Once, Write Anywhere']

const firstElement = React.createElement(
    'div',
    {},
    [
        React.createElement(
            'h1',
            {},
            'Hello React'
        ),
        React.createElement(
            'ul',
            {},
            TEXTS.map((text) => {
                return React.createElement(
                    'li',
                    {},
                    text
                )
            })
        ), 
    ]
)

ReactDOM.render(
    firstElement,
    document.getElementById('root-react')
)

const containerDom = document.createElement('div')
const firstElementDom = document.createElement('h1')
const textDom = document.createTextNode('Hello React')
firstElementDom.appendChild(textDom)

const listElementDom = document.createElement('ul')
TEXTS.forEach((text) => {
    const listItemElementDom = document.createElement('li')
    listItemElementDom.innerText = text
    listElementDom.appendChild(listItemElementDom)
})

containerDom.appendChild(firstElementDom)
containerDom.appendChild(listElementDom)

document.getElementById('root-dom').appendChild(containerDom)


const divReact = React.createElement('div', { className: 'class-name' }, 'Children Text Node')
const divDom = document.createElement('div')
divDom.innerText = 'Children Text Node'
divDom.className = 'class-name'

console.dir(divDom)
console.dir(divReact)

ReactDOM.render(divReact, document.getElementById('test-react'))
document.getElementById('test-dom').appendChild(divDom)
