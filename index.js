import React, { Fragment, useState } from 'react';
import { v4 as uuid } from 'uuid';

export class ReactRender {
    key = uuid();

    constructor() { }

    ////////////////////////////////////////////////////
    #defaultReload = () => { }

    #useRender = () => {
        const [, update] = useState({});
        this.reload = () => {
            update?.({});
        }
    }

    reload = this.#defaultReload;

    layout(props) {
        return;
    }

    render = (props) => {
        this.#useRender();
        return this.layout(props);
    }
};
