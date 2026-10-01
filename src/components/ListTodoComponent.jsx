import React, { useEffect, useState } from 'react'
import {
    completeTodo,
    deleteTodo,
    getAllTodos,
    inCompleteTodo
} from '../services/TodoService'
import { useNavigate } from 'react-router-dom'

const ListTodoComponent = () => {

    const [todos, setTodo] = useState([])

    const navigate = useNavigate()

    useEffect(() => {
        listTodos()
    }, [])


    function listTodos() {

        getAllTodos()
            .then((response) => {
                setTodo(response.data)
            })
            .catch(error => {
                console.error(error)
            })
    }


    function addNewTodo() {
        navigate('/add-todo')
    }


    function updateTodo(id) {
        navigate(`/update-todo/${id}`)
    }


    function removeTodo(id) {

        deleteTodo(id)
            .then(() => {
                listTodos()
            })
            .catch(error => {
                console.error(error)
            })
    }


    function markCompleteTodo(id) {

        completeTodo(id)
            .then(() => {
                listTodos()
            })
            .catch(error => {
                console.error(error)
            })
    }


    function markInCompleteTodo(id) {

        inCompleteTodo(id)
            .then(() => {
                listTodos()
            })
            .catch(error => {
                console.error(error)
            })
    }


    return (

        <div className="app-content">

            <div className="container-fluid">

                {/* PAGE HEADER */}

                <div className="row mb-3">

                   <div className="col-12 text-center">

   

</div>

                </div>


                {/* MAIN CARD */}

                <div className="card">

                    {/* CARD HEADER */}

                    <div className="card-header">

                        <h3 className="card-title">
                            Digital Forensic Case Details
                        </h3>

                        <div className="card-tools">

                            <button
                                className="btn btn-primary btn-sm"
                                onClick={addNewTodo}
                            >

                                <i className="bi bi-plus-circle me-1"></i>

                                Add Case Details

                            </button>

                        </div>

                    </div>


                    {/* CARD BODY */}

                    <div className="card-body">

                        <div className="table-responsive">

                            <table className="table table-bordered table-striped table-hover">

                                <thead>

                                    <tr className="text-center">

                                        <th>Case Title</th>

                                        <th>Case Description</th>

                                        <th>Extraction Start</th>

                                        <th>Extraction End</th>

                                        <th>Extraction Duration</th>

                                        <th>Import Start</th>

                                        <th>Import End</th>

                                        <th>Import Duration</th>

                                        <th>Report Start</th>

                                        <th>Report End</th>

                                        <th>Report Duration</th>

                                        <th>Total Duration</th>

                                        <th>Report Dispatched</th>

                                        <th>Actions</th>

                                    </tr>

                                </thead>


                                <tbody>

                                    {

                                        todos.length === 0 ? (

                                            <tr>

                                                <td
                                                    colSpan="14"
                                                    className="text-center"
                                                >

                                                    No case records found.

                                                </td>

                                            </tr>

                                        ) : (

                                            todos.map(todo => (

                                                <tr key={todo.id}>

                                                    <td>
                                                        {todo.caseTitle}
                                                    </td>

                                                    <td>
                                                        {todo.description}
                                                    </td>

                                                    <td>
                                                        {todo.extractionStartTime}
                                                    </td>

                                                    <td>
                                                        {todo.extractionEndTime}
                                                    </td>

                                                    <td>
                                                        {todo.extractionDuration}
                                                    </td>

                                                    <td>
                                                        {todo.importStartTime}
                                                    </td>

                                                    <td>
                                                        {todo.importEndTime}
                                                    </td>

                                                    <td>
                                                        {todo.importDuration}
                                                    </td>

                                                    <td>
                                                        {todo.reportStartTime}
                                                    </td>

                                                    <td>
                                                        {todo.reportEndTime}
                                                    </td>

                                                    <td>
                                                        {todo.reportDuration}
                                                    </td>

                                                    <td>
                                                        {todo.totalTimeDuration}
                                                    </td>


                                                    {/* STATUS */}

                                                    <td className="text-center">

                                                        {

                                                            todo.completed ? (

                                                                <span className="badge text-bg-success">

                                                                    YES

                                                                </span>

                                                            ) : (

                                                                <span className="badge text-bg-danger">

                                                                    NO

                                                                </span>

                                                            )

                                                        }

                                                    </td>


                                                    {/* ACTIONS */}

                                                    <td>

                                                        <div className="d-flex flex-wrap gap-1">

                                                            {/* UPDATE */}

                                                            <button
                                                                className="btn btn-warning btn-sm"
                                                                onClick={() =>
                                                                    updateTodo(todo.id)
                                                                }
                                                                title="Update Case"
                                                            >

                                                                <i className="bi bi-pencil"></i>

                                                            </button>


                                                            {/* DELETE */}

                                                            <button
                                                                className="btn btn-danger btn-sm"
                                                                onClick={() =>
                                                                    removeTodo(todo.id)
                                                                }
                                                                title="Delete Case"
                                                            >

                                                                <i className="bi bi-trash"></i>

                                                            </button>


                                                            {/* COMPLETE */}

                                                            <button
                                                                className="btn btn-success btn-sm"
                                                                onClick={() =>
                                                                    markCompleteTodo(todo.id)
                                                                }
                                                                title="Mark Complete"
                                                            >

                                                                <i className="bi bi-check-circle"></i>

                                                            </button>


                                                            {/* INCOMPLETE */}

                                                            <button
                                                                className="btn btn-primary btn-sm"
                                                                onClick={() =>
                                                                    markInCompleteTodo(todo.id)
                                                                }
                                                                title="Mark Incomplete"
                                                            >

                                                                <i className="bi bi-arrow-counterclockwise"></i>

                                                            </button>

                                                        </div>

                                                    </td>

                                                </tr>

                                            ))

                                        )

                                    }

                                </tbody>

                            </table>

                        </div>

                    </div>

                    {/* CARD FOOTER */}

                    <div className="card-footer">

                        <span className="text-muted">

                            Total Cases: <strong>{todos.length}</strong>

                        </span>

                    </div>

                </div>

            </div>

        </div>

    )

}

export default ListTodoComponent