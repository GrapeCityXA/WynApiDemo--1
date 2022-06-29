(function hideOptions() {
    document.addEventListener('click', (e) => {
        if (!(e.target.className === 'doc-option' || e.target.className === 'fa fa-ellipsis-v')) {
            if (e.target.className === 'option') {
                return;
            }
            let optionDivs= document.getElementsByClassName('show-options');
            for (let optionDiv of optionDivs) {
                if (optionDiv.style.display === 'block') {
                    optionDiv.style.display = 'none';
                }
            }
        }
    })
})();