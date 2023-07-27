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
            <div class="dropdown nav-item dropdownHide">
                <span class="navigation-link w-nav-link">Stats</span>
                <div class="dropdown-content">
                    <a href="replacerDocumentsAndIco/Stats.html" class="dropDown-link">Stats Home</a>
                    <a href="replacerDocumentsAndIco/Comparer.html" class="dropDown-link">Player Comparer</a>
                </div>
            </div>
            <div class="dropdown nav-item dropdownHide">
                <span class="navigation-link w-nav-link">More</span>
                <div class="dropdown-content">
                    <a href="replacerDocumentsAndIco/Rules.html" class="dropDown-link">Rules, FAQ, Calendar</a>
                    <a href="replacerDocumentsAndIco/Contact.html" class="dropDown-link">Contact Us</a>
                    <a href="replacerDocumentsAndIco/LeagueHome.html?Team=LTBO" class="dropDown-link">League Home</a>
                    <a href="replacerDocumentsAndIco/TeamHome.html?Team=LG" class="dropDown-link">Loose Gooses Home</a>
                    <a href="replacerDocumentsAndIco/TeamHome.html?Team=WW" class="dropDown-link">Wet Willies Home</a>
                    <a href="replacerDocumentsAndIco/TeamHome.html?Team=5M" class="dropDown-link">5 Musketeers Home</a>
                    <a href="replacerDocumentsAndIco/InstagramHighlights.html" class="dropDown-link">Instagram</a>
                    <a href="https://365asas-my.sharepoint.com/:f:/g/personal/011445_asas_qld_edu_au/Enw3biOiY2xAo3nd_oihdAEBjsB7F500EKl6UYgd5-ONqQ?e=1KAlm2" class="dropDown-link" target="_blank">Visual Database</a>
                </div>
            </div>
            <li class="nav-item dropdownShow">
                <a href="replacerDocumentsAndIco/Stats.html" class="navigation-link w-nav-link">Stats Home</a>
            </li>
            <li class="nav-item dropdownShow">
                <a href="replacerDocumentsAndIco/Comparer.html" class="navigation-link w-nav-link">Player Comparer</a>
            </li>
            <li class="nav-item dropdownShow">
                <a href="replacerDocumentsAndIco/Rules.html" class="navigation-link w-nav-link">Rules, FAQ, Calendar</a>
            </li>
            <li class="nav-item dropdownShow">
                <a href="replacerDocumentsAndIco/Contact.html" class="navigation-link w-nav-link">Contact Us</a>
            </li>
            <li class="nav-item dropdownShow">
                <a href="replacerDocumentsAndIco/LeagueHome?Team=LTBO" class="navigation-link w-nav-link">League Home</a>
            </li>
            <li class="nav-item dropdownShow">
                <a href="replacerDocumentsAndIco/TeamHome.html?Team=LG" class="navigation-link w-nav-link">Loose Gooses Home</a>
            </li>
            <li class="nav-item dropdownShow">
                <a href="replacerDocumentsAndIco/TeamHome.html?Team=WW" class="navigation-link w-nav-link">Wet Willies Home</a>
            </li>
            <li class="nav-item dropdownShow">
                <a href="replacerDocumentsAndIco/TeamHome.html?Team=5M" class="navigation-link w-nav-link">5 Musketeers Home</a>
            </li>
            <li class="nav-item dropdownShow">
                <a href="replacerDocumentsAndIco/InstagramHighlights.html" class="navigation-link w-nav-link">Instagram</a>
            </li>
            <li class="nav-item dropdownShow">
            <a href="https://365asas-my.sharepoint.com/:f:/g/personal/011445_asas_qld_edu_au/Enw3biOiY2xAo3nd_oihdAEBjsB7F500EKl6UYgd5-ONqQ?e=1KAlm2" class="navigation-link w-nav-link" target="_blank">Visual Database</a>
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

    currentLocation = window.location
    myKeyValues = currentLocation.search
    urlParams = new URLSearchParams(myKeyValues)
    SelectedTeam = urlParams.get("Team")

    if (SelectedTeam == "LG") {
        template.innerHTML = template.innerHTML.replace(/replacer/g, "../");
        template.innerHTML = template.innerHTML.replace('Images/Logo.png" style="width:0.75em"', 'Images/LG_Final.png" style="width: 1.5em"')
        template.innerHTML = template.innerHTML.replace('animate-character', 'animate-characterLG')
    }

    if (SelectedTeam == "5M") {
        template.innerHTML = template.innerHTML.replace(/replacer/g, "../");
        template.innerHTML = template.innerHTML.replace('Images/Logo.png" style="width:0.75em"', 'Images/5M_Final.png" style="width: 1.5em"')
        template.innerHTML = template.innerHTML.replace('animate-character', 'animate-character5M')
    }

    if (SelectedTeam == "WW") {
        template.innerHTML = template.innerHTML.replace(/replacer/g, "../");
        template.innerHTML = template.innerHTML.replace('Images/Logo.png" style="width:0.75em"', 'Images/WW_Final.png" style="width: 0.75em"')
        template.innerHTML = template.innerHTML.replace('animate-character', 'animate-characterWW')
    }



    switch (document.title.slice(0, -7)) {
        case "Ladder":
            template.innerHTML = template.innerHTML.replace('w-nav-link">Ladder</a>', 'w-nav-link w--current">Ladder</a>')
            break;
        case "Results":
            template.innerHTML = template.innerHTML.replace('w-nav-link">Results</a>', 'w-nav-link w--current">Results</a>')
            break;
        case "News":
            template.innerHTML = template.innerHTML.replace('w-nav-link">News</a>', 'w-nav-link w--current">News</a>')
            break;
        case "Stats":
            template.innerHTML = template.innerHTML.replace('">Stats Home', ' w-nav-link w--current">Stats Home')
            template.innerHTML = template.innerHTML.replace('class="navigation-link w-nav-link">Stats Home</a>', 'class="navigation-link w-nav-link w--current">Stats Home</a>')
            template.innerHTML = template.innerHTML.replace('<span class="navigation-link w-nav-link">Stats</span>', '<span class="navigation-link w-nav-link w--current">Stats</span>')
            break;
        case "Player Comparer":
            template.innerHTML = template.innerHTML.replace('">Player Comparer', ' w-nav-link w--current">Player Comparer')
            template.innerHTML = template.innerHTML.replace('class="navigation-link w-nav-link">Player Comparer</a>', 'class="navigation-link w-nav-link w--current">Player Comparer</a>')
            template.innerHTML = template.innerHTML.replace('<span class="navigation-link w-nav-link">Stats</span>', '<span class="navigation-link w-nav-link w--current">Stats</span>')
            break;
        case "Rules":
            template.innerHTML = template.innerHTML.replace('">Rules, FAQ, Calendar', ' w-nav-link w--current">Rules, FAQ, Calendar')
            template.innerHTML = template.innerHTML.replace('class="navigation-link w-nav-link">Rules, FAQ, Calendar</a>', 'class="navigation-link w-nav-link w--current">Rules, FAQ, Calendar</a>')
            template.innerHTML = template.innerHTML.replace('<span class="navigation-link w-nav-link">More</span>', '<span class="navigation-link w-nav-link w--current">More</span>')
            break;
        case "Contact":
            template.innerHTML = template.innerHTML.replace('">Contact Us', ' w-nav-link w--current">Contact Us')
            template.innerHTML = template.innerHTML.replace('class="navigation-link w-nav-link">Contact Us</a>', 'class="navigation-link w-nav-link w--current">Contact Us</a>')
            template.innerHTML = template.innerHTML.replace('<span class="navigation-link w-nav-link">More</span>', '<span class="navigation-link w-nav-link w--current">More</span>')
            break;
        case "League Home":
            template.innerHTML = template.innerHTML.replace('">League Home', ' w-nav-link w--current">League Home')
            template.innerHTML = template.innerHTML.replace('class="navigation-link w-nav-link">League Home</a>', 'class="navigation-link w-nav-link w--current">League Home</a>')
            template.innerHTML = template.innerHTML.replace('<span class="navigation-link w-nav-link">More</span>', '<span class="navigation-link w-nav-link w--current">More</span>')
            break;
        case "Loose Gooses":
            template.innerHTML = template.innerHTML.replace('">Loose Gooses Home', ' w-nav-link w--current">Loose Gooses Home')
            template.innerHTML = template.innerHTML.replace('class="navigation-link w-nav-link">Loose Gooses Home</a>', 'class="navigation-link w-nav-link w--current">Loose Gooses Home</a>')
            template.innerHTML = template.innerHTML.replace('<span class="navigation-link w-nav-link">More</span>', '<span class="navigation-link w-nav-link w--current">More</span>')
            break;
        case "Wet Willies":
            template.innerHTML = template.innerHTML.replace('">Wet Willies Home', ' w-nav-link w--current">Wet Willies Home')
            template.innerHTML = template.innerHTML.replace('class="navigation-link w-nav-link">Wet Willies Home</a>', 'class="navigation-link w-nav-link w--current">Wet Willies Home</a>')
            template.innerHTML = template.innerHTML.replace('<span class="navigation-link w-nav-link">More</span>', '<span class="navigation-link w-nav-link w--current">More</span>')
            break;
        case "5 Musketeers":
            template.innerHTML = template.innerHTML.replace('">5 Musketeers Home', ' w-nav-link w--current">5 Musketeers Home')
            template.innerHTML = template.innerHTML.replace('class="navigation-link w-nav-link">5 Musketeers Home</a>', 'class="navigation-link w-nav-link w--current">5 Musketeers Home</a>')
            template.innerHTML = template.innerHTML.replace('<span class="navigation-link w-nav-link">More</span>', '<span class="navigation-link w-nav-link w--current">More</span>')
            break;
        case "Instagram Highlights":
            template.innerHTML = template.innerHTML.replace('">Instagram', ' w-nav-link w--current">Instagram')
            template.innerHTML = template.innerHTML.replace('class="navigation-link w-nav-link">Instagram</a>', 'class="navigation-link w-nav-link w--current">Instagram</a>')
            template.innerHTML = template.innerHTML.replace('<span class="navigation-link w-nav-link">More</span>', '<span class="navigation-link w-nav-link w--current">More</span>')
            break;
        case "App":
            template.innerHTML = template.innerHTML.replace('w-nav-link">Stats</a>', 'w-nav-link w--current">Stats</a>')
            break;
        case "Draft":
            template.innerHTML = template.innerHTML.replace('w-nav-link">Draft</a>', 'w-nav-link w--current">Draft</a>')

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
                    <p>This website contains all official content relating to the LTBO (Lunch Time Basketball Organisation).</p>
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


    currentLocation = window.location
    myKeyValues = currentLocation.search
    urlParams = new URLSearchParams(myKeyValues)
    SelectedTeam = urlParams.get("Team")

    if (SelectedTeam == "LG") {
        template.innerHTML = template.innerHTML.replace('<a href="replacerImages/Cool Sam.jpg"><img src="replacerImages/Logo.png" style="height: 20%; width:20%;"></a>', '<a href="replacerImages/Cool Sam.jpg"><img src="replacerImages/Logo.png" style="height: 20%; width:20%;"></a><a href="replacerDocumentsAndIco/LG_Hacks.html"><img src="replacerImages/LG_Final.png" style="height: 30%; width:30%; margin-left: 60px;"></a>')
    }
    if (SelectedTeam == "WW") {
        template.innerHTML = template.innerHTML.replace('<a href="replacerImages/Cool Sam.jpg"><img src="replacerImages/Logo.png" style="height: 20%; width:20%;"></a>', '<a href="replacerImages/Cool Sam.jpg"><img src="replacerImages/Logo.png" style="height: 20%; width:20%;"></a><img src="replacerImages/WW_Final.png" style="height: 24%; width:24%; margin-left: 60px;">')
    }
    if (SelectedTeam == "5M") {
        template.innerHTML = template.innerHTML.replace('<a href="replacerImages/Cool Sam.jpg"><img src="replacerImages/Logo.png" style="height: 20%; width:20%;"></a>', '<a href="replacerImages/Cool Sam.jpg"><img src="replacerImages/Logo.png" style="height: 20%; width:20%;"></a><img src="replacerImages/5M_Final.png" style="height: 30%; width:30%; margin-left: 60px;">')
    }

    if (location == "finals") {
        template.innerHTML = template.innerHTML.replace('<a href="replacerImages/Cool Sam.jpg"><img src="replacerImages/Logo.png" style="height: 20%; width:20%;"></a>', '<a href="replacerImages/Cool Sam.jpg"><img src="replacerImages/Logo.png" style="height: 20%; width:20%;"></a><img src="replacerImages/Finals_Logo.png" style="height: 25%; width:25%; margin-left: 60px;">')
    }
    if (location == "news") {
        template.innerHTML = template.innerHTML.replace(/replacer/g, "../../");
    } else if (location == "index") {
        template.innerHTML = template.innerHTML.replace(/replacer/g, "")
    } else {
        template.innerHTML = template.innerHTML.replace(/replacer/g, "../")
    }

    if (location == "stats") {
        x = `
        accent">
        <div>
            <a href="../Admin/AdminHome.html" class="button fade-inHeading statButton">Click here to go to admin!</a>
            <a href="../Admin/StatTracker.html" class="button fade-inHeading statButton">Click here to go to score tracking app</a>
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