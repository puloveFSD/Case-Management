import React, { useEffect, useState } from 'react'


import { getAllTodos } from '../services/TodoService'
import CasePieChart from '../components/CasePieChart'


const Dashboard = () => {

    const [todos, setTodos] = useState([])


    useEffect(() => {

        getAllTodos()
            .then(response => {

                setTodos(response.data)

            })
            .catch(error => {

                console.error(error)

            })

    }, [])


    const totalCases = todos.length

    const completedCases =
        todos.filter(todo => todo.completed).length

    const pendingCases =
        totalCases - completedCases


    return (

        <div className="app-content">

            <div className="container-fluid">

                <div className="row mb-3">

                    <div className="col-12">

                        <h3>
                            Digital Forensic Dashboard
                        </h3>

                    </div>

                </div>


                <div className="row">


                    {/* TOTAL */}

                    <div className="col-lg-4 col-6">

                        <div className="small-box text-bg-primary">

                            <div className="inner">

                                <h3>
                                    {totalCases}
                                </h3>

                                <p>
                                    Total Cases
                                </p>

                            </div>

                            <div className="icon">

                                <i className="bi bi-folder" style={{ fontSize: "30px"}}></i>

                            </div>

                        </div>

                    </div>


                    {/* COMPLETED */}

                    <div className="col-lg-4 col-6">

                        <div className="small-box text-bg-success">

                            <div className="inner">

                                <h3>
                                    {completedCases}
                                </h3>

                                <p>
                                    Completed Cases
                                </p>

                            </div>

                            <div className="icon">

                                <i className="bi bi-check-circle" style={{ fontSize: "30px" }}></i>

                            </div>

                        </div>

                    </div>


                    {/* PENDING */}

                    <div className="col-lg-4 col-6">

                        <div className="small-box text-bg-warning">

                            <div className="inner">

                                <h3>
                                    {pendingCases}
                                </h3>

                                <p>
                                    Pending Cases
                                </p>

                            </div>

                            <div className="icon">

                                <i className="bi bi-clock" style={{ fontSize: "30px" }}></i>

                            </div>

                        </div>

                    </div>

                </div>


              

            </div>
             {/* Separate Pie Chart Component */}
            <CasePieChart
                completed={completedCases}
                pending={pendingCases}
            />

        </div>

    )

}

export default Dashboard