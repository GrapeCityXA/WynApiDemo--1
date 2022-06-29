import { getToken, sendRequest } from "../api-service/api-script.js";
import api from '../api-service/api.js';

let baseUrl = 'http://wynwx.grapecity.com.cn';

let role = 'designer';
let clearSelected = () => {
    let elements = document.getElementById('login-user').getElementsByClassName('active');
        for (let element of elements) {
            element.classList.remove('active');
        }    
}
let selectDesigner = () => {
    role = 'designer';
    clearSelected();
    document.getElementById('designer-div').classList.add('active');
}
let selectViewer = () => {
    role = 'viewer';
    clearSelected();
    document.getElementById('viewer-div').classList.add('active');
}
let selectHuaDong = () => {
    role = 'huadong';
    clearSelected();
    document.getElementById('huadong-div').classList.add('active');
}
let doLogout = () => {
    let result = window.confirm("确认登出吗？");
    if (result) {
        window.localStorage.removeItem('dashboardLists');
        window.localStorage.removeItem('reportLists');
        window.localStorage.removeItem('token');

        window.location.href = 'erp-login.html';
    }
}

let doLogin = async () => {
    let username = role;
    let password = role;
    login(username, password);
}

let login = async (username, password) => {
    if (username && password) {
        let token = await getToken(username, password, baseUrl);
        getShowDocuments(token, true);
    } else {
        alert("请输入完整信息");
    }
}

let prepareDocRoleOps = (doc, docInfo) => {
    let roleOps = [];
    docInfo.security.permissions.forEach((item) => {
        let op = {};
        let roleName = item.sub.name;
        op[roleName] = item.ops.toString();
        roleOps.push(op);
    })
    doc.roleOps = roleOps;
}

let prepareListData = (resArray, filteredDocuments, userInfo) => {
    let docInfos = resArray.map(res => res.data.document);
    let prepareFilteredDocs = filteredDocuments.map((doc) => {
        let docInfo = docInfos.find((d) => d.id === doc.id);
        if (/Update/.test(docInfo.effective_ops)) {
            doc.allowEditing = true;
            doc.allowClassifying = true;
        }
        if (userInfo.roles.includes('allow-sharing') &&
            (userInfo.roles.includes('administrator') || userInfo.id === docInfo.security.ownerid)) {
            doc.allowSharing = true;
            prepareDocRoleOps(doc, docInfo);
        }
        return doc;
    })
    let dashboardLists = prepareFilteredDocs.filter(doc => doc.type === 'dbd');
    let reportLists = prepareFilteredDocs.filter(doc => doc.type === 'rdl');

    window.localStorage.removeItem('dashboardLists');
    window.localStorage.removeItem('reportLists');
    window.localStorage.removeItem('userInfo');

    window.localStorage.setItem('userInfo', JSON.stringify(userInfo));
    window.localStorage.setItem('dashboardLists', JSON.stringify(dashboardLists));
    window.localStorage.setItem('reportLists', JSON.stringify(reportLists));
};

let getShowDocuments = (token, isInLogin) => {
    let userPromise = sendRequest(api.getUserInfo, token, baseUrl);
    let docsPromise = sendRequest(api.getAllDocuments, token, baseUrl);
    let filteredDocuments = [];
    let userInfo = [];
    Promise.all([userPromise, docsPromise]).then((res) => {
        userInfo = res[0].data.me;
        let allDocuments = res[1].data.documents;
        filteredDocuments = allDocuments.filter((doc) => {
            return doc.type === 'dbd' || doc.type === 'rdl';
        })
        let promiseLists = filteredDocuments.map((doc) => {
            api.getDocInfoByDocumentId['graphqlStr'] = api.getDocInfoByDocumentId.getGraphqlStr(doc.id);
            return sendRequest(api.getDocInfoByDocumentId, token, baseUrl);
        })
        return new Promise((resolve, reject) => {
            Promise.all(promiseLists).then((res) => {
                resolve(res);
            }).catch((res) => {
                reject(res);
            });
        })
    }).then((resArray) => {
        console.log(resArray, filteredDocuments, userInfo)
        prepareListData(resArray, filteredDocuments, userInfo);
        if (isInLogin) {
            window.localStorage.removeItem('token');
            window.localStorage.setItem('token', token.toString());
            window.location.href = './index.html';
        }
        createMenu();
    }).catch((error) => {
        // window.alert('获取文档失败！')
        console.log(error)
    });
}

