package org.cucumber;

import java.util.List;
import java.util.Map;
import java.util.concurrent.TimeUnit;
import org.objec_trepository.*;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.edge.EdgeDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.Select;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.cucumber.datatable.DataTable;
import io.github.bonigarcia.wdm.WebDriverManager;

public class Cucumber extends CommonActions {

	ByjusOjectRepository r = new ByjusOjectRepository();

	@Given("launch the browser")
	public void launch_the_browser() {
//		 launch();
//		WebDriverManager.chromedriver().setup();
//		web = new ChromeDriver();
//		web.get(s);
		System.out.println("lauched");
	}

	@When("pass the url")
	public void pass_the_url() throws InterruptedException {
		web.findElement(By.xpath("//a[@class='close']")).click();
//		find("//a[@class='close']");
//		element.click();
//		Thread.sleep(2000);
//		web.findElement(By.xpath("(//button[@type='button'])[2]")).click();
	}

	@When("user click on the Study_Materials")
	public void user_click_on_the_Study_Materials() throws InterruptedException {
		Thread.sleep(3000);
//		web.findElement(By.xpath("(//a[@class='dropdown-toggle'])[1]")).click();
		r.getStudyMaterials().click();
	}

	@When("user click on the NEET")
	public void user_click_on_the_NEET() {
		web.findElement(By.xpath("(//a[text()='NEET'])[1]")).click();
	}

	@When("user click on the Results")
	public void user_click_on_the_Results() {
		web.findElement(By.xpath("//span[text()='Results']")).click();
	}

	@Then("choose exam")
	public void choose_exam() {
		WebElement element = web.findElement(By.xpath("//select"));
		Select s = new Select(element);
		s.selectByIndex(0);
	}

	@Then("select state")
	public void select_state() {
		WebElement findElement = web.findElement(By.xpath("(//select)[4]"));
		Select se = new Select(findElement);
		se.selectByVisibleText("Tamil Nadu");
	}

	@Then("select year")
	public void select_year() {
		WebElement findElement = web.findElement(By.xpath("(//select)[5]"));
		Select s = new Select(findElement);
		s.selectByVisibleText("2022");
	}

	@Then("click apply")
	public void click_apply() {
		web.findElement(By.xpath("(//input[@value='Apply'])[2]")).click();
	}

	@Then("search bar {string}")
	public void search_bar(String dataTable) {
		// List<String> List = dataTable.asList();
		web.findElement(By.xpath("//input[@name='fulltext']")).sendKeys(dataTable, Keys.ENTER);
		System.out.println(dataTable);
	}

	@Then("search bar")
	public void search_bar() {

	}
}
