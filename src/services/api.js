import axios from "axios";


const  account=JSON.parse(localStorage.getItem('account'));

const customAxios = axios.create({
  
    headers: {
        Authorization: `Bearer ${account?.token}`
    },
    baseURL: 'http://bookinghouse.top:8081/'
    // baseURL: 'http://localhost:8081/'
})
export default customAxios;


export const handleError=(error)=>{
    if (error.response) {
        // Xử lý lỗi từ máy chủ (mã lỗi HTTP)
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        // Xử lý lỗi không thể kết nối đến máy chủ
        console.log(error.request);
       
      } else {
        console.log('Lỗi', error.message);
      }
      console.log(error.config);
}