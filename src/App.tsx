
import { ChangeEvent, FC, useState } from "react"
import Todo from "./components/Todo"
export interface IArr {
  name: string,
  age: number
}

const App: FC = () => {
  const [Name, setName] = useState<string>("")
  const [Age, setAge] = useState<number>(0)
  const [Arr, setArr] = useState<IArr[]>([])
  const onChangevalue = (e:any): void => {
    if (e.target.name === "Name") {
      setName(e.target.value)
    } else {
      setAge(Number(e.target.value))
    }
  }
  const deleteTodo = (name: string): void => {
    setArr(Arr.filter((val) => {
      return val.name !== name
    }))
  }
  const addTodo = (): void => {
    const setArray = {
      name: Name,
      age: Age
    }
    setArr([...Arr, setArray]);
    setName("")
    setAge(0)
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 text-center">
          <h3>Student Records </h3>
          <input className="mb-1" name="Name" type="text" value={Name} onChange={onChangevalue} /><br></br>
          <input type="number" name="Age" value={Age} onChange={onChangevalue} /><br></br>
          <button className="btn btn-success mt-2" type="button" onClick={addTodo}>Click To Add</button>
          {
            Arr.map((lists: IArr, index: number) => {
              return <Todo lists={lists} key={index} deleteTodo={deleteTodo} />
            })
          }
        </div>
      </div>
    </div>
  );
}

export default App;
