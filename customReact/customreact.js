function customRender(reactElement,container){
    // const domElement = document.createElement(reactElement.type)
    // domElement.innerHTML = reactElement.children
    // domElement.setAttribute('href',reactElement.props.href)
    // domElement.setAttribute('target',reactElement.props.target)

    // //adding the main container.
    // container.appendChild(domElement)


    const domElement=  document.createElement(reactElement.type)
    //adding the attributes\
    domElement.innerHTML = reactElement.children

    for (const prop in reactElement.props){
       if(prop === 'children') continue;
       domElement.setAttribute(prop,reactElement.props[prop])
    }
    container.appendChild(domElement)



}

const reactElement = {
    type: 'a',
    props:{
        href:'https://google.com',
        target: '_blank' //simple html
    },
    children: 'Click me to visit google'
}

const mainContainer = document.querySelector('#root')

customRender(reactElement,mainContainer)

// 'Exactly this is not written, these are only terminologies.'