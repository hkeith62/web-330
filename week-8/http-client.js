export class HttpClient {  //a and 5
    get = async (url, params = '') => {  // b
        url = new URL(url); //1
        url.search = new URLSearchParams(params); // 2
        const res = await fetch(url.toString(), { //3
            method: 'GET'
        })
        return res.json(); //4
    }
}