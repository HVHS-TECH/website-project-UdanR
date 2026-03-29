  const observer = new IntersectionObserver ((entries)=>{
    entries.forEach((entry)=>{
      if (entry.isIntersecting){
        console.log(entry.target)
        entry.target.classList.add("show")
      }
    })


  })

document.querySelectorAll(".container > div").forEach(el => {
  observer.observe(el);
});