/*
    ProductController perform action to the products to be displayed


    (1) Display all products to be retrieved from the back-end
    (2) Add product to the product list (send the new project to the back-end)
    --- edit an existing product detail
    -- remove an existing product from the product list
*/


//(1) Hardcode 2 product items - replace it later to be retrieved from the back-end
//Product Details: name, description, imageURL, style, price
//image URL: http://www.jennybeaumont.com/wp-content/uploads/2015/03/placeholder.gif


//(1) Create the objects for the Products - replace it later to be retrieved from the back-end


const post1 ={
    userName: "MrPositive",
    userImageURL: "http://www.jennybeaumont.com/wp-content/uploads/2015/03/placeholder.gif",
    postContent: "Today is a good day",
    postDate: 1/3/23,
    postTime: 2050
};

const post2 ={
    userName: "MrNegative",
    userImageURL: "http://www.jennybeaumont.com/wp-content/uploads/2015/03/placeholder.gif",
    postContent: "Today is a bad day",
    postDate: 1/2/23,
    postTime: 2100
};

const post3 ={
    userName: "MrNuetral",
    userImageURL: "http://www.jennybeaumont.com/wp-content/uploads/2015/03/placeholder.gif",
    postContent: "Today is an alright day",
    postDate: 1/1/23,
    postTime: 0800
};

// 2) Push the product objects into an array

const postList = [];
postList.push(post1, post2, post3);



function displayDetails(index) {
    // when user clicks on any "More" button, product details will be displayed
    document.querySelector("#modaluserName").innerHTML. postList[index].userName;
    document.querySelector("#modalImg").src= postList[index].imageURL;
    document.querySelector("#modalContent").innerHTML. postList[index].content;
    document.querySelector("#modalDate").innerHTML. postList[index].date;
    document.querySelector("#modalTime").innerHTML. postList[index].time;
   
}

// 3) Display all products when user launch the product.html page
// const displayProduct= () => {}

function displayPost() {
     let display= "";
     for (let i=0; i< postList.length; i++) {
        display +=`
        // need from ting the template
        <div  class="col-lg-4">
                  <div class="card" style="width: 18rem;">
                      <img src= ${productList[i].imageURL} class="card-img-top"
                          alt="image">
                      <div class="card-body">
                          <h5 class="card-title">${productList[i].name}</h5>
                          <p class="card-text">${productList[i].style}L</p>
                          <a id = item${(i+1)} href="#" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#productModal" onClick="displayDetails(${i})" >More</a>
                      </div>
                  </div>
                  `
     }

     document.querySelector("#row").innerHTML= display;
}


// 4) Add new product to the product list form when user click on the submit button from the product.html

function addPost(n, i, c, d, t) {

    const postItem= {
        userName: n,
        imageURL: i,
        postContent: c,
        date: d,
        time: t,
    }
    postList.push(postItem)
}

addPost("Blue T-Shirt", "This is a blue shirt", "http://www.jennybeaumont.com/wp-content/uploads/2015/03/placeholder.gif", "Flower Print", "Price", "35")

addPost("Blue T-Shirt", "This is a blue shirt", "http://www.jennybeaumont.com/wp-content/uploads/2015/03/placeholder.gif", "Flower Print", "Price", "35")

addPost("Blue T-Shirt", "This is a blue shirt", "http://www.jennybeaumont.com/wp-content/uploads/2015/03/placeholder.gif", "Flower Print", "Price", "35")

addPost("Blue T-Shirt", "This is a blue shirt", "http://www.jennybeaumont.com/wp-content/uploads/2015/03/placeholder.gif", "Flower Print", "Price", "35")

displayPost();