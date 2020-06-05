## Site
[Live] ()

## Run the program locally
1. [Install Ruby 2.6.5] (https://www.ruby-lang.org/en/documentation/installation/)
2. [Install Node 12.16.3] (https://nodejs.org/en/download/package-manager/) 
3. In your terminal, navigate to the project folder
4. Type the following in the terminal: gem install bundler
5. Type the following in the terminal after the above executes: bundle install
6. Type the following in the terminal:  npm install  
7. Type the following in the terminal after the above executes: npm run webpack
8. Type the following in another terminal in the project folder: bundle exec rails s
9. Go to localhost:3000 in your browser
 
## Technologies
  * React
  * JavaScript
  * PostgreSQL
  * Ruby
  * Rails
  * Webpack
  * HTML5
  * CSS3
 
## Navigating the code
  * A file named schema.rb contains the SQL schema
  * The file named seeds.rb contains the script to parse the data
  * The file named indicator_index.jsx contains the script to display the data
 
## Considerations
 
### Schema
I stored the number values as strings because they varied in precision, and a string seemed like the simplest way to maintain data integrity.  I stored the year as an integer instead of a date because I had no insight into other date details (month, day).  I included another table, countries, to reference the country associated with each indicator.  In theory, we could have other tables holding information about the indicator code, and its components (topic, general subject, specific subject, etc.), but this approach may be beyond the scope of this project.
 
### Data Parsing
I only included cells with values in the database, as cells without values provide no meaningful information, and takes space.  The parsing script takes O(m*n) time, which is not ideal especially for large data sets.  I used Rails ORM, instead of insert statements, to interact with the database. 
 
### Display page
Fetching and formatting of this data set takes time (hence the ...Loading signal).  The time complexity of the display script is O(nlogn) due to sorting the indicators.  I fetched the data in one batch, but to reduce loading and formatting time, I could fetch and format the data in batches.

