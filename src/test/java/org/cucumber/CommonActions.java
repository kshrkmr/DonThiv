package org.cucumber;


import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import io.github.bonigarcia.wdm.WebDriverManager;

public class CommonActions {

	 public static WebDriver web;
	 public static WebElement element;
	 public static String s ;
		public void launch() {
			WebDriverManager.chromedriver().setup();
			web = new ChromeDriver();
			web.get("https://www.byjus.com/");
			web.manage().window().maximize();
		}
		public void find(String f) {
			 element = web.findElement(By.xpath(f));
		}
		
}	
