function initGoogleFont()
{
    var font = 
    `
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@100;400&display=swap" rel="stylesheet">
    `;
}

function title()
{
    var title = 
    `
    <header>
        <h1>Filho, Ronaldo S. C.</h1>
    </header>
    `;

    document.write(title);
}

function indexNav()
{
    var nav = 
    `
    <nav>
        <ul>
            <li><a href="index.html">Início</a></li>
            <li><a href="site/posts.html">Postagens</a></li>
            <li><a href="site/about.html">Sobre</a></li>
        </ul>
    </nav>
    `;

    document.write(nav);
}

function siteNav()
{
    var nav = 
    `
    <nav>
        <ul>
            <li><a href="../index.html">Início</a></li>
            <li><a href="posts.html">Postagens</a></li>
            <li><a href="about.html">Sobre</a></li>
        </ul>
    </nav>
    `;

    document.write(nav);
}

function postNav()
{
    var nav = 
    `
    <nav>
        <ul>
            <li><a href="../../index.html">Início</a></li>
            <li><a href="../../site/posts.html">Postagens</a></li>
            <li><a href="../../site/about.html">Sobre</a></li>
        </ul>
    </nav>
    `;

    document.write(nav);
}

function footer()
{
    var footer =
    `
    <footer>
        <p>Desenvolvido por RonTekhne &copy; 2024</p>
        <p>Alimentado pelo <a class="link" href="https://github.com/filhoronaldosc" target="_blank">Github</a></p>
    </footer>
    `;

    document.write(footer);
}

initGoogleFont();