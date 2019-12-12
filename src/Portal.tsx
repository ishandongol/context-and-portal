import React from 'react';
import ReactDOM from 'react-dom'

const portalRoot: HTMLElement | null = document.getElementById('portal-root');

class Portal extends React.Component {

    el: HTMLDivElement = document.createElement('div');

    componentDidMount() {
        if (portalRoot) {
            portalRoot.appendChild(this.el);
        }
    }

    componentWillUnmount() {
        if (portalRoot) {
            portalRoot.removeChild(this.el);
        }
    }

    render() {
        return ReactDOM.createPortal(
            this.props.children,
            this.el,
        );
    }
}


export default Portal;