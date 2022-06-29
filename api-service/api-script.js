let baseUrl = 'http://localhost:51980';
hookFetch();

function getAuthorization() {
    let auth = 'Basic ' + window.btoa('integration' + ':' + 'eunGKas3Pqd6FMwx9eUpdS7xmz');
    return auth;
}

function sendRequest(requestObj, token, baseUrl) {
    if (requestObj.url) {
        return apiQuery(requestObj, token, baseUrl);
    } else {
        return graphqlQuery(requestObj, token, baseUrl);
    }
}

function getToken(username = 'admin', password = 'admin', baseUrl) {
    return new Promise(function (resolve, reject) {
        if (!baseUrl) {
            baseUrl = 'http://localhost:51980';
        }
        fetch(baseUrl + '/connect/token', {
            GC_WYN_API_TITLE: '获取token',
            method: 'POST',
            headers: {
                "Content-type": "application/x-www-form-urlencoded",
                "Authorization": getAuthorization()
            },
            body: `grant_type=password&username=${username}&password=${password}`
        })
            .then(function (res) {
                return res.json();
            })
            .then(function (res) {
                addResponse(res);
                resolve(res.access_token);
            })
            .catch((error) => {
                console.log(error);
                if (baseUrl === 'http://localhost:51980') {
                    window.alert('无法获取token！请确保您的电脑本地已安装Wyn Enterprise！详情可查看API示例首页注意事项。')
                }
            });
    });
}

async function graphqlQuery(requestObj, token, baseUrl) {
    if (!token) {
        token = await getToken();
    }

    if (!baseUrl) {
        baseUrl = 'http://localhost:51980';
    }
    return new Promise(function (resolve, reject) {
        let apiURL = baseUrl + '/api/graphql?token=' + token;
        let headers = {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        };
        let method = "POST";
        let body = JSON.stringify({
            query: requestObj.graphqlStr
        });
        fetch(apiURL, {
            GC_WYN_API_TITLE: requestObj.displayName,
            method: method,
            headers: headers,
            mode: 'cors',
            body: body
        }).then(function (res) {
            if (!res.ok) {
                throw new Error('Bad status code from server.');
            }
            return res.json();
        }).then(function (res) {
            addResponse(res);
            resolve(res);
        }).catch((error) => {
            console.log(error);
        });
    });
}

async function apiQuery(requestObj, token, baseUrl) {
    if (!token) {
        token = await getToken();
    }

    if (!baseUrl) {
        baseUrl = 'http://localhost:51980';
    }
    let options = {
        GC_WYN_API_TITLE: requestObj.displayName,
        method: requestObj.method,
        headers: {
            'Accept': '*/*',
            'Content-Type': 'application/json',
        },
        mode: 'cors'
    };
    if (requestObj.body) {
        if (typeof requestObj.body === "object" && !(requestObj.body instanceof File)) {
            options.body = JSON.stringify(requestObj.body);
        } else {
            options.body = requestObj.body;
        }
    }
    return new Promise(function (resolve, reject) {
        let fetchUrl = `${baseUrl}/${requestObj.url}?token=${token}`
        if (requestObj.params) {
            fetchUrl += `&${requestObj.params}`;
        }
        fetch(fetchUrl, options).then(function (res) {
            if (!res.ok) {
                throw new Error('Bad status code from server.');
            }
            return res.json();
        }).then(function (res) {
            addResponse(res);
            resolve(res);
        });
    })
}

function addResponse(res){
    let elements = document.getElementsByClassName('apicall__res');
    if(elements && elements[0]){
        elements[0].innerHTML = `当前请求返回结果:</br> ${JSON.stringify(res)}`;
    }
}


function annotateAPI(url, Body, title) {
    window.APICALLS = window.APICALLS || [];
    window.apiCallContainerEl = window.apiCallContainerEl || initializeContainer()

    var apiCall = {
        url: url,
        Body: Body,
        title: title
    };
    var apiCallIndex = window.APICALLS.length;
    window.APICALLS.push(apiCall);

    appendItem(apiCallContainerEl, url, Body, title, apiCallIndex);
    return apiCallIndex;
}


function initializeContainer() {
    var rootEl = document.createElement("div");
    rootEl.classList.add("apicall");

    document.body.appendChild(rootEl);
    return rootEl;
}

function appendItem(el, url, Body, title, id) {

    var itemEl = document.createElement("div");
    itemEl.classList.add("apicall__item");
    var titleEl = document.createElement("div");
    titleEl.classList.add("apicall__title");
    var URLEl = document.createElement("div");
    URLEl.classList.add("apicall__url");
    var bodyEl = document.createElement("div");
    bodyEl.classList.add("apicall__body");

    var fetchCodeTitleEl = document.createElement("div");
    fetchCodeTitleEl.classList.add("apicall__fetch-code-title");

    var fetchCodeEl = document.createElement("textarea");
    fetchCodeEl.classList.add("apicall__fetch-code");
    var resEL = document.createElement("div");
    resEL.classList.add("apicall__res");

    itemEl.setAttribute("request-id", id);



    URLEl.textContent = `URL: ${url}`;
    bodyEl.textContent = `HTTP 请求数据: ${Body}`;
    titleEl.textContent = `${title}`
    fetchCodeTitleEl.textContent = "示例代码";
    fetchCodeEl.textContent = `${generateFetchCode(url, Body)}`;




    itemEl.appendChild(titleEl);
    itemEl.appendChild(URLEl);
    itemEl.appendChild(bodyEl);
    itemEl.appendChild(fetchCodeTitleEl);
    itemEl.appendChild(fetchCodeEl);
    itemEl.appendChild(resEL);

    titleEl.addEventListener("click", onTitleElClick);

    el.prepend(itemEl);

    function onTitleElClick() {
        var dialogEl = itemEl.cloneNode(true);
        dialogEl.classList.add("apicall__dialog");
        var maskEl = document.createElement("div");
        maskEl.classList.add("apicall-dialog-mask")
        document.body.append(maskEl);
        document.body.append(dialogEl);

        maskEl.addEventListener('click', function () {
            dialogEl.parentNode.removeChild(dialogEl);
            maskEl.parentNode.removeChild(maskEl);
        });
    }
}

function generateFetchCode(url, init) {
    return `fetch("${url}", ${init}).then(function(res){
        res.json()
        .then(function(data){
            console.log(data)
        });
    })`
}

function hookFetch() {
    var oldFetch = window.fetch;
    window.fetch = function (resource, init) {
        let reg = /http:\/\/wynwx\.grapecity\.com\.cn/;
        if (!reg.test(resource.toString())) {
            var title = init.GC_WYN_API_TITLE || resource;
            delete init.GC_WYN_API_TITLE;
            var option = JSON.stringify(init, void 0, 2);
            annotateAPI(resource, option, title);
        }
        return oldFetch(resource, init);
    }
}

export { getToken, sendRequest, getAuthorization, graphqlQuery, apiQuery };