<!DOCTYPE html>
<html lang="fa" data-bs-theme="auto" dir="rtl">

<head>
    <meta name="page-title" content="register">
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <meta name="theme-color" content="#3D5F90">
    <title>FastFoooood</title>
    <link href="./style/bootstrap.css" rel="stylesheet">
    <link href="./style/stylesheet.css" rel="stylesheet">
    <script src="js/darkMode.js"></script>
</head>

<body>
    <section class="h-100 ">
        <div class="container h-100">
            <div class="row justify-content-sm-center h-100">
                <div class="col-xxl-4 col-xl-5 col-lg-5 col-md-7 col-sm-9">
                    <div class="text-center my-5">
                        <img class="rounded-circle" src="./assets/main.jpg" draggable="false" alt="logo" width="100">
                    </div>
                    <div class="card shadow-lg mb-3">
                        <nav class="navbar navbar-expand-lg bg-body-tertiary">
                            <div class="container-fluid">
                                <a class="navbar-brand bold" href="#">
                                    <img src="./assets/icon.png" alt="Logo" width="30" height="24" class="d-inline-block align-text-top">
                                    فست فووود
                                </a>
                                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span class="navbar-toggler-icon"></span>
                                </button>
                                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                        <li class="nav-item">
                                            <a class="nav-link active" aria-current="page" href="/menu.php">منوی اصلی</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="/contact-us.php">تماس با ما</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="/about-us.php">درباره</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>


                        <div id="menu" class="card-body p-3">
                            <div class="d-flex justify-content-around mb-3">
                                <button id="all" type='button' class='btn btn-primary'>همه</button>
                                <button id="pizzas" type='button' class='btn btn-primary'>پیتزا</button>
                                <button id="bergers" type='button' class='btn btn-primary'>برگر</button>
                                <button id="drinks" type='button' class='btn btn-primary'>نوشیدنی</button>
                            </div>
                            <div id="items"></div>
                            <div id="loading" class="d-flex justify-content-center p-2">
                                <div class="spinner-border" role="status">
                                    <span class="visually-hidden">Loading...</span>
                                </div>
                            </div>
                        </div>


                        <div id="detail" class="d-none">
                            <div class="imagecontainer"><img id="detail-image" draggable="false" class="" alt="main"></div>
                            <div class="p-3">
                                <h5 id="detail-title" class="bold"></h5>
                                <p id="detail-text" class=""></p>
                                <div class="d-flex justify-content-between mb-3">
                                    <div id="detail-type" class="text-danger bold"></div>
                                    <div id="detail-price" class="text-success bold"></div>
                                </div>
                                <div class="d-flex row">
                                    <button id="back" type='button' class='btn btn-primary'>بازگشت</button>
                                </div>
                            </div>

                        </div>

                        <div class="card-footer py-3 border-0">
                            <div class="text-center">
                                Made with <span style="color: #e25555;">♥</span> by FastFoooood
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <script src="./js/bootstrap.js"></script>
    <script src="./js/jquery.js"></script>
    <script src="./js/script.js"></script>
</body>

</html>