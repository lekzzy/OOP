export default class Mobile {

	constuctor(name)
	{

		this.name = name;
		iEMICode = "IEMI Code - IEDF34343435235"
	    processorSpeed = "2.10GHz";
	    camera = "21MP";

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
			return blueToothType;	
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
		let prop = this.name + " has " + "IEMI Code" + iEMICode + " , Processor " + processorSpeed + simCard() + " Sim Card" + blueToothType() +" Bluetooth Type" + " and " + camera + "Camera");
		return prop;
		
	}
	
}

