import React from 'react';
import ReactDOM from 'react-dom';
import {shallow, mount, render} from 'enzyme';
// import {shallow} from 'react-test-renderer/shallow';
  //Not reqd. just install react-test-renderer so that the warnings go away
import {employee, Home} from './employee';

describe("test suite", () => {
  let wrapper2; //this should NOT be const. this is global var.
  //beforeEach is "setup" in setup n teardown
  beforeEach(() => {
    wrapper2 = shallow(<employee><div className="unique" /></employee>);
  });

  it("test spec1: jasmine toBe()", () => {
    expect (wrapper2.contains(<div className="unique" />)).toBe(true);
  });

  it("test spec2: jasmine toEqual()", () => {
    expect (wrapper2.contains(<div className="unique" />)).toEqual(true);
    // expect (wrapper2.contains(<div className="unique" />)).to.equal.true;
    //to.equal.true is chai-syntax. don't use it
  });

  it("test spec3: jasmine spyOn", () => {
    let obj1 = {
        func1: () => { console.log('this is func1') }
      };
        spyOn(obj1, "func1");
        obj1.func1();
        expect(obj1.func1).toHaveBeenCalled();
      });

//  it("test spec 4: ", () => {
//   const wrapper3 = mount(<button name="tstbutton">xxxxx</button>);
//      // console.log (wrapper3.find('button').get(0).props);
//  });
    
    //VIMP:https://github.com/airbnb/enzyme/tree/master/docs !!!!VIMP!!!!
  it("test spec 4: ", () => {
    const wrapper = shallow((
      <div>
        <span className="foo">Hello</span>
        <div style={{ fontSize: 13 }}>Goodbye</div>
        <span>Again</span>
      </div>
    ));

    console.log('executing 4.4')
    expect(wrapper.containsAllMatchingElements([
      <span>Hello</span>,
      <div>Goodbye</div>,
    ])).toEqual(true);

    console.log('executing 4.5')
  expect(wrapper.containsAnyMatchingElements([
    <span>Hello</span>,
    <div>Goodbye</div>,
  ])).toEqual(true);
  
  
  }); //.containsAllMatchingElements() expects an array of ReactElement, not a selector (like many other methods).
}); //describe ends

  /*
 O/p:-
 
 D:\js\react01\p4>npm test

> p4@0.1.0 test D:\js\react01\p4
> jest

 PASS  src\employee.test.js
  ? Console

    console.log src\employee.test.js:44
      executing 4.4
    console.log src\employee.test.js:51
      executing 4.5

 PASS  src\App0.test.js
 PASS  src\App.test.js

Test Suites: 3 passed, 3 total
Tests:       6 passed, 6 total
Snapshots:   0 total
Time:        2.897s
Ran all test suites.

D:\js\react01\p4>
  */
  
  
