const root = document.querySelector("#root");

const element = React.createElement("h1", {id:"Título principal"}, "Hello Word");

ReactDOM.render(element, root);