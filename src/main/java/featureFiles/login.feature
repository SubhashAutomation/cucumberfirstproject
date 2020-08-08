Feature: Login functionality of SFDC environment
Scenario Outline: Login to SFDC with valid credential
    Given user is on SFDC login page
		When user enter correct "<Username>" and "<Password>"
		Then sfdc home page appears for "<Username>"
		And user waits for some
		Then user close the login page 
		
Examples:		

		|         Username         |  Password  |
		| InternalCosSupportAdmin  | Cdns1234   |
		| InternalCosSupportAdmin1 | Cdns12345  |
		| InternalCosSupportAdmin2 | Cdns123456 |

