let funcModule = '';

let showERP = () => {
    if (funcModule === 'ERP') {
        return;
    }
    window.location.href='index.html';
}

let showAPI = () => {
    if (funcModule === 'API') {
        return;
    }
    window.location.href='api-index.html';
}

let showPortal = () => {
    if (funcModule === 'Portal') {
        return;
    }
    window.location.href='portal.html';
}

let showServer = () => {
    if (funcModule === 'Server') {
        return;
    }
    window.location.href='server.html';
}

let insertHeaderMenu = (module) => {
    if (module) {
        funcModule = module;
    }
    let headerMenu = `
    <div class="header">
        <div class="header-logo">
            <img src="./images/wyn-logo.svg">
        </div>
        <div class="header-title">
            <span>Wyn Integration</span>
        </div>
        <div class="header-menu">
            <div onclick="showERP()" class="header-menu-item${module == "ERP" ? "-active" : ""}"><span>ERP系统集成示例</span></div>
            <div onclick="showAPI()" class="header-menu-item${module == "API" ? "-active" : ""}"><span>API示例</span></div>
        <!--                <span id="portal" class="header-menu-title" onclick="showPortal()">报表门户</span>-->
        <!--                <span id="server" class="header-menu-title" onclick="showServer()">管理后台</span>-->
        </div>
    </div>`

    document.write(headerMenu);
    
    // let moduleId = module.toLowerCase();
    // document.getElementById(moduleId).classList.add('selected-header');
}