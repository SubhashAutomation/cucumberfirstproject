Feature: Second Login functionality of SFDC environment
Scenario: Login to SFDC with valid credential with DataTable
    Given user is on SFDC login page
		When user enter correct credentials
		|         Username        | Password |
		| InternalCosSupportAdmin | Cdns1234 |
		| InternalCosSupportAdmin1| Cdns12345|
		
		Then sfdc home page appears
		And user waits for some
		Then user close the login page 