let clearActive1 = () => {  
    let elements = document.getElementsByClassName('first-active');
    for (let element of elements) {
        element.classList.remove('first-active');
        element.classList.add('first');
    }    
}
let clearActive2 = () => {  
    let elements = document.getElementsByClassName('second-active');
    for (let element of elements) {
        element.classList.remove('second-active');
        element.classList.add('second');
    }    
}

let goToERPIndex = () => {
    clearActive2();
    document.getElementById('erp-index').classList.remove('first');
    document.getElementById('erp-index').classList.add('first-active');
    document.getElementById("erp-demo-iframe").src = 'erp-demo/erp-demo-index.html';
}

let showPage = (url) => {
    hideOtherWindows();
    document.getElementById("erp-demo-iframe").src = url;
}

let createDashboard = () => {
    let token = window.localStorage.getItem('token');
    document.getElementById('modal').style.display = 'block';
    document.getElementById('erp-demo').style.display = 'none';
    document.getElementById('modal-iframe').src = `${baseUrl}/dashboards/create?theme=blue&lng=zh&token=${token}`;
}

let createReport = () => {
    let token = window.localStorage.getItem('token');
    document.getElementById('modal').style.display = 'block';
    document.getElementById('erp-demo').style.display = 'none';
    document.getElementById('modal-iframe').src = `${baseUrl}/reports/create?theme=blue&lng=zh&token=${token}`;
}

let closeModal = () => {
    window.location.href = './index.html';
}

let editDocument = (doc, token) => {
    event.stopPropagation();
    document.getElementById('modal').style.display = 'block';
    document.getElementById('modal').style.display = 'block';
    document.getElementById('erp-demo').style.display = 'none';
    let editUrl;
    if (doc.type === 'dbd') {
        editUrl = `${baseUrl}/dashboards/edit/${doc.id}?theme=blue&lng=zh&token=${token}`;
    } else if (doc.type === 'rdl') {
        editUrl = `${baseUrl}/reports/edit/${doc.id}?theme=blue&lng=zh&token=${token}`;
    }
    document.getElementById('modal-iframe').src = editUrl;
}

let closeShareWindow = () => {
    document.getElementById('share-window').style.display = 'none';
}

let saveDocRoles = (doc, token) => {
    let grants = [];
    let revoke = [];
    document.querySelectorAll('input[type=checkbox]:checked').forEach((item) => {
        let permissions = document.getElementById(item.value);
        let permission = permissions.options[permissions.selectedIndex].value;
        grants.push(`{
            role:"${item.value}",
            ops: [${permission}]
            }`);
    });
    document.querySelectorAll('input[type=checkbox]:not(:checked)').forEach((item) => {
        doc.roleOps.forEach((roleOp) => {
            if (roleOp[item.value]) {
                revoke.push(`{
                    role: "${item.value}",
                    ops: [${roleOp[item.value]}]
                }`);
            }
        })
    });
    api.updateAndDeleteDocPermissions['graphqlStr'] = api.updateAndDeleteDocPermissions.getGraphqlStr(doc.id, grants, revoke);
    sendRequest(api.updateAndDeleteDocPermissions, token, baseUrl).then(() => {
        window.alert('修改成功！');
        document.getElementById('share-window').style.display = 'none';
    });
}

