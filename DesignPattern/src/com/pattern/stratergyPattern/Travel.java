package com.pattern.stratergyPattern;

public class Travel{

	private TravelToRailwayStation travelToRailwayStation;

	public Travel(TravelToRailwayStation travelToRailwayStation){
		this.travelToRailwayStation = travelToRailwayStation;
	}

	public void gotoRailwayStation(){
		travelToRailwayStation.gotoRailwayStation();
	}
}