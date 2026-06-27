// =============================
// Smooth Scroll
// =============================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        document.querySelector(this.getAttribute("href"))
        .scrollIntoView({
            behavior:"smooth"
        });

    });

});

// =============================
// Typing Effect
// =============================

const text = [
    "Front-End Developer",
    "Web Designer",
    "HTML | CSS | JavaScript"
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

function type(){

    if(count === text.length){
        count = 0;
    }

    currentText = text[count];

    letter = currentText.slice(0, ++index);

    document.querySelector(".hero-text h2").textContent = letter;

    if(letter.length === currentText.length){

        count++;
        index = 0;

        setTimeout(type,1500);

    }else{

        setTimeout(type,120);

    }

}

type();

// =============================
// Fade Animation
// =============================

const sections = document.querySelectorAll("section");

window.addEventListener("scroll",()=>{

    sections.forEach(section=>{

        const position = section.getBoundingClientRect().top;

        const screen = window.innerHeight;

        if(position < screen-100){

            section.classList.add("show");

        }

    });

});

// =============================
// Navbar Active Link
// =============================

const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

    let current="";

    document.querySelectorAll("section").forEach(section=>{

        const sectionTop = section.offsetTop-100;

        if(pageYOffset >= sectionTop){

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")=="#"+current){

            link.classList.add("active");

        }

    });

});

// =============================
// Contact Form
// =============================

const form = document.querySelector("form");

form.addEventListener("submit",(e)=>{

    e.preventDefault();

    alert("Thank you! Your message has been sent successfully.");

    form.reset();

});

// =============================
// Welcome Message
// =============================

window.onload=function(){

    console.log("Welcome to B Kishore Raja Portfolio");

};