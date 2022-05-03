---
title: "React Study Questions"
slug: "/react-questions"
---

1. What is React.js?

   - Open source **JavaScript Library**
   - Used to build _Single Page Applications_
   - Utilizes reusable _components_
   - Helpful for dynamic user interfaces

2. Describe React Components.

   - Can either be class or function.
   - React elements that construct (make up) a react application
   - Typcally return JSX

3. What is JSX?

   - _JavaScript XML_, used to create React elements that resemble HTML elements
   - Can only return one JSX element per component
   - Can include embedded JS surrounded by `{}`
   - Cannot contain JS protected keywords (e.g. `for`, `class`, etc)

4. Describe State and Props.

   - State
     - Data values that persist throughout the _lifecycle_ of a component, and when change/updated, _they trigger a component re-render_

   ```jsx
   class ClassComp extends React.Component {
     constructor(props) {
       super(props);

       this.state = {
         title: "Hello World",
       };
     }
     // ...
   }

   const FuncComp = () => {
     const [title, setTitle] = useState("Hello World");

     // ...
   };
   ```

   - Props
     - Data values that are passed from parent component to child component

   ```jsx
   const Child = (props) => {
     return <h1>{props.title}</h1>;
   };

   const Parent = () => {
     return <Child title="Hello World" />;
   };
   ```

5. How do you render a list in React, and how are _keys_ involved?

   - When rendering a list in react, use the .map() array method to return a new array of JSX elements, each of which having a unique key prop assigned to it
   - Lists are arrays that can be returned to JSX as a _list of JSX elements_

   ```jsx
   const arr = [1, 2, 3];
   const callback = (num, index) => <span key={index}>{num}</span>;
   // ...
   <div>{arr.map(callback)}</div>;
   ```

6. Describe the Effect Hook.

   - Will receive a callback function and dependency array. Calls the function after each render, but only if any of the values mentioned in the dependency array _have_ changed.
   - Example:

   ```jsx
   useEffect(() => {
     console.log("location has changed to: ", location.pathname);
   }, [location.pathname]);
   ```

7. Explain React Router

   - Allows for a react application to display many different views depending on the URL path.
   - Install into a project with `npm install react-router-dom`
   - React Router comes with the following components:
     - BrowserRouter
     - Routes
     - Route
     - Link
   - Example:

   ```jsx
   <BrowserRouter>
     <Link to="/">Home</Link>
     <Link to="about">About</Link>
     <Link to="projects">Projects</Link>
     <Routes>
       <Route path="/" element={<Home />} />
       <Route path="about" element={<About />} />
       <Route path="projects" element={<Projects />} />
     </Routes>
   </BrowserRouter>
   ```

8. Describe React Router Hooks.

   - React Router comes with several react hooks useful for navigation
   - **Navigate Hook**

     - Will return a function that will programmically navigate to a new route, causing a new component to be rendered
     - Example:

     ```jsx
     const navigate = useNavigate();
     // ...
     navigate("timeline"); // navigates to the /timeline url path
     ```

   - **Params Hook**

     - Will return an object with parsed URL parameter name/values
     - Example:

     ```jsx
     const params = useParams();
     // if url is: https://mydomain.com/about/123-abc
     params.id; // id will be: "123-abc"
     ```

   - **Location Hook**
     - Will return an object with:
       - pathname
       - search queries
       - state passed from navigation
       - url hash values

## Study More

- [InterviewBit's React Interview Questions](https://www.interviewbit.com/react-interview-questions/)
- [Scrimba's React Interview Questions](https://scrimba.com/articles/react-interview-questions/)