let createRoleOpsList = (doc, role, container) => {
    let div = document.createElement("div");
    div.classList.add("form-group");
    let input = document.createElement('input');
    input.type = 'checkbox';
    input.name = 'roles';
    input.value = role.name;
    div.appendChild(input);

    let span = document.createElement('span');
    span.innerHTML = role.name;
    div.appendChild(span);

    let select = document.createElement('select');
    select.id = role.name;
    select.classList.add('role-select');
    div.appendChild(select);

    let option1 = document.createElement('option');
    let option2 = document.createElement('option');
    option1.value = 'Read';
    option2.value = 'Read,update';
    option1.innerHTML = '只读';
    option2.innerHTML = '读写';
    select.appendChild(option1);
    select.appendChild(option2);

    container.appendChild(div);

    if (doc.roleOps && doc.roleOps.length) {
        doc.roleOps.forEach((roleOp) => {
            if (roleOp[role.name]) {
                input.checked = true;
                if (roleOp[role.name] === 'Read') {
                    select[0].selected = true;
                } else {
                    select[1].selected = true;
                }
            }
        })
    }
}

let shareDocument = (doc, token) => {
    event.stopPropagation();
    let promiseList = [];
    let rolesPromise = sendRequest(api.getAllRoles, token, baseUrl);
    promiseList.push(rolesPromise);
    if (doc.allowSharing) {
        api.getDocInfoByDocumentId['graphqlStr'] = api.getDocInfoByDocumentId.getGraphqlStr(doc.id);
        let permissionsPromise = sendRequest(api.getDocInfoByDocumentId, token, baseUrl);
        promiseList.push(permissionsPromise);
    }
    Promise.all(promiseList).then((res) => {
        if (res[1]) {
            let docInfo = res[1].data.document;
            prepareDocRoleOps(doc, docInfo);
        }
        let roles = res[0].data.roles.filter((role) => {
            return role.name !== 'Administrator';
        });
        let container = document.getElementById('roles-container');
        if (container.children) {
            container.innerHTML = "";
        }
        roles.forEach((role) => {
            createRoleOpsList(doc, role, container);
        });
        hideOtherOptions();
        document.getElementById('share-window').style.display = 'block';
        document.getElementById('share-save').onclick = () => saveDocRoles(doc, token);
        document.getElementById('user-mask').style.display = 'block';
    })
}

let closeTagsWindow = () => {
    document.getElementById('tags-window').style.display = 'none';
}

let saveDocTags = (doc, token) => {
    let tagIds = [];
    document.querySelectorAll('input[type=checkbox]:checked').forEach((item) => {
        tagIds.push(`"${item.id}"`);
    });
    api.changeCategories['graphqlStr'] = api.changeCategories.getGraphqlStr(doc.id, 'RemoveExistingAndAddNew', tagIds);
    sendRequest(api.changeCategories, token, baseUrl).then((res) => {
        window.alert('修改成功！');
        document.getElementById('tags-window').style.display = 'none';
    });
};

let tagDocument = (doc, token) => {
    event.stopPropagation();
    sendRequest(api.getALLTags, token, baseUrl).then((res) => {
        let tags = res.data.tags.filter((tag) => {
            let defaultTagReg = /^\$/;
            return !(defaultTagReg.test(tag.name) || tag.name === 'Favorites');
        });
        let container = document.getElementById('tags-container');
        if (container.children) {
            container.innerHTML = "";
        }
        tags.forEach((tag) => {
            let div = document.createElement("div");
            div.classList.add("form-group");
            div.innerHTML = `<input id="${tag.id}" type="checkbox" name="tags"><span> ${tag.name}</span>`;
            container.appendChild(div);
        })
        hideOtherOptions();
        document.getElementById('tags-window').style.display = 'block';
        document.getElementById('tags-save').onclick = () => saveDocTags(doc, token);
        document.getElementById('user-mask').style.display = 'block';
    });
}

let hideOtherWindows = () => {
    let shareWindow = document.getElementById('share-window');
    let tagWindow = document.getElementById('tags-window');
    if (shareWindow.style.display === 'block') {
        shareWindow.style.display = 'none';
    }
    if (tagWindow.style.display === 'block') {
        tagWindow.style.display = 'none';
    }
}

let hideOtherOptions = () => {
    let optionDivs = document.getElementsByClassName('show-options');
    for (let optionDiv of optionDivs) {
        if (optionDiv.style.display === 'block') {
            optionDiv.style.display = 'none';
        }
    }
}

