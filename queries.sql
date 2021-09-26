-- used the following to create a table in pgAdmin -- this needs to be reviewed as the form input displays as null - the timestamp is the only data saved in the table database - app page reloads correctly for additional user input

CREATE TABLE users (
	id  			serial	PRIMARY key,
	first_name      VARCHAR,
	last_name      	VARCHAR,
	email    		text UNIQUE,
	about			text UNIQUE,
	joined			TIMESTAMP
);

-- when the following was used to create a table - the app returned an error and no input was recorded in the database - the app page also fails to reload correctly

CREATE TABLE users (
id  		serial 	        PRIMARY key,
f_name      VARCHAR(100) 	NOT NULL,
l_name      VARCHAR(100) 	NOT NULL,
email    	text UNIQUE		NOT NULL,
joined		TIMESTAMP 	    NOT NULL
);
