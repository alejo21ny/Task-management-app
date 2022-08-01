import Swal from "sweetalert2";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';


const   Formulario = ({agregarTodo}) => {

    const initialState = {
        nombre: "",
        descripcion: "",
        estado: "inQA",
        priority: false,
    };

    const [todo, setTodo] = useState(initialState); 

    const {nombre, descripcion, estado, priority} = todo;


    const handleSubmit = (e) => {
        e.preventDefault();
        if(!nombre.trim()){
            e.target[0].focus();
            Swal.fire({
                title: "Error!",
                text: "Do not leave Title field empty",
                icon: "error",
            });
            return;
        }

        if(!descripcion.trim()){
            e.target[1].focus();
            Swal.fire({
                title: "Error!",
                text: "Do not leave Description field empty",
                icon: "error",
            });
            return;
        }

        Swal.fire({
            title: "Success",
            text: "Task was Added",
            icon: "success",
        });    

        agregarTodo({
            nombre: nombre,
            descripcion: descripcion,
            estado: estado === "inQA" ? false : true,
            priority: priority,
            id: Date.now()
        });

        setTodo(initialState)
    };


    const handleChange = (e) => {
        const {name, value, checked, type } = e.target
        setTodo((old) => ({
            ...old,
        [name]: type === "checkbox" ? checked : value
        }));
     
    };

    return (

        <>
            <h3>Add a New Task</h3>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    className="form-control mb-2"
                    name="nombre"
                    placeholder="Title"
                    value={nombre}
                    onChange={handleChange}
                />

                <textarea
                    className="form-control mb-2"
                    placeholder="Description"
                    name="descripcion"
                    value={descripcion}
                    onChange={handleChange}
                /> 

                <select 
                name="estado" 
                className="form-control mb-2"
                value={estado}
                onChange={handleChange}
                >
                    <option value="inQA"> inQA </option>
                    <option value="Done"> Done </option>
                </select>

                <div className="form-check">
                    <input
                            className="form-check-input" 
                            type="checkbox"
                            checked={priority}
                            id="flexCheckDefault"
                            name="priority"
                            onChange={handleChange}
                            
                            
                    />

                    <label 
                        className="form-check-label" 
                        htmlFor="flexCheckDefault"
                        >
                        Priority
                    </label>
                </div>
                <button type="submit" className="btn btn-primary"> 
                    Add 
                </button>

                </form>    
        </>
    )
};

export default Formulario;