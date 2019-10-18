import React, { Component, createContext } from 'react';

export const ModalContext = createContext();

class ModalContextProvider extends Component {
    state = {
        modalNeedOpen: true
    }

    setModalOppenedBefore = () => {
        this.setState({modalNeedOpen:false})
    }

    render() {
        return (
            <ModalContext.Provider 
                value={{
                    ...this.state,
                    setModalDontNeedOpen: this.setModalOppenedBefore
                }} >
                {this.props.children}
            </ModalContext.Provider>
        );
    }
}

export default ModalContextProvider;
