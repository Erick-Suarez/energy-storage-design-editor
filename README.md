## Project Summary

The purpose of this project is to build a site layout webpage that allows users to mockup the build of materials and site layout of an Industrial Energy Battery site. This industrial site will be providing energy for houses, stores, etc. so we need to make sure it fits the requirements of the customer. We want a very intuitive UI that allows the customer to configure the assembly of batteries they want on their site. Tbere are 4 different types of batteries each having different properties such as dimension, energy density, and cost.

The following is a simple UI that is divided into three sections: Product Quantity, The Grid, Drag and Droppable Products.
- The Product Quantity section is on the left side where users can enter the quantity of each product they'd like to order. Below the input the grand total cost, dimensions, and energy density will be displayed.
- The Grid section is in the middle, where users can define their representation of their site based on the dimensions they need. However as the requirements stated, are limited to 100ft in width. Each box represents 10ft x 10ft.
- The Drag and Droppable Products section is the representation of the products and their dimensions for users to drag and drop onto the The Grid. When a product's quantity is set to 0, it's respective representation will be dulled, when it is greater than 0, the representation will light up. The user will be able to drag and drop the representation onto the grid. The number of representations they have to work with depends on the quantity set in the Product Quantity section.

## Future Improvements

- For now transformers are auto-added and not able to be selected by the user to ensure that there is 1 transformer for at most 4 batteries. This can be changed based on requirements.
- The product representations can be drag and dropped anywhere. It would be great such that they could only be drag and dropped onto the grid and would lock into place when the mouse is let go. If the mouse is let go outside the grid it should disappear so the user can try again.
- Currently everytime the quantity is changed the state is reset, ie the product representations that have been placed disappear.
- Giving a deletion or rotate option for the product representations.
- Include details on reccomendations on how the orientation should be designed based on the product's specific requriements.
- Using 3d assests and a 3d ui for dragging and dropping the assests onto a virtual site.
- Obtaining the product information from an actual database and API instead of the hardcoded response.
- Add more thorough testing to components.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:


### `npm install`

Installs all necessary dependencies.

### `npm start --port=8000`

Runs the app in the development mode.\
Open [http://localhost:8000](http://localhost:8000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
