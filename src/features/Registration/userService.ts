 import axios from "axios";
import { baseUrl, buildDynamicURL } from "../../shared/baseUrl";

 
// Get All user
const getalluser = async (datas:any) => {  
  	const {page, results,nationality  ,gender} = datas
	const base = baseUrl + `/api`
	const url = buildDynamicURL(  page, results ,nationality,gender,base );  
	const { data } = await axios.get(url)
  return data;
};

  
const userSlice = { 
  getalluser
};

export default userSlice;
