const featuredProducts=[
    {
        id:1,
        title:'Jack and Jones',
        desc:'Mens Denim Jacket',
        price:4500,
        img:'https://as2.ftcdn.net/v2/jpg/05/65/75/17/1000_F_565751795_S1uUWgcf8RunPqJLkB9JUSlWmHLPldM4.jpg'
    },
    {
        id:2,
        title:'H&M',
        desc:'Womens White Sweatshirt',
        price:5000,
        img:'https://img.freepik.com/free-photo/autumn-person-with-beautiful-hat_23-2149137880.jpg?'
    },
    {
        id:3,
        title:'Raymond',
        desc:'Mens Maroon Party Blazzer',
        price:2000,
        img:'https://img.freepik.com/free-photo/medium-shot-black-man-posing-studio_23-2149415753.jpg'
    },
    {
        id:4,
        title:'Flying Machine',
        desc:'Mens Orange Bomber Jacket',
        price:3000,
        img:'https://img.freepik.com/free-photo/autumn-person-with-beautiful-hat_23-2149137832.jpg'
    },
    {
        id:5,
        title:'Roadster',
        desc:'Mens Orange Sweatshirt',
        price:2500,
        img:'https://img.freepik.com/free-photo/close-up-portrait-man-shirt-mockup_23-2149260889.jpg'
    
    },
    {
        id:6,
        title:'H&M',
        desc:'Womens Biege Jacket',
        price:4000,
        img:'https://img.freepik.com/free-photo/autumn-person-with-beautiful-hat_23-2149137867.jpg'
    },
    {
        id:7,
        title:'Peter England',
        desc:'Mens Grey Sweatshirt',
        price:2000,
        img:'https://img.freepik.com/free-photo/black-model-posing_23-2148171729.jpg'
    },
    {
        id:8,
        title:'Zara',
        desc:'Womens Olive Jacket',
        price:1500,
        img:'https://img.freepik.com/free-photo/female-model-posing-casual_23-2148872394.jpg'
    },

]

function showFeaturedProducts(){
    var clutter='';
    featuredProducts.forEach(function(obj){
        clutter+=`
            <div class="product-card"><div class="product-img"><img src="${obj.img}"></div><div class="product-info"><p><b>${obj.title}</b></p><p>${obj.desc}</p><p><b>₹ ${obj.price}</b></p></div></div>

                `
    })
    document.querySelector('.featured-products-container').innerHTML=clutter;
}
function productsPrev() {
    const container = document.querySelector('.featured-products-container');
    const scrollAmount = container.clientWidth/2; // Scroll by one container width
    container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
}

function productsNext() {
    const container = document.querySelector('.featured-products-container');
    const scrollAmount = container.clientWidth/2; // Scroll by one container width
    container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
}

showFeaturedProducts();

const mensCollection=[
    {
        id:1,
        title:'Lewis',
        desc:'Mens Red Shirt',
        price:1500,
        img:'https://img.freepik.com/free-photo/portrait-handsome-smiling-stylish-young-man-model-dressed-red-checkered-shirt-fashion-man-posing_158538-4914.jpg',
    },
    {
        id:2,
        title:'Jack and Jones',
        desc:'Mens Denim Jacket',
        price:4500,
        img:'https://as2.ftcdn.net/v2/jpg/05/65/75/17/1000_F_565751795_S1uUWgcf8RunPqJLkB9JUSlWmHLPldM4.jpg',
    },
    {
        id:3,
        title:'Raymond',
        desc:'Mens Maroon Party Blazzer',
        price:2000,
        img:'https://img.freepik.com/free-photo/medium-shot-black-man-posing-studio_23-2149415753.jpg',
    },
    {
        id:4,
        title:'H&M',
        desc:'Mens Orange Tshirt',
        price:1500,
        img:'https://img.freepik.com/premium-photo/handsome-young-guy-posing-studio-isolated_485089-72.jpg',
    },
    {
        id:5,
        title:'Flying Machine',
        desc:'Mens Orange Bomber Jacket',
        price:3000,
        img:'https://img.freepik.com/free-photo/autumn-person-with-beautiful-hat_23-2149137832.jpg',
    },
    {
        id:6,
        title:'Roadster',
        desc:'Mens Orange Sweatshirt',
        price:2500,
        img:'https://img.freepik.com/free-photo/close-up-portrait-man-shirt-mockup_23-2149260889.jpg',
    },
    {
        id:7,
        title:'Peter England',
        desc:'Mens Orange Sweatshirt',
        price:2000,
        img:'https://img.freepik.com/free-photo/black-model-posing_23-2148171729.jpg',
    },
    {
        id:8,
        title:'GAP',
        desc:'Mens Black Hoodie',
        price:6500,
        img:'https://img.freepik.com/premium-photo/close-up-portrait-man-shirt-mockup_23-2149260943.jpg',
    },

]


