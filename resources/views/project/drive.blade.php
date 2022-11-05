@extends('layout.app')
@section('content')
@include('includes.loading')
@include('includes.header_p')
<main id="project-page" class="text-white">
    <section class="container-lg text-center d-flex flex-column align-items-center">
        <h1 class="title cursor-big">Drive</h1>
        <p class="p-small pa-1 cursor-big">Car rental management</p>
        <div class="hr mt-3 mb-5 w-100">
            <svg viewBox="0 0 1403 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M1 48L176.507 35L304.007 48L454.507 35L592.507 48L752.507 35L910.507 24L1118.51 48L1314.01 24L1402.01 1"
                    stroke="#E4FF67" stroke-width="2" />
            </svg>
        </div>
        <section class="section-pr">
            <p class="p-big pa-2 text-start mb-5 ">
                <span class="cursor-big">
                    THE CUSTOMER
                    CHALLENGE.
                </span>
            </p>
            <p class="p-small pa-3 text-start mb-5 cursor-big">
                In a culture where men turn to barbers to achieve the smoothest shave, or to a hairstylist for styling instead of just a cut, it was clear to sought-after men’s grooming expert, Vaughn Acord, that it was time to create a range of men’s products tailored to their needs.
            </p>
        </section>
        <section class="content-picture img-1 mb-5 cursor-big img-h">
            <img class="w-100" src="/images/product1.png" alt="" srcset="">
        </section>
        <section class="s1">
            <section class="section-pr">
                <p class="p-big text-start mb-5 cursor-big">
                    OUR SOLUTION.
                </p>
                <p class="p-small text-start mb-5 cursor-big">
                    In a culture where men turn to barbers to achieve the smoothest shave, or to a hairstylist for styling instead of just a cut, it was clear to sought-after men’s grooming expert, Vaughn Acord, that it was time to create a range of men’s products tailored to their needs.
                </p>
            </section>
            <section class="content-picture cursor-big img-h">
                <img class="w-100" src="/images/product2.png" alt="" srcset="">
            </section>
        </section>
        <section class="vh-100 position-relative footer d-flex justify-content-center align-items-center content-picture">
            <svg width="1374" height="501" viewBox="0 0 1374 501" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21.4116 92.4597L165.411 105.349L165.576 105.364L165.737 105.325L308.234 70.5412L308.237 70.5404L597.474 1.03473L907.718 92.3334L907.958 92.4041L908.203 92.3533L1243.71 22.8872L1372.96 139.542L1352.06 350.286L1077.87 474.004L704.669 410.014L704.477 409.981L704.287 410.023L410.851 474.05L100.539 499.952L1.02358 333.072L21.4116 92.4597Z" stroke="#E4FF67" stroke-width="2"/>
            </svg>
            <div class="w-100 position-absolute start-50 top-50 translate-middle">
                <div class="w-100 d-flex flex-column justify-content-center align-items-center">
                    <a href="#" class="p-small cursor-big text-decoration-none text-white mb-3 mb-lg-5">Next Product</a>
                    <h1 class="p-big-footer cursor-big mt-5">ProAccounter</h1>
                    <span class="p-small cursor-big mb-5">Account application</span>
                </div>
            </div>
        </section>
    </section>
</main>
<span id="cursor"></span>
@endsection
