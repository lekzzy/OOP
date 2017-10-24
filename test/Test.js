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

describe('#constructor()', () => {
    it('requires two string arguments', () => {
      () => {
        new mobile();
      }.should.throw(Error);

      () => {
        new mobile();
      }.should.throw(Error);

      () => {
        new mobile(5, 6);
      }.should.throw(Error);

      () => {
        new mobile("nokia", "Java");
      }.should.not.throw(Error);
    });
  });


describe('#configuration', () => {
	it('returns the area', () => {
    () => {
      new mobile("samsung", "Android");
    }.should.equal("samsung has IEMI Code IEMI Code - IEDF34343435235, Processor 2.10GHz, 2 Sim Card, 8.0.11b Bluetooth Type and 21MP Camera");
    
    () => {
       new mobile("Iphone", "Apple IOS");
    }.should.equal("Iphone has IEMI Code IEMI Code - IEDF34343435235, Processor 2.10GHz, 3 Sim Card, 8.0.11n Bluetooth Type and 21MP Camera");
    
    () => {
      new mobile("Nokia", "Apple IOS");
    }.should.equal("Nokia has IEMI Code IEMI Code - IEDF34343435235, Processor 2.10GHz, none Sim Card, 8.0.11g/n Bluetooth Type and 21MP Camera");
    });
});

});