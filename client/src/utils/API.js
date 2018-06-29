import axios from "axios"; 


const API = {
    searchNYT : function(topic, startYear, endYear) {
        console.log("I am inside SeachNYT in utils/api")
        const authKey = "0afa39faa7bd4c6db1f2f779b5785f14";
        const queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + authKey + "&q="+ topic +"&begin_date="+ startYear + "0101&end_date=" + endYear + "0101";
        return axios.get(queryURL);
    
    },
    saveArticle : function (saveObj) {
        return axios.post("/api/saved", saveObj);
    },
    getArticle: function(){
        return axios.get("/api/saved"); 
    },
    deleteArticle: function(id) {
        return axios.delete(`/api/saved/${id}`);
    }

};


export default API;