# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start --port=8000`

Runs the app in the development mode.\
Open [http://localhost:8000](http://localhost:8000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## Assessment Details

The following is a simple ui that allows users to enter the quantity of each product they'd like to order,
below the input the grand total cost, dimensions, and energy density will be displayed. To the right is a grid
that will auto add the battery to the layout, each battery is color coded. There's plenty of improvements that I'd like
to do if I had more bandwidth to work on this. These are a few areas:
- Including the constraint for the 100 width limit for the grid
- Using 3d assests and a 3d ui for dragging and dropping the assests onto a virtual site.
- Obtaining clarity on whether transformers should be auto-added for the batteries or whether the user should have
freedom to choose but be warned if they exceed more transformers than reccommended or have too many transformers.
- In this toy example each square is the same size despite the different dimensions, that too would be an area to
improve on.
- Lots of values are also hard coded.
- There's also a lot of inefficiencies with calculations, such as the grid is created every time from scratch instead of updating just a piece of it.
