class Rules {

	isCellAlive(isAlive, neighbours) {
		if(isAlive === true && neighbours <= 3){
			return false;
		}
		else{
			return true;
		}
	}
}