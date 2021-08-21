const mainEndPoint = 'https://jsonplaceholder.typicode.com/posts';

export const getBlogs = () => {

    return fetch(mainEndPoint)
    .then((result) => result.json())
    .then((blogs) => {
        console.log(blogs)
        return blogs;
    });
};