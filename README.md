# Advanced Library - React Assignment
 - ~Author~: Sumit Prasad
 - Organization: Nagarro Software
 - Surge Preview Link: projects.react2.sumitkp.in
 - Surge Deploy Command: surge "C:\Users\sumitprasad\Bench Training\React - Basics\advanced-react-assignment\dist" "projects.react2.sumitkp.in"

 # Libraries used in this project:
- React
- React DOM
- Redux: `@reduxjs/toolkit`, `react-redux`
- Thunk: `redux-thunk`
- Router: `react-router`,`react-router-dom`

# Installation (Local)
- In CMD, type and execute: 
    - `git clone https://github.com/sumitkp11/advanced-react-assignment.git`
    - `cd advanced-react-assignment`
    - `npm install`
    - `npm run dev`

# Basics
## What is Thunk?
- A thunk is a function that accepts two arguments: redux store dispatch method and getState method.
- Thunk functions are not directly called by application code but passed to `store.dispatch()`.

## How To Use?
### Homepage `/`
- You will get a table of tasks which are loaded from a remote API. You'll need internet connection in order to load.
- Following table headers can be clicked to switch between ascending and descending sort orders: Title, Assigned To, Status and Priority.
- Clicking anywhere in the table row will make you go to `/edit` page to edit task details and update new changes.
- Under `Actions` table header, you see `Edit` and `Delete` buttons.
- Upon clicking on Delete button or represented with `❌`, will first ask for confirmation through a alert box.
- Clicking on Header Title will redirect to home.

### Edit Page `/edit`


### Task Details Page `/details`



## Sources:
- Icon: https://www.alt-codes.net/arrow_alt_codes.php
- Mock API: https://mockapi.io/