let showOptions = (doc) => {
    event.stopPropagation();
    hideOtherOptions();
    hideOtherWindows();
    let div = document.getElementById(doc.id);
    div.style.display = 'block';
}

let createOptionsDiv = (div, doc, token) => {
    if (doc.allowEditing) {
        let divOption = document.createElement('div');
        divOption.classList.add('option');
        divOption.innerHTML = `<i class="fa fa-pencil-square-o"></i>&nbsp; &nbsp; 编辑`;
        divOption.onclick = () => editDocument(doc, token);
        div.appendChild(divOption);
    }

    if (doc.allowSharing) {
        let divOption = document.createElement('div');
        divOption.classList.add('option');
        divOption.innerHTML = `<i class="fa fa-share-alt"></i>&nbsp; &nbsp; 分享管理`;
        divOption.onclick = () => shareDocument(doc, token);
        div.appendChild(divOption);
    }

    if (doc.allowClassifying) {
        let divOption = document.createElement('div');
        divOption.classList.add('option');
        divOption.innerHTML = `<i class="fa fa-tags"></i>&nbsp; &nbsp; 分类管理`;
        divOption.onclick = () => tagDocument(doc, token);
        div.appendChild(divOption);
    }
}

let createDocMenuListChildren = (docUl, doc, url, token) => {
    let div = document.createElement("div");
    let a = document.createElement('a');
    div.classList.add('erp-sidebar-menu-item');
    div.classList.add('second');
    a.classList.add('doc-title');
    div.onclick = () => {
        clearActive1();
        clearActive2();
        div.classList.remove('second');
        div.classList.add('second-active');
        showPage(url);
    };
    a.innerHTML = doc.title;
    div.appendChild(a);

    if (doc.allowEditing || doc.allowClassifying || doc.allowSharing) {
        let span = document.createElement('span');
        span.classList.add('doc-option');
        span.innerHTML = `<i class="fa fa-ellipsis-v"></i>`;
        span.onclick = () => showOptions(doc);
        div.appendChild(span);

        let div2 = document.createElement('div');
        div2.id = doc.id;
        div2.classList.add('show-options');
        div2.style.display = 'none';
        div.appendChild(div2);
        createOptionsDiv(div2, doc, token);
    }

    docUl.appendChild(div);
}

let createDocMenuList = (dashboardLists, reportLists, userRoles, token) => {
    if (userRoles.includes('view-dashboard') && dashboardLists) {
        let dashboardsUl = document.getElementById('dashboards');
        dashboardLists.forEach((dashboard) => {
            let url = `${baseUrl}/dashboards/view/${dashboard.id}?theme=blue&lng=zh&token=${token}`;
            createDocMenuListChildren(dashboardsUl, dashboard, url, token);
        })
    }

    if (userRoles.includes('view-report') && reportLists) {
        let reportsUl = document.getElementById('reports');
        reportLists.forEach((report) => {
            let url = `${baseUrl}/reports/view/${report.id}?theme=blue&lng=zh&token=${token}`;
            createDocMenuListChildren(reportsUl, report, url, token);
        })
    }
}

let createNewDocMenuList = (userRoles) => {
    if (userRoles.includes('create-dashboard') || userRoles.includes('create-report')) {
        document.getElementById('erp-create-div').style.display = 'flex';
    }
}

let createMenu = () => {
    let dashboardLists = JSON.parse(window.localStorage.getItem('dashboardLists'));
    let reportLists = JSON.parse(window.localStorage.getItem('reportLists'));
    let userRoles = JSON.parse(window.localStorage.getItem('userInfo')).roles;
    let token = window.localStorage.getItem('token');

    createDocMenuList(dashboardLists, reportLists, userRoles, token);
    createNewDocMenuList(userRoles, token);
}

export { goToERPIndex, getShowDocuments, doLogin, doLogout, closeTagsWindow, closeModal, closeShareWindow, selectDesigner, selectViewer, selectHuaDong, login, createDashboard, createReport };