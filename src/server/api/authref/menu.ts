export default defineEventHandler((event) => {
    return {
        "status": "OK",
        "content": {
            "text": "Stock ManageMent Menu",
            "id": "sbse602m",
            "type": "main-program",
            "index": 0,
            "menu": [
                {
                    "text": "View All Transaction",
                    "id": "sbse602",
                    "firstpage": "true",
                    "type": "program-directory",
                    "index": 0,
                    "imageUrl": "../image/treeview_icon/enquiryx.svg",
                    "menuicon": "fa fa-list-alt",
                    "submenu": []
                },
                {
                    "text": "Add Transaction",
                    "id": "sbse",
                    "type": "program-directory",
                    "index": 1,
                    "imageUrl": "../image/treeview_icon/caentry.svg",
                    "menuicon": "fa fa-plus-square",
                    "submenu": [
                        {
                            "index": 0,
                            "id": "sbse001",
                            "type": "program",
                            "text": "DE | Customer Stock Deposit",
                            "parameters": "",
                            "permissions": {
                                "insert": "true",
                                "update": "true",
                                "delete": "true",
                                "retrieve": "true",
                                "onlymybranch": "true",
                                "import": "true",
                                "export": "true",
                                "bylevel": "true",
                                "bygroup": "false",
                                "department": "false"
                            }
                        },
                        {
                            "index": 1,
                            "id": "sbse002",
                            "type": "program",
                            "text": "WD | Customer Stock Witdraw",
                            "parameters": "",
                            "permissions": {
                                "insert": "true",
                                "update": "true",
                                "delete": "true",
                                "retrieve": "true",
                                "onlymybranch": "true",
                                "import": "true",
                                "export": "true",
                                "bylevel": "true",
                                "bygroup": "false",
                                "department": "false"
                            }
                        },
                        {
                            "index": 2,
                            "id": "sbse003",
                            "type": "program",
                            "text": "TC | Transfer Stock Between Customer",
                            "parameters": "",
                            "permissions": {
                                "insert": "true",
                                "update": "true",
                                "delete": "true",
                                "retrieve": "true",
                                "onlymybranch": "true",
                                "import": "true",
                                "export": "true",
                                "bylevel": "true",
                                "bygroup": "false",
                                "department": "false"
                            },
                        }
                    ]
                }
            ]
        }
    }
})