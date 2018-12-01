In the main folder Run "node server.js" to connect to server on port 8081.
Navigate to "angular" folder.
Run "ng serve" for a dev server. 
Open Your browser.
Navigate to "http://localhost:4200/". 
The app will automatically reload if you change any of the source files.

My application allows you to Register, Edit and Delete players from a club registry.

Player information schema is as follows:
Name,
Phone Number,
Date of Birth,
Position,
Email Address,
Weekly Wage,
Contract Expiry Date.

All information, new and edited, will be sent from the app to the mLab database.

Form validation is as follows:
Name(none),
Phone Number(must be a number),
Date of Birth(must be a date),
Position(none),
Email Address(must include @ and .),
Weekly Wage(must be a number),
Contract Expiry Date(must be a date).

Flash messages from the "angular2-flash-messages" library are included and used when 
an email is not valid and when a player is successfully created, edited or deleted.


