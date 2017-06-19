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

  it("test spec 4: ", () => {
   const wrapper3 = mount(<button name="tstbutton">xxxxx</button>);
      // console.log (wrapper3.find('button').get(0).props);
  });

}); //describe ends
