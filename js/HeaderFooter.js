function header(location) {
    const template = document.createElement('template');

    template.innerHTML = `
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <div class="Whole" id="Whole">
        <div class="w-container">
        <a href="replacerindex.html" class="heading w--current" style="padding:8px;">
            <h1 class="title animate-character"><img src="" style="" class="headingImage"><span class="heading-hide">   Lunch Time Basketballers</span><span class="inverseheading-hide">   LTBO</span></h1>
        </a>
        <nav class="navbar heading-links w-nav-menu">
            <ul class="nav-menu">
            <li class="nav-item">
                <a href="replacerDocumentsAndIco/Ladder.html" class="navigation-link w-nav-link">Ladder</a>
            </li>
            <li class="nav-item">
                <a href="replacerDocumentsAndIco/Results.html" class="navigation-link w-nav-link">Results</a>
            </li>
            <li class="nav-item">
                <a href="replacerDocumentsAndIco/News.html" class="navigation-link w-nav-link">News</a>
            </li>
            <li class="nav-item">
                <a href="replacerDocumentsAndIco/Stats.html" class="navigation-link w-nav-link">Stats</a>
            </li>
            <div class="dropdown nav-item dropdownHide">
                <span class="navigation-link w-nav-link">More</span>
                <div class="dropdown-content">
                    <a href="replacerDocumentsAndIco/Rules.html">Rules, FAQ, Calendar</a>
                    <a href="replacerDocumentsAndIco/Contact.html">Contact Us</a>
                    <a href="replacerDocumentsAndIco/TeamPages/LG_Home.html">Loose Gooses Home</a>
                    <a href="replacerDocumentsAndIco/TeamPages/WW_Home.html">Wet Willies Home</a>
                    <a href="replacerDocumentsAndIco/TeamPages/5M_Home.html">5 Musketeers Home</a>
                    <a href="replacerDocumentsAndIco/InstagramHighlights.html">Instagram</a>
                </div>
            </div>
            <li class="nav-item dropdownShow">
                <a href="replacerDocumentsAndIco/Rules.html" class="navigation-link w-nav-link">Rules, FAQ, Calendar</a>
            </li>
            <li class="nav-item dropdownShow">
                <a href="replacerDocumentsAndIco/Contact.html" class="navigation-link w-nav-link">Contact Us</a>
            </li>
            <li class="nav-item dropdownShow">
                <a href="replacerDocumentsAndIco/TeamPages/LG_Home.html" class="navigation-link w-nav-link">Loose Gooses Home</a>
            </li>
            <li class="nav-item dropdownShow">
                <a href="replacerDocumentsAndIco/TeamPages/WW_Home.html" class="navigation-link w-nav-link">Wet Willies Home</a>
            </li>
            <li class="nav-item dropdownShow">
                <a href="replacerDocumentsAndIco/TeamPages/5M_Home.html" class="navigation-link w-nav-link">5 Musketeers Home</a>
            </li>
            <li class="nav-item dropdownShow">
                <a href="replacerDocumentsAndIco/InstagramHighlights.html" class="navigation-link w-nav-link">Instagram</a>
            </li>

            </ul>
            <div class="hamburger">
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
            </div>
        </nav>
        </div>
        </div>
    `;

    if (location == "news") {
        template.innerHTML = template.innerHTML.replace(/replacer/g, "../../");
        template.innerHTML = template.innerHTML.replace('w-nav-link">News</a>', 'w-nav-link w--current">News</a>')
    } else if (location == "index") {
        template.innerHTML = template.innerHTML.replace(/replacer/g, "")
    } else if (location == "docs" || location == "admin") {
        template.innerHTML = template.innerHTML.replace(/replacer/g, "../")
    }

    if (location == "LG") {
        template.innerHTML = template.innerHTML.replace(/replacer/g, "../../");
        template.innerHTML = template.innerHTML.replace('Images/Logo.png" style="width:0.75em"', 'Images/LG_Final.png" style="width: 1.5em"')
        template.innerHTML = template.innerHTML.replace('animate-character', 'animate-characterLG')
    }

    if (location == "5M") {
        template.innerHTML = template.innerHTML.replace(/replacer/g, "../../");
        template.innerHTML = template.innerHTML.replace('Images/Logo.png" style="width:0.75em"', 'Images/5M_Final.png" style="width: 1.5em"')
        template.innerHTML = template.innerHTML.replace('animate-character', 'animate-character5M')
    }

    if (location == "WW") {
        template.innerHTML = template.innerHTML.replace(/replacer/g, "../../");
        template.innerHTML = template.innerHTML.replace('Images/Logo.png" style="width:0.75em"', 'Images/WW_Final.png" style="width: 0.75em"')
        template.innerHTML = template.innerHTML.replace('animate-character', 'animate-characterWW')
    }



    switch (document.title.slice(0,-7)) {
        case "Ladder" :
            template.innerHTML = template.innerHTML.replace('w-nav-link">Ladder</a>', 'w-nav-link w--current">Ladder</a>')
            break;
        case "Results" :
            template.innerHTML = template.innerHTML.replace('w-nav-link">Results</a>', 'w-nav-link w--current">Results</a>')
            break;
        case "News" :
            template.innerHTML = template.innerHTML.replace('w-nav-link">News</a>', 'w-nav-link w--current">News</a>')
            break;
        case "Stats" :
            template.innerHTML = template.innerHTML.replace('w-nav-link">Stats</a>', 'w-nav-link w--current">Stats</a>')
            break;
        case "Rules" :
            template.innerHTML = template.innerHTML.replace('>Rules, FAQ, Calendar', 'class="w-nav-link w--current">Rules, FAQ, Calendar')
            template.innerHTML = template.innerHTML.replace('class="navigation-link w-nav-link">Rules, FAQ, Calendar</a>', 'class="navigation-link w-nav-link w--current">Rules, FAQ, Calendar</a>')
            template.innerHTML = template.innerHTML.replace('<span class="navigation-link w-nav-link">More</span>', '<span class="navigation-link w-nav-link w--current">More</span>')
            break;
        case "Contact" :
            template.innerHTML = template.innerHTML.replace('>Contact Us', 'class="w-nav-link w--current">Contact Us')
            template.innerHTML = template.innerHTML.replace('class="navigation-link w-nav-link">Contact Us</a>', 'class="navigation-link w-nav-link w--current">Contact Us</a>')
            template.innerHTML = template.innerHTML.replace('<span class="navigation-link w-nav-link">More</span>', '<span class="navigation-link w-nav-link w--current">More</span>')
            break;
        case "Loose Gooses" :
            template.innerHTML = template.innerHTML.replace('>Loose Gooses Home', 'class="w-nav-link w--current">Loose Gooses Home')
            template.innerHTML = template.innerHTML.replace('class="navigation-link w-nav-link">Loose Gooses Home</a>', 'class="navigation-link w-nav-link w--current">Loose Gooses Home</a>')
            template.innerHTML = template.innerHTML.replace('<span class="navigation-link w-nav-link">More</span>', '<span class="navigation-link w-nav-link w--current">More</span>')
            break;
        case "Wet Willies" :
            template.innerHTML = template.innerHTML.replace('>Wet Willies Home', 'class="w-nav-link w--current">Wet Willies Home')
            template.innerHTML = template.innerHTML.replace('class="navigation-link w-nav-link">Wet Willies Home</a>', 'class="navigation-link w-nav-link w--current">Wet Willies Home</a>')
            template.innerHTML = template.innerHTML.replace('<span class="navigation-link w-nav-link">More</span>', '<span class="navigation-link w-nav-link w--current">More</span>')
            break;
        case "5 Musketeers" :
            template.innerHTML = template.innerHTML.replace('>5 Musketeers Home', 'class="w-nav-link w--current">5 Musketeers Home')
            template.innerHTML = template.innerHTML.replace('class="navigation-link w-nav-link">5 Musketeers Home</a>', 'class="navigation-link w-nav-link w--current">5 Musketeers Home</a>')
            template.innerHTML = template.innerHTML.replace('<span class="navigation-link w-nav-link">More</span>', '<span class="navigation-link w-nav-link w--current">More</span>')
            break;
        case "App" :
            template.innerHTML = template.innerHTML.replace('w-nav-link">Stats</a>', 'w-nav-link w--current">Stats</a>')
            break;          
            
    }
    if (location == "admin") {
        template.innerHTML = template.innerHTML.replace('Lunch Time Basketballers', 'Lunch Time Basketballers | Admin')
        template.innerHTML = template.innerHTML.replace('animate-character', 'animate-character-admin')
    }

    document.getElementById("header").appendChild(template.content);

}







