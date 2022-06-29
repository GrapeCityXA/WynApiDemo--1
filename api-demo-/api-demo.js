let clearSelected = () => {
  let elements = document.getElementsByClassName('api-menu-active');
  for (let element of elements) {
      element.classList.remove('api-menu-active');
  }    
}

let goToApiIndex = (e) => {
  clearSelected();
  e.classList.add("api-menu-active");
  document.getElementById("api-demo").src = 'api-demo/api-demo-index.html';
}

let goToUserAuthenticationFixedPage = (e) => {
  clearSelected();
  e.classList.add("api-menu-active");
  document.getElementById("api-demo").src = 'api-demo/user-authentication-fixed.html';
}

let goToUserAuthenticationDynamicPage = (e) => {
  clearSelected();
  e.classList.add("api-menu-active");
  document.getElementById("api-demo").src = 'api-demo/user-authentication-dynamic.html';
}

let goToUserAuthenticationOtherPage = (e) => {
  clearSelected();
  e.classList.add("api-menu-active");
  document.getElementById("api-demo").src = 'api-demo/user-authentication-other.html';
}

let goToReportViewPage = (e) => {
  clearSelected();
  e.classList.add("api-menu-active");
  document.getElementById("api-demo").src = 'api-demo/report-view.html';
}

let goToReportParamsPage = (e) => {
  clearSelected();
  e.classList.add("api-menu-active");
  document.getElementById("api-demo").src = 'api-demo/report-params.html';
}

let goToReportEditPage = (e) => {
  clearSelected();
  e.classList.add("api-menu-active");
  document.getElementById("api-demo").src = 'api-demo/report-edit.html';
}

let goToReportExportPage = (e) => {
  clearSelected();
  e.classList.add("api-menu-active");
  document.getElementById("api-demo").src = 'api-demo/report-export.html';
}

let goToReportPrintPage = (e) => {
  clearSelected();
  e.classList.add("api-menu-active");
  document.getElementById("api-demo").src = 'api-demo/report-print.html';
}
let goToDashboardViewPage = (e) => {
  clearSelected();
  e.classList.add("api-menu-active");
  document.getElementById("api-demo").src = 'api-demo/dashboard-view.html';
}

let goToDashboardEditPage = (e) => {
  clearSelected();
  e.classList.add("api-menu-active");
  document.getElementById("api-demo").src = 'api-demo/dashboard-edit.html';
}

let goToDashboardPluginPage = (e) => {
  clearSelected();
  e.classList.add("api-menu-active");
  document.getElementById("api-demo").src = 'api-demo/dashboard-plugin.html';
}

let goToAppWeChatDingPage = (e) => {
  clearSelected();
  e.classList.add("api-menu-active");
  document.getElementById("api-demo").src = 'api-demo/app-wechat-ding.html';
}

let goToTagListPage = (e) => {
  clearSelected();
  e.classList.add("api-menu-active");
  document.getElementById("api-demo").src = 'api-demo/tag-list.html';
}

let goToTagNewPage = (e) => {
  clearSelected();
  e.classList.add("api-menu-active");
  document.getElementById("api-demo").src = 'api-demo/tag-new.html';
}

let goToTagRenamePage = (e) => {
  clearSelected();
  e.classList.add("api-menu-active");
  document.getElementById("api-demo").src = 'api-demo/tag-rename.html';
}

let goToTagDeletePage = (e) => {
  clearSelected();
  e.classList.add("api-menu-active");
  document.getElementById("api-demo").src = 'api-demo/tag-delete.html';
}

let goToDocumentListPage = (e) => {
  clearSelected();
  e.classList.add("api-menu-active");
  document.getElementById("api-demo").src = 'api-demo/document-list.html';
}

let goToDocumentTypeListPage = (e) => {
  clearSelected();
  e.classList.add("api-menu-active");
  document.getElementById("api-demo").src = 'api-demo/document-type-list.html';
}

let goToDocumentRenamePage = (e) => {
  clearSelected();
  e.classList.add("api-menu-active");
  document.getElementById("api-demo").src = 'api-demo/document-rename.html';
}

let goToDocumentTagEditPage = (e) => {
  clearSelected();
  e.classList.add("api-menu-active");
  document.getElementById("api-demo").src = 'api-demo/document-tag-edit.html';
}

