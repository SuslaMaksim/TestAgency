
export let sliceEmail = (name)=>{
    if(name.length > 19){
      return name.slice(0,17) + '...'
    }
    return name
}

