# Rate Ron's Quotes

A dynamic list container.  Loads initially with example data.  Ability to add more quotes and your rating by clicking "Add Quote".  Additionally able to delete quotes, select quote rows, and sort by Rate or Quote (just click on the respective heading).  

## Getting Started

 * clone the repo
 * cd into folder ronswansonquotes
 * `npm install`
 * `npm run start`
 
 The project will launch locally on port 3000

## Running the tests

`npm run test a`

This will run all tests

## Running Flow

`npm run flow`

There are two known errors see comments in 'quote_container.js'

## Built With

* Project was bootstrapped with: [Create React App](https://github.com/facebookincubator/create-react-app)
* Styling: [Semantic UI](https://semantic-ui.com/)
* Used to run Test: [Jest](https://github.com/facebook/jest) and [Enzyme](https://github.com/airbnb/enzyme)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* https://github.com/jamesseanwright for making the Ron Swanson API

## Notes

* Pressing Return will reload the page.  Use mouseClick on "Add Quote" button to add quote to list.
* To sort the list click on the "Rating" or "Quote" heading.
* To delete a row, click on the trash can icon next to the respective row.
* To show a selection of a row, click on the row.
* You can either give no rating or a number rating.  A string is not an acceptable rating.  

