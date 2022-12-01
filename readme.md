# An Interactive Digital CV

* Brief

In this exercise you will create an interactive digital CV where you present yourself and your skills. For example you can describe who you are with images and text, create a portfolio with you projects, maybe even include a link to your GitHub account or other social media profiles? The exercise is free and you choose yourself how you site will look and how the user interacts with it. Let your creativity flow!

I den här laborationen skall du skapa ett interaktivt digitalt CV där du presenterar dig själv och dina kunskaper. Till exempel kan du beskriva vem du är med bild och text, skapa en portfolio med dina projekt, kanske till och med inkludera en länk till ditt GitHub konto eller andra sociala profiler? Uppgiften är fri och du väljer själv hur din sida ska se ut och hur användaren interagerar med sidan. Låt kreativiteten flöda!

-----
* Solution

www.sublimesyetems.eu
https://nathanaelblackbourn.github.io/sublime-systems-2022/

Sublime systems is a domain I have owned since I started to study front end development myself in 2020. I have used the space to host small coding exercises and learn about the process of getting a website from idea to live. It fitted naturally to renovate the site for this exercise.

My design for the site contains a dynamic layout within the header element. The header contains navigation for the site and my CV. It expands to full screen height to display the CV and slides off-screen to display projects. The structure within the header is based on that of Bootstrap, columns set in containers using padding to create gutters and negative margins on the far left and right. The column width changes at different breakpoints to facilitate responsivity.

...

Sublime systems är en domän som jag har haft sedan jag började plugga front end själv i 2020. Jag har använt den för at ladda up små kodning övningar och lära mig om processen av att ta en sida från idé till verklighet. Det passade perfekt at renovera sidan för denna uppgiften.

Min design för sidan innehåller en dynamisk layout inom header elementet. Headern har i sig sidans navigation och mitt CV. Den växer till full höjd för att visa CV:et och flyttar utanför skärmen för att visa projekten. Strukturen inom headern a baserad på Bootstrap, kolumner inom 'containers' som använder padding för att skapa 'gutters' och det finns negativ margin på de kanterna längst till höger och vänster. Kolumnbredden ändras vid två breakpoints för att skapa responsiviteten. 

-----
* Conclusions

During my work on this project I have improved my structuring of JavaScript code and files. I have paid special attention to minimising the number of variables is the global scope. I declared an object to contain all HTML elements in the first few lines of my main file and could populate it with them in various functions when they were needed. The main file itself is very short containing only this object and a central function responsible for calling other functions that run the various elements of the page. The other functions are categorised into two main groups and separated into two other files.

Looking back I realise that my planning of this project has been basically non-existent, unlike my other school work so far. The reason for this is that I had already begun work on the site before receiving this brief. When I received it I took the decision to continue what I had already started but as I had no made any sketches or a prototype, it quickly became difficult to layout the elements on the page. This exercise has been an excellent reminder of the importance of this kind of planning, regardless of the scale of the project.

...

Under porjektets gång har jag förbättrat min skrukturering av JavaScript kod och filer. Jag har ägnat särskilt uppmärksamhet åt att minimera nummret variabler i det globala scopet. Jag deklarerade ett objekt för att innehålla alla HTML element i de första raderna av 'main' filen och kunde lägga till dem i olika fuktioner när de behövs. Själva 'main' filen är liten och innehåller bara detta objektet  och en centrala funktion som har ansvar för anropning av de andra som kör sidans fuktionalitet. Dessa fuktioner är uppdelade i tvä kategorier i två filer.

Jag inser nu i efterskott att projektets planering har varit minimalt, inte som de andra i skolan hittills. Anledning för detta är att jag hade redan börjat arbeta på sidan för min egen skull innan jag fick upgiften. När jag fick den bestämde jag fortsätta med det jag hade redan börjat, det fanns inga skisser eller prototyp och det snabbt blev svårt att lägga upp elementen på sidan. Denna övningen har varit en utmärkt påminnelse av det viktiga som är planering i projekt av alla storlekar.