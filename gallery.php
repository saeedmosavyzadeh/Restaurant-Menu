<!DOCTYPE html>
<html lang="fa" data-bs-theme="dark" dir="rtl">

<head>
    <meta name="page-title" content="گالری آلفا">
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <meta name="theme-color" content="#027B42">
    <title>گالری آلفا</title>
    <link href="./style/bootstrap.css" rel="stylesheet">
    <link href="./style/stylesheet.css" rel="stylesheet">
    <link rel="icon" type="image/png" href="./assets/favicon.png" />
</head>

<body>
    <div id="loadingScreen"
        class="bg-body d-flex flex-column justify-content-center align-items-center h-100 w-100 position-absolute z-3">
        <img class="p-4" src="./assets/alpha.png" draggable="false" width="300px">
        <div class="spinner-border" role="status"></div>
    </div>
    <section id="main" class="h-100" style="display: none;">
        <div class="container h-100">
            <div class="row justify-content-sm-center h-100">
                <div class="col-xxl-4 col-xl-5 col-lg-5 col-md-7 col-sm-9">
                    <div class="text-center my-5">
                        <img class="" src="./assets/alpha.png" draggable="false" width="200">
                    </div>
                    <div class="card shadow-lg mb-3">
                        <nav class="navbar navbar-expand-lg bg-body-tertiary">
                            <div class="container-fluid">
                                <a class="navbar-brand bold d-flex justify-content-start align-items-center gap-2"
                                    href="#">
                                    <img src="./assets/alpha_min.png" width="24" height="24"
                                        class="d-inline-block align-text-top">
                                    <span>گالری آلفا</span>
                                </a>
                                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                    aria-expanded="false" aria-label="Toggle navigation">
                                    <span class="navbar-toggler-icon"></span>
                                </button>
                                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                        <li class="nav-item">
                                            <a class="nav-link" aria-current="page" href="./index.html">صفحه
                                                اصلی</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="./menu.html">منوی آلفا</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                        <div id="menu" class="card-body p-3">
                            <?php
                            $dir = 'assets/images/';
                            $files = scandir($dir);
                            $ext = '.jpg';
                            foreach ($files as $img) {
                                if (substr_compare($img, $ext, -strlen($ext), strlen($ext)) === 0) {
                            ?>
                                    <div class="gallerycontainer mb-1 card">
                                        <img loading="lazy" src="assets/images/<?= $img ?>">
                                    </div>
                            <?php
                                }
                            }
                            ?>
                        </div>
                    </div>

                    <div class="card-footer py-3 border-0">
                        <div class="text-center">
                            توسعه دهنده
                            <a class="text-success nounder" href="https://saeedmosavyzadeh.ir">سعید موسوی زاده</a>
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