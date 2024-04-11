* Shopping Cart <br>
Create a React web app with the following screens in order:
1. Create a basic User Login screen where the user can enter the username and password to List
the Items in the shopping portal. On login failure show a window.alert() saying Invalid
username/password.
2. On successful login take the user to the List Items screen. The List Items screen is where the
user can see all the items. Clicking on an item in the items list should add that item to the cart.
3. Show a Checkout button at the top of this screen which the user will use to place an order. Also
next to the Checkout button show 2 buttons:
a. Cart button to list all the added Items in the cart. Clicking on this button should show all
the cart items (i.e. cart_id, item_id) in a toast or window.alert().
b. Order History button to list all the placed orders for the user. Clicking on this button
should show all the placed Order ids in a toast or window.alert().
4. On clicking the checkout button, the cart should get converted to an order. You can show the List
Items screen again with a toast saying Order successful.

* install the necessary packages in the root directory of your React application. <br>
npm install
<be>
*** To start the React app, run: <br>
npm start
<br>
** To start a JSON server with your db.json file on port 8000, run: <br>
json-server src/db.json --port 8000 <br>
http://localhost:8000/users <br>
http://localhost:8000/items <br>
http://localhost:8000/carts <br>
http://localhost:8000/orders <br>
