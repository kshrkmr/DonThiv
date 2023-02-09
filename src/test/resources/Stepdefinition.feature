#Author: your.email@your.domain.com
#Keywords Summary :
#Feature: List of scenarios.
#Scenario: Business rule through list of steps with arguments.
#Given: Some precondition step
#When: Some key actions
#Then: To observe outcomes or validation
#And,But: To enumerate more Given,When,Then steps
#Scenario Outline: List of steps for data-driven as an Examples and <placeholder>
#Examples: Container for s table
#Background: List of steps run before each of the scenarios
#""" (Doc Strings)
#| (Data Tables)
#@ (Tags/Labels):To group Scenarios
#<> (placeholder)
#""
## (Comments)
#Sample Feature Definition Template

Feature: com.BYJU.Study_Materials.stepdefinition

Background: common function      
Given launch the browser 
When pass the url 
 
Scenario: NEET.Results
Given user click on the Study_Materials
When user click on the NEET
And user click on the Results
Then choose exam
Then select state
Then select year
Then click apply
And search bar


#Scenario Outline: TO perform mulitiple Execution
#Given user click on the Study_Materials
#When user click on the NEET
#And user click on the Results
#Then choose exam
#Then select state
#Then select year
#Then click apply
#And search bar "<course>"
#Examples:
#|course|
#|JEE|
#|NEET|
#|CAT|







