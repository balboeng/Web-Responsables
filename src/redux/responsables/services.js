import axios from 'axios';

const URL_BASE = 'http://20.80.227.120/api/Responsables';

export const getResponsables = () => axios.get(URL_BASE);
export const updateResponsableReq = (infoNewResponsable) => axios.put(URL_BASE, infoNewResponsable);
export default ((data) => axios.post(URL_BASE, data));
