//display all the country flags in console

const getBlogs = () => {
    const xhr = new XMLHttpRequest();

    xhr.open("GET", "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
    xhr.responseType="json";

    xhr.onload = () => {
        const blog = xhr.response;
        for(let Blogs of blog) {

        
        console.log(Blogs.flag);
    }
    };

    xhr.send();
};
getBlogs();