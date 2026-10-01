import React, { useEffect, useState } from "react";
import {saveMobileEvidence,updateMobileEvidence, getAllMobileEvidence} from '../../services/MobileService'
import { useNavigate, useParams } from "react-router-dom";


const MobileEvidenceForm = () => {

const navigate=useNavigate();
const [loading, setLoading]=useState(false);
const [error, setError]=useState("");

    
    const [formData, setFormData] = useState({
        mobileEvidenceId: "",
        investigationOfficer: "",
        officeOrSection: "",
        refNo: "",
        date:"",
        exhibitMarking: "",
        mobileOwner: "",
        status: "",
        physicalAppearance: "",
        brand: "",
        color: "",
        imei1: "",
        imei2: "",
        passwordPinPattern: "",
        sim1: "",
        sim2: "",
        eSim: "",
        faradayBag: ""
    });

  

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value
        });
    };


    const handleSubmit = async(e) => {
        e.preventDefault();
        setLoading(true);
        setError("");
       
        try{
            const response = await saveMobileEvidence(formData);
            console.log("Saved:", response.data);
            alert("Mobile evidence saved successfully");
            navigate("/dashboard");
        }catch (err){
            console.error(err);
            setError(err.response?.data?.message || "Failed to save. Please try again");
        }finally{
            setLoading(false);
        }
      };


    return (
        <div className="container mt-4">

            <div className="card">

                <div className="card-header">
                    <h4>Mobile Digital Evidence Form</h4>
                </div>

                <div className="card-body">

                    <form onSubmit={handleSubmit}>

                        <h5 className="text-primary fw-bold">1. Case Information</h5>

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
                                <label>Office/Section</label>

                                <input
                                    type="text"
                                    name="officeOrSection"
                                    className="form-control"
                                    onChange={handleChange}
                                />
                            </div>


                            <div className="col-md-3 mb-3">
                                <label>Ref. No.</label>

                                <input
                                    type="text"
                                    name="refNo"
                                    className="form-control"
                                    onChange={handleChange}
                                />
                            </div>

                             <div className="col-md-3 mb-3">
                                <label>Date</label>

                                <input
                                    type="text"
                                    name="date"
                                    className="form-control"
                                    onChange={handleChange}
                                />
                            </div>
                              <div className="col-md-6 mb-3">
                                <label>Exhibit Marking</label>

                                <input
                                    type="text"
                                    name="exhibitMarking"
                                    className="form-control"
                                    onChange={handleChange}
                                />
                            </div>


                        </div>


                        <h5 className="mt-4 fw-bold text-primary">
                            2. Digital Evidence Details
                        </h5>

                        <div className="row">

                            <div className="col-md-6 mb-3">

                                <label>Mobile Owner's Name</label>

                                <input
                                    type="text"
                                    name="mobileOwner"
                                    className="form-control"
                                    onChange={handleChange}
                                />

                            </div>


                            


                            <div className="col-md-6 mb-3">

                                <label>Physical Appearance</label>

                                <input
                                    type="text"
                                    name="physicalAppearance"
                                    className="form-control"
                                    onChange={handleChange}
                                />

                            </div>
                            <div className="col-md-4 mb-3">

                                <label>Status</label>

                                <select
                                    name="status"
                                    className="form-control"
                                    onChange={handleChange}
                                >
                                    <option value="">Select</option>
                                    <option value="ON">ON</option>
                                    <option value="OFF">OFF</option>
                                </select>

                            </div>
                               <div className="col-md-4 mb-3">

                                <label>Brand / Model</label>

                                <input
                                    type="text"
                                    name="brand"
                                    className="form-control"
                                    onChange={handleChange}
                                />

                            </div>

                            <div className="col-md-4 mb-3">

                                <label>Color</label>

                                <input
                                    type="text"
                                    name="color"
                                    className="form-control"
                                    onChange={handleChange}
                                />

                            </div>


                            <div className="col-md-6 mb-3">

                                <label>IMEI 1</label>

                                <input
                                    type="text"
                                    name="imei1"
                                    className="form-control"
                                    onChange={handleChange}
                                />

                            </div>


                            <div className="col-md-6 mb-3">

                                <label>IMEI 2</label>

                                <input
                                    type="text"
                                    name="imei2"
                                    className="form-control"
                                    onChange={handleChange}
                                />

                            </div>


                            <div className="col-md-6 mb-3">

                                <label>Password / PIN / Pattern</label>

                                <input
                                    type="text"
                                    name="passwordPinPattern"
                                    className="form-control"
                                    onChange={handleChange}
                                />

                            </div>


                            <div className="col-md-6 mb-3">

                                <label>Faraday Bag</label>

                                <select
                                    name="faradayBag"
                                    className="form-control"
                                    onChange={handleChange}
                                >
                                    <option value="">Select</option>
                                    <option value="Used">Used</option>
                                    <option value="Not Used">
                                        Not Used
                                    </option>
                                </select>

                            </div>

                             <div className="col-md-6 mb-3">

                                <label>SIM 1 <span className="fw-bold text-danger">(Number र NTC/NCell खुलाउनुहोस् ।)</span> </label>

                                <input
                                    type="text"
                                    name="sim1"
                                    placeholder=" (98********, NCELL / NTC) "
                                    className="form-control"
                                    onChange={handleChange}
                                />

                            </div>
                             <div className="col-md-6 mb-3">

                                 <label>SIM 2 <span className="fw-bold text-danger">(Number र NTC/NCell खुलाउनुहोस् ।)</span> </label>


                                <input
                                    type="text"
                                    name="sim2"
                                    placeholder="(98********, NTC / NCELL) "
                                    className="form-control"
                                    onChange={handleChange}
                                />

                            </div>

                            <div className="col-md-12 mb-3">

                                <label>e-SIM</label>

                                <input
                                    type="text"
                                    name="eSim"
                                    placeholder="यदी e-sim छ भने यसमा लेख्नुहोस् ।"
                                    className="form-control"
                                    onChange={handleChange}
                                />

                            </div>
                        </div>

{error && <div className="alert altert-danger">{error}</div>}
                        <button
                            type="submit"
                            className="btn btn-primary"
                            disabled={loading}
                        >{loading?"Saving......":"Save Mobile Evidence"}
                            Save Mobile Evidence
                        </button>

                    </form>

                </div>

            </div>

        </div>
    );
};

export default MobileEvidenceForm;