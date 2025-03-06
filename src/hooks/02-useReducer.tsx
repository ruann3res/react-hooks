import { Button } from "@/components/ui/button";
import { useReducer } from "react";

type State = {
  user: {
    id: number;
    age: number;
    name: string;
  };
  isUnderAge: boolean;
};

type Action =
  | { type: "changeUser"; payload: { user: State["user"] } }
  | { type: "updateAge"; payload: { age: number } };

function reducer(prevState: State, action: Action) {
  switch (action.type) {
    case "changeUser":
      return {
        user: action.payload.user,
        isUnderAge: action.payload.user.age < 18,
      };
    case "updateAge": {
      const age = action.payload.age;
      return {
        user: {
          ...prevState.user,
          age,
        },
        isUnderAge: age < 18,
      };
    }
    default:
      return prevState;
  }
}

function getInititalState() {
  return {
    user: {
      id: Date.now(),
      age: 18,
      name: "Ruan",
    },
    isUnderAge: false,
  };
}

export function Reducer() {
  const [state, dispatch] = useReducer(
    reducer,
    {
      user: {
        id: Date.now(),
        age: 18,
        name: "Ruan",
      },
      isUnderAge: false,
    },
    getInititalState
  );

  function handleChangeUser() {
    dispatch({
      type: "changeUser",
      payload: {
        user: {
          id: Date.now(),
          age: 57,
          name: "Jose",
        },
      },
    });
  }

  function handleRefreshAge() {
    const ages = [12, 21, 17, 39];
    const age = ages[Math.floor(Math.random() * ages.length)];
    dispatch({ type: "updateAge", payload: { age } });
  }

  return (
    <div>
      <h1 className="text-primary-foreground">Usuario: {state.user.name}</h1>
      <h2 className="text-primary-foreground">Idade: {state.user.age}</h2>
      <h2 className="text-primary-foreground">
        Menor de idade?: {state.isUnderAge ? "Sim" : "Não"}
      </h2>
      <div className="space-x-1">
        <Button onClick={handleChangeUser}>Atualizar Usuario</Button>
        <Button onClick={handleRefreshAge}>Atualizar Idade</Button>
      </div>
    </div>
  );
}
