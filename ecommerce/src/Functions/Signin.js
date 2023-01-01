import axios from "axios";

export const signinReq = (url, data, headers) => {
  let tokenValue = localStorage.getItem("token");
  return axios
    .post(
      url,
      data,
      (headers = {
        token: tokenValue,
      })
    )
    .then((resp) => {
      return resp;
    })
    .catch((err) => {
      return err;
    });
};

// export const signinReq1 = (str1,str2,str3) => {
//  console.log(str1+str2+str3)
//  };
