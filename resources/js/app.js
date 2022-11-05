import './bootstrap';
import gsap from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';
import CSSRulePlugin from 'gsap/CSSRulePlugin';
import ScrollToPlugin from 'gsap/ScrollToPlugin';
import TweenMax from 'gsap/gsap-core';
import axios from 'axios';

axios.defaults.headers.common = {
    'X-Requested-With': 'XMLHttpRequest',
    'X-CSRF-TOKEN' : document.querySelector('meta[name="csrf-token"]').getAttribute('content')
};
gsap.registerPlugin(ScrollTrigger,CSSRulePlugin,ScrollToPlugin)
let container_load = document.querySelector('nav .container-fluid')
let cursors_big = document.querySelectorAll('.cursor-big')
let cursor=document.querySelector("#cursor")
var logo_after = CSSRulePlugin.getRule("#loading .logo::after");
var logo_before = CSSRulePlugin.getRule("#loading .logo::before");
let nav_load = document.querySelector('#nav-load')
    //hide nav
    window.addEventListener('scroll', () => {
        if (document.documentElement.scrollTop <= 0 && document.documentElement.scrollLeft <= 0) {
            if (document.documentElement.offsetWidth >= 992)
                TweenMax.to(nav_load, { y: "0%", opacity: 1, duration: 1, delay: 0.4})
        } else {
            if (document.documentElement.offsetWidth >= 992)
                TweenMax.to(nav_load, { y: "-200%", opacity: 0, duration: 1, delay: 0.4})

        }
    })
