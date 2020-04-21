Feature: Login into 9gag account
		 Existing 9gag user should be able to login into an account by using correct credentails

Scenario Outline: Login into account with invalid user data
	
	Given 	User navigates to 9gag login website
	And 	User closes the pop up message
	And 	User enters a username: <Username>
	And 	User enters a password: <Password>
	When 	User clicks on the login button
	Then 	User should be taken to unsuccessful login page


Examples:
|Username			|Password	|
|					|Example12@	|
|@gmail.com			|Example12@	|
|example			|Example12@	|
|example@gmail.com	|			|
|example@gmail.com	|Example12@	|

Scenario Outline: Login into account with valid user data
	
	Given 	User navigates to 9gag login website
	And 	User closes the pop up message
	And 	User enters a username: <ValidUsername>
	And 	User enters a password: <ValidPassword>
	When 	User clicks on the login button
	Then 	User should be taken to successful login page 
	
Examples:
|ValidUsername			|ValidPassword	|
|example@gmail.com		|Example12@		|

