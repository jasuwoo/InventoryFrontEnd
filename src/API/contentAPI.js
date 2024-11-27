import { baseURL } from "../API/index"

export const postContentAPI = async (postData) => {
    const response = await fetch(`${baseURL}/api/contents/`, {
        method: 'POST',
        // headers: {
        //     Accept: 'application/json',
        //     'Content-Type': 'application/json'
        // },

        body: postData
    })
    const res = await response.json();
    return res
};

export const getContentAPI = async () => {
    const response = await fetch(`${baseURL}/api/contents/`, {
        method: 'GET',
    });

    const res = await response.json();
    return res;
};

// export const patchContentAPI = async (updateData) =>{
//     const response = await fetch(`${baseURL}/api/contents/` , {
//         method: 'PATCH',
//         body: updateData
//     })
//     const res = await response.json();
//     return res
// }