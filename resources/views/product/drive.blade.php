@extends('layout.app')
@section('content')
    @include('includes.loading')
    @include('includes.header_p')
    <main id="product-page" class="text-white">
        <section class="container-fluid d-flex flex-column align-items-center">
            <div class="mb-5 w-100 row row-cols-1 row-cols-xl-2">
                <div class="mb-5 div-1">
                    <h1 class="title cursor-big">Drive</h1>
                    <span class="p-small pa-1 cursor-big">Car rental management</span>
                </div>
                <div class="row row-cols-2 mb-5 div-2">
                    <span class="cursor-big p-small pj pa-2">
                        Year <br>
                        <span class="p-m">2022</span>
                    </span>
                    <span class="cursor-big p-small pj pa-3">
                        Role <br>
                        <span class="p-m">Dev & design</span>
                    </span>
                    <span class="cursor-big mt-5 p-small pj pa-4">
                        Client <br>
                        <span class="p-m">To agence</span>
                    </span>
                    <span class="cursor-big mt-5 p-small pj pa-5">
                        Product type <br>
                        <span class="p-m">Desktop</span>
                    </span>
                    <div class="div-btn">
                        <button class="btn-outline-unfold cursor-big rounded-pill text-white mt-5" id="view-website"
                            data-product="Drive">VIEW WEBSITE</button>
                    </div>
                </div>
            </div>
            <section class="content-picture img-1 my-5 d-flex align-items-center section-1">
                <img src="/images/project1.png" class="w-100 cursor-big" alt="" srcset="">
            </section>
            <section class="section-2">
                <p class="pj-1 text-center text-lg-start mb-5 my-lg-5">
                    <span class="d-flex align-items-center justify-content-center justify-content-lg-start flex-row">
                        <span class="p-small pe-4 cursor-big span-1">OVERVIEW</span>
                        <span class="cursor-big p-big span-2">
                            SOFTWARE MAKES
                        </span>
                    </span>
                    <span class="cursor-big p-big span-3">
                        EVERYTHING EASY.
                    </span>
                </p>
                <p class="p-small pa-6 text-start mb-5 ps-lg-5 my-lg-5 cursor-big">
                    In a culture where men turn to barbers to achieve the smoothest shave, or to a hairstylist for styling instead of just a cut, it was clear to sought-after men’s grooming expert, Vaughn Acord, that it was time to create a range of men’s products tailored to their needs.
                </p>
            </section>
            <section class="section-3 section-three">
                <div class="content-picture pic-1 d-flex align-items-center my-5">
                    <img class="w-100 cursor-big" src="/images/project3.png" alt="" srcset="">
                </div>
                <div class="d-flex ps-lg-5 align-items-center">
                    <div style="height: fit-content">
                        <span class="p-big cursor-big mb-5 span-4">SOMETHING COOL</span>
                        <br>
                        <span class="p-small cursor-big pa-6">
                            In a culture where men turn to barbers to achieve the smoothest shave, or to a hairstylist for styling instead of just a cut, it was clear to sought-after men’s grooming expert, Vaughn Acord, that it was time to create a range of men’s products tailored to their needs.
                        </span>
                    </div>
                </div>
            </section>
            <section class="section-4 section-three">
                <div class="content-picture pic-2 d-flex align-items-center my-5">
                    <img class="w-100 cursor-big" src="/images/project3.png" alt="" srcset="">
                </div>
                <div class="d-flex ps-lg-5 align-items-center">
                    <div style="height: fit-content">
                        <span class="p-big cursor-big mb-5 span-5">SOMETHING COOL</span>
                        <br>
                        <span class="p-small cursor-big pa-7">
                            In a culture where men turn to barbers to achieve the smoothest shave, or to a hairstylist for styling instead of just a cut, it was clear to sought-after men’s grooming expert, Vaughn Acord, that it was time to create a range of men’s products tailored to their needs.
                        </span>
                    </div>
                </div>
            </section>
            <section class="content-picture img-1 my-5 d-flex align-items-center section-5 ">
                <img src="/images/project4.png" class="w-100 cursor-big" alt="" srcset="">
            </section>
            <section class="section-6 section-three">
                <div class="content-picture pic-3 d-flex align-items-center my-5">
                    <img class="w-100 cursor-big" src="/images/project3.png" alt="" srcset="">
                </div>
                <div class="d-flex ps-lg-5 align-items-center">
                    <div style="height: fit-content">
                        <span class="p-big cursor-big my-5 span-6">SOMETHING COOL</span>
                        <br>
                        <span class="p-small cursor-big pa-8">
                            In a culture where men turn to barbers to achieve the smoothest shave, or to a hairstylist for styling instead of just a cut, it was clear to sought-after men’s grooming expert, Vaughn Acord, that it was time to create a range of men’s products tailored to their needs.
                        </span>
                    </div>
                </div>
            </section>
            <section class="w-100 my-5 section-7">
                <div class="w-100 content-picture img-1 pic-4 mb-5">
                    <img class="cursor-big" src="/images/p6.png" alt="" srcset="">
                </div>
                <div class="row row-cols-1 align-items-center justify-content-center justify-content-lg-start  row-cols-md-2 align-items-xl-start">
                    <p class="pj-4 text-center text-lg-start mb-5">
                        <span class="d-flex align-items-center justify-content-center justify-content-lg-start flex-row">
                            <span class="p-small pe-4 cursor-big span-7">OUTCOME</span>
                            <span class="cursor-big p-big span-8">
                                SOFTWARE MAKES
                            </span>
                        </span>
                        <span class="cursor-big p-big span-9">
                            EVERYTHING EASY.
                        </span>
                    </p>
                    <div class="content-picture img-mobile pic-5 img-2" style="">
                        <img class="w-100 h-100 cursor-big" src="/images/project5.png" alt="" srcset="">
                    </div>
                </div>
            </section>
            <section
                class="vh-100 position-relative section-8 footer d-flex justify-content-center align-items-center content-picture">
                <svg width="1374" height="501" viewBox="0 0 1374 501" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M21.4116 92.4597L165.411 105.349L165.576 105.364L165.737 105.325L308.234 70.5412L308.237 70.5404L597.474 1.03473L907.718 92.3334L907.958 92.4041L908.203 92.3533L1243.71 22.8872L1372.96 139.542L1352.06 350.286L1077.87 474.004L704.669 410.014L704.477 409.981L704.287 410.023L410.851 474.05L100.539 499.952L1.02358 333.072L21.4116 92.4597Z"
                        stroke="#E4FF67" stroke-width="2" />
                </svg>
                <div class="w-100 position-absolute start-50 top-50 translate-middle">
                    <div class="w-100 d-flex flex-column justify-content-center align-items-center">
                        <a href="#" class="p-small cursor-big text-decoration-none text-white mb-5">Next Project</a>
                        <h1 class="p-big-footer cursor-big mt-5">ProAccounter</h1>
                        <span class="p-small cursor-big mb-5">Account application</span>
                    </div>
                </div>
            </section>
        </section>
    </main>
    <span id="cursor"></span>
@endsection
