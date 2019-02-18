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
        fetch(page)
            .then(res => res.text())
            .then(text => article.innerHTML = md2html(text))
            .then(any => document.querySelectorAll('#article .link').forEach(
                e => {
                    e.addEventListener('click', () => render('/' + e.getAttribute('page') + '.md'))
                }
            ))
            .catch(err => article.innerHTML = "<p>Sorry, 404 Not Found.</p>")
    }

    document.querySelectorAll('.link').forEach(
        e => {
            e.addEventListener('click', () => render('/' + e.textContent + '.md'))
        }
    )
    render('/contents.md');
}


