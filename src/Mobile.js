export default class Mobile {

	iEMICode = "IEMI Code - IEDF34343435235"
	    processorSpeed = "2.10GHz";
	    camera = "21MP";

	constuctor(name, opSys)
	{

		this.name = name;
		this.opSys = name;
		

	    get name()
	    {
	    return this._name;
		}

	    set name(value) {
	    	if (typeof value !== 'string') {
	    		throw new Error('"name" must be a string.');
	    	}

        this._name = value;
       }

       get opSys()
	    {
	    return this._opSys;
		}

	    set opSys(value) {
	    	if (typeof value !== 'string') {
	    		throw new Error('"name" must be a string.');
	    	}

        this._opSys = value;
       }

	}

	simCard()
	{
		numberOfSimCard = ["none", 2, 3];
		if(this.name === "samsung")
		{
			return numberOfSimCard[1];
		}
		else if(this.name === "Iphone")
		{
			return numberOfSimCard[0];
		}

		else{
			return numberOfSimCard[2];
		}

	}

	blueTooth()
	{
		blueToothType ["8.0.11b", "8.0.11n", "8.0.11g/n"]
		if(this.name === "samsung")
		{
			return blueToothType[0];	
		}

		else if(this.name === "Iphone")
		{
			return blueToothType[1];	
		}

		else
		{
			return blueToothType[2];	
		}
	}


	configuration()
	{
		let prop = this.name + " has " + "IEMI Code " + iEMICode + ", Processor " + processorSpeed +"," + simCard() + " Sim Card " + blueToothType() +" Bluetooth Type" + " and " + camera + " Camera");
		return prop;
		
	}
	
}


class Samsung extends Mobile{
	constuctor(name, opSys)
	{
		super(name, opSys);
	}

	return super.configuration();
	return this.opSys;
}


class Nokia extends Mobile{
	constuctor(name, opSys)
	{
		super(name, opSys);
	}

	return super.configuration();
	return this.opSys;
}

class Nokia extends Mobile{
	constuctor(name, opSys)
	{
		super(name, opSys);
	}

	return super.configuration();
	return this.opSys;
}
