import React from "react";
import { Card } from "@/components/Card";
import { Button } from "@/components/ui/button"
import { withAuthorization } from "@/hocs/withAuthorization";
import { VisibilityControllerComponent } from "./VisibilityController";

interface IProps {
    title: string
    userRole: string
}

interface IState {
    counter: number
    isLoading: boolean
}

class CounterComponent extends React.Component<IProps, IState> {
    state: Readonly<IState> = {
        counter: 0,
        isLoading: false
    }

    constructor(props: IProps) {
        super(props);


        this.handleMinus = this.handleMinus.bind(this)
        this.handlePlus = this.handlePlus.bind(this)
    }

    async componentDidMount(): Promise<void> {
        this.setState({ isLoading: true })

        window.addEventListener('resize', this.handleResize)

        await new Promise(resolve => setTimeout(resolve, 1));

        this.setState({ isLoading: false })
    }

    componentDidUpdate(_prevProps: Readonly<IProps>, prevState: Readonly<IState>,): void {
        console.log({
            previous: prevState,
            current: this.state
        })
    }

    handleResize() {
        console.log('Window resize')
    }

    componentWillUnmount(): void {
        window.removeEventListener('resize', this.handleResize)
    }

    handlePlus() {
        this.setState(prevState => ({
            counter: prevState.counter + 1
        }))
    }

    handleMinus() {
        this.setState(prevState => ({
            counter: prevState.counter - 1
        }))
    }

    render(): React.ReactNode {

        return (
            <Card title="Contador">
                {this.state.isLoading && <h1>Carregando..'</h1>}

                <VisibilityControllerComponent>
                    {({isVisible,toggle}) => (
                        <div className="mb-10">
                            <h1 className="text-2xl mb-2">Saldo atual: {isVisible ? this.state.counter : '******'}</h1>
                            <Button onClick={toggle}>
                                {isVisible ? 'Esconder Saldo' : 'Mostrar Saldo'}
                                </Button>
                        </div>
                    )}
                </VisibilityControllerComponent>

                <div className="space-x-1">
                    <Button onClick={this.handlePlus}>+</Button>
                    <Button onClick={this.handleMinus}>-</Button>
                </div>
            </Card>
        )
    }
}

export const Counter = withAuthorization(CounterComponent, ['admin']);