> # ```React```
> 
## Motivation
React is a library and eco-system provides good sense develpoment experience with richness of UI development lifecycle. It has the biggest community among UI development technology and continuously pushing the technology next level. Thus the market goest on "React" way.

## Breakthrough of React
You know every technology comes into big picture and public attention must have some unique traits to provide that solves good-hard business problems. React has several briefly discussed below:
1. React Virtual DOM


## Updating values in the UI real-time
React uses a solution called state, it fixes the reload issue everytime the UI update or adds new data. The state feature in React makes a webapp truly SPA (Single Page Application). Simple term, it re-render specific portion without even reloading.


## Some React extensions (for VS Code)
1. html to JSX

## React Components
- Components are reuseable function can be used throughout the project.
- Compenents provide feature that maintains, **Similar in design or strcuture and different in data approach**.

## React component naming rule
React এর component এর নাম অবশ্যই Capital letter দিয়ে শুরু করতে হবে বা pascale case follow করতে হবে ।

## React File System 
**manifest.json** used for mobile indexing.
**robots.txt** used for web indexing.  
<ins>**Best practice**</ins>: Make sure every react component start off with capital letter.


### ```<center></center> Tag```
The **center** tag center everything in it.

### React Fragments
Fragment is a feature that allows you to group multiple children elements without adding an extra node to the DOM tree.

```jsx
const ChildComponent = () => (
 <React.Fragment>
    {/* Codes here */}
 </React.Fragment>
);
```

Shorthand for fragment
```jsx
const ChildComponent = () => (
 <>
    {/* Codes here */}
 </>
);
```

### Mapping items
```jsx
const foodItem = ["Bread", "Butter", "Milk", "Vegetables"];
return (
    <>
        {foodItem.map((item) => (
            <li>{item}</li>
        ))}
    </>
);
```

## **```'key' attribute or key prop```**
The key attribute or prop is a special attribute used by React. It helps React identify which items have changed, been added, or been removed within a list. It's common to include a key attribute for each rendered item.
**key prop track if any item changes and re-render that particular UI**.

## **```Conditional Rendering```**
Conditional rendering in React is a technique where components render differently based on certain conditions within your React components. This is achieved using JavaScript's conditional statements like if, &&, and ? : operators. There are several ways to perform conditional rendering in React:

1. **Using logical && operator:**

   You can use the logical `&&` operator to conditionally render elements based on truthy values.

   ```jsx
   import React, { useState } from 'react';

   function MyComponent() {
     const [isDataAvailable, setIsDataAvailable] = useState(true);

     return (
       <div>
         {isDataAvailable && <p>Data is available!</p>}
       </div>
     );
   }
   ```

2. **Using ternary operator:**

   Ternary operators can be used for simple conditional rendering within JSX.

   ```javascript
   import React, { useState } from 'react';

   function MyComponent() {
     const [isLoading, setIsLoading] = useState(true);

     return (
       <div>
         {isLoading ? (
           <p>Loading...</p>
         ) : (
           <p>Data loaded!</p>
         )}
       </div>
     );
   }
   ```

3. **Using conditional rendering with if-else outside JSX:**

   You can perform conditional rendering by using regular JavaScript `if-else` statements outside the JSX and returning different components or content based on conditions.

   ```javascript
   import React, { useState } from 'react';

   function MyComponent() {
     const [isError, setIsError] = useState(false);

     let content;
     if (isError) {
       content = <p>Error occurred!</p>;
     } else {
       content = <p>No errors!</p>;
     }

     return (
       <div>
         {content}
       </div>
     );
   }
   ```

## **CSS Modules**
CSS files in React are globally available throughout the project. This may lead to ambiguities (like repeating class names) and other difficulties with design. As a result, **CSS modules were introduced with a pattern stating that every component has its own CSS file**. To define a CSS module file follow this file naming:

```component_name.module.css```

To use classes defined in a CSS module file we have to use object like notation.

👉 See more in: **Practice1.jsx**

### 🚀 Best practice - Optional chaining
While accessing object properties using optional chaining operator (**?.**) consider a best practice. It is important because the property we're trying to access may not available, in this can it produce an error prone to bug. 



### **htmlFor** 
The htmlFor attribute is used to associate a label with an input element.

## **Props** in React 
Props (Short form of properties) are way to pass parent to child.

## **```Passing component as props (Children props)```**
> We can easily import and use a component in another component, but as per react good practices one should use **children props** to do so with additional benefits.
> 
To pass a component as a prop in React, you can simply pass the component name as a value to the prop. Here's an example:

```jsx
import React from 'react';

// Child component
const ChildComponent = () => {
  return <h2>Hello from ChildComponent!</h2>;
};

// Parent component
const ParentComponent = ({ child }) => {
  return (
    <div>
      <h1>Hello from ParentComponent!</h1>
      {child}
    </div>
  );
};

// App component
const App = () => {
  return (
    <div>
      <ParentComponent child={<ChildComponent />} />
    </div>
  );
};

export default App;
```

In the example above, the `ChildComponent` is passed as a prop to the `ParentComponent` by wrapping it in curly braces and using the prop name `child`. Inside the `ParentComponent`, you can render the passed component by simply using `{child}`.

Note that when passing a component as a prop, you need to use the component name without the JSX tags (`< >`).


## **```Event Handling```**


> # ```React Hooks```

Hooks in react are powerful feature that allows you to use state and other React features in functional components.

### **useState** hook
When we need to render on update or change a paritcular section in the website we have to use useState hook.

### **useEffect** hook
```javascript
useEffect(() => {
    /// your codes
}, [dependencies]);
```
With useEffect a component re-render every time it's dependency changes. 

> # ```Context API```

### **"_redirects" file**

The_redirects file is used to handle client-side routing in a single-page React application.

> # ```React Event Handler```

&nbsp;

> # **```Event bubbling```**

Event propagation is the process of an event moving up the DOM tree from the element where it occurred to its parent elements, and so on, until it reaches the top of the document. In React, event propagation works in the same way as it does in the DOM.

In event bubbling, when an event is triggered on a child component, it will first be handled by the child component's event handler. Then, the event will propagate up to the parent component's event handler, and further up to the next parent component's event handler, continuing until it reaches the root element or until the event is explicitly stopped from propagating further.

Event bubbling is also known as even propagation. When an event triggered on a nested element is propagated through it's parent element in the DOM hierarchy.

In simple language, child component calls along with it's parent event.

- First, the button’s event handler gets triggered.
- Second, the parent div’s event handler gets triggered.

**How to stop event bubbling?**
On the event handling function invoke this function.

```javascript
onClick={(e) => {
        e.stopPropagation();
        console.log("Parent 2 is called");
    }}>
```

The best practice is to always use **```event.stopPropagation();```**

&nbsp;

> # ```React Classnames library```

You can reuse css classes by using this library additionally handle  classes with conditional rendering.

> # ```React Forms```

The onsubmit should be called from forms.

> # **```React TypeScript```**

TypeScript Tuples:
