package org.cucumber;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features="D:\\Eclipse2022-22\\cucumber\\src\\test\\resources\\Stepdefinition.feature",
                      glue= {"org.cucumber"},
                      plugin= {"html:target/reports.html","json:target/reports.json"}
					  )
					  
public class TestRunnerClass {

}
