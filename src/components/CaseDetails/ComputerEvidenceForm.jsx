import React, { useState } from "react";

const ComputerEvidenceForm = () => {

    const [formData, setFormData] = useState({

        caseId: "",
        investigationOfficer: "",
        officeSection: "",
        refNoDate: "",
        exhibitMarking: "",

        ownerName: "",
        brandModel: "",
        color: "",
        serialNo: "",
        hardDiskCount: "",
        computerStatus: "",
        computerSeal: "",

        diskMake: "",
        diskModel: "",
        diskSerialNo: "",
        diskCapacity: "",
        diskStatus: "",
        diskSeal: ""

    });


    const handleChange = (e) => {

        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });

    };


    const handleSubmit = (e) => {

        e.preventDefault();

        console.log(formData);

    };


    return (

        <div className="container mt-4">

            <div className="card">

                <div className="card-header">

                    <h4>
                        CPU / Laptop Digital Evidence Form
                    </h4>

                </div>


                <div className="card-body">

                    <form onSubmit={handleSubmit}>


                        {/* CASE INFORMATION */}

                        <h5>1. Case Information</h5>


                        <div className="row">

                            <div className="col-md-6 mb-3">

                                <label>Case ID</label>

                                <input
                                    type="text"
                                    name="caseId"
                                    className="form-control"
                                    onChange={handleChange}
                                />

                            </div>


                            <div className="col-md-6 mb-3">

                                <label>Investigation Officer</label>

                                <input
                                    type="text"
                                    name="investigationOfficer"
                                    className="form-control"
                                    onChange={handleChange}
                                />

                            </div>

                        </div>


                        {/* COMPUTER DETAILS */}

                        <h5 className="mt-4">
                            2. Computer / Laptop Details
                        </h5>


                        <div className="row">


                            <div className="col-md-6 mb-3">

                                <label>Owner's Name</label>

                                <input
                                    type="text"
                                    name="ownerName"
                                    className="form-control"
                                    onChange={handleChange}
                                />

                            </div>


                            <div className="col-md-6 mb-3">

                                <label>Brand / Model</label>

                                <input
                                    type="text"
                                    name="brandModel"
                                    className="form-control"
                                    onChange={handleChange}
                                />

                            </div>


                            <div className="col-md-6 mb-3">

                                <label>Color</label>

                                <input
                                    type="text"
                                    name="color"
                                    className="form-control"
                                    onChange={handleChange}
                                />

                            </div>


                            <div className="col-md-6 mb-3">

                                <label>Serial Number</label>

                                <input
                                    type="text"
                                    name="serialNo"
                                    className="form-control"
                                    onChange={handleChange}
                                />

                            </div>


                            <div className="col-md-6 mb-3">

                                <label>No. of Hard Disks</label>

                                <input
                                    type="number"
                                    name="hardDiskCount"
                                    className="form-control"
                                    onChange={handleChange}
                                />

                            </div>


                            <div className="col-md-6 mb-3">

                                <label>Status / Condition</label>

                                <input
                                    type="text"
                                    name="computerStatus"
                                    className="form-control"
                                    onChange={handleChange}
                                />

                            </div>

                        </div>


                        {/* HARD DISK DETAILS */}

                        <h5 className="mt-4">
                            3. Hard Disk Details
                        </h5>


                        <div className="row">


                            <div className="col-md-6 mb-3">

                                <label>Make</label>

                                <input
                                    type="text"
                                    name="diskMake"
                                    className="form-control"
                                    onChange={handleChange}
                                />

                            </div>


                            <div className="col-md-6 mb-3">

                                <label>Model</label>

                                <input
                                    type="text"
                                    name="diskModel"
                                    className="form-control"
                                    onChange={handleChange}
                                />

                            </div>


                            <div className="col-md-6 mb-3">

                                <label>Serial Number</label>

                                <input
                                    type="text"
                                    name="diskSerialNo"
                                    className="form-control"
                                    onChange={handleChange}
                                />

                            </div>


                            <div className="col-md-6 mb-3">

                                <label>Capacity (GB)</label>

                                <input
                                    type="number"
                                    name="diskCapacity"
                                    className="form-control"
                                    onChange={handleChange}
                                />

                            </div>


                            <div className="col-md-6 mb-3">

                                <label>Status / Condition</label>

                                <input
                                    type="text"
                                    name="diskStatus"
                                    className="form-control"
                                    onChange={handleChange}
                                />

                            </div>


                            <div className="col-md-6 mb-3">

                                <label>Seal</label>

                                <select
                                    name="diskSeal"
                                    className="form-control"
                                    onChange={handleChange}
                                >

                                    <option value="">
                                        Select
                                    </option>

                                    <option value="Yes">
                                        Yes
                                    </option>

                                    <option value="No">
                                        No
                                    </option>

                                </select>

                            </div>

                        </div>


                        <button
                            type="submit"
                            className="btn btn-primary"
                        >
                            Save Computer Evidence
                        </button>


                    </form>

                </div>

            </div>

        </div>

    );
};


export default ComputerEvidenceForm;