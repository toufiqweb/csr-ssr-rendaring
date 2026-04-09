import Todos from "@/components/count/todos/Todos";
import React from "react";

const TodosPage = () => {
  const TodosPromise = fetch("https://jsonplaceholder.typicode.com/todos").then((res) =>
    res.json(),
  );

  console.log(TodosPromise);
  return <>

        <Todos TodosPromise={TodosPromise}></Todos>
  
  </>;
};

export default TodosPage;
