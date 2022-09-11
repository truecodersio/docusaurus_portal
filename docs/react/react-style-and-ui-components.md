---
title: "Exercise: React UI Components and Styling"
slug: "/react-ui-components-and-styling-exercise"
description: React UI Components and Styling Exercise with Steps
keywords: [javascript, react.js, react hooks, react router]
---

## Objective

Your objective is to continue from the React Routing Exercise to create an individual page view for each film. Additional goals will be to display film stats based on the current filter applied to our list of films.

## Getting Started

This is part 7 of TrueCoders' React Exercise Series.

You'll be in the same react repository that you worked in for **part 6**.

## Steps

React Series Part 7 has two parts with multiple exercises each.

- [Exercise 1: Install Bootstrap](#exercise-1-install-bootstrap)
- [Exercise 2: Setup Global CSS and Assets](#exercise-2-setup-global-css-and-assets)
- [Exercise 3: Create a Nav Component](#exercise-3-create-a-nav-component)
- [Exercise 4: Create a Main Layout](#exercise-4-create-a-main-layout)
- [Exercise 5: Create a Loader Component](#exercise-5-create-a-loader-component)
- [Exercise 6: Export Components from an Entry Point File](#exercise-6-export-components-from-an-entry-point-file)

### Exercise 1: Install Bootstrap

1. Use npm to install [bootstrap](https://www.npmjs.com/package/bootstrap) and [react-bootstrap](https://www.npmjs.com/package/react-bootstrap)

### Exercise 2: Setup Global CSS And Assets

1. Create a `global.css` file in your `src/` folder if you do not have one already
2. Place the following code within the file

   ```css
   @import url(../node_modules/bootstrap/dist/css/bootstrap.css);

   * {
     box-sizing: border-box;
   }

   html {
     font-size: 20px;
     font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
       "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
       "Helvetica Neue", sans-serif;
     -webkit-font-smoothing: antialiased;
     -moz-osx-font-smoothing: grayscale;
   }

   body {
     margin: 0;
   }

   .max-w-600 {
     width: 100%;
     max-width: 600px;
     margin-left: auto;
     margin-right: auto;
   }
   ```

3. Change the css file import in your `index.js` to `global.css`
4. Create a new folder in `src/` called `assets/`
   - This is where you can store assets, such as images

> Feel free to change any of this css to make it your own. The most important statement is the `@import(...)` statement at the top of the file that will load Bootstrap's css class rulesets.
> I will reference `logo.svg` and `TCLogoOnly.png` files later in this exercise. The `logo.svg` is the react svg that was added to this project when you began in part 1. The `TCLogoOnly.png` will be used as the navbar brand. You can use any image for that step in the exercise.

### Exercise 3: Create a Nav Component

1. Create a new folder called `layout/` in your existing `components/` folder
2. Create a new folder called `topnav/` in your new `layout/` folder
3. Create a new file called `topnav.component.jsx` in your new `topnav/` folder
4. Add the following imports

   ```jsx
   import reactlogo from "../../../assets/logo.svg";
   import tclogo from "../../../assets/TCLogoOnly.png";
   import { NavLink } from "react-router-dom";
   import Container from "react-bootstrap/Container";
   import Nav from "react-bootstrap/Nav";
   import Navbar from "react-bootstrap/Navbar";
   ```

5. Create a functional component called `TopNav` and have it return:

   ```jsx
   <Navbar bg="dark" variant="dark" expand="lg">
     <Container>
       <Navbar.Brand href="/">
         <img
           alt=""
           src={reactlogo}
           height="40"
           className="d-inline-block align-top"
         />{" "}
         Learning React
       </Navbar.Brand>
       <Navbar.Toggle aria-controls="basic-navbar-nav" />
       <Navbar.Collapse id="basic-navbar-nav">
         <Nav className="me-auto">
           <NavLink className="nav-link" to="/">
             Home
           </NavLink>
           <NavLink className="nav-link" to="/films">
             Films
           </NavLink>
         </Nav>
         <Navbar.Brand className="justify-content-end">
           <img src={tclogo} height="40" alt="TrueCoders" />
         </Navbar.Brand>
       </Navbar.Collapse>
     </Container>
   </Navbar>
   ```

> I am using a TrueCoders png for the `Navbar.Brand` `img`. You will either add a new image or use an existing image in your `assets/` folder.

### Exercise 4: Create a Main Layout

1. Create a new folder in `layout/` called `mainlayout/`
2. Create a new file in `mainlayout/` called `mainlayout.component.jsx`
3. Add the following imports

   ```jsx
   import { TopNav } from "../topnav/topnav.component";
   import { Container } from "react-bootstrap";
   ```

4. Create a functional component called `MainLayout`
5. Destructure `className` and `children` from the `props` parameter
6. Have the component return the following:

   ```jsx
   <div className={className}>
     <TopNav />
     <Container>
       <div className="my-4">{children}</div>
     </Container>
   </div>
   ```

This layout component will be used as the universal layout for each view of our React application.

### Exercise 5: Create a Loader Component

Create a generic, reusable Loader component.

1. Create a new folder in `components/` called `common/`
2. Create a new folder in `common/` called `loader/`
3. Create a new file in `loader/` called `loader.css`, and add the following contents:

   ```css
   .loader {
     animation: rotate 2s linear infinite;
   }

   @keyframes rotate {
     100% {
       transform: rotate(360deg);
     }
   }

   .loader circle {
     animation: dash 1.5s ease-in-out infinite;
   }

   @keyframes dash {
     0% {
       stroke-dasharray: 1, 150;
       stroke-dashoffset: 0;
     }
     50% {
       stroke-dasharray: 90, 150;
       stroke-dashoffset: -35;
     }
     100% {
       stroke-dasharray: 90, 150;
       stroke-dashoffset: -124;
     }
   }
   ```

4. Create a new file in `loader/` called `loader.component.jsx`
5. Import the `loader.css` file
6. Create a functional component called `Loader`
7. Destructure `size` from the props parameter
8. Return the following:

   ```jsx
   <svg
     className="loader"
     xmlns="http://www.w3.org/2000/svg"
     width={size}
     height={size}
     viewBox="0 0 24 24"
     fill="none"
     stroke="currentColor"
     strokeWidth="2"
     strokeLinecap="round"
     strokeLinejoin="round"
   >
     <circle cx="12" cy="12" r="10" />
   </svg>
   ```

### Exercise 6: Export Components from an Entry Point File

1. Import `MainLayout`, `TopNav`, `Loader` into a new `index.js` file in your `components/` folder
2. Export all components from this entry point file

   ```jsx
   import { MainLayout } from "./layout/mainlayout/mainlayout.component";
   import { TopNav } from "./layout/topnav/topnav.component";
   import { Loader } from "./common/loader/loader.component";

   export { MainLayout, TopNav, Loader };
   ```

> This entry point file is a common practice. We can now import any of our components from this one file directly inside of the `components/` folder.

### Add React Bootstrap to the Page Views

1. Update the `SingleFilmPage` component to return:

   ```jsx
   if (!isLoaded) {
     return (
       <MainLayout className="text-center">
         <Loader size={40} />
       </MainLayout>
     );
   }

   return (
     <MainLayout>
       <div className="row">
         <div className="col-md-6 mb-4">
           <img
             className="img-fluid"
             src={`${item.image}`}
             alt={`${item.title} Poster`}
           />
         </div>
         <div className="col-md-6 mb-4">
           <h1>{item.title}</h1>
           <p>
             Directed by {item.director}. Produced by {item.producer}.
           </p>
           <p>
             The film was released in <strong>{item.release_date}</strong> and
             garnered a <strong>{item.rt_score}</strong> aggregate score on{" "}
             <a
               href="https://www.rottentomatoes.com/"
               target="_blank"
               rel="noreferrer"
             >
               Rotten Tomatoes
             </a>
             .
           </p>
           <h2>Description</h2>
           <p>{item.description}</p>
         </div>
         <pre></pre>
       </div>
     </MainLayout>
   );
   ```

2. Update the `FilmsPage` component to return:

   ```jsx
   if (!isLoaded) {
     return (
       <MainLayout className="text-center">
         <Loader size={40} />
       </MainLayout>
     );
   }

   let directors = getListOf(list, "director");
   let filmsByDirector = filterFilmsByDirector(list, searchDirector);
   let { avg_score, latest, total } = getFilmStats(filmsByDirector);

   return (
     <MainLayout>
       <div className="">
         <h1>Studio Ghibli Films</h1>
         <Form>
           <Form.Group className="mb-3" controlId="searchDirector">
             <Form.Label>Filter by Director</Form.Label>
             <Form.Select
               value={searchDirector}
               onChange={(e) => setSearchDirector(e.target.value)}
             >
               <option value="">All</option>
               {directors.map((item, idx) => {
                 return (
                   <option key={idx} value={item}>
                     {item}
                   </option>
                 );
               })}
             </Form.Select>
           </Form.Group>
         </Form>
         <Row>
           <Col>
             <Card>
               <Card.Body>
                 <div className="d-flex justify-content-between">
                   <small># Of Films</small>
                   <Badge bg="dark">{total}</Badge>
                 </div>
               </Card.Body>
             </Card>
           </Col>
           <Col>
             <Card>
               <Card.Body>
                 <div className="d-flex justify-content-between">
                   <small>Average Rating</small>
                   <Badge bg="dark">{avg_score.toFixed(2)}</Badge>
                 </div>
               </Card.Body>
             </Card>
           </Col>
           <Col>
             <Card>
               <Card.Body>
                 <div className="d-flex justify-content-between">
                   <small>Latest Film</small>
                   <Badge bg="dark">{latest}</Badge>
                 </div>
               </Card.Body>
             </Card>
           </Col>
         </Row>
         <hr />
         <ListGroup>
           {filmsByDirector.map((item) => {
             return (
               <ListGroupItem key={item.id}>
                 <Link to={`${item.id}`}>{item.title}</Link>
               </ListGroupItem>
             );
           })}
         </ListGroup>
       </div>
     </MainLayout>
   );
   ```

3. Update the `HomePage` component to return:

   ```jsx
   return (
     <MainLayout>
       <h1>Learning React</h1>

       <form onSubmit={onSubmit}>
         <input
           type="text"
           name="listitem"
           id="listitem"
           value={text}
           onChange={(e) => setText(e.target.value)}
         />
         <button type="submit">Add</button>
       </form>

       <ul>
         {list.map((item, idx) => {
           return (
             <li key={idx} onDoubleClick={() => onDblClick(idx)}>
               {item}
             </li>
           );
         })}
       </ul>
     </MainLayout>
   );
   ```

## Helpful Links

If you feel stuck, or would like to see the finished code for this exercise to check your work, check out:

<!-- - [React #7: React UI Components and Styling Exercise Video](https://vimeo.com/743625815) on Vimeo -->

- [React #7: React UI Components and Styling Exercise Repo](https://github.com/Bryantellius/react-exercise/tree/finished) on Github
