import React from "react";

type Params = {
    isVisible: boolean,
    toggle: () => void
}

interface IProps {
    children: (params: Params) => React.ReactNode
}
interface IState {
    isVisible: boolean,
}

export class VisibilityControllerComponent extends React.Component<IProps, IState> {
    state: IState = {
        isVisible: true
    }

    toggle = () => {
        this.setState(prevState => ({ isVisible: !prevState.isVisible }))
    }

    render(): React.ReactNode {
        return this.props.children({
            isVisible: this.state.isVisible,
            toggle: this.toggle
        })
    }
}