const root = ReactDOM.createRoot(document.getElementById('root'));

const elementor = React.createElement('div', {id: 'conatiner'}, [
    React.createElement('h1', {}, 'Hello World'),
    React.createElement('p', {}, 'This is a paragraph'),
    React.createElement('h2', {}, 'Salam', React.createElement('i', {}, 'World'))
])

root.render(elementor);

