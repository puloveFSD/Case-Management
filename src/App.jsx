import React from 'react'

import {
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom'


import Layout from './components/Layout'

import ListTodoComponent
    from './components/ListTodoComponent'

import TodoComponent
    from './components/TodoComponent'

import Dashboard
    from './pages/Dashboard'
import MobileEvidenceForm from './components/CaseDetails/MobileEvidenceForm'

import StorageEvidenceForm from './components/CaseDetails/StorageEvidenceForm'
import ComputerEvidenceForm from './components/CaseDetails/ComputerEvidenceForm'
import CaseTimingDetails from './pages/CaseTimingDetails'


function App() {

    return (

        <BrowserRouter>

            <Layout>

                <Routes>


                    {/* DASHBOARD */}

                    <Route
                        path="/dashboard"
                        element={
                            <Dashboard />
                        }
                    />

                     {/* DASHBOARD */}

                    <Route
                        path="/case-timing-details"
                        element={
                            <CaseTimingDetails />
                        }
                    />



                    {/* CASE LIST */}

                    <Route
                        path="/"
                        element={
                            <ListTodoComponent />
                        }
                    />


                    {/* ADD CASE */}

                    <Route
                        path="/add-todo"
                        element={
                            <TodoComponent />
                        }
                    />


                    {/* UPDATE CASE */}

                    <Route
                        path="/update-todo/:id"
                        element={
                            <TodoComponent />
                        }
                    />
                    {/*Add Mobile*/}
                    <Route
                    path="/add-mobile"
                    element={
                        <MobileEvidenceForm/>
                    }
                    />

                     {/*Add Storage*/}
                    <Route
                    path="/add-storage"
                    element={
                        <StorageEvidenceForm/>
                    }
                    />

                        {/*Add Storage*/}
                    <Route
                    path="/add-computer"
                    element={
                        <ComputerEvidenceForm/>
                    }
                    />


                </Routes>

            </Layout>

        </BrowserRouter>

    )

}

export default App