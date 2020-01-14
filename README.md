Simple frontend of contacts list using React and Typescript
This is based on https://www.digitalocean.com/community/tutorials/how-to-build-a-customer-list-management-app-with-react-and-typescript 

**To run**
- Run [this](https://github.com/jamtay/express-typescript-learning) on port 3000
- `npm install`
- `npm start`

**TODO:** 
- Refactor to smaller methods (move code to Create folder, view, common, form etc. Add util methods)
- Remove hardcoded localhost:3000 (add env file)
- Add search endpoint to talk to search-api search endpoint

**Random**
- How to structure code ? by type e.g components, models or by area (create, view, edit) then it is hard to define where boundaries are
- Components should not be too deep. Can use children properties, to avoid passing props down all components 