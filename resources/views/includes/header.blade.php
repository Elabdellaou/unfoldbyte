<nav class="navbar w-100 navbar-expand-lg navbar-dark">
    <div class="container-fluid px-2 px-md-4 px-lg-2 px-xl-4 pt-3 pt-lg-2 position-fixed start-50 top-0 translate-middle-x">
        <a class="navbar-brand cursor-big text-white" id="logo" href="{{ route("unfoldbyte") }}">
            <svg viewBox="0 0 48 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M18.632 34.4V56.192H18.68C18.68 62.96 24.872 67.952 32.312 67.952C40.04 67.952 46.28 62.528 46.28 55.712C46.28 49.136 40.376 43.616 32.408 43.616C27.896 43.616 25.352 46.256 24.584 46.688V34.4H18.632ZM32.456 48.896C36.968 48.896 40.328 52.112 40.328 55.808C40.328 59.744 36.872 62.528 32.408 62.528C28.088 62.528 24.584 59.888 24.584 56C24.584 51.92 27.992 48.896 32.456 48.896Z"
                    fill="white" />
                <ellipse cx="32.5" cy="56" rx="8.5" ry="8" fill="white" />
                <path
                    d="M15.552 41.952C22.992 41.952 29.232 36.96 29.232 30.192H29.28V8.4H23.28V20.688C22.512 20.256 20.016 17.616 15.456 17.616C7.488 17.616 1.632 23.136 1.632 29.712C1.632 36.528 7.872 41.952 15.552 41.952ZM15.408 22.896C19.872 22.896 23.28 25.92 23.28 30C23.28 33.888 19.776 36.528 15.456 36.528C10.992 36.528 7.584 33.744 7.584 29.808C7.584 26.112 10.944 22.896 15.408 22.896Z"
                    fill="white" />
                <ellipse cx="15.5" cy="30" rx="8.5" ry="8" fill="white" />
            </svg>
        </a>
        <button class="navbar-toggler cursor-big ms-auto collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
            aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon w-100 d-flex justify-content-end align-items-center">
                <i class="fa-solid fa-bars"></i>
                <i class="fa-solid fa-xmark"></i>
            </span>
        </button>
        <div class="collapse navbar-collapse w-100" id="navbarText">
            <div id="nav-load" class="ps-5 me-0 me-lg-auto">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link cursor-big me-5 active" data-nav="home" href="#home"><span
                                id="active" class="position-absolute"></span> <span class="link me-xl-5">Home</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link cursor-big me-5" data-nav="about" href="#about"><span id="active"
                                class="position-absolute"></span> <span class="link me-xl-5">About</span> </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link cursor-big me-5" data-nav="projects" href="#projects"><span
                                id="active" class="position-absolute"></span> <span
                                class="link me-xl-5">Projects</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link cursor-big me-5" data-nav="product" href="#product"><span
                                id="active" class="position-absolute"></span> <span
                                class="link me-xl-5">Product</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link cursor-big me-5" data-nav="team" href="#team"><span id="active"
                                class="position-absolute"></span> <span class="link">Team</span> </a>
                    </li>
                </ul>
            </div>
            <ul class="navbar-nav ms-5 ms-lg-auto">
                <li class="nav-item">
                    <button class="nav-link cursor-big text-white" id="link-contact" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Contact</button>
                </li>
            </ul>
        </div>
    </div>
</nav>
