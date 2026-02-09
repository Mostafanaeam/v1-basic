import React from 'react';
import { createRoot } from 'react-dom';

const pizza = (props) =>{
  return React.createElement('div', {}, [
    React.createElement('h1', {}, props.name),
    React.createElement('p', {}, props.description),
  ]);
}


const App = () => {
  // ? react.createElement(type, [props], [...children])
  // ? react.createElement is a method provided by the React library that is used to create React elements.

  //! what is arguments meaning?
  //* arguments are the values passed to a function when it is called.

  //! what is createElement?
  //* It is a method provided by the React library that is used to create React elements.
  //* It takes three main arguments:

  

  //? arguments:
  //* type: string | React.Component | React.PureComponent
  //* 1. type: This specifies the type of the element to be created. It can be a string representing a standard HTML element (like 'div', 'h1', etc.) or a React component (either a function or a class).
  //* props: object | null
  //* 2. props: This is an object that contains the properties (attributes) to be assigned to the element. If there are no properties to assign, it can be null or an empty object.
 
  //! what is attributes?
  //* Attributes are special words used to control the behavior or appearance of HTML elements. In React, these are passed as properties (props) to components.
  
  //* children: string | React.Element | Array<React.Element>
  //* 3. children: These are the child elements or content that will be nested inside the created element. This can be a string, another React element, or an array of React elements.

  return React.createElement(
    'div', 
    {},
     React.createElement('h1', {}, 'Hello, World!'),
     React.createElement(pizza, {
      name: 'Pepperoni Pizza',
      description: 'A delicious pizza topped with pepperoni slices and cheese.',
     }),
     React.createElement(pizza, {
      name: 'Margherita Pizza',
      description: 'A classic pizza with fresh tomatoes, mozzarella cheese, and basil.',
     }),
     React.createElement(pizza, {
      name: 'BBQ Chicken Pizza',
      description: 'A savory pizza with BBQ sauce, grilled chicken, and red onions.',
     })
  );
};

const container = document.getElementById('root');
// ? ReactDOM.createRoot(container) is used to create a root for rendering a React application.
// const root = ReactDOM.createRoot(container);
// ? root.render() is used to render a React element into the root.
const root = createRoot(container);

root.render(React.createElement(App));
// ? In this example, we create a simple React application that renders a "Hello, World!" message inside an <h1> tag, which is wrapped in a <div>.


