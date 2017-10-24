import 'babel-polyfill'
import Mobile from '../src/Mobile.js'

let chai = require('chai');
chai.should();

let Mobile = require(path.join(__dirname, '..', 'Mobile')); 

//Passed test cases
describe('Mobile', () => {

  describe('#name', () => {
    let Mobile;

    beforeEach(() => {
      // Create a new Samsung object before every test.
      samsung = new Samsung("samsung", "");
    });

    it('returns the name', () => {
      
      samsung.name.should.equal("samsung");
    });

    
  });

});


  describe('Mobile', () => {

  describe('#name', () => {
    let Mobile;

    beforeEach(() => {
      // Create a new Rectangle object before every test.
      nokia = new Nokia("nokia", "");
    });

    it('returns the name', () => {
      // This will fail if "rectangle.width" does
      // not equal 10.
      nokia.name.should.equal("nokia");
    });
  });

  

   describe('Mobile', () => {

  describe('#name', () => {
    let Mobile;

    beforeEach(() => {
      // Create a new Rectangle object before every test.
      iphone = new Iphone("nokia", "");
    });

    it('returns the name', () => {
      // This will fail if "rectangle.width" does
      // not equal 10.
      iphone.name.should.equal("iphone");
    });
});
});