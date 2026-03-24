  const observer = new IntersectionObserver ((entries)=>{
    entries.forEach((entry)=>{
      if (entry.isIntersecting){
        console.log(entry.target)
        entry.target.classList.add("footer-show")
      }
    })


  })

document.querySelectorAll(".footer-con .div").forEach(el => {
  observer.observe(el);
});