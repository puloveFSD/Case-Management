import axios from "axios";

const BASE_REST_API_URL='http://localhost:8080/api/mobileEvidence';

export const getAllMobileEvidence=()=>axios.get(BASE_REST_API_URL);
export const saveMobileEvidence=(mobileEvidence)=>axios.post(BASE_REST_API_URL, mobileEvidence);
export const getAllMobileEvidenceById=(id)=>axios.get(BASE_REST_API_URL+'/'+id);
export const updateMobileEvidence=(id, mobileEvidence)=>axios.put(BASE_REST_API_URL+'/'+id, mobileEvidence);
export const deleteMobileEvidence=(id)=>axios.delete(BASE_REST_API_URL+'/'+id);
