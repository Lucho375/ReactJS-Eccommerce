import React from 'react';
class Component extends React.Component {

    constructor(nombre, props) {
        super(props);
        this.state = { count: 0 };
        this.props = { nombre: this.nombre }
    }

    render() {
        return (
            <>
                <p>{this.state.count}</p>
                <p>Hola {this.props.nombre}</p>
                <button onClick={() => this.setState({ count: this.state.count + 1 })}>Click</button>
            </>
        )
    }
}

export default Component;