// creating storing and retriving the data
console.log(localStorage)
// creates a variable based on the submit button
const submitB = document.querySelector('#submitButton');
const forwardButton = document.querySelector('#forwardButton');





// function truePosts(){
//     const posts = [];
//     posts.push(JSON.parse(localStorage.getItem(`blogPosts`)));

// };


function getData(){
    let data = localStorage.getItem('blogPosts');
    if(!data){
        return [];
    }
    return JSON.parse(data);
    
}

function addBlogPost(myPost){
    let existingData = getData();
    // experimental work
    if (existingData === "") {
        existingData.push(myPost);
    } else {
        existingData.unshift(myPost);
    };
    // end experimental work un commemnt next line to run as old function
    // existingData.push(myPost);

    let existingDataStringified = JSON.stringify(existingData);
    localStorage.setItem('blogPosts', existingDataStringified);
}




// keep listener event at bottom of function
// Add listener to submit button
submitB.addEventListener('click', function (event){
    // prevents button defult action
    event.preventDefault();


    // creats variables based on input fields
    const userN = document.getElementById('userName').value;
    const blogTitle = document.getElementById('title').value;
    const textPost = document.getElementById('extraText').value;

    if (userN === "") {
        alert('error', 'Must enter a user name');
        console.log(`fualt1`);
        console.log(userN)
    } else if (blogTitle === "") {
        alert('error', 'Must enter a title');
        console.log(`fualt2`);
        console.log(userN)
    } else if (textPost === "") {
        alert('error', 'Must enter text for the blog post')
        console.log(`fualt3`);
    } else {

        console.log(`checkpoint 1`);

        // check why function doesnt work
        // truePosts();

        // if (posts === null){
        //     const posts =[];
        // } else {
        //     posts.push(JSON.parse(localStorage.getItem(`blogPosts`)));
        // };

        // let posts = [];
        // if (posts.length > 0){
        //     posts.push(JSON.parse(localStorage.getItem(`blogPosts`)));
        // }
        
        // console.log(posts.length+0);
        let blogPost = {
            name: userN,
            title: blogTitle,
            text: textPost,
        };

        window.location.href = './blog.html';


        // posts.unshift(blogPost);
        // console.log(posts)

        // localStorage.setItem('blogPosts', JSON.stringify(posts));
        addBlogPost(blogPost);
        //console.log(`checkpoint 5`);
        //console.log(localStorage.getItem('blogPosts'))
    }

})

forwardButton.addEventListener('click', function (event){
    event.preventDefault();
    window.location.href = './blog.html';

})