// Get Element from HTML document
const form = document.getElementById("search-form")
const query = document.getElementById("search-input")
const btn = document.getElementById("btn")
const imgs_container = document.getElementById("image-container")

const close = document.getElementById("ok")

//Define unsplash api_endpoint & api_key
const api_endpoint = `https://api.unsplash.com/search/photos`
const api_key = "wIYKg4pzUZ8vlTf6KMXv4ooxBvEOPvxSswIUWFd-eYI"



imgs_container.innerHTML = ""
function SearchImages(query){
    
    const url = `${api_endpoint}?query=${query}&client_id=${api_key}`
    
    axios.get(url)
    .then(res=>{
        const Results = res.data.results

        Results.forEach(ele => {            
            const img_search = document.createElement("img")
            img_search.src = ele.urls.raw
            imgs_container.appendChild(img_search)
        });
    })

}



form.addEventListener("submit",event => {
    event.preventDefault()

    if(query.value !== ""){
        SearchImages(query.value)
        imgs_container.innerHTML = ""
    }
    else{
        document.querySelector(".alert").classList.toggle("show")
        imgs_container.innerHTML = ""
    }
    
})




function close_alert(){
    close.addEventListener("click",()=>{
        document.querySelector(".alert").classList.toggle("show")
    })
}

close_alert()









