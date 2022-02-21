async function apiCall(url) {

  
    //add api call logic here

    try {
        
        let res=await fetch(url)
        let data=await res.json()
        return data;
    }
     catch (error) {
        console.log(error)
    }


}


function appendArticles(articles, main) {

    //add append logic here
    articles.map((el)=>{
        let div=document.createElement("div")

        let image=document.createElement("img")
        image.src=el.urlToImage
        image.style.width="100%"

        let headline=document.createElement("p")
        headline.textContent=el.title

        let description=document.createElement("p")
        description.textContent=el.description

        div.append(image,headline,description)

        div.onclick=function(){
            localStorage.setItem("article",JSON.stringify(el))
            window.location.href="news.html"
        }
        main.append(div)
    })

}

export { apiCall, appendArticles }