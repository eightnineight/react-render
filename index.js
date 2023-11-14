import React, { Fragment, useState } from 'react';
import { v4 as uuid } from 'uuid';

export class ReactRender {
    ID = uuid();

    ////////////////////////////////////////////////////
    #defaultReload = () => { }

    #useRender = () => {
        const [, update] = useState({});
        this.reload = () => {
            update?.({});
        }
    }

    #render = (props) => {
        this.#useRender();
        return this.layout(props);
    }

    reload = this.#defaultReload;

    layout(props) {
        return;
    }

    ////////////////////////////////////////////////////

    constructor() {
        this.#render.ID = this.ID;
        this.render = this.#render;
    }
};
