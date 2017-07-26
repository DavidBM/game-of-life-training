class Rules {

	isCellAlive(isAlive, neighbours) {
		if(isAlive === true){
			if(neighbours <= 3)
				return false;
			else if(neighbours > 6)
				return false
			else
				return true;
		}
		else{
			if(neighbours <= 3)
				return false;
			else if(neighbours > 6)
				return false
			else
				return true
		}
	}
}