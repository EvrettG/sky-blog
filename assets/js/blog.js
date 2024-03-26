// adds blogposts to blog page
const blogSection = document.querySelector('#blogSection');

function renderBlogs() {

    blogSection.innerHTML = '';

    for(let x =0; x ,blogs.length; x++) {
        const blog = blogs[x];

        const divEl = document.createElement('div');

        const head3 = document.createElement('h3');
        const para = document.createElement('p');
        const head4 = document.createElement('h4');

        divEl.Element.setAttribute('class', 'posted')

        head3.textContent = 
        para.textContent = 
        head4.textContent =

        divEl.appendChild(head3);
        divEl.appendChild(para);
        divEl.appendChild(head4);
        
        console.log("test 2");
        console.log(x);
    }

}

// 
const myDiv = document.getElementById('myDiv');



// 
function getData(){
    const blogData = JSON.parse(localStorage.getItem('blogPosts'));
    blogs = blogData;
    console.log('test 1');
    renderBlogs();
}

getData();