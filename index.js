const root = ReactDOM.createRoot(document.getElementById('root'));

const app = React.createElement(
  'div',
  null,
  React.createElement('h1', null, 'E-commerce webpage'),
  React.createElement(
    'div',
    { id: 'inner-div-01' },
    React.createElement('span', null, '01'),
    React.createElement('span', null, '02')
  ),
  React.createElement(
    'div',
    { id: 'inner-div-02' },
    React.createElement('span', null, '01'),
    React.createElement('span', null, '02')
  )
);

root.render(app);