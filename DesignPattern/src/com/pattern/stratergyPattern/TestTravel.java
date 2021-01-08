package com.pattern.stratergyPattern;

public class TestTravel{

	public static void main(String[] args) {
		Travel travel = new Travel(new TravelByAuto());
		travel.gotoRailwayStation();
		travel = new Travel(new TravelByCab());
		travel.gotoRailwayStation();
	}

}