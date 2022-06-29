const api = {
    getToken: {
        displayName: '获取token',
        url: '/connect/token',
        method: 'GET'
    },

    testConnection: {
        displayName: '测试数据源连接正确性',
        getGraphqlStr: function (provider, connectionString) {
            return `mutation {
                        testConnection(
                            provider: "${provider}",
                            connectionString: "${connectionString}"
                        )
                    }`;
        }
    },

    addDataSource: {
        displayName: '创建数据源',
        getGraphqlStr: function (name, provider, connectionString, extractInDatabase) {
            return `mutation {
                        addDatasource(
                            name: "${name}",
                            provider: "${provider}",
                            connectionString: "${connectionString}",
                            useAdvancedConfig: true,
                            extractInDatabase: ${extractInDatabase},
                            mappingConfig: ""
                        ) {
                            id,
                            name,
                            provider,
                            connectionString,
                        }
                    }`;
        }
    },

    getSchemaDefinition: {
        displayName: '获取数据源Schema',
        url: 'api/datasource/schemadefinition',
        method: 'POST',
        getBody: function (connectionString, provider) {
            return {
                connectionString,
                provider
            }
        }
    },

    dataSourceNameExist: {
        displayName: '校验数据源名称是否存在',
        getGraphqlStr: function (name) {
            return `query { datasourceNameExist (name: \"${name}\") }`;
        }
    },

    getDatasetDetailByDocumentId: {
        displayName: '通过文档id获取数据集信息',
        getUrl: function (documentId) {
            return `api/datasetmanagement/getdatasetdetail/${documentId}`;
        },
        method: 'GET',
    },

    getDataOfDataset: {
        displayName: '预览数据集数据',
        url: 'api/datasetmanagement/preview',
        params: 'rowcount=100&ignoreusercontext=false',
        method: 'POST',
        getBody: function (body, user_context_parameters) {
            return {
                dataSetDoc: body,
                parameters: user_context_parameters
            }
        }
    },

    getDataSources: {
        displayName: '获取所有数据源',
        graphqlStr: `query { datasources { id, name, useUserContext, useMultiTenant, supportNativeQuery } }`,
    },

    getDatasourceSchemas: {
        displayName: '获取数据源的Schemas',
        getGraphqlStr: (dataSourceId) => {
            return `query {
                datasourceSchemas(
                  ids: "${dataSourceId}"
                  loadMappingConfig: true
                ) {
                  errors
                  models {
                    id
                    name
                    provider
                    mappingConfigs {
                      tableOriginalName
                      tableDisplayName
                      columns {
                        columnOriginalName
                        columnDisplayName
                      }
                    }
                    tables {
                      name
                      originName
                      tableSchema
                      columns {
                        name
                        dataType
                        allowDBNull
                      }
                    }
                    views {
                      name
                      originName
                      tableSchema
                      columns {
                        name
                        dataType
                        allowDBNull
                      }
                    }
                    parameters {
                      name
                      defaultvalue
                      datatype
                      usedByTables
                    }
                  }
                }
              }`;
        },
    },

    getFields: {
        displayName: '获取所有字段',
        url: "api/datasource/tableschema",
        getParams: (dataSourceId, schema, tableName, type) => {
            return `datasourceId=${dataSourceId}&schema=${schema}&tableName=${tableName}&type=${type}`;
        },
        method: 'GET',
    },

    createDataset:{
        displayName: '创建数据集',
        url: "api/datasetmanagement/adddataset",
        method: 'POST',
        getBody: (name, dataSource, firstTable, fields) => {
            return{
                query: {
                    dataSources: [dataSource],
                    parameters: [],
                    commandModel: {
                        firstTable,
                    },
                    commandType: "Sql",
                },
                fields,
                groupFields: [],
                customSqlTables: [],
                filterConditions: {
                    conditionType: 0
                },
                indexed: false,
                incrementalUpdateSetting: null,
                name,
                comment: "",
                tagIds: []
            }
        }
    },

    getExportDocuments: {
        displayName: '获取导出文档列表',
        url: 'admin/api/export/list/$$documents',
        method: 'POST',
    },

    batchExport: {
        displayName: '批量导出',
        url: 'admin/api/export',
        method: 'POST',
        getBody: function (payload) {
            return payload;
        }
    },

    importDocuments: {
        displayName: '导入文档',
        url: 'system/api/import',
        method: 'POST',
        getBody: function (file) {
            return file;
        }
    },

    getPermissions: {
        displayName: '获取系统中所有权限',
        url: 'admin/api/accountmanagement/api/v1/permissions',
        method: 'GET'
    },

    getRolesAndPermissions: {
        displayName: '获取系统中已有的全部角色和每个角色的权限',
        url: 'admin/api/accountmanagement/api/v1/roles',
        method: 'GET'
    },

    updateRolesAndPermissions: {
        displayName: '向系统中新增角色',
        url: 'admin/api/accountmanagement/api/v1/roles',
        method: 'POST',
        getBody: function (name) {
            return {
                Name: name
            }
        }
    },

    addPermissionForRole: {
        displayName: '给角色新增权限',
        getUrl: function (roleId) {
            return `admin/api/accountmanagement/api/v1/roles/${roleId}/permissions`;
        },
        method: 'POST',
        getBody: function (permissions) {
            return {
                Permissions: permissions
            }
        }
    },

    deletePermissionForRole: {
        displayName: '删除角色权限',
        getUrl: function (roleId) {
            return `admin/api/accountmanagement/api/v1/roles/${roleId}`;
        },
        method: 'DELETE'
    },

    getSampleDashboard: {
        displayName: '获取一个示例仪表板',
        graphqlStr: `query {
                        documents(query:"1-保险行业数据可视化大屏"){
                            id,
                            title
                        }
                    }`
    },

    getAllDocuments: {
        displayName: '获取所有文档',
        graphqlStr: `query {
                        documents(orderby: "+name") {
                            id,
                            type,
                            title,
                            ext,
                            created,
                            created_by {
                                name, email
                            },
                            modified,
                            modified_by {
                                name,
                                email
                            },
                            effective_ops
                        }
                    }`

    },

    getAllReportsWithParameter: {
        displayName: '获取所有报表（此api可携带报表参数）',
        graphqlStr: `query {
                        documents{
                            id
                            title
                            type ... on Report {
                                parameters {
                                    name
                                }
                            }
                        }
        }`,
        method: 'POST'
    },

    exportReports: {
        displayName: '导出报表',
        getGraphqlStr: function (documentId, type) {
            return `mutation {
                            exportReport(
                                reportId: "${documentId}",
                                exportExtension: "${type}",
                                renderPayload: {
                                    interactiveActions:"",
                                    parameters:[]
                                }
                            )
                            {
                                resultUrl,
                                verificationUrl
                            }
                        }`;
        }
    },

    acquireJobId: {
        displayName: '开始一个render报表的任务，返回任务id',
        getGraphqlStr: function (documentId) {
            return `mutation { render(reportId: "${documentId}", renderPayload: {interactiveActions:"",parameters:[]}) { jobId } }`;
        }
    },

    acquireDocumentIdByJobId: {
        displayName: '轮询任务的状态，等待任务完成返回任务内所要打印的报表id',
        getGraphqlStr: function (documentId) {
            return `query { job(jobId: "${documentId}") { status, documentId, error } }`;
        }
    },

    printReport: {
        displayName: '打印之前render好的报表',
        getGraphqlStr: function (documentId) {
            return `mutation {
                        exportDocument(
                            documentId: "${documentId}",
                            exportExtension: "pdf",
                            renderPayload: {
                                interactiveActions:"",
                                settings:[{
                                    key:"Print",
                                    value:"true"
                                    }]
                            }
                        )
                        {
                            resultUrl,
                            verificationUrl
                        }
                    }`;
        }
    },

    getALLTags: {
        displayName: '获取系统中的分类列表',
        graphqlStr: `query {
                        tags { id, parentId, name, order}
                    }`
    },

    addTag: {
        displayName: '添加分类',
        getGraphqlStr: function (tagName, order) {
            return `mutation {
                          addTag(
                            name:"${tagName}",
                            urlName:"${tagName}",
                            order: ${order},
                            iconCssClass: "mdi mdi-comment-check-outline",
                            grant: [ {role:"Everyone", ops:[Read]} ], ,
                            color: "#F44336", parentId: "null" ) { id }
                        }`;
        }
    },

    renameTag: {
        displayName: '重命名分类',
        getGraphqlStr: function (tagId, rename) {
            return `mutation {
                          updateTag(
                            id: "${tagId}",
                            name:"${rename}",
                            urlName:"${rename}"
                          ) {
                            id
                          }
                        } `;
        }
    },

    deleteTag: {
        displayName: '删除分类',
        getGraphqlStr: function (tagId) {
            return `mutation {
                          deleteTag(id: "${tagId}")
                          {
                            deleted_ids
                          }
                        } `;
        }
    },

    renameDocument: {
        displayName: '重命名文档',
        getGraphqlStr: function (documentId, rename) {
            return `mutation{
                        renameDocument(documentId:"${documentId}",newName:"${rename}"){
                        renamed_id
                    }
            }`;
        }
    },

    getDocInfoByDocumentId: {
        displayName: '根据文档id查询文档信息',
        getGraphqlStr: function (documentId) {
            return `query {
                        document(id:"${documentId}"){
                            id,
                            effective_ops,
                            tags {
                                id,
                                name
                            },
                            security {
                                ownerid,
                                permissions {
                                    sub {
                                        name
                                    },
                                    ops
                                }
                            }
                      }
                    }`;
        }
    },

    addTagForDocument: {
        displayName: '对文档设置分类',
        getGraphqlStr: function (tagId, documentId) {
            return `mutation {
                        tagDocument(tagId: "${tagId}", documentId: "${documentId}")
                    }`;
        }
    },

    deleteTagFromDocument: {
        displayName: '从文档移除分类',
        getGraphqlStr: function (tagId, documentId) {
            return `mutation {
                        untagDocument(tagId: "${tagId}", documentId: "${documentId}")
                    }`;
        }
    },

    updateDocumentPermissions: {
        displayName: '更新文档分享权限',
        getGraphqlStr: function (documentId, grants) {
            return `mutation {
                        updatePermissions(
                            documentId: "${documentId}" ,
                            grant: [${grants}]  )
                    }`;
        }
    },

    removeDocumentPermissions: {
        displayName: '删除文档已设置的权限',
        getGraphqlStr: function (documentId, roleStr) {
            return `mutation {
                        updatePermissions(
                            documentId: "${documentId}" ,
                            revoke: [${roleStr}]  )
                    }`;
        }
    },

    updateAndDeleteDocPermissions: {
        displayName: '更新和删除文档分享权限',
        getGraphqlStr: function (documentId, grants, revoke) {
            return `mutation {
                        updatePermissions(
                          documentId: "${documentId}" ,
                          grant: [${grants}],
                          revoke: [${revoke}]
                        )
                    }`;
        }
    },

    deleteDocuments: {
        displayName: '删除文档',
        getGraphqlStr: function (documentId) {
            return `mutation {
                        deleteDocument(
                            documentId: "${documentId}"
                        )
                        {
                            deleted_id
                        }
                    }`;
        }
    },

    changeCategories: {
        displayName: '管理文档分类',
        getGraphqlStr: function (documentsIds, operationType, tagIds) {
            return `mutation {
                        changeCategories(
                            documentIds: [${documentsIds}],
                            operationType: "${operationType}",
                            tagIds: [${tagIds}]
                        )
                    }`;
        }
    },

    changePermissions: {
        displayName: '设置权限',
        getGraphqlStr: function (documentsIds, operationType, grants) {
            return `mutation {
                        changePermissions(
                            documentIds: [${documentsIds}],
                            operationType: "${operationType}",
                            grant: [${grants}]
                          )
                    }`;
        }
    },

    getAllRoles: {
        displayName: '获取系统中的所有角色',
        graphqlStr: `query {
                        roles { id, type, name}
                    }`
    },

    getUserInfo: {
        displayName: '获取用户信息',
        graphqlStr: `query {
                        me {
                            id,
                            name,
                            roles
                        }
                    }`
    },

    getOrganizations: {
        displayName: '获取所有组织',
        url: "admin/api/accountmanagement/api/v1/organizations",
        method: 'GET',
        params: 'includeProps=true',
    },

    getOrganizationProps: {
        displayName: '获取所有组织属性',
        url: "admin/api/accountmanagement/api/v1/organizations/props",
        method: 'GET',
    },

    createOrganizations: {
        displayName: '新增组织',
        url: "admin/api/accountmanagement/api/v1/organizations",
        method: 'POST',
        getBody: (name, parentTenantId, props) => {
            return {
                id: "",
                name,
                parentTenantId,
                props,
            };
        }
    },

    modifiedOrganizations: {
        displayName: '修改组织',
        getUrl: (id) => {
            return `admin/api/accountmanagement/api/v1/organizations/${id}`;
        },
        method: 'PUT',
        getBody: (id, name, parentTenantId, path, createTime, props) => {
            return {
                id,
                name,
                order: 0,
                parentTenantId,
                path,
                description: null,
                enabled: true,
                createTime,
                props,
            };
        }
    },

    deleteOrganizations: {
        displayName: '删除组织',
        getUrl: (id) => {
            return `admin/api/accountmanagement/api/v1/organizations/${id}`;
        },
        method: 'DELETE',
    },

    getNonOrgRoles: {
        displayName: "获取无组织角色",
        url: "admin/api/accountmanagement/api/v1/roles/non-org-roles",
        method: "GET",
    },

    getOrgRoles: {
        displayName: "获取组织角色",
        getUrl: (organizationId) => {
            return `admin/api/accountmanagement/api/v1/organizations/${organizationId}/roles`;
        },
        method: "GET",
    },

    addRole: {
        displayName: '新增全局角色',
        url: "admin/api/accountmanagement/api/v1/roles",
        method: "POST",
        getBody: (name) => {
            return {
                name
            };
        }
    },

    addOrganizationRole: {
        displayName: '新增组织角色',
        getUrl: (organizationId) => {
            return `admin/api/accountmanagement/api/v1/organizations/${organizationId}/roles`;
        },
        method: "POST",
        getBody: (name) => {
            return {
                name
            };
        }
    },

    deleteRole: {
        displayName: '删除全局角色',
        getUrl: (roleId) => {
            return `admin/api/accountmanagement/api/v1/roles/${roleId}`;
        },
        method: 'DELETE',
    },

    deleteOrganizationRole: {
        displayName: '删除组织角色',
        getUrl: (organizationId, roleId) => {
            return `admin/api/accountmanagement/api/v1/organizations/${organizationId}/roles/${roleId}`;
        },
        method: 'DELETE',
    },

    getAllUsers: {
        displayName: '获取所有用户',
        url: 'admin/api/accountmanagement/api/v1/users',
        params: 'Pageing=false',
        method: 'GET',
    },

    addUser: {
        displayName: '新增用户',
        url: 'admin/api/accountmanagement/api/v1/users',
        method: 'POST',
        getBody: (username, email, password, roles, tenantId) => {
            return { 
                username, 
                email, 
                mobile: "", 
                firstName: "", 
                lastName: "", 
                fullName: "", 
                password, 
                confirmPassword: password, 
                roles, 
                customizePropertyInfo: {}, 
                tenantId, 
                enabled: true,
            }
            
        },
    },

    deleteUser: {
        displayName: '删除用户',
        getUrl: (userId) => {
            return `admin/api/accountmanagement/api/v1/users/${userId}`;
        },
        method: 'DELETE',
    },

    modifiedUser: {
        displayName: '编辑用户信息',
        getUrl: (userId) => {
            return `admin/api/accountmanagement/api/v1/users/${userId}`;
        },
        params: 'ignoreroles=true',
        method: 'PUT',
    },

    deleteOrganizationUser: {
        displayName: '从组织移除用户',
        getUrl: (organizationId, userId) => {
            return `admin/api/accountmanagement/api/v1/organizations/${organizationId}/users/${userId}`;
        },
        method: 'DELETE',
    },
}

export default api;