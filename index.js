
import { getSuggestions,debounce } from "./utils/util.js";

const searchBox = document.getElementById("input");
const sectionBox = document.getElementById("section-wrapper")

const handleReset = ()=>{
    sectionBox.classList.remove("section-visible")
}

const handleDropdownItems =  (list) => {
    const docFragment = document.createDocumentFragment()
    list.forEach(item => {
            const el = document.createElement("div")
            el.classList.add("dropdown-item")
            el.innerHTML = item
            el.setAttribute("data-key",item)
            docFragment.appendChild(el)
   })
   sectionBox.innerHTML=""
   sectionBox.appendChild(docFragment)
}

const handleSearch = async (keyword)=>{
  const result = await getSuggestions(keyword)
  if(result.length){
     sectionBox.classList.add("section-visible")
    handleDropdownItems(result)
  }
  else {
    handleReset()
  }
  console.log(result)
}

const handleInputChange = (e) => {
    const value = e.target.value;
    if(value){
    handleSearch(value);
    }
    else {
        handleReset()
    }
}

const handleClick = (e) => {
    const {key} = e.target.dataset;
    if(key){
    searchBox.value = key
    }
    handleReset();
}

searchBox.addEventListener("input", debounce(handleInputChange,300))
sectionBox.addEventListener("click",handleClick)








