# Favorite coffee and tea logger

A web application, where you can keep track of your favorite coffees and teas.

Frontend with Vite+React+Typescript and backend with Node.js+Typescript. Versions: node v20.1.0 & npm v9.6.4. The UI is implemented with the Material UI (MUI) library.

## Install

Make sure you have Node.js installed on your computer.

Commands:
- Install dependencies: `npm install`
- Open two terminals, and move to frontend folder in one and to the backend folder in the other.
- Run app: `npm run dev` in both backend&frontend terminals
- Click open the frontend localhost adress http://localhost:3000/ through which the app is running.

## Limitations and future development:

Due to the time constraint, many parts of the app needs to be developed further.

- Visual UI: improvements to overall look and responsive layout of components mobile vs computer screen
- Proper input validation checking (e.g. empty inputs)
- Permanent saving to file or database. POST data gets fetched to the backend and returned to frontend, but saving is not implemented
- Refactoring of code: splitting it to smaller components
- Tea types to the form
- Separate Coffee & Tea favorite lists, or the ability to toggle which all to show
- Feedback to user of successful or faulty "Add" button press
- Better use of Typescript