function footer(location) {
    const template = document.createElement('template');

    template.innerHTML = `
        <div class="section accent">
        <div class="w-container">
            <div class="footer">
            <div class="w-container">
                <div class="w-row">
                <div class="spc w-col w-col-6">
                    <h5>About the Lunch Time Basketball Organisation</h5>
                    <p>This website is a free source of knowledge to learn more about the lunch time basketball.</p>
                    <br><br>
                    <a href="replacerDocumentsAndIco/InstagramHighlights.html" style="text-decoration: none;"><p>Official Instagram - <span class="fa fa-instagram" style="position: relative; top: 2px; font-size: 20px;"></span></p></a>
                </div>
                <div class="spc w-col w-col-6">
                    <h5>useful links</h5>
                    <a href="replacerDocumentsAndIco/Ladder.html" class="footer-link">Ladder</a>
                    <a href="replacerDocumentsAndIco/Results.html" class="footer-link">Results</a>
                    <a href="replacerDocumentsAndIco/News.html" class="footer-link">News</a>
                    <a href="replacerDocumentsAndIco/Stats.html" class="footer-link">Stats</a>
                    <a href="replacerDocumentsAndIco/Rules.html" class="footer-link">Rules + More</a>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
        <div class="footer center">
        <div class="w-container">
            <div class="footer-text">© 2023 The Lunchtime Basketball Organisation</a>
            <br>
            <br>
            <a href="replacerImages/Cool Sam.jpg"><img src="replacerImages/Logo.png" style="height: 20%; width:20%;"></a>
            </div>
        </div>
        </div>
    `;

    if (location == "LG") {
        template.innerHTML = template.innerHTML.replace('<a href="replacerImages/Cool Sam.jpg"><img src="replacerImages/Logo.png" style="height: 20%; width:20%;"></a>', '<a href="replacerImages/Cool Sam.jpg"><img src="replacerImages/Logo.png" style="height: 20%; width:20%;"></a><img src="replacerImages/LG_Final.png" style="height: 30%; width:30%; margin-left: 60px;">')
    }
    if (location == "WW") {
        template.innerHTML = template.innerHTML.replace('<a href="replacerImages/Cool Sam.jpg"><img src="replacerImages/Logo.png" style="height: 20%; width:20%;"></a>', '<a href="replacerImages/Cool Sam.jpg"><img src="replacerImages/Logo.png" style="height: 20%; width:20%;"></a><img src="replacerImages/WW_Final.png" style="height: 24%; width:24%; margin-left: 60px;">')
    }
    if (location == "5M") {
        template.innerHTML = template.innerHTML.replace('<a href="replacerImages/Cool Sam.jpg"><img src="replacerImages/Logo.png" style="height: 20%; width:20%;"></a>', '<a href="replacerImages/Cool Sam.jpg"><img src="replacerImages/Logo.png" style="height: 20%; width:20%;"></a><img src="replacerImages/5M_Final.png" style="height: 30%; width:30%; margin-left: 60px;">')
    }

    if (location == "finals") {
        template.innerHTML = template.innerHTML.replace('<a href="replacerImages/Cool Sam.jpg"><img src="replacerImages/Logo.png" style="height: 20%; width:20%;"></a>', '<a href="replacerImages/Cool Sam.jpg"><img src="replacerImages/Logo.png" style="height: 20%; width:20%;"></a><img src="replacerImages/Finals_Logo.png" style="height: 25%; width:25%; margin-left: 60px;">')
    }
    if (location == "news" || location == "LG" || location == "WW" || location == "5M") {
        template.innerHTML = template.innerHTML.replace(/replacer/g, "../../");
    } else if (location == "index") {
        template.innerHTML = template.innerHTML.replace(/replacer/g, "")
    } else {
        template.innerHTML = template.innerHTML.replace(/replacer/g, "../")
    }
    
    if (location == "stats"){
        x = `
        accent">
        <div>
            <a href="../Admin/AdminHome.html" class="button fade-inHeading" style="width: 45%">Click here to go to admin!</a>
            <a href="../Admin/StatTracker.html" class="button fade-inHeading" style="width: 45%">Click here to go to score tracking app</a>
        </div>
        `;
        
        template.innerHTML = template.innerHTML.replace('accent">', x)
    }
    if (location == "results" || location == "stats") {
        template.innerHTML = template.innerHTML.replace('accent', "")
    }

    document.getElementById("footer").appendChild(template.content);

}



imageURL = ["mvp", "rules", "champions", "lebron", "ja", "curry", "dwade", "kyrie"]