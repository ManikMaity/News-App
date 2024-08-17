import axiosInstance from "../helper/axiosInstance";

export async function fetchNews (page, category){
    const perPage = 12;
    const country = "us";
    try{
        const respose = await axiosInstance.get(`?country=${country}&category=${category ? category : ""}&apiKey=83df117d45fa4b068fa3e5ea460656d3&page=${page}&pageSize=${perPage}`)
       const articles = respose.data.articles;
       console.log(articles)
        return articles;
    }
    catch(err){
        console.log(err);
        return [];
    }
}