function showMensCollection(){
    var clutter='';
    mensCollection.forEach(function(obj){
        clutter+=`
            <div class="product-card"><div class="product-img"><img src="${obj.img}"></div><div class="product-info"><p><b>${obj.title}</b></p><p>${obj.desc}</p><p><b>₹ ${obj.price}</b></p></div></div>

                `
    })
    document.querySelector('.mens-collection-container').innerHTML=clutter;
}

function mensPrev() {
    const container = document.querySelector('.mens-collection-container');
    const scrollAmount = container.clientWidth/2; // Scroll by one container width
    container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
}

function mensNext() {
    const container = document.querySelector('.mens-collection-container');
    const scrollAmount = container.clientWidth/2; // Scroll by one container width
    container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
}

showMensCollection();

const womensCollection=[
    {
        id:1,
        title:'H&M',
        desc:'Womens White Sweatshirt',
        price:5000,
        img:'https://img.freepik.com/free-photo/autumn-person-with-beautiful-hat_23-2149137880.jpg?'
    },
    {
        id:2,
        title:'Zara',
        desc:'Womens Maroon Top',
        price:2500,
        img:'https://img.freepik.com/free-photo/dress-studio-fashion-model-beautiful_1303-1304.jpg?',
    },
    {
        id:3,
        title:'GAP',
        desc:'Womens Pink Hoodie',
        price:2200,
        img:'https://img.freepik.com/premium-photo/girl-listening-music-wireless-earphones-smiling_233298-435.jpg',
    },
    {
        id:4,
        title:'Allen Solly',
        desc:'Womens Red Dress',
        price:1500,
        img:'https://img.freepik.com/free-photo/young-woman-beautiful-red-dress_1303-17506.jpg',
    },
    {
        id:5,
        title:'Flying Machine',
        desc:'Womens Synthetic Leather Jacket',
        price:5000,
        img:'https://img.freepik.com/premium-photo/beautiful-laughing-woman-gray-background_216548-12.jpg?',
    },
    {
        id:6,
        title:'Prada',
        desc:'Womens Red Suit',
        price:4000,
        img:'https://img.freepik.com/free-photo/fashion-portrait-young-elegant-woman_1328-2619.jpg?',
    },
    {
        id:7,
        title:'H&M',
        desc:'Womens Beige Jacket',
        price:4000,
        img:'https://img.freepik.com/free-photo/autumn-person-with-beautiful-hat_23-2149137867.jpg',
    },
    {
        id:8,
        title:'Zara',
        desc:'Womens Olive Jacket',
        price:1500,
        img:'https://img.freepik.com/free-photo/female-model-posing-casual_23-2148872394.jpg',
    },
]

function showWomensCollection(){
    var clutter='';
    womensCollection.forEach(function(obj){
        clutter+=`
            <div class="product-card"><div class="product-img"><img src="${obj.img}"></div><div class="product-info"><p><b>${obj.title}</b></p><p>${obj.desc}</p><p><b>₹ ${obj.price}</b></p></div></div>

                `
    })
    document.querySelector('.womens-collection-container').innerHTML=clutter;

}

