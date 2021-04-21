import axios from 'axios';

const RESOURCE_API_BASE_URL = "http://localhost:3456/getallresourcesbyid/2";
const RESOURCE_API_BASE_URL1 = "http://localhost:3456/addresource";

class ResourceService {

    getResources(){
        return axios.get(RESOURCE_API_BASE_URL);
    }

    addResource(resource){
        return axios.post(RESOURCE_API_BASE_URL1, resource);
    }

}

export default new ResourceService()