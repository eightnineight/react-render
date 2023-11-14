# react-render

-   React.Component is complicated.
-   Function Component's state management is troublesome.
-   Treat React as a simple GUI library to simplify things.

## Usage

```js
import { ReactRender } from "@eightnineight/react-render";

class Button extends ReactRender {
    constructor() {
        super();
    }
}

class App extends ReactRender {
    constructor() {
        super();
    }

    layout = (props) => {
        return <Button />;
    };
}
```
