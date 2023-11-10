import React, { Fragment, useState } from 'react';
import { v4 as uuid } from 'uuid';

export class ReactRender {
    #key = uuid();
    #reload = this.#defaultReload;

    ////////////////////////////////////////////////////
    constructor() {
    }

    create = () => {
        let Component = (props) => {
            return this.#render(props);
        }
        Component.reload = () => {
            this.#reload();
        }
        return Component;
    }

    ////////////////////////////////////////////////////
    #defaultReload = () => { }

    #useRender = () => {
        const [, update] = useState({});
        this.#reload = () => {
            update?.({});
        }
    }

    #render = (props) => {
        this.#useRender();
        return (
            <Fragment key={this.#key}>
                {this.render(props)}
            </Fragment>
        )
    }

    render(props) {
        return (
            <Fragment>
            </Fragment>
        );
    }
};
