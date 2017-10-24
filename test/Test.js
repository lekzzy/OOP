import 'babel-polyfill'
import Mobile from '../src/Mobile.js'

let chai = require('chai');
chai.should();


//Passed test cases
describe('Mobile', () => {

  describe('#name', () => {
    let mobile;

    beforeEach(() => {
      // Create a new Samsung object before every test.
      mobile = new Mobile("samsung");
    });

    it('returns the name', () => {
      
      mobile.name.should.equal("samsung");
    });

    mobile.name = nokia;

    it('returns the name', () => {
      
      mobile.name.should.equal("nokia");
    });

    mobile.name = iphone;

    it('returns the name', () => {
      
      mobile.name.should.equal("iphone");
    });

     describe('#opSys', () => {
    let mobile;

    beforeEach(() => {
      // Create a new Samsung object before every test.
      mobile = new Mobile("Android");
    });

    it('returns the name', () => {
      
      mobile.opSys.should.equal("Android");
    });

    mobile.opSys = "Java";

    it('returns the name', () => {
      
      mobile.opSys.should.equal("Java");
    });

    mbile.opSys= "Apple IOS";

    it('returns the name', () => {
      
      mobile.opSys.should.equal("Apple IOS");
    });

});
})