function womensPrev() {
    const container = document.querySelector('.womens-collection-container');
    const scrollAmount = container.clientWidth/2; // Scroll by one container width
    container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
}

function womensNext() {
    const container = document.querySelector('.womens-collection-container');
    const scrollAmount = container.clientWidth/2; // Scroll by one container width
    container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
}

showWomensCollection()

const kidsCollection=[
    {
        id:1,
        title:'GAP',
        desc:'Kids Purple Hoodie',
        price:'1200',
        img:'https://img.freepik.com/free-photo/portrait-teen-boy-playing-with-dinosaur_23-2149334549.jpg',
    },
    {
        id:2,
        title:'Allen Solly',
        desc:'Kids Red Sweatshirt',
        price:'2500',
        img:'https://img.freepik.com/free-photo/kid-studio-portrait-isolated_23-2149198895.jpg',
    },
    {
        id:3,
        title:'H&M',
        desc:'Kids Grey Hoodie',
        price:'2200',
        img:'https://img.freepik.com/premium-photo/studio-portrait-teenage-boy-posing-without-looking-camera_759807-106.jpg',
    },
    {
        id:4,
        title:'Flying Machine',
        desc:'Kids Denim Jacket',
        price:'1500',
        img:'https://img.freepik.com/free-photo/medium-shot-girl-posing-with-ice-cream_23-2149037190.jpg',
    },
    {
        id:5,
        title:'Allen Solly',
        desc:'Kids White Dress',
        price:'2000',
        img:'https://img.freepik.com/premium-photo/portrait-young-smart-girl-with-hat-yellow-background_199808-318.jpg',
    },
    {
        id:6,
        title:'Flying Machine',
        desc:'Kids Black Jacket',
        price:'3000',
        img:'https://img.freepik.com/premium-photo/outfit-ideas-every-stylish-girl-should-try-girl-curly-hair-wear-leather-jacket-little-rock-star-concept-talent-contest-brutal-style-tender-girl-rock-style-suits-her-rock-roll-is-way-life_474717-125758.jpg',
    },
    {
        id:7,
        title:'GAP',
        desc:'Kids Yellow Sweatshirt',
        price:'2500',
        img:'https://img.freepik.com/free-photo/medium-shot-modern-boy-with-skateboard_23-2148423236.jpg',
    },
    {
        id:8,
        title:'H&M',
        desc:'Kids White Tshirt',
        price:'1100',
        img:'https://img.freepik.com/free-photo/litte-boy-white-t-shirt-holding-skateboard-blue_179666-747.jpg',
    },
]

function showKidsCollection(){
    var clutter='';
    kidsCollection.forEach(function(obj){
        clutter+=`
            <div class="product-card"><div class="product-img"><img src="${obj.img}"></div><div class="product-info"><p><b>${obj.title}</b></p><p>${obj.desc}</p><p><b>₹ ${obj.price}</b></p></div></div>

                `
    })
    document.querySelector('.kids-collection-container').innerHTML=clutter;

}

function kidsPrev() {
    const container = document.querySelector('.kids-collection-container');
    const scrollAmount = container.clientWidth/2; // Scroll by one container width
    container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
}

function kidsNext() {
    const container = document.querySelector('.kids-collection-container');
    const scrollAmount = container.clientWidth/2; // Scroll by one container width
    container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
}


showKidsCollection()

var navbar= document.querySelector('#openNav');

var sidebar= document.querySelector('.sidebar');



function openNav(){
  navbar.addEventListener('click',function(){
    if (sidebar.style.display === 'none' || sidebar.style.display === '') {
      sidebar.style.display = 'flex';
  } else {
      sidebar.style.display = 'none';
  }
  });

  document.addEventListener("click", function(event) {
    var isClickInsideNavbar = sidebar.contains(event.target);
    var isClickInsideHamburger = navbar.contains(event.target);

    if (!isClickInsideNavbar && !isClickInsideHamburger) {
        sidebar.style.display = 'none';
    }
});

}

openNav()