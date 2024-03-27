
// adds blogposts to blog page
function renderBlogs() {

    // Unnessecary code? Test more later
    // const blogSection = document.querySelector('#blogSection');
    // blogSection.innerHTML = '';

    // creates a new div and poulates it with data from name text and title from blogPosts local storage

    // add error mesage or something later for no blogPosts data
    for(let x =0; x < blogs.length; x++) {
        const blog = blogs[x];
        // sets the location for the div to be appended to
        let target = document.getElementById("blogSection")

        // creates the new elements to be appended to the target
        const divEl = document.createElement('div');
        const head3 = document.createElement('h3');
        const para = document.createElement('p');
        const head4 = document.createElement('h4');
        
        // console log for testing function running
        console.log("test1.1")

        // sets class to div for css styling
        divEl.setAttribute("class", "posted");

        // adds data related to each part of the blogPosts
        head3.textContent = blog.name
        para.textContent =  blog.text
        head4.textContent = blog.title

        // appendes the new div element to the target section
        target.appendChild(divEl);

        // appends the visable content to the div
        divEl.appendChild(head3);
        divEl.appendChild(para);
        divEl.appendChild(head4);
        
        // console log for testing function running
        console.log("test 2");
        // console log to advise where in for loop function is running
        console.log(x);
    }

}

// 



// 
function getData(){
    const blogData = JSON.parse(localStorage.getItem('blogPosts'));
    blogs = blogData;
    console.log('test 1');
    renderBlogs();
}

getData();