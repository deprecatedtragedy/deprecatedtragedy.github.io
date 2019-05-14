window.onload = () => {

    var article = document.querySelector('#article')

    var toggleSelection = selection => {
        document.querySelector('.target').classList.remove('target')
        document.querySelectorAll('li').forEach(e => { if (e.textContent === selection) e.classList.add('target') })
    }

    document.querySelectorAll('li').forEach(e => {
        e.addEventListener('click', () => toggleSelection(e.textContent))
    })

    var render = page => {
        article.classList.add('hiding')
        fetch(page)
            .then(res => res.text())
            .then(text => article.innerHTML = text)
            .then(any => {

                localStorage.nanacheer = page;

                article.classList.remove('hiding')
                document.querySelectorAll('#article .link').forEach(e => {
                    e.addEventListener('click', () => {
                        render('/' + e.getAttribute('page') + '.html')
                    })
                })

                document.querySelectorAll('.content').forEach(e => {
                    e.addEventListener('click', () => {
                        let li = document.querySelector('li')
                        li.innerText = e.innerText
                        li.setAttribute('page', e.getAttribute('page'))
                        toggleSelection(li.textContent)
                    })
                })

                days_remain = document.querySelector('.day-remain')
                if (days_remain) {
                    remain = 7 - (new Date()).getDay()
                    if (remain > 1) days_remain.innerText = remain + " days remain"
                    else days_remain.innerText = remain + " day remains"
                }

                if (page === '/spotify.html') {
                    iframes = document.querySelectorAll('iframe')
                    theOne = Math.floor(Math.random() * iframes.length)
                    iframes.forEach(e => e.classList.add('hiding'))
                    iframes[theOne].classList.remove('hiding')
                }
            })
            .catch(err => article.innerHTML = "<p>Sorry, 404 Not Found.</p>")
    }

    document.querySelectorAll('.link').forEach(
        e => {
            e.addEventListener('click', () => render('/' + e.getAttribute('page') + '.html'))
        }
    )

    class Controller {
        constructor() {
            this.header = document.querySelector('#header');
            this.footer = document.querySelector('#footer');
            this.closed = false;
        }

        static close() {
            this.closed = true;
            [header, footer].map(e => e.setAttribute('close', ''));
        }

        static reveal() {
            this.closed = false;
            [header, footer].map(e => e.removeAttribute('close'));
        }

        static toggle() {
            if (this.closed) this.reveal();
            else this.close();
        }
    }

    document.addEventListener('dblclick', () => Controller.toggle())

    // following codes are copied.

    document.addEventListener('touchstart', handleTouchStart, false);
    document.addEventListener('touchmove', handleTouchMove, false);

    var xDown = null;
    var yDown = null;

    function getTouches(evt) {
        return evt.touches ||             // browser API
            evt.originalEvent.touches; // jQuery
    }

    function handleTouchStart(evt) {
        const firstTouch = getTouches(evt)[0];
        xDown = firstTouch.clientX;
        yDown = firstTouch.clientY;
    };

    function handleTouchMove(evt) {
        if (!xDown || !yDown) {
            return;
        }

        var xUp = evt.touches[0].clientX;
        var yUp = evt.touches[0].clientY;

        var xDiff = xDown - xUp;
        var yDiff = yDown - yUp;

        if (Math.abs(xDiff) > Math.abs(yDiff)) {/*most significant*/
            if (xDiff > 0) {
                /* left swipe */
                console.log('left')
                if (document.querySelector('li').classList.contains('target')) {
                    toggleSelection('about')
                    render('/about.html')
                }
            } else {
                /* right swipe */
                if (!document.querySelector('li').classList.contains('target')) {
                    toggleSelection(document.querySelector('li').textContent)
                    render('/' + document.querySelector('li').getAttribute('page') + '.html')
                }
            }
        } else {
            if (yDiff > 0) {
                /* up swipe */
            } else {
                /* down swipe */
            }
        }
        /* reset values */
        xDown = null;
        yDown = null;
    };


    // Let Reload Stay
    // Bug: reload at about tab, just let it be...
    if (localStorage) {
        if (localStorage.nanacheer) {
            render(localStorage.nanacheer);
        } else {
            render("/contents.html");
        }
    } else {
        render("/contents.html")
    }
}


