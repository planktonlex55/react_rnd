 import React from 'react';
 import ReactDOM from 'react-dom';
 // import App from './App';

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
// });

import { shallow, mount, render } from 'enzyme';
const Home = () => <h1>Home</h1>
const wrapper = shallow(<Home />);

console.log(wrapper);


describe("test suite", function(){
  it("test spec", function(){
    expect(true).toBe(true);
  });
});
