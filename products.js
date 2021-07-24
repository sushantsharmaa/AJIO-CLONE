const bagsArr = [
    {
        link: "https://assets.ajio.com/medias/sys_master/root/20210611/ByDD/60c39341f997ddb312c6d573/nike_pink_15%22_brand_print_laptop_backpack.jpg",
        brand: "NIKE",
        name: '15" Brand Print Laptop Backpack',
        price: "1756",
        originalPrice: "Rs. 2195",
        discount: "20",
    },
    {
        link: "https://assets.ajio.com/medias/sys_master/root/h4d/h35/12709818466334/chris_&_kate_black_colourblock_rucksack_backpack.jpg",
        brand: "Chris & Kate",
        name: "Colourblock Rucksack Backpack",
        price: "550",
        originalPrice: "Rs. 2,499",
        discount: "78",
    },
    {
        link: "https://assets.ajio.com/medias/sys_master/root/20201028/XJbG/5f9876e8f997dd8c837a28cd/f-gear_grey_15''_laptop_backpack_with_adjustable_straps.jpg",
        brand: "F-GEAR",
        name: '15" Laptop Backpack with Adjustable Straps',
        price: "881",
        originalPrice: "Rs. 2300",
        discount: "63",
    },
    {
        link: "https://assets.ajio.com/medias/sys_master/root/20210525/7bYD/60abf3def997ddb312a74682/reebok_blue_17%22_laptop_backpack_with_brand_print.jpg",
        brand: "Reebok",
        name: "Logo Print Backpack with Front Zip Pocket",
        price: "666",
        originalPrice: "Rs. 1,799",
        discount: "63",
    },
    {
        link: "https://assets.ajio.com/medias/sys_master/root/20200818/8LaF/5f3acfe9f997dd2277a03483/skybags_red_17%22_printed_laptop_backpack.jpg",
        brand: "Skybags",
        name: '17" Printed Laptop Backpack',
        price: "1120",
        originalPrice: "Rs. 3,499",
        discount: "68",
    },
    {
        link: "https://assets.ajio.com/medias/sys_master/root/h4f/hc3/13702396248094/nike_blue_elmntl_panelled_backpack_with_signature_branding.jpg",
        brand: "NIKE",
        name: "ELMNTL Panelled Backpack with Signature Branding",
        price: "1712",
        originalPrice: "Rs. 2195",
        discount: "22",
    },
    {
        link: "https://assets.ajio.com/medias/sys_master/root/20210601/2w1I/60b52de8aeb269a9e3ce8d92/altheory_black_14%22_marvel_print_laptop_backpack.jpg",
        brand: "ALTHEORY",
        name: '14" Marvel Print Laptop Backpack',
        price: "675",
        originalPrice: "Rs. 1499",
        discount: "55",
    },
    {
        link: "https://assets.ajio.com/medias/sys_master/root/h01/h42/15300657250334/american_tourister_red_printed_backpack_with_attached_raincover.jpg",
        brand: "AMERICAN TOURISTER",
        name: "Printed Backpack with Attached Raincover",
        price: "1678",
        originalPrice: "Rs. 3,050",
        discount: "45",
    },
    {
        link: "https://assets.ajio.com/medias/sys_master/root/20210318/4wPd/605349a6f997dd7b644d83f4/altheory_tan_15%22_laptop_backpack_with_zip_pockets.jpg",
        brand: "ALTHEORY",
        name: '15" Laptop Backpack with Zip Pockets',
        price: "805",
        originalPrice: "Rs. 2299",
        discount: "65",
    },
    {
        link: "https://assets.ajio.com/medias/sys_master/root/20200812/IPJF/5f3406537cdb8ca2cf962017/puma_red_16%22_colourblock_backpack_with_adjustable_shoulder_straps.jpg",
        brand: "PUMA",
        name: '16" Colourblock Backpack with Adjustable Shoulder Straps',
        price: "650",
        originalPrice: "Rs. 1299",
        discount: "50",
    },
    {
        link: "https://assets.ajio.com/medias/sys_master/root/h3c/h70/16036118593566/puma_navy_blue_urban_ind_everyday_backpack.jpg",
        brand: " PUMA",
        name: "Urban IND Everyday Backpack",
        price: "1150",
        originalPrice: "Rs. 2299",
        discount: "50",
    },
    {
        link: "https://assets.ajio.com/medias/sys_master/root/h2f/h7c/14187914067998/puma_blue_panelled_backpack_with_branding.jpg",
        brand: "PUMA",
        name: "Panelled Backpack with Branding",
        price: "900",
        originalPrice: "Rs. 1799",
        discount: "50",
    },
];

if (localStorage.getItem("Ajio_Bags") == null)
    localStorage.setItem("Ajio_Bags", JSON.stringify(bagsArr));