let goToDocumentRoleEditPage = (e) => {
  clearSelected();
  e.classList.add("api-menu-active");
  document.getElementById("api-demo").src = 'api-demo/document-role-edit.html';
}

let goToDocumentTagListPage = (e) => {
  clearSelected();
  e.classList.add("api-menu-active");
  document.getElementById("api-demo").src = 'api-demo/document-tag-list.html';
}

let goToDocumentTagNewPage = (e) => {
  clearSelected();
  e.classList.add("api-menu-active");
  document.getElementById("api-demo").src = 'api-demo/document-tag-new.html';
}

let goToDocumentTagDeletePage = (e) => {
  clearSelected();
  e.classList.add("api-menu-active");
  document.getElementById("api-demo").src = 'api-demo/document-tag-delete.html';
}

let goToDocumentRoleListPage = (e) => {
  clearSelected();
  e.classList.add("api-menu-active");
  document.getElementById("api-demo").src = 'api-demo/document-role-list.html';
}

let goToDocumentRoleNewPage = (e) => {
  clearSelected();
  e.classList.add("api-menu-active");
  document.getElementById("api-demo").src = 'api-demo/document-role-new.html';
}

let goToDocumentRoleDeletePage = (e) => {
  clearSelected();
  e.classList.add("api-menu-active");
  document.getElementById("api-demo").src = 'api-demo/document-role-delete.html';
}

let goToRolePermissionsPage = (e) => {
  clearSelected();
  e.classList.add("api-menu-active");
  document.getElementById("api-demo").src = 'api-demo/role-permissions.html';
}

let goToRoleAddPermissionsPage = (e) => {
  clearSelected();
  e.classList.add("api-menu-active");
  document.getElementById("api-demo").src = 'api-demo/role-add-permissions.html';
}

let goToRoleDeletePage = (e) => {
  clearSelected();
  e.classList.add("api-menu-active");
  document.getElementById("api-demo").src = 'api-demo/role-delete.html';
}

let goToRoleUpdatePermissionsPage = (e) => {
  clearSelected();
  e.classList.add("api-menu-active");
  document.getElementById("api-demo").src = 'api-demo/role-update-permissions.html';
}

let goToRoleUsersPage = (e) => {
  clearSelected();
  e.classList.add("api-menu-active");
  document.getElementById("api-demo").src = 'api-demo/role-users.html';
}

let goToRoleUserAddPage = (e) => {
  clearSelected();
  e.classList.add("api-menu-active");
  document.getElementById("api-demo").src = 'api-demo/role-user-add.html';
}

let goToRoleUserDeletePage = (e) => {
  clearSelected();
  e.classList.add("api-menu-active");
  document.getElementById("api-demo").src = 'api-demo/role-user-delete.html';
}

let goToUserListPage = (e) => {
  clearSelected();
  e.classList.add("api-menu-active");
  document.getElementById("api-demo").src = 'api-demo/user-list.html';
}

let goToUserAddRolesPage = (e) => {
  clearSelected();
  e.classList.add("api-menu-active");
  document.getElementById("api-demo").src = 'api-demo/user-add-roles.html';
}

let goToUserEditPage = (e) => {
  clearSelected();
  e.classList.add("api-menu-active");
  document.getElementById("api-demo").src = 'api-demo/user-edit.html';
}

let goToUserDeletePage = (e) => {
  clearSelected();
  e.classList.add("api-menu-active");
  document.getElementById("api-demo").src = 'api-demo/user-delete.html';
}

let goToUserEditRolesPage = (e) => {
  clearSelected();
  e.classList.add("api-menu-active");
  document.getElementById("api-demo").src = 'api-demo/user-edit-roles.html';
}

let goToUserRolesPage = (e) => {
  clearSelected();
  e.classList.add("api-menu-active");
  document.getElementById("api-demo").src = 'api-demo/user-roles.html';
}

let goToCreateSQLServerDataSourcePage = (e) => {
  clearSelected();
  e.classList.add("api-menu-active");
  document.getElementById("api-demo").src = 'api-demo/create-sql-server-data-source.html';
}

