function fetchData() {
 fetch('https://jsonplaceholder.typicode.com/posts').then(response => {
    if(!response.ok){
        throw Error("ERROR")
    }
   return response.json();
   
 }).then(data => {
    console.log(data);
    const html = data.map(user => {
        return `
        <div class="user">
        <h1 class="header1">${user.userId}<h1>
        <h2>Id : ${user.id}</h2>
        <h3>Title : ${user.title}<h3>
        <h4>Text : ${user.body}</h4>
        </div>
        
        `
    }).join("");
    console.log(html);
    document.querySelector('#app').insertAdjacentHTML('afterbegin',html);
 }).catch(error => {
    console.log(error);
 });
}
fetchData();