function showList(arr) {
    var mainDiv = document.getElementById("list");
    mainDiv.innerHTML = null;

    arr.forEach(function (obj) {
        var div = document.createElement("div");
        var image = document.createElement("img");
        var name = document.createElement("p");
        var brand = document.createElement("p");
        var price = document.createElement("p");
        var originalPrice = document.createElement("p");
        var discount = document.createElement("p");
        var combine = document.createElement("div");
        var anchor = document.createElement("a");

        anchor.href = "american.html";
        anchor.append(image);
        image.src = obj.link;
        brand.innerHTML = obj.brand;
        brand.style.color = "rosybrown";

        price.innerHTML = `Rs. ${obj.price} `;
        price.style.fontWeight = "bold";
        price.style.display = "inline";

        name.innerHTML = obj.name;
        originalPrice.innerHTML = obj.originalPrice;
        originalPrice.style.textDecoration = "line-through";
        originalPrice.style.display = "inline";

        discount.innerHTML = ` (${obj.discount} % off)`;
        discount.style.color = "rosybrown";
        discount.style.display = "inline";

        combine.append(price, originalPrice, discount);
        combine.style.textAlign = "center";

        div.append(anchor, brand, name, combine);
        div.style.lineHeight = "25px";

        mainDiv.append(div);
        mainDiv.setAttribute("class", "default");
    });
}

showList(JSON.parse(localStorage.getItem("Ajio_Bags")));

function changeGrid() {
    var mainDiv = document.getElementById("list");
    mainDiv.innerHTML = null;

    var arr = JSON.parse(localStorage.getItem("Ajio_Bags"));

    arr.forEach(function (obj) {
        var div = document.createElement("div");
        var image = document.createElement("img");
        var name = document.createElement("p");
        var brand = document.createElement("p");
        var price = document.createElement("p");
        var originalPrice = document.createElement("p");
        var discount = document.createElement("p");
        var combine = document.createElement("div");
        onclick = "check()";
        var anchor = document.createElement("a");

        anchor.href = "productDetails.html";
        anchor.append(image);

        image.src = obj.link;
        brand.innerHTML = obj.brand;
        brand.style.color = "rosybrown";

        price.innerHTML = `Rs. ${obj.price} `;
        price.style.fontWeight = "bold";
        price.style.display = "inline";

        name.innerHTML = obj.name;
        originalPrice.innerHTML = obj.originalPrice;
        originalPrice.style.textDecoration = "line-through";
        originalPrice.style.display = "inline";

        discount.innerHTML = ` (${obj.discount} % off)`;
        discount.style.color = "rosybrown";
        discount.style.display = "inline";

        combine.append(price, originalPrice, discount);
        combine.style.textAlign = "center";

        div.append(anchor, brand, name, combine);
        div.style.lineHeight = "25px";

        mainDiv.append(div);
        mainDiv.setAttribute("class", "change");
    });
}

// Drop down list

function selectOpt() {
    var option = document.getElementById("opt").value;
    var arr = JSON.parse(localStorage.getItem("Ajio_Bags"));

    if (option === "prce-asc") {
        console.log(arr);
        arr.sort(function (a, b) {
            return a.price - b.price;
        });
        console.log(arr);

        showList(arr);
    } else if (option === "prce-desc") {
        arr.sort(function (a, b) {
            return b.price - a.price;
        });

        showList(arr);
    } else if (option === "discount-desc") {
        arr.sort(function (a, b) {
            return b.discount - a.discount;
        });

        showList(arr);
    } else showList(arr);
}

function three() {
    var arr = JSON.parse(localStorage.getItem("Ajio_Bags"));

    showList(arr);
}

// Filter

function expand() {
    up = document.getElementById("up");
    up.style.zIndex = "1";
    down = document.getElementById("down");
    down.style.zIndex = "-1";

    var all = document.querySelector(".all");
    all.style.display = "block";
}

function contract() {
    down = document.getElementById("down");
    down.style.zIndex = "1";

    up = document.getElementById("up");
    up.style.zIndex = "-1";

    var all = document.querySelector(".all");
    all.style.display = "none";
}

// Filter Categories

//Price

function addition1() {
    add = document.getElementById("add1");
    add.style.zIndex = "1";

    sub = document.getElementById("sub1");
    sub.style.zIndex = "-1";

    check = document.querySelector(".check-1");
    check.style.display = "none";
}

function subtract1() {
    sub = document.getElementById("sub1");
    sub.style.zIndex = "1";

    add = document.getElementById("add1");
    add.style.zIndex = "-1";

    check = document.querySelector(".check-1");
    check.style.display = "block";
}

//Brand

function addition2() {
    add = document.getElementById("add2");
    add.style.zIndex = "1";

    sub = document.getElementById("sub2");
    sub.style.zIndex = "-1";

    check = document.querySelector(".check-2");
    check.style.display = "none";
}

