import React, { use } from "react";

const Todos = ({ TodosPromise }) => {
  const todos = use(TodosPromise);

  console.log(todos);

  return (
    <div className="max-h-[40vh] py-10">
      <h1 className=" font-bold text-5xl text-center">
        Todos : {todos.length}
      </h1>
    </div>
  );
};

export default Todos;
