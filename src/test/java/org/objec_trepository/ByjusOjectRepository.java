package org.objec_trepository;

import org.cucumber.CommonActions;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class ByjusOjectRepository extends CommonActions {
	
//	CommonActions c = new CommonActions();
	
	public ByjusOjectRepository(){
		PageFactory.initElements(web, this);	
	}
	
	
	@FindBy(xpath= "(//a[@class='dropdown-toggle'])[1]")
	private WebElement studyMaterials;

	public WebElement getStudyMaterials() {
		return studyMaterials;
	}
	
}