let goToCreateWebJSONDataSourcePage = (e) => {
  clearSelected();
  e.classList.add("api-menu-active");
  document.getElementById("api-demo").src = 'api-demo/create-web-json-data-source.html';
}

let goToDatasetDataPage = (e) => {
  clearSelected();
  e.classList.add("api-menu-active");
  document.getElementById("api-demo").src = 'api-demo/dataset-data.html';
}

let goToDatasetTypeListPage = (e) => {
  clearSelected();
  e.classList.add("api-menu-active");
  document.getElementById("api-demo").src = 'api-demo/dataset-type-list.html';
}

let goToCreateDatasetPage = (e) => {
  clearSelected();
  e.classList.add("api-menu-active");
  document.getElementById("api-demo").src = 'api-demo/create-dataset.html';
}

let goToTenantListPage = (e) => {
  clearSelected();
  e.classList.add("api-menu-active");
  document.getElementById("api-demo").src = 'api-demo/tenant-list.html';
}

let goToTenantNewPage = (e) => {
  clearSelected();
  e.classList.add("api-menu-active");
  document.getElementById("api-demo").src = 'api-demo/tenant-new.html';
}

let goToTenantEditPage = (e) => {
  clearSelected();
  e.classList.add("api-menu-active");
  document.getElementById("api-demo").src = 'api-demo/tenant-edit.html';
}

let goToTenantDeletePage = (e) => {
  clearSelected();
  e.classList.add("api-menu-active");
  document.getElementById("api-demo").src = 'api-demo/tenant-delete.html';
}

let goToTenantPropNewPage = (e) => {
  clearSelected();
  e.classList.add("api-menu-active");
  document.getElementById("api-demo").src = 'api-demo/tenant-prop-new.html';
}

let goToTenantPropEditPage = (e) => {
  clearSelected();
  e.classList.add("api-menu-active");
  document.getElementById("api-demo").src = 'api-demo/tenant-prop-edit.html';
}

let goToTenantPropDeletePage = (e) => {
  clearSelected();
  e.classList.add("api-menu-active");
  document.getElementById("api-demo").src = 'api-demo/tenant-prop-delete.html';
}

let goToAddTenantUserPage = (e) => {
  clearSelected();
  e.classList.add("api-menu-active");
  document.getElementById("api-demo").src = 'api-demo/add-tenant-user.html';
}

let goToDeleteTenantUserPage = (e) => {
  clearSelected();
  e.classList.add("api-menu-active");
  document.getElementById("api-demo").src = 'api-demo/delete-tenant-user.html';
}

let goToDocumentsExportPage = (e) => {
  clearSelected();
  e.classList.add("api-menu-active");
  document.getElementById("api-demo").src = 'api-demo/documents-export.html';
}

let goToDocumentsImportPage = (e) => {
  clearSelected();
  e.classList.add("api-menu-active");
  document.getElementById("api-demo").src = 'api-demo/documents-import.html';
}

let goToPortalDirectoryTenantExportPage = (e) => {
  clearSelected();
  e.classList.add("api-menu-active");
  document.getElementById("api-demo").src = 'api-demo/portal-directory-tenant-export.html';
}

let goToDocumentsDeletePage = (e) => {
  clearSelected();
  e.classList.add("api-menu-active");
  document.getElementById("api-demo").src = 'api-demo/documents-delete.html';
}

let goToDocumentsTagsEditPage = (e) => {
  clearSelected();
  e.classList.add("api-menu-active");
  document.getElementById("api-demo").src = 'api-demo/documents-tags-edit.html';
}

let goToDocumentsRolesEditPage = (e) => {
  clearSelected();
  e.classList.add("api-menu-active");
  document.getElementById("api-demo").src = 'api-demo/documents-roles-edit.html';
}