function subtract2() {
    sub = document.getElementById("sub2");
    sub.style.zIndex = "1";

    add = document.getElementById("add2");
    add.style.zIndex = "-1";

    check = document.querySelector(".check-2");
    check.style.display = "block";
}

//filter by brand
let finalArr = []; //declaration of finalArr
function checkbox() {
    var mainDiv = document.getElementById("list");
    mainDiv.innerHTML = null;
    var checkBox = document.getElementById("myCheck"); //check
    var arr = JSON.parse(localStorage.getItem("Ajio_Bags"));

    if (checkBox.checked == true) {
        let data = arr.filter(function (el) {
            if (el.price < 1000) {
                return el;
            }
        });
        finalArr = finalArr.concat(data);
        showList(finalArr);
    } else {
        finalArr = finalArr.filter(function (el) {
            if (el.price > 1001) {
                return el;
            }
        });

        if (finalArr.length == 0) {
            showList(arr);
        } else {
            showList(finalArr);
        }
    }
}

function checkbox2() {
    var mainDiv = document.getElementById("list");
    mainDiv.innerHTML = null;
    var checkBox = document.getElementById("myCheck2");
    var arr = JSON.parse(localStorage.getItem("Ajio_Bags"));

    if (checkBox.checked == true) {
        let data = arr.filter(function (el) {
            if (el.price > 1001 && el.price < 1501) {
                return el;
            }
        });
        finalArr = finalArr.concat(data);
        showList(finalArr);
    } else {
        // console.log(arr);
        finalArr = finalArr.filter(function (el) {
            if (el.price < 1001 || el.price > 1501) {
                return el;
            }
        });

        if (finalArr.length == 0) {
            showList(arr);
        } else {
            showList(finalArr);
        }
    }
}
// // if (el.price > 1501 && el.price <= 2000) {
//       return el;
//     }
function checkbox3() {
    var mainDiv = document.getElementById("list");
    mainDiv.innerHTML = null;
    var checkBox = document.getElementById("myCheck3");
    var arr = JSON.parse(localStorage.getItem("Ajio_Bags"));

    if (checkBox.checked == true) {
        let data = arr.filter(function (el) {
            if (el.price > 1501 && el.price <= 2000) {
                return el;
            }
        });
        finalArr = finalArr.concat(data);
        showList(finalArr);
    } else {
        // console.log(arr);
        finalArr = finalArr.filter(function (el) {
            if (el.price < 1501) {
                return el;
            }
        });

        if (finalArr.length == 0) {
            showList(arr);
        } else {
            showList(finalArr);
        }
    }
}

//filter by brands

let brandArr = [];
function brand1() {
    var mainDiv = document.getElementById("list");
    mainDiv.innerHTML = null;
    let checkbox = document.getElementById("brandCheck1");
    var arr = JSON.parse(localStorage.getItem("Ajio_Bags"));
    if (checkbox.checked == true) {
        let data = arr.filter(function (el) {
            if (el.brand === "NIKE") {
                return el;
            }
        });

        brandArr = brandArr.concat(data);
        showList(brandArr);
    } else {
        brandArr = brandArr.filter(function (el) {
            if (el.brand != "NIKE") {
                return el;
            }
        });
        if (brandArr.length == 0) {
            showList(arr);
        } else {
            showLiest(brandArr);
        }
    }
}
function brand3() {
    var mainDiv = document.getElementById("list");
    mainDiv.innerHTML = null;
    let checkbox = document.getElementById("brandCheck3");
    var arr = JSON.parse(localStorage.getItem("Ajio_Bags"));
    if (checkbox.checked == true) {
        let data = arr.filter(function (el) {
            if (el.brand === "Skybags") {
                return el;
            }
        });

        brandArr = brandArr.concat(data);
        showList(brandArr);
    } else {
        brandArr = brandArr.filter(function (el) {
            if (el.brand != "Skybags") {
                return el;
            }
        });
        console.log(brandArr);
        if (brandArr.length == 0) {
            showList(arr);
        } else {
            showList(brandArr);
        }
    }
}
function brand10() {
    var mainDiv = document.getElementById("list");
    mainDiv.innerHTML = null;
    let checkbox = document.getElementById("brandCheck10");
    var arr = JSON.parse(localStorage.getItem("Ajio_Bags"));
    if (checkbox.checked == true) {
        let data = arr.filter(function (el) {
            if (el.brand == "AMERICAN TOURISTER") {
                return el;
            }
        });

        brandArr = brandArr.concat(data);
        showList(brandArr);
    } else {
        brandArr = brandArr.filter(function (el) {
            if (el.brand != "AMERICAN TOURISTER") {
                return el;
            }
        });
        if (brandArr.length == 0) {
            showList(arr);
        } else {
            showLiest(brandArr);
        }
    }
}
