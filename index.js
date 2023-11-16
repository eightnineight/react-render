import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';

export class ReactRender {
    ID = uuid();

    ////////////////////////////////////////////////////
    #useRender = () => {
        const [, update] = useState({});
        this.reload = () => {
            update?.({});
        }
    }
    #render = (props) => {
        this.#useRender();
        return this.render(props);
    }

    reload = () => { }
    render(props) { }

    ////////////////////////////////////////////////////

    constructor() {
        this.#render = new Proxy(this.#render, {
            get: (target, prop) => {
                return this[prop];
            },
            set: (target, prop, value) => {
                this[prop] = value;
                return true;
            },
            has: (target, prop) => {
                return (prop in this);
            }
        });
        return this.#render;
    }
};