cursors_big.forEach(element => {
    element.addEventListener("mousemove",()=>{
        cursor.classList.add("active")
    })
    element.addEventListener("mouseout",()=>{
        cursor.classList.remove("active")
    })
});
setTimeout(() => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
}, 500);
//load global animate
window.addEventListener('load', () => {
    ScrollReveal({
        reset:true,
        distance:"100px",
        duration:1500,
        // delay:50,
        opacity:0
    })
    TweenMax.to(logo_after, { duration: 1, opacity: 1, delay: 0.7 });
    TweenMax.to(logo_before, { duration: 1, opacity: 1, delay: 0.7 });
    TweenMax.to('#loading .logo', { duration: 2, delay: 1.7, opacity: 1, scale: 1.5,ease:"back"});
    TweenMax.to('#loading', { duration: 0.7, delay: 3.6, opacity: 0 });
    TweenMax.to('#loading', { duration: 0, delay: 4.2, display: "none" });
    TweenMax.to('main', { duration: 0.3, delay: 4.3, opacity: 1 });
    TweenMax.to('nav', { duration: 0.3, delay: 4.3, y: "-100%" });
    TweenMax.to('body', { duration: 0, delay: 6, overflowY: "scroll" });
    TweenMax.to('nav', { y: "0%", opacity: 1, duration: 0.7, delay: 4.6 })
    //home scripts
if (document.querySelector("#home") != null) {
    ScrollReveal().reveal(".project a",{origin:"top"})
    ScrollReveal().reveal(".project h1",{origin:"left"})
    ScrollReveal().reveal(".project p",{origin:"right"})
    ScrollReveal().reveal(".team .dev .clip_team",{origin:"bottom",distance:"200px",})
    ScrollReveal().reveal(".team .dev .fs-2",{origin:"right"})
    ScrollReveal().reveal(".team .dev .fs-4",{origin:"left"})
    ScrollReveal().reveal(".service-content .icon",{origin:"left"})
    ScrollReveal().reveal(".service-content .right-service .fs-1",{origin:"right",delay:20})
    ScrollReveal().reveal(".service-content .right-service .body",{origin:"bottom",delay:40})
    ScrollReveal().reveal(".header_project .nav-link",{origin:"top",interval:100})
    ScrollReveal().reveal("#projects1 .container-fluid",{origin:"top",delay:200})
    ScrollReveal().reveal(".prod .product-title",{origin:"right"})
    ScrollReveal().reveal(".prod .product-type",{origin:"right"})
    ScrollReveal().reveal(".prod .body",{origin:"bottom"})
    ScrollReveal().reveal(".prod .line")
    ScrollReveal().reveal(".prod .role p",{origin:"right",interval:100})
    ScrollReveal().reveal(".prod .btn-outline-unfold",{origin:"right",delay:20})
    ScrollReveal().reveal(".prod .img-project",{origin:"bottom",delay:20})

    let titles=document.querySelectorAll(".title-page")
    titles.forEach(title=>{
        title.addEventListener("mousemove",()=>{
            cursor.style.display="none";
        })
        title.addEventListener("mouseout",()=>{
            cursor.style.display="block";
        })
    })
let close_modal = document.querySelector(".btn-close")
close_modal.addEventListener("click", () => {
    TweenMax.to('body', { delay: 0.5, overflowY: "scroll" });
    TweenMax.to("main", { opacity: 1, duration: 1 })
    TweenMax.to("nav", { opacity: 1, duration: 1 })
    reset_contact()
})
let link_contact = document.querySelector("#link-contact")
link_contact.addEventListener("click", () => {
    animation_modal()
})
//animation modal contact
function animation_modal() {
    TweenMax.from(".modal-content", { height: "0%", opacity: 0, duration: 1.5, delay: 1 })
    TweenMax.to("main", { opacity: 0, duration: 1, delay: 2.5 })
    TweenMax.to("nav", { opacity: 0, duration: 1, delay: 2.5 })
}
//active project type
let nav_project_type_links = document.querySelectorAll('.nav_project_type span'),
    nav_interested_links = document.querySelectorAll('.nav_interested span');
nav_project_type_links.forEach(ele => {
    ele.addEventListener('click', () => {
        TweenMax.to(nav_load, { y: "-200%", opacity: 0, duration: 1})
        nav_project_type_links.forEach(element => {
            if (element.classList.contains("active"))
                element.classList.remove("active")
        })
        ele.classList.add("active")
    })
})
//active interested
nav_interested_links.forEach(ele => {
    ele.addEventListener('click', () => {
        nav_interested_links.forEach(element => {
            if (element.classList.contains("active"))
                element.classList.remove("active")
        })
        ele.classList.add("active")
    })
})
function reset_contact(){
    nav_project_type_links.forEach(element => {
        if (element.classList.contains("active"))
            element.classList.remove("active")
    })
    nav_interested_links.forEach(element => {
        if (element.classList.contains("active"))
            element.classList.remove("active")
    })
    $("#name").val("")
    $("#email").val("")
    $("#Additional_details").val("")
}
//contact us send
let send = document.querySelector("#contact_us")
send.addEventListener("click", () => {
    axios.post('/contact',{
        name:$("#name").val(),
        email:$("#email").val(),
        description:$("#Additional_details").val(),
        project_type:$(".nav_project_type span.active").text(),
        interested_in:$(".nav_interested span.active").text()
    }).then(response=>{
        if(response.data.success){
            Command: toastr["success"]("Thank you for contacting us, we will respond to you as soon as possible.")
            toastr.options = {
                "closeButton": true,
                "debug": true,
                "newestOnTop": true,
                "progressBar": true,
                "positionClass": "toast-bottom-right",
                "preventDuplicates": false,
                "onclick": null,
                "showDuration": "300",
                "hideDuration": "3000",
                "timeOut": "5000",
                "extendedTimeOut": "1000",
                "showEasing": "swing",
                "hideEasing": "linear",
                "showMethod": "fadeIn",
                "hideMethod": "fadeOut"
            }
            reset_contact()
        }else
            window.location.replace("/404")

    }).catch(errors=>{
        let error=""
        if(errors.response.data.errors.hasOwnProperty("project_type"))
            error="Please check one project type."
        else if (errors.response.data.errors.hasOwnProperty("interested_in"))
            error="Please check one interested in."
        else if (errors.response.data.errors.hasOwnProperty("name"))
            error="The name must be at least 3 characters."
        else if(errors.response.data.errors.hasOwnProperty("email"))
            error="The email must be a valid email address."
        else
            error="The description must be at least 3 characters."

            Command: toastr["error"](error)
            toastr.options = {
                "closeButton": true,
                "debug": true,
                "newestOnTop": true,
                "progressBar": true,
                "positionClass": "toast-bottom-right",
                "preventDuplicates": false,
                "onclick": null,
                "showDuration": "300",
                "hideDuration": "1000",
                "timeOut": "5000",
                "extendedTimeOut": "1000",
                "showEasing": "swing",
                "hideEasing": "linear",
                "showMethod": "fadeIn",
                "hideMethod": "fadeOut"
            }
    })

})
    let lunch_demo=document.querySelectorAll("#lunch_demo")
    lunch_demo.forEach(link=>{
        link.addEventListener("click",()=>{
            window.location.replace("/product/"+link.dataset.product.toLowerCase())
        })
    })
    let btn_contact = document.querySelector(".btn-contact")
    btn_contact.addEventListener("click", () => {
        animation_modal()
    })
    let title_page = document.querySelectorAll(".title-page");
    title_page.forEach(title => {
        VanillaTilt.init(title, {
            max: 10,
            speed: 400,
            transition: true,
            perspective: 1000,
            reverse: true,
            glare: false,
            // "max-glare": 0.5,
            reset: true,
        });
    })
    let projects = document.querySelectorAll(".project")
    // select2
    $(document).ready(function () {
        $('#type_project_select').select2();
    });
    //filter project
    $('#type_project_select').on('select2:select', function (e) {
        filter_projects(document.querySelector(".select2-selection__rendered").getAttribute("title"))
    });
    function filter_projects(type) {
        if (type == "All") {
            projects.forEach(el => {
                if (!el.classList.contains("show"))
                    el.classList.add("show")
                if (el.classList.contains("hide"))
                    el.classList.remove("hide")
            })
        } else {
            projects.forEach(el => {
                if (type == el.dataset.type) {
                    if (el.classList.contains("hide"))
                        el.classList.replace("hide", "show")
                    else {
                        if (!el.classList.contains("show"))
                            el.classList.add("show")
                    }
                } else {
                    if (el.classList.contains("show"))
                        el.classList.replace("show", "hide")
                    else {
                        if (!el.classList.contains("hide"))
                            el.classList.add("hide")
                    }
                }
            })
        }
        if (document.querySelector(".project.show") != null) {
            let project_show = document.querySelectorAll(".project.show");
            let delay = 0;
            project_show.forEach(ps => {
                TweenMax.from(ps, { duration: 1, opacity: 0, y: "20vh", delay: delay })
                delay += 0.7;
            })
        }
    }
    //nav variables
    let navigation = document.querySelector("#navigation")
    let nav = document.querySelector('nav')

    let links = document.querySelectorAll('#nav-load .nav-item .nav-link')
    let navbar_collapse = document.querySelector('.navbar-collapse')
    let navbar_toggler = document.querySelector('.navbar-toggler')

    //active link nav product and search product categorie
    //nav project active link
    let nav_project = document.querySelectorAll('.header_project .nav-link')
    nav_project.forEach(element => {
        element.addEventListener('click', e => {
            e.preventDefault()
            nav_project.forEach(ele => {
                if (ele.classList.contains('active'))
                    ele.classList.remove('active')
            })
            element.classList.add('active')
            filter_projects(element.dataset.categorie)
        })
    })
        //animation home
        TweenMax.from('.home-p p:nth-child(1)', { x: "100%", opacity: 0, duration: 0.7, scale: 0, delay: 4.2 })
        TweenMax.from('.home-p p:nth-child(2)', { x: "-100%", opacity: 0, duration: 0.7, scale: 0, delay: 4.7 })
        TweenMax.from('.home-p p:nth-child(3)', { x: "100%", opacity: 0, duration: 0.7, scale: 0, delay: 5.2 })
        // add a media query animation
        let mm = gsap.matchMedia();
        mm.add("(min-width: 992px)", () => {
            //animation nav-link
            TweenMax.from('nav #logo', { x: "-100%", opacity: 0, duration: 1, delay: 4.7})
            TweenMax.from('nav #link-contact', { x: "100%", opacity: 0, duration: 1, delay: 4.7})
            TweenMax.from(links[0], { y: "-100%", opacity: 0, duration: 0.7, delay: 5})
            TweenMax.from(links[1], { y: "-100%", opacity: 0, duration: 0.7, delay: 5.3})
            TweenMax.from(links[2], { y: "-100%", opacity: 0, duration: 0.7, delay: 5.6})
            TweenMax.from(links[3], { y: "-100%", opacity: 0, duration: 0.7, delay: 5.9})
            TweenMax.from(links[4], { y: "-100%", opacity: 0, duration: 0.7, delay: 6.2})
            const t = gsap.timeline();
            t.to('#panels', { x: -window.innerWidth, duration: 1 })
            ScrollTrigger.create({
                animation: t,
                trigger: "#panels",
                start:"top top",
                end:"+="+window.innerWidth,
                pin: true,
                scrub: 1,
                snap: {
                    snapTo: 1 ,
                    duration: {min: 0.1, max: 0.1}
                },
            })
            const t2 = gsap.timeline();
            t2.to('#panels2', { x: -window.innerWidth, duration: 1 })
            ScrollTrigger.create({
                animation: t2,
                trigger: "#panels2",
                start:"top top",
                pin: true,
                end:"+="+window.innerWidth,
                scrub: 1,
                snap: {
                    snapTo: 1 ,
                    duration: {min: 0.1, max: 0.1}
                },
            })
            const t3 = gsap.timeline();
            t3.to('#panels3', { x: -window.innerWidth, duration:1  })
            ScrollTrigger.create({
                animation: t3,
                trigger: "#panels3",
                start:"top top",
                pin: true,
                end:"+="+window.innerWidth,
                scrub: 1,
                snap: {
                    snapTo: 1 ,
                    duration: {min: 0.1, max: 0.1}
                },
            })
            const t4 = gsap.timeline();
            t4.to('#panels4', { x: -window.innerWidth, duration: 1 })
            ScrollTrigger.create({
                animation: t4,
                trigger: "#panels4",
                start:"top top",
                pin: true,
                end:"+="+window.innerWidth,
                scrub: 1,
                snap: {
                    snapTo: 1 ,
                    duration: {min: 0.1, max: 0.1}
                },
            })
        });
    //active nav-link onclick
    links.forEach(el => {
        el.addEventListener("click", e => {
            setTimeout(() => {
                if (!navbar_toggler.classList.contains("collapsed"))
                    navbar_toggler.classList.add("collapsed")
                if (navbar_collapse.classList.contains("show"))
                    navbar_collapse.classList.remove("show")
            }, 1000);
            links.forEach(ele => {
                if (ele.classList.contains("active"))
                    ele.classList.remove("active")
            })
            el.classList.add("active")
            e.preventDefault()
            if (document.documentElement.offsetWidth >= 992) {
                if (el.dataset.nav == "about"){
                    scrollToView("#panels")
                    setTimeout(() => {
                        gsap.to('#panels', { x: -(window.innerWidth)})
                    }, 2400);
                }
                else if (el.dataset.nav == "projects"){
                    scrollToView("#panels2")
                    setTimeout(() => {
                        gsap.to('#panels2', { x: -window.innerWidth})
                    }, 2400);
                }
                else if (el.dataset.nav == "product"){
                    scrollToView("#panels3")
                    setTimeout(() => {
                        gsap.to('#panels3', { x: -window.innerWidth})
                    }, 2400);
                }
                else if (el.dataset.nav == "team"){
                    scrollToView("#panels4")
                    setTimeout(() => {
                        gsap.to('#panels4', { x: -window.innerWidth})
                    }, 2400);
                }
                else
                    scrollToView(el.getAttribute('href'))
            } else
                scrollToView(el.getAttribute('href'))
        })
    })
    //scroll to section
    function scrollToView(el, d = 3.3) {
        setTimeout(() => {
            navigation.classList.remove("d-none")
            cursor.style.display="none"
            document.querySelector(el).scrollIntoView({ behavior: 'smooth' })
        }, 1100);
        TweenMax.to('body', { duration: 0, delay: 1, overflowY: "hidden" });
        TweenMax.to('#navigation', { duration: 0.3, delay: 1.1, opacity: 1 });
        gsap.to('main', { opacity: 0, delay: 1 })
        TweenMax.to('#navigation .logo', { duration: 1, delay: 1.1, opacity: 1 });
        TweenMax.to('#navigation', { duration: 0.3, delay: (d - 0.3), opacity: 0 });
        setTimeout(() => {
            navigation.classList.add("d-none")
            cursor.style.display="block"
        }, 2900);
        gsap.to('main', { opacity: 1, delay: d })
        TweenMax.to('body', { duration: 0, delay: d, overflowY: "scroll" });
    }
    // show nav
    nav.addEventListener('mousemove', () => {
        if (document.documentElement.offsetWidth >= 992)
            TweenMax.to(nav_load, { y: "0%", opacity: 1, duration: 1, delay: 0.4})
    })
    // active nav-link onscroll
    const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (document.documentElement.scrollTop >= 50 || document.documentElement.scrollLeft >= 50) {
                    links.forEach(ele => {
                            ele.classList.remove('active')
                    })
                    links.forEach(el => {
                        if (entry.target.dataset.element == el.dataset.nav)
                            el.classList.add('active')
                    })
                }
            })
    })
    const contentElement = document.querySelectorAll('section')
    contentElement.forEach(el => observer.observe(el))
    //animation sub about
    //about 1
    const sb1 = gsap.timeline();
    sb1.from(".ab-1", { y: "100%", opacity: 0, duration: 1 })
    ScrollTrigger.create({
        animation: sb1,
        trigger: ".about-1",
        pin: true,
        start: "center 60%",
        end: "+=10vh",
        scrub: 1,
    })
    //about 2
    const sb2 = gsap.timeline();
    sb2.from(".ab-2", { y: "100%", opacity: 0, duration: 1 })
    ScrollTrigger.create({
        animation: sb2,
        trigger: ".about-2",
        pin: true,
        start: "center 60%",
        end: "+=10vh",
        scrub: 1,
    })
    // //about 3
    const sb3 = gsap.timeline();
    sb3.from(".ab-3", { y: "100%", opacity: 0, duration: 1 })
    ScrollTrigger.create({
        animation: sb3,
        trigger: ".about-3",
        pin: true,
        start: "center 60%",
        end: "+=10vh",
        scrub: 1,
    })
    const p1 = gsap.timeline();
    p1.from(".p-1", { y: "100%", opacity: 0, duration: 1 })
    ScrollTrigger.create({
        animation: p1,
        trigger: ".product-1",
        pin: true,
        start: "center center",
        end: "+=10vh",
        scrub: 4,
    })
    const te = gsap.timeline();
    te.from(".t-1", { y: "100%", opacity: 0, duration: 1 })
    ScrollTrigger.create({
        animation: te,
        trigger: ".team-2",
        pin: true,
        start: "center 60%",
        end: "+=10vh",
        scrub: 1,
    })
    //project
    let projects_image = document.querySelectorAll(".sub-project .project a")

    projects_image.forEach(el => {
        el.addEventListener("mouseover", () => {
            projects_image.forEach(element => {
                if (!element.classList.contains('filter'))
                    element.classList.add('filter')
                if (element.classList.contains('show'))
                    element.classList.remove('show')
            })
            if (el.classList.contains('filter'))
                el.classList.remove('filter')
            if (!el.classList.contains('show'))
                el.classList.add('show')
        })
        el.addEventListener("mouseout", () => {
            projects_image.forEach(element => {
                if (element.classList.contains('filter'))
                    element.classList.remove('filter')
                if (element.classList.contains('show'))
                    element.classList.remove('show')
            })
        })
    })
}else if(document.querySelector("#project-page") != null){
//show product scripts
    TweenMax.from('.title', { y: "-300%", opacity: 0, duration: 0.7, scale: 0, delay: 4.2})
    TweenMax.from('.pa-1 ', { y: "300%", opacity: 0, duration: 0.7, scale: 0, delay: 4.9 })
    TweenMax.from('.hr ', { opacity: 0, duration: 0.7, delay: 5.6 })
    TweenMax.from('.pa-3 ', { x: "300%", opacity: 0, duration: 0.7, scale: 0, delay: 6.3 })
    TweenMax.from('.pa-2 ', { x: "-300%", opacity: 0, duration: 0.7, scale: 0, delay: 5.8 })
    TweenMax.from('.img-1 ', { y: "300%", opacity: 0, duration: 1, scale: 0, delay: 6.8 })
    ScrollReveal().reveal(".s1 .section-pr .p-big",{origin:"left"})
    ScrollReveal().reveal(".s1 .section-pr .p-small",{origin:"right",delay:20})
    ScrollReveal().reveal(".s1 .img-h",{origin:"bottom",delay:40})
    ScrollReveal().reveal(".footer",{origin:"bottom"})
    ScrollReveal().reveal(".footer a",{origin:"right",delay:20})
    ScrollReveal().reveal(".footer h1",{origin:"left",delay:40})
    ScrollReveal().reveal(".footer span",{origin:"right",delay:60})
}else if(document.querySelector("#product-page") != null){
//show project scripts
    TweenMax.from('.title', { y: "-300%", opacity: 0, duration: 0.7, scale: 0, delay: 4.2})
    TweenMax.from('.pa-1 ', { y: "-300%", opacity: 0, duration: 0.7, scale: 0, delay: 4.8 })
    TweenMax.from('.pa-2 ', { x: "-300%",opacity: 0, duration: 0.7, delay: 5.3 })
    TweenMax.from('.pa-3 ', { x: "300%", opacity: 0, duration: 0.7, scale: 0, delay: 5.8 })
    TweenMax.from('.pa-4 ', { x: "-300%", opacity: 0, duration: 0.7, scale: 0, delay: 6.3 })
    TweenMax.from('.pa-5 ', { x: "300%", opacity: 0, duration: 0.7, scale: 0, delay: 6.8 })
    TweenMax.from('.div-btn', { y: "300%", opacity: 0, duration: 1, scale: 0, delay: 7.5 })
    TweenMax.from('.img-1', { y: "300%", opacity: 0, duration: 1, scale: 0, delay: 8})
    ScrollReveal().reveal(".section-2 p .p-big",{origin:"top",delay:20})
    ScrollReveal().reveal(".section-2 p .p-small",{origin:"left"})
    ScrollReveal().reveal(".section-2>.p-small",{origin:"right",delay:40})
    ScrollReveal().reveal(".section-three .content-picture",{origin:"left"})
    ScrollReveal().reveal(".section-three .p-big",{origin:"right",delay:20})
    ScrollReveal().reveal(".section-three .p-small",{origin:"right",delay:40})
    ScrollReveal().reveal(".footer",{origin:"bottom"})
    ScrollReveal().reveal(".footer a",{origin:"right",delay:20})
    ScrollReveal().reveal(".footer h1",{origin:"left",delay:40})
    ScrollReveal().reveal(".footer span",{origin:"right",delay:60})
    ScrollReveal().reveal(".section-5 img",{origin:"left",distance:"300px",delay:20})
    ScrollReveal().reveal(".section-7 > .content-picture img",{origin:"left",distance:"300px",delay:20})
    ScrollReveal().reveal(".section-7 .img-2",{origin:"right",distance:"300px",delay:40})
    ScrollReveal().reveal(".section-7 .p-small",{origin:"left",delay:60})
    ScrollReveal().reveal(".section-7 .p-big",{origin:"bottom",distance:"300px",delay:60,interval:20})
}else
    window.location.replace("/404")
    //cursor move
    setTimeout(() => {
        document.addEventListener("mousemove",e=>{
            cursor.style.opacity=1
            cursor.style.left=e.clientX+"px"
            cursor.style.top=e.clientY+"px"
        })
    }, 5000);
})




