package org.hooks;

import org.cucumber.CommonActions;

import cucumber.api.java.After;
import cucumber.api.java.Before;



public class Hooks extends CommonActions {
	

	CommonActions c = new CommonActions();
	@Before
	public void beforeLaunching() {
		launch();
	}
	@After
	public void quit() {
		System.out.println("QUIT");
	}
}
