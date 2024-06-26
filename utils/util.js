import { data } from "./data.js";

export const getSuggestions = (keyword) => {
    const result = data.filter((item)=>item.substring(0, keyword.length).toLowerCase() === keyword.toString())
    return new Promise((resolve, reject) => {
                setTimeout(()=>{resolve(result)},500)
          });
}

export const debounce = (fn,delay=500) =>{
    let timerCxt;
    return function () {
      const self = this;
      const args = arguments;
      clearTimeout(timerCxt);
      timerCxt=setTimeout(()=>fn.apply(self,args),delay);
    }
}