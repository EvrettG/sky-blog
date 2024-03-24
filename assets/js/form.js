// creating storing and retriving the data

// creates a variable based on the submit button
const submitB = document.querySelector('#submitButton');






function truePosts(){
    const posts = [];
    posts.push(JSON.parse(localStorage.getItem(`blogPosts`)));

};




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
        console.log(userN);
        // check why function doesnt work
        // truePosts();
        const posts = [];
        posts.push(JSON.parse(localStorage.getItem(`blogPosts`)));

        console.log(posts);
        let blogPost = {
            name: userN,
            title: blogTitle,
            text: textPost,
        };
        console.log(`checkpoint 2`);
        posts.unshift(blogPost);
        console.log(`checkpoint 3`);
        localStorage.setItem('blogposts', JSON.stringify(posts));
        console.log(`checkpoint 4`);

    }

})