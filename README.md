# react-render

-   React.Component is complicated.
-   Function Component's state management is troublesome.
-   Treat React as a simple GUI library to simplify things.
-   Simple is Great.

## Install

```sh
npm install @eightnineight/react-render
```

## Usage

```
NOTE:
You should not use promise/async/await in ReactRender
render override function, that's not a good pattern,
keep simple, just use React as simple GUI output library.

You also should not continue using React's useState/useEffect
and related functions to manage state.
```

```js
import React from 'react';
import { createRoot } from 'react-dom/client';
import { ReactRender } from "@eightnineight/react-render";

class Text extends ReactRender {
    constructor() {
        super();
    }

    // you need to override render function
    // props is the same as props in react function component.
    render(props) {
        return <div>{props.children}</div>;
    }
}

class App extends ReactRender {
    count = 0;

    constructor() {
        super();

        this.counter = new Text();

        setInterval(() => {
            ++this.count;
            this.reload(); // ReactRender.reload can update render
        }, 1000);
    }

    // you need to override render function
    // props is the same as props in react function component.
    render(props) {
        const Counter = this.counter;

        // you can use ID as key (ID is a unique uuid)
        return <Counter key={Counter.ID}>{this.count}</Counter>;
    }
}

const container = document.getElementById('root');
const root = createRoot(container);

const Application = new App();
root.render(<Application />);
```
