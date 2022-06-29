function HighlightElementWhenClickOutOfRange(selector, reset){
    if (reset){
        window.CLICKABLE_ELEMENTS.forEach(function(el){
            el.classList.remove("clickable-element");
        });
        window.CLICKABLE_ELEMENTS = [];    
    }else{
        window.CLICKABLE_ELEMENTS = window.CLICKABLE_ELEMENTS || [];
    }


    
    var els = document.querySelectorAll(selector);

    Array.prototype.forEach.call(els, function(el){
        if (window.CLICKABLE_ELEMENTS.indexOf(el) < 0){
            window.CLICKABLE_ELEMENTS.push(el);
            el.classList.add("notransition")
            el.classList.add("clickable-element")
            setTimeout(function(){
                el.classList.remove("notransition")
            }, 1000)
        }
    });

    document.addEventListener("click", function(ev){
        var clickedEl = ev.target;

        var isSpecifiedElClicked = window.CLICKABLE_ELEMENTS.some(function(el){
            return el.contains(clickedEl);
        });

        if (!isSpecifiedElClicked){
            highlightAllClickableElements();
        }
        
    });

    var highlightAllClickableElements_LOCK = false;
    var highlightElementTimeoutms = 1000;
    function highlightAllClickableElements(){
        if (highlightAllClickableElements_LOCK){
            return;
        }

        highlightAllClickableElements_LOCK = true;

        window.CLICKABLE_ELEMENTS.forEach(function(el){
            el.classList.add("clickable-elements-highlight");
        });

        setTimeout(function(){
            highlightAllClickableElements_LOCK = false;

            window.CLICKABLE_ELEMENTS.forEach(function(el){
                el.classList.remove("clickable-elements-highlight");
            });
        }, highlightElementTimeoutms)
    }
}