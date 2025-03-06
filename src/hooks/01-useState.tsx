import { Button } from "@/components/ui/button";
import { useState } from "react"

export function State(){
    const [counter, setCounter] = useState<number>(0);

    function handlePlus(){
        setCounter(prevState => prevState + 1)
    }
    function handleMinus(){
        setCounter(prevState => prevState - 1)
    }

    function handleReset(){
        setCounter(0)
    }

    return (
        <div>
            <h1 className="text-primary-foreground">Counter {counter}</h1>
            <div className="space-x-1">
                    <Button onClick={handlePlus}>+</Button>
                    <Button onClick={handleMinus}>-</Button>
                    <Button onClick={handleReset}>Reset</Button>
                </div>
        </div>
    )
}