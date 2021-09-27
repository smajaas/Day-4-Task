//Use the same rest countries and print all countries name, region, sub region and population

const getBlogs = ()=>{
    const xhreq = new XMLHttpRequest();
      xhreq.open("GET", "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
      xhreq.responseType="json";
      xhreq.onload=()=>{
       const blog =  xhreq.response;
        for(let Blogs of blog){
          console.log(Blogs.name);
          console.log(Blogs.region);
          console.log(Blogs.subregion);
          console.log(Blogs.population);
      }
    };
    xhreq.send();
  };
  getBlogs();