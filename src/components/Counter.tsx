import React from "react";
import { Card } from "@/components/Card";
import { Button } from "@/components/ui/button"

interface IProps {
   title: string
}

interface IState {
    counter: number
    isLoading: boolean
}

export class Counter extends React.Component<IProps,IState>  {
    state: Readonly<IState> = {
        counter: 0,
        isLoading: false
    }

    handleChangeCounter(value: 1 | -1){
        this.setState(prevState =>({
            counter: prevState.counter + value
        }))
    }

    async componentDidMount(): Promise<void> {
        this.setState({isLoading: true}) 

        window.addEventListener('resize', this.handleResize)

        await new Promise(resolve => setTimeout(resolve,2000));

        this.setState({isLoading: false})
    }

    componentDidUpdate(_prevProps: Readonly<IProps>, prevState: Readonly<IState>,): void {
        console.log({
            previous: prevState,
            current: this.state
        })
    }

    handleResize(){
        console.log('Window resize')
    }

    componentWillUnmount(): void {
        window.removeEventListener('resize',this.handleResize)
    }

    render(): React.ReactNode {
        return (
            
            <Card title="Contador">
                {this.state.isLoading && <h1>Carregando..'</h1>}
                <h1 className="text-2xl mb-2">Valor atual: {this.state.counter}</h1>


                <div className="space-x-1">
                    <Button onClick={() => this.handleChangeCounter(1)}>+</Button>
                    <Button onClick={() => this.handleChangeCounter(-1)}>-</Button>
                </div>
            </Card>
        )
    }
}