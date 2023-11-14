# react-render

-   React.Component is complicated.
-   Function Component's state management is troublesome.
-   Treat React as a simple GUI library to simplify things.
-   Simple is Great.

## Usage

```
NOTE:
You should not use promise/async/await in ReactRender 
layout override function, that's not a good pattern, 
keep simple, just use React as simple GUI output library.

You also should not continue using React's useState/useEffect 
and related functions to manage state.
```

```js
import { ReactRender } from "@eightnineight/react-render";

class Button extends ReactRender {
    constructor() {
        super();
    }

    // you need to override layout function
    // props is the same as props in react function component.
    layout(props) {
        return <div>{props.children}</div>;
    }
}

class App extends ReactRender {
    count = 0;

    constructor() {
        super();

        this.Btn = new Button();

        setInterval(() => {
            ++count;
            this.reload(); // ReactRender.reload can update render
        }, 1000);
    }

    // you need to override layout function
    // props is the same as props in react function component.
    layout = (props) => {
        const Btn = this.Btn.render; // use ReactRender.render to output

        // you can use ID as key (ID is a unique uuid)
        return <Btn key={Btn.ID}>{this.count}</Btn>;
    };
}
```
