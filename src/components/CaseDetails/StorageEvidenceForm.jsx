import React, { useState } from "react";

const StorageEvidenceForm = () => {

    const [formData, setFormData] = useState({
        caseId: "",
        investigationOfficer: "",
        officeSection: "",
        refNoDate: "",
        exhibitMarking: "",

        type: "",
        ownerName: "",
        brandModel: "",
        color: "",
        serialNo: "",
        size: "",
        encryptionPassword: "",
        seal: ""
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
                        USB / CD / DVD / Memory Card Evidence Form
                    </h4>

                </div>


                <div className="card-body">

                    <form onSubmit={handleSubmit}>


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


                            <div className="col-md-6 mb-3">

                                <label>Office / Section</label>

                                <input
                                    type="text"
                                    name="officeSection"
                                    className="form-control"
                                    onChange={handleChange}
                                />

                            </div>


                            <div className="col-md-6 mb-3">

                                <label>Ref. No. / Date</label>

                                <input
                                    type="text"
                                    name="refNoDate"
                                    className="form-control"
                                    onChange={handleChange}
                                />

                            </div>

                        </div>


                        <h5 className="mt-4">
                            2. Digital Evidence Details
                        </h5>


                        <div className="row">


                            <div className="col-md-6 mb-3">

                                <label>Evidence Type</label>

                                <select
                                    name="type"
                                    className="form-control"
                                    onChange={handleChange}
                                >

                                    <option value="">
                                        Select Type
                                    </option>

                                    <option value="USB Drive">
                                        USB Drive
                                    </option>

                                    <option value="Pendrive">
                                        Pendrive
                                    </option>

                                    <option value="Memory Card">
                                        Memory Card
                                    </option>

                                    <option value="CD">
                                        CD
                                    </option>

                                    <option value="DVD">
                                        DVD
                                    </option>

                                </select>

                            </div>


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

                                <label>Size (GB)</label>

                                <input
                                    type="number"
                                    name="size"
                                    className="form-control"
                                    onChange={handleChange}
                                />

                            </div>


                            <div className="col-md-6 mb-3">

                                <label>Encryption Password</label>

                                <input
                                    type="text"
                                    name="encryptionPassword"
                                    className="form-control"
                                    onChange={handleChange}
                                />

                            </div>


                            <div className="col-md-6 mb-3">

                                <label>Seal</label>

                                <select
                                    name="seal"
                                    className="form-control"
                                    onChange={handleChange}
                                >

                                    <option value="">Select</option>

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
                            className="btn btn-success"
                        >
                            Save Evidence
                        </button>


                    </form>

                </div>

            </div>

        </div>

    );
};

export default StorageEvidenceForm;