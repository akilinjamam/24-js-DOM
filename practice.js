// 1. displaying object poperties in webite console via external js

/* const student = { name: 'akil injamam', age: 29, profession: 'web developer', };
console.log(student); */

/* ------------------------------------------------------------------------- */

/* 2  you can see the all body element through console.log in js file */

// console.log(document.body)

/* ------------------------------------------------------------------------- */

// 3 to display specific tag in website-console via js

// const blogTitle = document.getElementsByTagName('h1');
// console.log(blogTitle);


/* ------------------------------------------------------------------------- */


// 4 find tag name using for loop

// const blogs = document.getElementsByTagName('article');

// for (const blog of blogs) {
//     console.log(blog)
// }


/* ------------------------------------------------------------------------- */

// 5  applying css using js by get element by selecting id

/* const styleFirst = document.getElementById('first-title');
styleFirst.style.color = 'red'
styleFirst.style.textAlign = 'center'
styleFirst.style.backgroundColor = 'lightBlue'

const styleSecond = document.getElementById('second-title');
styleSecond.style.color = 'green'
styleSecond.style.textAlign = 'center';
styleSecond.style.backgroundColor = 'lightblue'

const stylethird = document.getElementById('third-title');
stylethird.style.color = 'chocolate'
stylethird.style.textAlign = 'center';
stylethird.style.backgroundColor = 'lightblue'; */


/* ------------------------------------------------------------------------- */


// 5  applying css using js by get element selecting class with for loop 

/* const styleClass = document.getElementsByClassName('blog');

for (const blogg of styleClass) {
    console.log(blogg);
    blogg.style.border = '2px solid orange';
    blogg.style.margin = '5px';
    blogg.style.borderRadius = '10px';
    blogg.style.padding = '5px';
} */

/* ------------------------------------------------------------------------- */

// 6  to select only one tag with css quiry selector

// const para = document.querySelector('p');
// console.log(para)

// para.style.fontWeight = 'bold'

/* ---------------------------------------------------------------------------- */
// 7 to select all tags with css query selector

// const h3 = document.querySelectorAll('.blog');
// console.log(h3);

/* ---------------------------------------------------------------------------- */

// 8 create and add element by js

// create
const li = document.createElement('li');
li.innerText = 'blog-5';

// add in the parant tag

const ul = document.getElementById('blog-list');

// then append it

ul.appendChild(li);




// create

const lii = document.createElement('li');
lii.innerText = 'blog-6'

// add it to the parent tag

document.getElementById('blog-list')

// append it 

ul.appendChild(lii)
/* ---------------------------------------------------------------------- */

// 9 add article giving it a class to apply css

/* const article = document.createElement('article');
article.classList.add('blog')
const h3 = document.createElement('h3');
h3.innerText = 'my awesome blog-4';

const p = document.createElement('p');
p.innerText = 'this is just a paragraph to add as testing , to see the adding is working properly or not. i wiss this time it will work properly insha allah';

article.appendChild(h3);
article.appendChild(p);

const blogSection = document.getElementById('blogss');
blogSection.appendChild(article)

// css style with js shold be applyed after adding

const styleFirst = document.getElementById('first-title');
styleFirst.style.color = 'red'
styleFirst.style.textAlign = 'center'
styleFirst.style.backgroundColor = 'lightBlue'

const styleSecond = document.getElementById('second-title');
styleSecond.style.color = 'green'
styleSecond.style.textAlign = 'center';
styleSecond.style.backgroundColor = 'lightblue'

const stylethird = document.getElementById('third-title');
stylethird.style.color = 'chocolate'
stylethird.style.textAlign = 'center';
stylethird.style.backgroundColor = 'lightblue';




const styleClass = document.getElementsByClassName('blog');

for (const blogg of styleClass) {
    console.log(blogg);
    blogg.style.border = '2px solid orange';
    blogg.style.margin = '5px';
    blogg.style.borderRadius = '10px';
    blogg.style.padding = '5px';
}
 */

/* ----------------------------------------------------------------------- */


// 10 alternative shortcut way of adding article

const article = document.createElement('article');
article.classList.add('blog');


article.innerHTML = `
        <h3>my awesome blog - 5</h3>
        <p>Dolorem beatae nihil ratione officiis earum, voluptates ullam quidem, tempore error nesciunt, impedit
                    illo dignissimos.</p>
        `


const theBlogs = document.getElementById('blogss');

theBlogs.appendChild(article);


const styleFirst = document.getElementById('first-title');
styleFirst.style.color = 'red'
styleFirst.style.textAlign = 'center'
styleFirst.style.backgroundColor = 'lightBlue'

const styleSecond = document.getElementById('second-title');
styleSecond.style.color = 'green'
styleSecond.style.textAlign = 'center';
styleSecond.style.backgroundColor = 'lightblue'

const stylethird = document.getElementById('third-title');
stylethird.style.color = 'chocolate'
stylethird.style.textAlign = 'center';
stylethird.style.backgroundColor = 'lightblue';




const styleClass = document.getElementsByClassName('blog');

for (const blogg of styleClass) {
    console.log(blogg);
    blogg.style.border = '2px solid orange';
    blogg.style.margin = '5px';
    blogg.style.borderRadius = '10px';
    blogg.style.padding = '5px';

}

/* ------------------------------------------------------------------------- */

// 11 removing any element 

/* const friends = document.getElementById('baddd');
const fourthFriend = friends.children[3];
console.log(fourthFriend);
friends.remove(fourthFriend); */