function insertApiDemoMenu() {
  let paragraph = `<aside class="sidebar">
      <div class="sidebar-container">
        <nav class="menu">
          <ul class="sidebar-menu metismenu" id="sidebar-menu">
            <li>
              <a href="javascript:void(0);" onclick="goToApiIndex(this)" target="_parent">
                <i class="fa fa-home"></i> 首页
              </a>
            </li>
            <li>
              <a class="collapsible">
                <i class="fa fa-address-card"></i> 用户认证 <i class="fa arrow"></i>
              </a>
              <ul class="sidebar-nav collapse">
                <li>
                  <a href="javascript:void(0);" onclick="goToUserAuthenticationFixedPage(this)" target="_parent"> 固定用户身份 </a>
                </li>
                <li>
                  <a href="javascript:void(0);" onclick="goToUserAuthenticationDynamicPage(this)" target="_parent"> 动态用户认证</a>
                </li>
                <li>
                  <a href="javascript:void(0);" onclick="goToUserAuthenticationOtherPage(this)" target="_parent"> 第三方系统认证 </a>
                </li>
              </ul>
            </li>
            <li>
              <a class="collapsible">
                <i class="fa fa-file-text"></i> 报表集成 <i class="fa arrow"></i>
              </a>
              <ul class="sidebar-nav collapse">
                <li>
                  <a href="javascript:void(0);" onclick="goToReportViewPage(this)" target="_parent"> 查看器集成 </a>
                </li>
                <li>
                  <a href="javascript:void(0);" onclick="goToReportParamsPage(this)" target="_parent"> 传递报表参数</a>
                </li>
                <li>
                  <a href="javascript:void(0);" onclick="goToReportEditPage(this)" target="_parent"> 设计器集成 </a>
                </li>
                <li>
                  <a href="javascript:void(0);" onclick="goToReportExportPage(this)" target="_parent"> 导出API </a>
                </li>
                <li>
                  <a href="javascript:void(0);" onclick="goToReportPrintPage(this)" target="_parent"> 打印API </a>
                </li>
              </ul>
            </li>
            <li>
              <a class="collapsible">
                <i class="fa  fa-area-chart"></i> 仪表板集成 <i class="fa arrow"></i>
              </a>
              <ul class="sidebar-nav collapse">
                <li>
                  <a href="javascript:void(0);" onclick="goToDashboardViewPage(this)" target="_parent"> 查看器集成 </a>
                </li>
                <li>
                  <a href="javascript:void(0);" onclick="goToDashboardEditPage(this)" target="_parent"> 设计器集成</a>
                </li>
                <li>
                  <a href="javascript:void(0);" onclick="goToDashboardPluginPage(this)" target="_parent"> 外部插件集成</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="javascript:void(0);" onclick="goToAppWeChatDingPage(this)" target="_parent">
                <i class="fa fa-shopping-basket"></i> APP集成
              </a>
            </li>
            <li>
              <a class="collapsible">
                <i class="fa fa-window-restore"></i> 分类管理 <i class="fa arrow"></i>
              </a>
              <ul class="sidebar-nav collapse">
                <li>
                  <a href="javascript:void(0);" onclick="goToTagListPage(this)" target="_parent"> 已有分类 </a>
                </li>
                <li>
                  <a href="javascript:void(0);" onclick="goToTagNewPage(this)" target="_parent">  添加分类 </a>
                </li>
                <li>
                  <a href="javascript:void(0);" onclick="goToTagRenamePage(this)" target="_parent"> 编辑分类 </a>
                </li>
                <li>
                  <a href="javascript:void(0);" onclick="goToTagDeletePage(this)" target="_parent"> 删除分类 </a>
                </li>
              </ul>
            </li>
            <li>
              <a class="collapsible">
                <i class="fa fa-book"></i> 文档列表 <i class="fa arrow"></i>
              </a>
              <ul class="sidebar-nav collapse">
                <li >
                  <a href="javascript:void(0);" onclick="goToDocumentListPage(this)" target="_parent"> 全部文档 </a>
                </li>
                <li>
                  <a href="javascript:void(0);" onclick="goToDocumentTypeListPage(this)" target="_parent"> 按文档属性筛选 </a>
                </li>
              </ul>
            </li>
            <li>
              <a class="collapsible">
                <i class="fa fa-pencil-square-o"></i> 文档管理 <i class="fa arrow"></i>
              </a>
              <ul class="sidebar-nav collapse">
                <li>
                  <a href="javascript:void(0);" onclick="goToDocumentRenamePage(this)" target="_parent"> 重命名 </a>
                </li>
                <li>
                  <a href="javascript:void(0);" onclick="goToDocumentTagEditPage(this)" target="_parent"> 修改分类 </a>
                </li>
                <li>
                  <a href="javascript:void(0);" onclick="goToDocumentRoleEditPage(this)" target="_parent"> 编辑分享权限 </a>
                </li>
              </ul>
            </li>
            <li>
              <a class="collapsible">
                <i class="fa fa-tags"></i> 文档分类 <i class="fa arrow"></i>
              </a>
              <ul class="sidebar-nav collapse">
                <li>
                  <a href="javascript:void(0);" onclick="goToDocumentTagListPage(this)" target="_parent"> 已添加分类 </a>
                </li>
                <li>
                  <a href="javascript:void(0);" onclick="goToDocumentTagNewPage(this)" target="_parent"> 添加分类 </a>
                </li>
                <li>
                  <a href="javascript:void(0);" onclick="goToDocumentTagDeletePage(this)" target="_parent"> 删除分类 </a>
                </li>
              </ul>
            </li>
            <li>
              <a class="collapsible">
                <i class="fa fa-user-circle-o"></i> 文档权限 <i class="fa arrow"></i>
              </a>
              <ul class="sidebar-nav collapse">
                <li>
                  <a href="javascript:void(0);" onclick="goToDocumentRoleListPage(this)" target="_parent"> 已设置权限 </a>
                </li>
                <li>
                  <a href="javascript:void(0);" onclick="goToDocumentRoleNewPage(this)" target="_parent"> 添加分享 </a>
                </li>
                <li>
                  <a href="javascript:void(0);" onclick="goToDocumentRoleDeletePage(this)" target="_parent"> 删除分享 </a>
                </li>
              </ul>
            </li>
            <li>
              <a class="collapsible">
                <i class="fa fa-database"></i> 数据源管理 <i class="fa arrow"></i>
              </a>
              <ul class="sidebar-nav collapse">
                <li>
                  <a href="javascript:void(0);" onclick="goToCreateSQLServerDataSourcePage(this)" target="_parent"> 新建SQL Server数据源 </a>
                </li>
                <li>
                  <a href="javascript:void(0);" onclick="goToCreateWebJSONDataSourcePage(this)" target="_parent"> 新建WebAPI-JSON数据源 </a>
                </li>
              </ul>
            </li>
            <li>
              <a class="collapsible">
                <i class="fa fa-table"></i>数据集管理 <i class="fa arrow"></i>
              </a>
              <ul class="sidebar-nav collapse">
                <li>
                  <a href="javascript:void(0);" onclick="goToDatasetDataPage(this)" target="_parent"> 获得数据集数据 </a>
                </li>
                <li>
                  <a href="javascript:void(0);" onclick="goToDatasetTypeListPage(this)" target="_parent"> 获得数据集类型 </a>
                </li>
                <li>
                  <a href="javascript:void(0);" onclick="goToCreateDatasetPage(this)" target="_parent"> 新增数据集 </a>
                </li>
              </ul>
            </li>        
            <li>
              <a class="collapsible">
                <i class="fa fa-group"></i> 组织管理 <i class="fa arrow"></i>
              </a>
              <ul class="sidebar-nav collapse">
                <li>
                  <a href="javascript:void(0);" onclick="goToTenantListPage(this)" target="_parent"> 已有全部组织 </a>
                </li>
                <li>
                  <a href="javascript:void(0);" onclick="goToTenantNewPage(this)" target="_parent"> 添加组织 </a>
                </li>
                <li>
                  <a href="javascript:void(0);" onclick="goToTenantEditPage(this)" target="_parent"> 编辑组织 </a>
                </li>
                <li>
                  <a href="javascript:void(0);" onclick="goToTenantDeletePage(this)" target="_parent"> 删除组织 </a>
                </li>
                <!-- <li>
                  <a href="javascript:void(0);" onclick="goToTenantPropNewPage(this)" target="_parent"> 添加组织属性 </a>
                </li>
                <li>
                  <a href="javascript:void(0);" onclick="goToTenantPropEditPage(this)" target="_parent"> 编辑组织属性 </a>
                </li>
                <li>
                  <a href="javascript:void(0);" onclick="goToTenantPropDeletePage(this)" target="_parent"> 删除组织属性 </a>
                </li>
                <li>
                  <a href="javascript:void(0);" onclick="goToAddTenantUserPage(this)" target="_parent"> 添加组织成员 </a>
                </li>
                <li>
                  <a href="javascript:void(0);" onclick="goToDeleteTenantUserPage(this)" target="_parent"> 移除组织成员 </a>
                </li>--!>
              </ul>
            </li>
            <li>
              <a class="collapsible">
                <i class="fa fa-id-card-o"></i> 角色管理 <i class="fa arrow"></i>
              </a>
              <ul class="sidebar-nav collapse">
                <li>
                  <a href="javascript:void(0);" onclick="goToRolePermissionsPage(this)" target="_parent"> 已有角色和权限 </a>
                </li>
                <li>
                  <a href="javascript:void(0);" onclick="goToRoleAddPermissionsPage(this)" target="_parent"> 新建系统角色 </a>
                </li>
                <li>
                  <a href="javascript:void(0);" onclick="goToRoleDeletePage(this)" target="_parent"> 删除系统角色 </a>
                </li>
                <!--<li>
                  <a href="javascript:void(0);" onclick="goToRoleUpdatePermissionsPage(this)" target="_parent"> 编辑角色权限 </a>
                </li>
                <li>
                  <a href="javascript:void(0);" onclick="goToRoleUsersPage(this)" target="_parent"> 角色中的用户 </a>
                </li>
                <li>
                  <a href="javascript:void(0);" onclick="goToRoleUserAddPage(this)" target="_parent"> 添加角色用户 </a>
                </li>
                <li>
                  <a href="javascript:void(0);" onclick="goToRoleUserDeletePage(this)" target="_parent"> 删除角色用户 </a>
                </li>--!>
              </ul>
            </li>
            <li>
              <a class="collapsible">
                <i class="fa fa-user-o"></i> 用户管理 <i class="fa arrow"></i>
              </a>
              <ul class="sidebar-nav collapse">
                <li>
                  <a href="javascript:void(0);" onclick="goToUserListPage(this)" target="_parent"> 已有全部用户 </a>
                </li>
                <li >
                  <a href="javascript:void(0);" onclick="goToUserAddRolesPage(this)" target="_parent"> 新建用户 </a>
                </li>
                <li>
                  <a href="javascript:void(0);" onclick="goToUserEditPage(this)" target="_parent"> 编辑用户 </a>
                </li>
                <li>
                  <a href="javascript:void(0);" onclick="goToUserDeletePage(this)" target="_parent"> 删除用户 </a>
                </li>
                <!--<li>
                  <a href="javascript:void(0);" onclick="goToUserEditRolesPage(this)" target="_parent"> 编辑用户角色 </a>
                </li>
                <li>
                  <a href="javascript:void(0);" onclick="goToUserRolesPage(this)" target="_parent"> 用户全部角色 </a>
                </li>--!>
              </ul>
            </li>
            <li>
              <a class="collapsible">
                <i class="fa fa-sliders"></i> 系统管理 <i class="fa arrow"></i>
              </a>
              <ul class="sidebar-nav collapse">
                <li>
                  <a href="javascript:void(0);" onclick="goToDocumentsExportPage(this)" target="_parent"> 批量导出文档 </a>
                </li>
                <li>
                  <a href="javascript:void(0);" onclick="goToDocumentsImportPage(this)" target="_parent"> 批量导入文档 </a>
                </li>
                <li>
                  <a href="javascript:void(0);" onclick="goToPortalDirectoryTenantExportPage(this)" target="_parent"> 导出门户目录和角色 </a>
                </li>
              </ul>
            </li>
            <li>
              <a class="collapsible">
                <i class="fa fa-list"></i> 批量管理 <i class="fa arrow"></i>
              </a>
              <ul class="sidebar-nav collapse">
                <li>
                  <a href="javascript:void(0);" onclick="goToDocumentsDeletePage(this)" target="_parent"> 批量删除文档 </a>
                </li>
                <li>
                  <a href="javascript:void(0);" onclick="goToDocumentsTagsEditPage(this)" target="_parent"> 批量管理分类 </a>
                </li>
                <li>
                  <a href="javascript:void(0);" onclick="goToDocumentsRolesEditPage(this)" target="_parent"> 批量设置权限 </a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
      </aside>`
  document.write(paragraph);
}