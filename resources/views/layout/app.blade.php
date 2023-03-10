<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="description" content="unfobyte est une société de développement informatique spécialisée dans la création de sites web, de logiciels, et qui intervient également chez vous dans le cadre d'études de projets et d'audit">
    <meta name="keywords" content="Laravel framework,Bootstrap,SCSS,CSS,HTML,JavaScript,gsap">
    <meta name="author" content="unfoldbyte">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ Request::route()->getName() }}</title>
    {{-- style --}}
    <link rel="stylesheet" href="{{ asset('css/app.css') }}">
    {{-- select2 --}}
    <link href="https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/css/select2.min.css" rel="stylesheet" />
    {{-- toastr css --}}
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/2.1.4/toastr.css" />
    {{-- font awesome --}}
    <link rel="stylesheet" href="{{ asset("src/css/all.min.css") }}"/>
    {{-- icon --}}
    <link rel="icon" href="{{ asset("images/logo.svg") }}">
</head>

<body class="text-white bg-body position-relative" id="introduction">
    @yield('content')
    <span id="scrollTop" class="fs-1 cursor-big">
        <i class="fa-solid fa-circle-arrow-up"></i>
    </span>
    {{-- jquery --}}
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.1/jquery.min.js"></script>
    {{-- select2 --}}
    <script src="https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/js/select2.min.js" defer></script>
    {{-- vanilla tilt --}}
    <script src="https://cdnjs.cloudflare.com/ajax/libs/vanilla-tilt/1.7.2/vanilla-tilt.min.js"></script>
    {{-- font awesome --}}
    <script src="{{ asset("src/js/all.min.js") }}" defer></script>
    {{-- particles --}}
    <script src="{{ asset("src/js/particles.js") }}" defer></script>
    <script src="{{ asset("src/js/particles_app.js") }}" defer></script>
    {{-- toastr js --}}
    <script src="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/2.1.4/toastr.min.js" defer></script>
    {{-- scripts --}}
    <script src="{{ asset('js/app.js') }}" defer></script>
</body>

</html>
