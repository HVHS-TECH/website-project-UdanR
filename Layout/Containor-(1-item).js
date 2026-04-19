  const observer = new IntersectionObserver ((entries)=>{
    entries.forEach((entry)=>{
      if (entry.isIntersecting){
        console.log(entry.target)
        entry.target.classList.add("show");
        observer.unobserve(entry.target);
      }
    })


  })


const elementsToObserve = [
  ...document.querySelectorAll(".container > div, .things-to-do-list"),
  ...document.querySelectorAll(".footer-con > div")
];
elementsToObserve.forEach(el => observer.observe(el));