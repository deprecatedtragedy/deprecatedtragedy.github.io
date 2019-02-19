window.onload = () => {

    var article = document.querySelector('#article')

    var md2html = md => {
        md = md.replace(/\n\n/g, '<br/>')
        md = md.replace(/\r\n\r\n/g, '<br/>')
        return md;
    }

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
            .then(text => article.innerHTML = md2html(text))
            .then(any => {
                article.classList.remove('hiding')
                document.querySelectorAll('#article .link').forEach(e => {
                    e.addEventListener('click', () => render('/' + e.getAttribute('page') + '.md'))
                })

                document.querySelectorAll('.content').forEach(e => {
                    e.addEventListener('click', () => {

                        let li = document.querySelector('li')
                        li.innerText = e.innerText
                        li.setAttribute('page', e.getAttribute('page'))
                    })
                })

                days_remain = document.querySelector('.day-remain')
                if (days_remain) {
                    remain = 7 - (new Date()).getDay()
                    if (remain > 1) days_remain.innerText = remain + " days remain"
                    else days_remain.innerText = remain + " day remains"
                }
            })
            .catch(err => article.innerHTML = "<p>Sorry, 404 Not Found.</p>")
    }

    document.querySelectorAll('.link').forEach(
        e => {
            e.addEventListener('click', () => render('/' + e.getAttribute('page') + '.md'))
        }
    )
    render('/contents.md');

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
}


