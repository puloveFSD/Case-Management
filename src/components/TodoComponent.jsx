import React, { useEffect, useState } from 'react'
import { getTodo, saveTodo, updateTodo } from '../services/TodoService';
import { useNavigate, useParams } from 'react-router-dom';



const TodoComponent = () => {

    const [caseTitle, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [extractionStartTime, setExtractionStartTime] = useState('');
    const [extractionEndTime, setExtractionEndTime] = useState('');
    const [extractionDuration, setExtractionDuration] = useState('');
    const [importStartTime, setImportStartTime] = useState('');
    const [importEndTime, setImportEndTime] = useState('');
    const [importDuration, setImportDuration] = useState('');
    const [reportStartTime, setReportStartTime] = useState('');
    const [reportEndTime, setReportEndTime] = useState('');
    const [reportDuration, setReportDuration] = useState('');
    const [totalTimeDuration, setTotalTimeDuration] = useState('');
    const [completed, setCompleted] = useState(false);
    const navigate = useNavigate()

    const { id } = useParams()

    function saveOrUpdateTodo(e) {
        e.preventDefault()
        const todo = { caseTitle, description, extractionStartTime, extractionEndTime, extractionDuration, importStartTime, importEndTime, importDuration, reportStartTime, reportEndTime, reportDuration, totalTimeDuration, completed }
        console.log(todo);

        if (id) {
            updateTodo(id, todo).then((response) => {
                navigate('/todos')
            }).catch(error => {
                console.error(error)
            })
        } else {
            saveTodo(todo).then((response) => {
                console.log(response.data)
                navigate('/todos')
            }).catch(error => {
                console.log(error);
            })

        }
    }


    function pageTitle() {
        if (id) {
            return <h2 className="text-center text-success">Update Case Timing</h2>
        } else {
            return <h2 className="text-center text-success">Add Case Timing</h2>
        }
    }


    useEffect(() => {

        if (id) {
            getTodo(id).then((response) => {
                console.log(response.data)
                setTitle(response.data.caseTitle)
                setDescription(response.data.description)
                setExtractionStartTime(response.data.extractionStartTime)
                setExtractionEndTime(response.data.extractionEndTime)
                setExtractionDuration(response.data.extractionDuration)
                setImportStartTime(response.data.importStartTime)
                setImportEndTime(response.data.importEndTime)
                setImportDuration(response.data.importDuration)
                setReportStartTime(response.data.reportStartTime)
                setReportEndTime(response.data.reportEndTime)
                setReportDuration(response.data.reportDuration)
                setTotalTimeDuration(response.data.totalTimeDuration)


                setCompleted(response.data.completed)
            }).catch(error => {
                console.log(error);
            })
        }

    }, [])

    return (
        <div className='container'>
            <br />
            <div className="row">
                <div className="card col-md-6 offset-md-3 offset-md-3">
                    {pageTitle()}
                    <div className="card-body">
                        <form action="">
                            <div className="form-group mb-2">
                                <label htmlFor="" className="form-label">DFU No.</label>
                                <input type='text'
                                    placeholder='Enter DFU number'
                                    name='caseTitle'
                                    value={caseTitle}
                                    className='form-control'
                                    onChange={(e) => setTitle(e.target.value)}
                                >
                                </input>
                            </div>
                            <div className="form-group mb-2">
                                <label htmlFor="" className="form-label">Case Description:</label>
                                <input type='text'
                                    placeholder='Enter short Description'
                                    name='description'
                                    className='form-control'
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                >

                                </input>
                            </div>
                            <div className="form-group mb-2">
                                <label htmlFor="" className="form-label">Extraction Start Time:</label>
                                <input type='datetime-local'
                                    placeholder='Enter date and time of the extraction'
                                    name='extractionStartTime'
                                    className='form-control'
                                    value={extractionStartTime}
                                    onChange={(e) => setExtractionStartTime(e.target.value)}
                                >

                                </input>
                            </div>

                            <div className="form-group mb-2">
                                <label htmlFor="" className="form-label">Extraction End Time:</label>
                                <input type='datetime-local'
                                    placeholder='Enter Finish date and time of the extraction'
                                    name='extractionEndTime'
                                    className='form-control'
                                    value={extractionEndTime}
                                    onChange={(e) => setExtractionEndTime(e.target.value)}
                                >

                                </input>
                            </div>

                            <div className="form-group mb-2">
                                <label htmlFor="" className="form-label">Import Start Time:</label>
                                <input type='datetime-local'
                                    placeholder='Enter date and time of the import'
                                    name='importStartTime'
                                    className='form-control'
                                    value={importStartTime}
                                    onChange={(e) => setImportStartTime(e.target.value)}
                                >

                                </input>
                            </div>

                            <div className="form-group mb-2">
                                <label htmlFor="" className="form-label">Import End Time:</label>
                                <input type='datetime-local'
                                    placeholder='Enter Finish date and time of the import'
                                    name='setImportEndTime'
                                    className='form-control'
                                    value={importEndTime}
                                    onChange={(e) => setImportEndTime(e.target.value)}
                                >

                                </input>
                            </div>

                                <div className="form-group mb-2">
                                <label htmlFor="" className="form-label">Report Start Time:</label>
                                <input type='datetime-local'
                                    placeholder='Enter date and time of the report'
                                    name='reportStartTime'
                                    className='form-control'
                                    value={reportStartTime}
                                    onChange={(e) => setReportStartTime(e.target.value)}
                                >

                                </input>
                            </div>

                            <div className="form-group mb-2">
                                <label htmlFor="" className="form-label">Report End Time:</label>
                                <input type='datetime-local'
                                    placeholder='Enter Finish date and time of the report'
                                    name='reportEndTime'
                                    className='form-control'
                                    value={reportEndTime}
                                    onChange={(e) => setReportEndTime(e.target.value)}
                                >

                                </input>
                            </div>
                            <div className="form-group mb-2">
                                <label htmlFor="" className="form-label">Todo Completed:</label>
                                <select
                                    className='form-control'
                                    value={completed}
                                    onChange={(e) => setCompleted(e.target.value)}
                                >
                                    <option value="false">No</option>
                                    <option value="true">True</option>
                                </select>
                            </div>
                            <button className="btn btn-success" onClick={(e) => saveOrUpdateTodo(e)}>Submit</button>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default TodoComponent