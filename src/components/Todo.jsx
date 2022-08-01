const Todo = ({todo, eliminarTodo, editarTodo}) => {

    const {id, nombre, estado, descripcion, priority} = todo

    return (

        <li className="list-group-item d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">
            <div className="fw-bold"> {nombre} ({estado ? "Done" : "inQA"}) 
             </div>
            <p> {descripcion} </p>
            <div>
                    <button className="btn btn-sm btn-danger me-2" onClick={() => eliminarTodo(id)}>
                        Delete
                    </button>
                    <button className="btn btn-sm btn-warning" onClick={() => editarTodo(id)}>
                        Edit
                    </button>
                </div>
            </div>
            <span className="badge bg-primary rounded-pill"></span>
            {priority && "Priority"}
      </li>
    );
};

export default Todo;