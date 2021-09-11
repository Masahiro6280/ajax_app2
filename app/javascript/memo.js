function post (){
  const submit = document.getElementById("submit");
  console.log(submit)
  submit.addEventListener("click", (e) => {
   e.preventDefault();
    const form = document.getElementById("form");
    console.log(form)
    const formData = new FormData(form);
    console.log(formData)
    const XHR = new XMLHttpRequest();
    console.log(XHR)
    XHR.open("POST", "/posts", true);
    XHR.responseType = "json";
    XHR.send(formData);
  });
 };
 
 window.addEventListener('load', post);
 