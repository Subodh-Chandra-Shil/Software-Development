> # ```React```
> 
## Motivation
React is a library and eco-system provides good sense develpoment experience with richness of UI development lifecycle. It has the biggest community among UI development technology and continuously pushing the technology next level. Thus the market goest on "React" way.

## Breakthrough of React
You know every technology comes into big picture and public attention must have some unique traits to provide that solves good-hard business problems. React has several briefly discussed below:
1. React Virtual DOM


## React File System 
**manifest.json** used for mobile indexing.
**robots.txt** used for web indexing.  
<ins>**Best practice**</ins>: Make sure every react component start off with capital letter.

## Some React extensions (for VS Code)
1. html to JSX

## Updating values in the UI real-time
React uses a solution called state, it fixes the reload issue everytime the UI update or adds new data. The state feature in React makes a webapp truly SPA (Single Page Application). Simple term, it re-render specific portion without even reloading.

## React component naming rule
React এর component এর নাম অবশ্যই Capital letter দিয়ে শুরু করতে হবে বা pascale case follow করতে হবে ।



> # ```React Hooks```

### **useState** hook
When we need to render on update or change a paritcular section in the website we have to use useState hook.



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
