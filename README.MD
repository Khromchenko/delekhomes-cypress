# Delekhomes Cypress UI test framework

## Requirements:
1. Node version 14+

## How to setup framework
1. Clone repository - ```YOURCODEHERE```
2. Install all dependencies - ```npm i```

## How to run tests
Non-headless - ```npx cypress open```
Headless - ```./node_modules/.bin/cypress run```


To-do:
1. Ask devs to add unique attributes for all actionable items(buttons, text fields, drop downs, etc + text that is on the page)
2. Create data over api or seed through db in order to avoid data test colision(when many test work with same data, or user use same data)

Per best practices: All tests should be isolated