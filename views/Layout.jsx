const React = require('react');
// const Header = require('./Header');

function Layout({ children }) {
  return (
    <html lang="ru">
      <head>
        <meta charSet="utf-8" />
        <title>Social pharmacy</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="description" content="" />
        <meta name="author" content="" />

        {/* <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" /> */}
        <script src="https://use.fontawesome.com/releases/v6.1.0/js/all.js" crossOrigin="anonymous" />
        <link href="https://cdnjs.cloudflare.com/ajax/libs/simple-line-icons/2.5.5/css/simple-line-icons.min.css" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,700,300italic,400italic,700italic" rel="stylesheet" type="text/css" />

        <link href="/assets/css/bootstrap.min.css" rel="stylesheet" />

        <link href="/assets/css/font-awesome.min.css" rel="stylesheet" />

        <link href="/assets/css/icofont.min.css" rel="stylesheet" />

        <link href="/assets/css/fontello.css" rel="stylesheet" />

        <link href="/assets/css/font-vandella.css" rel="stylesheet" />

        <link href="/assets/css/animate.css" rel="stylesheet" />

        <link href="/assets/css/aos.css" rel="stylesheet" />

        <link href="/assets/css/jquery.fancybox.min.css" rel="stylesheet" />

        <link href="/assets/css/slicknav.css" rel="stylesheet" />

        <link href="/assets/css/swiper.min.css" rel="stylesheet" />

        <link href="/assets/css/style.css" rel="stylesheet" />

        <script defer src="/js/main.js" />
        
        {/* <link rel="stylesheet" type="text/css" href="/style.css" /> */}

      </head>
      <body id="page-top">
        {/* <header className="masthead d-flex align-items-center">
          <div className="container px-4 px-lg-5 text-center">
            {children}
          </div>
        </header> */}
        {children}
      </body>
    </html>
  );
}

module.exports = Layout;
