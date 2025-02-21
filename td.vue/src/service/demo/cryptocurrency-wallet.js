export default {
    'version': '2.4.0',
    'summary': {
        'title': 'Cryptocurrency Wallet',
        'owner': 'A development team',
        'description': 'This threat model has been provided by the OWASP Threat Model Cookbook:\nthreat-model-cookbook/Flow Diagram/cryptocurrency-wallet',
        'id': 0
    },
    'detail': {
        'contributors': [
            {
                'name': 'development engineers'
            },
            {
                'name': 'product managers'
            },
            {
                'name': 'security architects'
            }
        ],
        'diagrams': [
            {
                'id': 0,
                'title': 'Cryptocurrency Wallet CIA diagram',
                'diagramType': 'CIA',
                'placeholder': 'New CIA diagram description',
                'thumbnail': './public/content/images/thumbnail.cia.jpg',
                'version': '2.4.0',
                'cells': [
                    {
                        'position': {
                            'x': 269.99999999999926,
                            'y': 140.00000000000148
                        },
                        'size': {
                            'width': 380,
                            'height': 270
                        },
                        'attrs': {
                            'label': {
                                'text': 'Electrum Wallet'
                            }
                        },
                        'visible': true,
                        'shape': 'trust-boundary-box',
                        'id': '3145b6c6-ca4d-467f-9403-ac3dfcb1f3b7',
                        'zIndex': -1,
                        'data': {
                            'type': 'tm.BoundaryBox',
                            'description': '',
                            'isTrustBoundary': true,
                            'hasOpenThreats': false
                        }
                    },
                    {
                        'position': {
                            'x': 210,
                            'y': 60
                        },
                        'size': {
                            'width': 400,
                            'height': 60
                        },
                        'attrs': {
                            'text': {
                                'text': 'Cryptocurrency wallet demo threat model\nprovided by the OWASP Threat Model Cookbook:\nthreat-model-cookbook/Flow Diagram/cryptocurrency-wallet'
                            }
                        },
                        'visible': true,
                        'shape': 'td-text-block',
                        'zIndex': 1,
                        'id': '10e7bd92-e30a-4e7b-b62a-fd10bf24ee9e',
                        'data': {
                            'type': 'tm.Text',
                            'name': 'Cryptocurrency wallet demo threat model\nprovided by the OWASP Threat Model Cookbook:\nthreat-model-cookbook/Flow Diagram/cryptocurrency-wallet',
                            'hasOpenThreats': false
                        }
                    },
                    {
                        'position': {
                            'x': 40,
                            'y': 260
                        },
                        'size': {
                            'width': 112.5,
                            'height': 60
                        },
                        'attrs': {
                            'body': {
                                'stroke': '#333333',
                                'strokeWidth': 1.5,
                                'strokeDasharray': null
                            }
                        },
                        'visible': true,
                        'shape': 'actor',
                        'ports': {
                            'groups': {
                                'top': {
                                    'position': 'top',
                                    'attrs': {
                                        'circle': {
                                            'r': 4,
                                            'magnet': true,
                                            'stroke': '#5F95FF',
                                            'strokeWidth': 1,
                                            'fill': '#fff',
                                            'style': {
                                                'visibility': 'hidden'
                                            }
                                        }
                                    }
                                },
                                'right': {
                                    'position': 'right',
                                    'attrs': {
                                        'circle': {
                                            'r': 4,
                                            'magnet': true,
                                            'stroke': '#5F95FF',
                                            'strokeWidth': 1,
                                            'fill': '#fff',
                                            'style': {
                                                'visibility': 'hidden'
                                            }
                                        }
                                    }
                                },
                                'bottom': {
                                    'position': 'bottom',
                                    'attrs': {
                                        'circle': {
                                            'r': 4,
                                            'magnet': true,
                                            'stroke': '#5F95FF',
                                            'strokeWidth': 1,
                                            'fill': '#fff',
                                            'style': {
                                                'visibility': 'hidden'
                                            }
                                        }
                                    }
                                },
                                'left': {
                                    'position': 'left',
                                    'attrs': {
                                        'circle': {
                                            'r': 4,
                                            'magnet': true,
                                            'stroke': '#5F95FF',
                                            'strokeWidth': 1,
                                            'fill': '#fff',
                                            'style': {
                                                'visibility': 'hidden'
                                            }
                                        }
                                    }
                                }
                            },
                            'items': [
                                {
                                    'group': 'top',
                                    'id': 'a343562e-6b0c-4994-b1c6-727f72b933dc'
                                },
                                {
                                    'group': 'right',
                                    'id': 'e49e59ac-7c66-44b4-afca-c22f7412c7d9'
                                },
                                {
                                    'group': 'bottom',
                                    'id': '09289b8f-872c-44cc-a738-0ff591b351dd'
                                },
                                {
                                    'group': 'left',
                                    'id': 'a946227e-c66c-499e-a9ee-afa53dd32496'
                                }
                            ]
                        },
                        'id': '5d8ae00f-c733-45ca-94e2-bb8396b28740',
                        'zIndex': 2,
                        'data': {
                            'type': 'tm.Actor',
                            'name': 'Actor',
                            'description': '',
                            'outOfScope': false,
                            'reasonOutOfScope': '',
                            'hasOpenThreats': false,
                            'providesAuthentication': false,
                            'threats': []
                        }
                    },
                    {
                        'position': {
                            'x': 305,
                            'y': 180
                        },
                        'size': {
                            'width': 90,
                            'height': 90
                        },
                        'attrs': {
                            'text': {
                                'text': 'GUI'
                            },
                            'body': {
                                'stroke': '#333333',
                                'strokeWidth': 1.5,
                                'strokeDasharray': null
                            }
                        },
                        'visible': true,
                        'shape': 'process',
                        'ports': {
                            'groups': {
                                'top': {
                                    'position': 'top',
                                    'attrs': {
                                        'circle': {
                                            'r': 4,
                                            'magnet': true,
                                            'stroke': '#5F95FF',
                                            'strokeWidth': 1,
                                            'fill': '#fff',
                                            'style': {
                                                'visibility': 'hidden'
                                            }
                                        }
                                    }
                                },
                                'right': {
                                    'position': 'right',
                                    'attrs': {
                                        'circle': {
                                            'r': 4,
                                            'magnet': true,
                                            'stroke': '#5F95FF',
                                            'strokeWidth': 1,
                                            'fill': '#fff',
                                            'style': {
                                                'visibility': 'hidden'
                                            }
                                        }
                                    }
                                },
                                'bottom': {
                                    'position': 'bottom',
                                    'attrs': {
                                        'circle': {
                                            'r': 4,
                                            'magnet': true,
                                            'stroke': '#5F95FF',
                                            'strokeWidth': 1,
                                            'fill': '#fff',
                                            'style': {
                                                'visibility': 'hidden'
                                            }
                                        }
                                    }
                                },
                                'left': {
                                    'position': 'left',
                                    'attrs': {
                                        'circle': {
                                            'r': 4,
                                            'magnet': true,
                                            'stroke': '#5F95FF',
                                            'strokeWidth': 1,
                                            'fill': '#fff',
                                            'style': {
                                                'visibility': 'hidden'
                                            }
                                        }
                                    }
                                }
                            },
                            'items': [
                                {
                                    'group': 'top',
                                    'id': '3439ffe7-f0be-4730-bfaa-0ad72cbf6ed8'
                                },
                                {
                                    'group': 'right',
                                    'id': '80875a0c-67c4-4d52-8b09-728beec42972'
                                },
                                {
                                    'group': 'bottom',
                                    'id': 'd3f5bb66-024e-4a0c-84e6-4501b4043000'
                                },
                                {
                                    'group': 'left',
                                    'id': '0d9330b1-3d69-4ff9-8958-070477cc5e4c'
                                }
                            ]
                        },
                        'id': 'ddd7882f-e3d2-404a-aacd-593e5c0792dd',
                        'zIndex': 3,
                        'data': {
                            'type': 'tm.Process',
                            'name': 'GUI',
                            'description': '',
                            'outOfScope': false,
                            'reasonOutOfScope': '',
                            'hasOpenThreats': false,
                            'handlesCardPayment': false,
                            'handlesGoodsOrServices': false,
                            'isWebApplication': false,
                            'privilegeLevel': '',
                            'threats': []
                        }
                    },
                    {
                        'position': {
                            'x': 499.9999999999993,
                            'y': 180
                        },
                        'size': {
                            'width': 90,
                            'height': 90
                        },
                        'attrs': {
                            'text': {
                                'text': 'wallet'
                            },
                            'body': {
                                'stroke': '#333333',
                                'strokeWidth': 1.5,
                                'strokeDasharray': null
                            }
                        },
                        'visible': true,
                        'shape': 'process',
                        'ports': {
                            'groups': {
                                'top': {
                                    'position': 'top',
                                    'attrs': {
                                        'circle': {
                                            'r': 4,
                                            'magnet': true,
                                            'stroke': '#5F95FF',
                                            'strokeWidth': 1,
                                            'fill': '#fff',
                                            'style': {
                                                'visibility': 'hidden'
                                            }
                                        }
                                    }
                                },
                                'right': {
                                    'position': 'right',
                                    'attrs': {
                                        'circle': {
                                            'r': 4,
                                            'magnet': true,
                                            'stroke': '#5F95FF',
                                            'strokeWidth': 1,
                                            'fill': '#fff',
                                            'style': {
                                                'visibility': 'hidden'
                                            }
                                        }
                                    }
                                },
                                'bottom': {
                                    'position': 'bottom',
                                    'attrs': {
                                        'circle': {
                                            'r': 4,
                                            'magnet': true,
                                            'stroke': '#5F95FF',
                                            'strokeWidth': 1,
                                            'fill': '#fff',
                                            'style': {
                                                'visibility': 'hidden'
                                            }
                                        }
                                    }
                                },
                                'left': {
                                    'position': 'left',
                                    'attrs': {
                                        'circle': {
                                            'r': 4,
                                            'magnet': true,
                                            'stroke': '#5F95FF',
                                            'strokeWidth': 1,
                                            'fill': '#fff',
                                            'style': {
                                                'visibility': 'hidden'
                                            }
                                        }
                                    }
                                }
                            },
                            'items': [
                                {
                                    'group': 'top',
                                    'id': '3439ffe7-f0be-4730-bfaa-0ad72cbf6ed8'
                                },
                                {
                                    'group': 'right',
                                    'id': '80875a0c-67c4-4d52-8b09-728beec42972'
                                },
                                {
                                    'group': 'bottom',
                                    'id': 'd3f5bb66-024e-4a0c-84e6-4501b4043000'
                                },
                                {
                                    'group': 'left',
                                    'id': '0d9330b1-3d69-4ff9-8958-070477cc5e4c'
                                }
                            ]
                        },
                        'id': '4be7fe20-8ae5-450f-aac4-78f94e73de76',
                        'zIndex': 4,
                        'data': {
                            'type': 'tm.Process',
                            'name': 'wallet',
                            'description': '',
                            'outOfScope': false,
                            'reasonOutOfScope': '',
                            'hasOpenThreats': false,
                            'handlesCardPayment': false,
                            'handlesGoodsOrServices': false,
                            'isWebApplication': false,
                            'privilegeLevel': '',
                            'threats': []
                        }
                    },
                    {
                        'position': {
                            'x': 395,
                            'y': 296
                        },
                        'size': {
                            'width': 80,
                            'height': 80
                        },
                        'attrs': {
                            'text': {
                                'text': 'Daemon'
                            },
                            'body': {
                                'stroke': 'red',
                                'strokeWidth': 2.5,
                                'strokeDasharray': null
                            }
                        },
                        'visible': true,
                        'shape': 'process',
                        'ports': {
                            'groups': {
                                'top': {
                                    'position': 'top',
                                    'attrs': {
                                        'circle': {
                                            'r': 4,
                                            'magnet': true,
                                            'stroke': '#5F95FF',
                                            'strokeWidth': 1,
                                            'fill': '#fff',
                                            'style': {
                                                'visibility': 'hidden'
                                            }
                                        }
                                    }
                                },
                                'right': {
                                    'position': 'right',
                                    'attrs': {
                                        'circle': {
                                            'r': 4,
                                            'magnet': true,
                                            'stroke': '#5F95FF',
                                            'strokeWidth': 1,
                                            'fill': '#fff',
                                            'style': {
                                                'visibility': 'hidden'
                                            }
                                        }
                                    }
                                },
                                'bottom': {
                                    'position': 'bottom',
                                    'attrs': {
                                        'circle': {
                                            'r': 4,
                                            'magnet': true,
                                            'stroke': '#5F95FF',
                                            'strokeWidth': 1,
                                            'fill': '#fff',
                                            'style': {
                                                'visibility': 'hidden'
                                            }
                                        }
                                    }
                                },
                                'left': {
                                    'position': 'left',
                                    'attrs': {
                                        'circle': {
                                            'r': 4,
                                            'magnet': true,
                                            'stroke': '#5F95FF',
                                            'strokeWidth': 1,
                                            'fill': '#fff',
                                            'style': {
                                                'visibility': 'hidden'
                                            }
                                        }
                                    }
                                }
                            },
                            'items': [
                                {
                                    'group': 'top',
                                    'id': '3439ffe7-f0be-4730-bfaa-0ad72cbf6ed8'
                                },
                                {
                                    'group': 'right',
                                    'id': '80875a0c-67c4-4d52-8b09-728beec42972'
                                },
                                {
                                    'group': 'bottom',
                                    'id': 'd3f5bb66-024e-4a0c-84e6-4501b4043000'
                                },
                                {
                                    'group': 'left',
                                    'id': '0d9330b1-3d69-4ff9-8958-070477cc5e4c'
                                }
                            ]
                        },
                        'id': '474d7a5e-e8de-443d-9c22-36fdf8eb0843',
                        'zIndex': 5,
                        'data': {
                            'type': 'tm.Process',
                            'name': 'Daemon',
                            'description': '',
                            'outOfScope': false,
                            'reasonOutOfScope': '',
                            'hasOpenThreats': true,
                            'handlesCardPayment': false,
                            'handlesGoodsOrServices': false,
                            'isWebApplication': false,
                            'privilegeLevel': '',
                            'threats': [
                                {
                                    'id': '32cbe884-1c14-43b7-98e0-a40f58c2b284',
                                    'title': 'Authentication',
                                    'status': 'Open',
                                    'severity': 'Critical',
                                    'type': 'Integrity',
                                    'description': 'There is no authentication in place for the requests from the browser',
                                    'mitigation': 'None as yet :)',
                                    'modelType': 'CIA',
                                    'new': false,
                                    'number': 1,
                                    'score': '10.0'
                                }
                            ],
                            'threatFrequency': {
                                'confidentiality': 0,
                                'integrity': 1,
                                'availability': 0
                            }
                        }
                    },
                    {
                        'shape': 'flow',
                        'attrs': {
                            'line': {
                                'stroke': '#333333',
                                'targetMarker': {
                                    'name': 'block'
                                },
                                'sourceMarker': {
                                    'name': ''
                                },
                                'strokeDasharray': null
                            }
                        },
                        'width': 200,
                        'height': 100,
                        'zIndex': 10,
                        'labels': [
                            {
                                'markup': [
                                    {
                                        'tagName': 'ellipse',
                                        'selector': 'labelBody'
                                    },
                                    {
                                        'tagName': 'text',
                                        'selector': 'labelText'
                                    }
                                ],
                                'attrs': {
                                    'labelText': {
                                        'text': '',
                                        'textAnchor': 'middle',
                                        'textVerticalAnchor': 'middle'
                                    },
                                    'labelBody': {
                                        'ref': 'labelText',
                                        'refRx': '50%',
                                        'refRy': '60%',
                                        'fill': '#fff',
                                        'strokeWidth': 0
                                    }
                                },
                                'position': {
                                    'distance': 0.5,
                                    'args': {
                                        'keepGradient': true,
                                        'ensureLegibility': true
                                    }
                                }
                            }
                        ],
                        'connector': 'smooth',
                        'data': {
                            'type': 'tm.Flow',
                            'name': '',
                            'description': '',
                            'outOfScope': false,
                            'reasonOutOfScope': '',
                            'hasOpenThreats': false,
                            'isBidirectional': false,
                            'isEncrypted': false,
                            'isPublicNetwork': false,
                            'protocol': '',
                            'threats': []
                        },
                        'id': '0cf345db-dc9d-4510-b478-af2bc3c60c32',
                        'source': {
                            'cell': '5d8ae00f-c733-45ca-94e2-bb8396b28740',
                            'port': 'e49e59ac-7c66-44b4-afca-c22f7412c7d9'
                        },
                        'target': {
                            'cell': 'ddd7882f-e3d2-404a-aacd-593e5c0792dd',
                            'port': '0d9330b1-3d69-4ff9-8958-070477cc5e4c'
                        },
                        'vertices': []
                    },
                    {
                        'shape': 'flow',
                        'attrs': {
                            'line': {
                                'stroke': '#333333',
                                'targetMarker': {
                                    'name': 'block'
                                },
                                'sourceMarker': {
                                    'name': ''
                                },
                                'strokeDasharray': null
                            }
                        },
                        'width': 200,
                        'height': 100,
                        'zIndex': 10,
                        'labels': [
                            {
                                'markup': [
                                    {
                                        'tagName': 'ellipse',
                                        'selector': 'labelBody'
                                    },
                                    {
                                        'tagName': 'text',
                                        'selector': 'labelText'
                                    }
                                ],
                                'attrs': {
                                    'labelText': {
                                        'text': '',
                                        'textAnchor': 'middle',
                                        'textVerticalAnchor': 'middle'
                                    },
                                    'labelBody': {
                                        'ref': 'labelText',
                                        'refRx': '50%',
                                        'refRy': '60%',
                                        'fill': '#fff',
                                        'strokeWidth': 0
                                    }
                                },
                                'position': {
                                    'distance': 0.5,
                                    'args': {
                                        'keepGradient': true,
                                        'ensureLegibility': true
                                    }
                                }
                            }
                        ],
                        'connector': 'smooth',
                        'data': {
                            'type': 'tm.Flow',
                            'name': 'HTTP\nJSON RPC',
                            'description': 'random port localhost',
                            'outOfScope': false,
                            'reasonOutOfScope': '',
                            'hasOpenThreats': false,
                            'isBidirectional': false,
                            'isEncrypted': false,
                            'isPublicNetwork': false,
                            'protocol': '',
                            'threats': []
                        },
                        'id': '1cb23543-d51c-4b3e-b5c8-991bf8b513ee',
                        'source': {
                            'cell': 'd451d00f-7f93-4b8e-99f4-469aaddb271b',
                            'port': '3439ffe7-f0be-4730-bfaa-0ad72cbf6ed8'
                        },
                        'target': {
                            'cell': '474d7a5e-e8de-443d-9c22-36fdf8eb0843',
                            'port': 'd3f5bb66-024e-4a0c-84e6-4501b4043000'
                        },
                        'vertices': []
                    },
                    {
                        'shape': 'flow',
                        'attrs': {
                            'line': {
                                'stroke': '#333333',
                                'targetMarker': {
                                    'name': 'block'
                                },
                                'sourceMarker': {
                                    'name': 'block'
                                },
                                'strokeDasharray': null
                            }
                        },
                        'width': 200,
                        'height': 100,
                        'zIndex': 10,
                        'labels': [
                            {
                                'markup': [
                                    {
                                        'tagName': 'ellipse',
                                        'selector': 'labelBody'
                                    },
                                    {
                                        'tagName': 'text',
                                        'selector': 'labelText'
                                    }
                                ],
                                'attrs': {
                                    'labelText': {
                                        'text': '',
                                        'textAnchor': 'middle',
                                        'textVerticalAnchor': 'middle'
                                    },
                                    'labelBody': {
                                        'ref': 'labelText',
                                        'refRx': '50%',
                                        'refRy': '60%',
                                        'fill': '#fff',
                                        'strokeWidth': 0
                                    }
                                },
                                'position': {
                                    'distance': 0.5,
                                    'args': {
                                        'keepGradient': true,
                                        'ensureLegibility': true
                                    }
                                }
                            }
                        ],
                        'connector': 'smooth',
                        'data': {
                            'type': 'tm.Flow',
                            'name': '',
                            'description': '',
                            'outOfScope': false,
                            'reasonOutOfScope': '',
                            'hasOpenThreats': false,
                            'isBidirectional': true,
                            'isEncrypted': false,
                            'isPublicNetwork': false,
                            'protocol': '',
                            'threats': []
                        },
                        'id': '7b650900-c47d-47a0-ae19-2af3340e057b',
                        'source': {
                            'cell': '474d7a5e-e8de-443d-9c22-36fdf8eb0843',
                            'port': '80875a0c-67c4-4d52-8b09-728beec42972'
                        },
                        'target': {
                            'cell': '4be7fe20-8ae5-450f-aac4-78f94e73de76',
                            'port': 'd3f5bb66-024e-4a0c-84e6-4501b4043000'
                        },
                        'vertices': [
                            {
                                'x': 545,
                                'y': 320
                            }
                        ]
                    },
                    {
                        'shape': 'flow',
                        'attrs': {
                            'line': {
                                'stroke': '#333333',
                                'targetMarker': {
                                    'name': 'block'
                                },
                                'sourceMarker': {
                                    'name': 'block'
                                },
                                'strokeDasharray': null
                            }
                        },
                        'width': 200,
                        'height': 100,
                        'zIndex': 10,
                        'labels': [
                            {
                                'markup': [
                                    {
                                        'tagName': 'ellipse',
                                        'selector': 'labelBody'
                                    },
                                    {
                                        'tagName': 'text',
                                        'selector': 'labelText'
                                    }
                                ],
                                'attrs': {
                                    'labelText': {
                                        'text': '',
                                        'textAnchor': 'middle',
                                        'textVerticalAnchor': 'middle'
                                    },
                                    'labelBody': {
                                        'ref': 'labelText',
                                        'refRx': '50%',
                                        'refRy': '60%',
                                        'fill': '#fff',
                                        'strokeWidth': 0
                                    }
                                },
                                'position': {
                                    'distance': 0.5,
                                    'args': {
                                        'keepGradient': true,
                                        'ensureLegibility': true
                                    }
                                }
                            }
                        ],
                        'connector': 'smooth',
                        'data': {
                            'type': 'tm.Flow',
                            'name': '',
                            'description': '',
                            'outOfScope': false,
                            'reasonOutOfScope': '',
                            'hasOpenThreats': false,
                            'isBidirectional': true,
                            'isEncrypted': false,
                            'isPublicNetwork': false,
                            'protocol': '',
                            'threats': []
                        },
                        'id': '4ab3c254-15f6-4ca3-875f-5f14b331ae74',
                        'source': {
                            'cell': 'ddd7882f-e3d2-404a-aacd-593e5c0792dd',
                            'port': '80875a0c-67c4-4d52-8b09-728beec42972'
                        },
                        'target': {
                            'cell': '4be7fe20-8ae5-450f-aac4-78f94e73de76',
                            'port': '0d9330b1-3d69-4ff9-8958-070477cc5e4c'
                        },
                        'vertices': []
                    },
                    {
                        'shape': 'flow',
                        'attrs': {
                            'line': {
                                'stroke': '#333333',
                                'targetMarker': {
                                    'name': 'block'
                                },
                                'sourceMarker': {
                                    'name': 'block'
                                },
                                'strokeDasharray': null
                            }
                        },
                        'width': 200,
                        'height': 100,
                        'zIndex': 10,
                        'labels': [
                            {
                                'markup': [
                                    {
                                        'tagName': 'ellipse',
                                        'selector': 'labelBody'
                                    },
                                    {
                                        'tagName': 'text',
                                        'selector': 'labelText'
                                    }
                                ],
                                'attrs': {
                                    'labelText': {
                                        'text': '',
                                        'textAnchor': 'middle',
                                        'textVerticalAnchor': 'middle'
                                    },
                                    'labelBody': {
                                        'ref': 'labelText',
                                        'refRx': '50%',
                                        'refRy': '60%',
                                        'fill': '#fff',
                                        'strokeWidth': 0
                                    }
                                },
                                'position': {
                                    'distance': 0.5,
                                    'args': {
                                        'keepGradient': true,
                                        'ensureLegibility': true
                                    }
                                }
                            }
                        ],
                        'connector': 'smooth',
                        'data': {
                            'type': 'tm.Flow',
                            'name': '',
                            'description': '',
                            'outOfScope': false,
                            'reasonOutOfScope': '',
                            'hasOpenThreats': false,
                            'isBidirectional': true,
                            'isEncrypted': false,
                            'isPublicNetwork': false,
                            'protocol': '',
                            'threats': []
                        },
                        'id': 'ea6e5b5d-e918-43f2-8798-5f6c39435084',
                        'source': {
                            'cell': '5d8ae00f-c733-45ca-94e2-bb8396b28740',
                            'port': '09289b8f-872c-44cc-a738-0ff591b351dd'
                        },
                        'target': {
                            'cell': 'd451d00f-7f93-4b8e-99f4-469aaddb271b',
                            'port': '0d9330b1-3d69-4ff9-8958-070477cc5e4c'
                        },
                        'vertices': [
                            {
                                'x': 220,
                                'y': 520
                            }
                        ]
                    },
                    {
                        'shape': 'flow',
                        'attrs': {
                            'line': {
                                'stroke': '#333333',
                                'targetMarker': {
                                    'name': 'block'
                                },
                                'sourceMarker': {
                                    'name': 'block'
                                },
                                'strokeDasharray': null
                            }
                        },
                        'width': 200,
                        'height': 100,
                        'zIndex': 10,
                        'labels': [
                            {
                                'markup': [
                                    {
                                        'tagName': 'ellipse',
                                        'selector': 'labelBody'
                                    },
                                    {
                                        'tagName': 'text',
                                        'selector': 'labelText'
                                    }
                                ],
                                'attrs': {
                                    'labelText': {
                                        'text': '',
                                        'textAnchor': 'middle',
                                        'textVerticalAnchor': 'middle'
                                    },
                                    'labelBody': {
                                        'ref': 'labelText',
                                        'refRx': '50%',
                                        'refRy': '60%',
                                        'fill': '#fff',
                                        'strokeWidth': 0
                                    }
                                },
                                'position': {
                                    'distance': 0.5,
                                    'args': {
                                        'keepGradient': true,
                                        'ensureLegibility': true
                                    }
                                }
                            }
                        ],
                        'connector': 'smooth',
                        'data': {
                            'type': 'tm.Flow',
                            'name': '',
                            'description': '',
                            'outOfScope': false,
                            'reasonOutOfScope': '',
                            'hasOpenThreats': false,
                            'isBidirectional': true,
                            'isEncrypted': false,
                            'isPublicNetwork': false,
                            'protocol': '',
                            'threats': []
                        },
                        'id': 'db6394bf-5497-4f94-8dfe-74bfa6c16072',
                        'source': {
                            'cell': '5d8ae00f-c733-45ca-94e2-bb8396b28740',
                            'port': '09289b8f-872c-44cc-a738-0ff591b351dd'
                        },
                        'target': {
                            'cell': '3c8c5cb4-4973-454c-b561-3a1f1c737f6a',
                            'port': '0d9330b1-3d69-4ff9-8958-070477cc5e4c'
                        },
                        'vertices': [
                            {
                                'x': 120,
                                'y': 580
                            }
                        ]
                    },
                    {
                        'shape': 'flow',
                        'attrs': {
                            'line': {
                                'stroke': '#333333',
                                'targetMarker': {
                                    'name': 'block'
                                },
                                'sourceMarker': {
                                    'name': ''
                                },
                                'strokeDasharray': null
                            }
                        },
                        'width': 200,
                        'height': 100,
                        'zIndex': 10,
                        'labels': [
                            {
                                'markup': [
                                    {
                                        'tagName': 'ellipse',
                                        'selector': 'labelBody'
                                    },
                                    {
                                        'tagName': 'text',
                                        'selector': 'labelText'
                                    }
                                ],
                                'attrs': {
                                    'labelText': {
                                        'text': '',
                                        'textAnchor': 'middle',
                                        'textVerticalAnchor': 'middle'
                                    },
                                    'labelBody': {
                                        'ref': 'labelText',
                                        'refRx': '50%',
                                        'refRy': '60%',
                                        'fill': '#fff',
                                        'strokeWidth': 0
                                    }
                                },
                                'position': {
                                    'distance': 0.5,
                                    'args': {
                                        'keepGradient': true,
                                        'ensureLegibility': true
                                    }
                                }
                            }
                        ],
                        'connector': 'smooth',
                        'data': {
                            'type': 'tm.Flow',
                            'name': 'SPV',
                            'description': '',
                            'outOfScope': false,
                            'reasonOutOfScope': '',
                            'hasOpenThreats': false,
                            'isBidirectional': false,
                            'isEncrypted': false,
                            'isPublicNetwork': false,
                            'protocol': '',
                            'threats': []
                        },
                        'id': '0ff9bca6-4d4a-41bb-ae1f-f165d6d2481e',
                        'source': {
                            'cell': '3ed55b75-758d-4c2e-9381-67297b81349e',
                            'port': '80875a0c-67c4-4d52-8b09-728beec42972'
                        },
                        'target': {
                            'cell': '3258392b-4882-4566-8b62-5813702f27b6',
                            'port': 'a946227e-c66c-499e-a9ee-afa53dd32496'
                        },
                        'vertices': []
                    },
                    {
                        'shape': 'flow',
                        'attrs': {
                            'line': {
                                'stroke': '#333333',
                                'targetMarker': {
                                    'name': 'block'
                                },
                                'sourceMarker': {
                                    'name': ''
                                },
                                'strokeDasharray': null
                            }
                        },
                        'width': 200,
                        'height': 100,
                        'zIndex': 10,
                        'labels': [
                            {
                                'markup': [
                                    {
                                        'tagName': 'ellipse',
                                        'selector': 'labelBody'
                                    },
                                    {
                                        'tagName': 'text',
                                        'selector': 'labelText'
                                    }
                                ],
                                'attrs': {
                                    'labelText': {
                                        'text': '',
                                        'textAnchor': 'middle',
                                        'textVerticalAnchor': 'middle'
                                    },
                                    'labelBody': {
                                        'ref': 'labelText',
                                        'refRx': '50%',
                                        'refRy': '60%',
                                        'fill': '#fff',
                                        'strokeWidth': 0
                                    }
                                },
                                'position': {
                                    'distance': 0.5,
                                    'args': {
                                        'keepGradient': true,
                                        'ensureLegibility': true
                                    }
                                }
                            }
                        ],
                        'connector': 'smooth',
                        'data': {
                            'type': 'tm.Flow',
                            'name': 'TCP+SSL 500002\nJSON RPC',
                            'description': '',
                            'outOfScope': false,
                            'reasonOutOfScope': '',
                            'hasOpenThreats': false,
                            'isBidirectional': false,
                            'isEncrypted': false,
                            'isPublicNetwork': false,
                            'protocol': '',
                            'threats': []
                        },
                        'id': 'c0cd4722-49a5-490d-9379-d5321ac3592d',
                        'source': {
                            'cell': '4be7fe20-8ae5-450f-aac4-78f94e73de76',
                            'port': '80875a0c-67c4-4d52-8b09-728beec42972'
                        },
                        'target': {
                            'cell': '3ed55b75-758d-4c2e-9381-67297b81349e',
                            'port': '0d9330b1-3d69-4ff9-8958-070477cc5e4c'
                        },
                        'vertices': []
                    },
                    {
                        'shape': 'trust-boundary-curve',
                        'width': 200,
                        'height': 100,
                        'zIndex': 10,
                        'labels': [
                            {
                                'markup': [
                                    {
                                        'tagName': 'ellipse',
                                        'selector': 'labelBody'
                                    },
                                    {
                                        'tagName': 'text',
                                        'selector': 'labelText'
                                    }
                                ],
                                'attrs': {
                                    'labelText': {
                                        'text': 'Internet',
                                        'textAnchor': 'middle',
                                        'textVerticalAnchor': 'middle'
                                    },
                                    'labelBody': {
                                        'ref': 'labelText',
                                        'refRx': '50%',
                                        'refRy': '60%',
                                        'fill': '#fff',
                                        'strokeWidth': 0
                                    }
                                },
                                'position': {
                                    'distance': 0.5,
                                    'args': {
                                        'keepGradient': true,
                                        'ensureLegibility': true
                                    }
                                }
                            }
                        ],
                        'connector': 'smooth',
                        'data': {
                            'type': 'tm.Boundary',
                            'name': 'Internet',
                            'description': '',
                            'isTrustBoundary': true,
                            'hasOpenThreats': false
                        },
                        'id': '359fe142-a818-4445-839e-c1820a42c5cf',
                        'source': {
                            'x': 820,
                            'y': -30
                        },
                        'target': {
                            'x': 620,
                            'y': 940
                        },
                        'vertices': [
                            {
                                'x': 780,
                                'y': 400
                            },
                            {
                                'x': 750,
                                'y': 750
                            }
                        ]
                    },
                    {
                        'shape': 'flow',
                        'attrs': {
                            'line': {
                                'stroke': '#333333',
                                'targetMarker': {
                                    'name': 'block'
                                },
                                'sourceMarker': {
                                    'name': ''
                                },
                                'strokeDasharray': null
                            }
                        },
                        'width': 200,
                        'height': 100,
                        'zIndex': 10,
                        'labels': [
                            {
                                'markup': [
                                    {
                                        'tagName': 'ellipse',
                                        'selector': 'labelBody'
                                    },
                                    {
                                        'tagName': 'text',
                                        'selector': 'labelText'
                                    }
                                ],
                                'attrs': {
                                    'labelText': {
                                        'text': '',
                                        'textAnchor': 'middle',
                                        'textVerticalAnchor': 'middle'
                                    },
                                    'labelBody': {
                                        'ref': 'labelText',
                                        'refRx': '50%',
                                        'refRy': '60%',
                                        'fill': '#fff',
                                        'strokeWidth': 0
                                    }
                                },
                                'position': {
                                    'distance': 0.5,
                                    'args': {
                                        'keepGradient': true,
                                        'ensureLegibility': true
                                    }
                                }
                            }
                        ],
                        'connector': 'smooth',
                        'data': {
                            'type': 'tm.Flow',
                            'name': 'HTTPS',
                            'description': '',
                            'outOfScope': false,
                            'reasonOutOfScope': '',
                            'hasOpenThreats': false,
                            'isBidirectional': false,
                            'isEncrypted': false,
                            'isPublicNetwork': false,
                            'protocol': 'HTTPS',
                            'threats': []
                        },
                        'id': '844b43a6-9236-4967-a200-f7927045a476',
                        'source': {
                            'cell': 'd451d00f-7f93-4b8e-99f4-469aaddb271b',
                            'port': '80875a0c-67c4-4d52-8b09-728beec42972'
                        },
                        'target': {
                            'cell': '9b88cf3a-5bf8-42da-b7a3-5756a7412304',
                            'port': '0d9330b1-3d69-4ff9-8958-070477cc5e4c'
                        },
                        'vertices': []
                    },
                    {
                        'shape': 'flow',
                        'attrs': {
                            'line': {
                                'stroke': '#333333',
                                'targetMarker': {
                                    'name': 'block'
                                },
                                'sourceMarker': {
                                    'name': ''
                                },
                                'strokeDasharray': null
                            }
                        },
                        'width': 200,
                        'height': 100,
                        'zIndex': 10,
                        'labels': [
                            {
                                'markup': [
                                    {
                                        'tagName': 'ellipse',
                                        'selector': 'labelBody'
                                    },
                                    {
                                        'tagName': 'text',
                                        'selector': 'labelText'
                                    }
                                ],
                                'attrs': {
                                    'labelText': {
                                        'text': '',
                                        'textAnchor': 'middle',
                                        'textVerticalAnchor': 'middle'
                                    },
                                    'labelBody': {
                                        'ref': 'labelText',
                                        'refRx': '50%',
                                        'refRy': '60%',
                                        'fill': '#fff',
                                        'strokeWidth': 0
                                    }
                                },
                                'position': {
                                    'distance': 0.5,
                                    'args': {
                                        'keepGradient': true,
                                        'ensureLegibility': true
                                    }
                                }
                            }
                        ],
                        'connector': 'smooth',
                        'data': {
                            'type': 'tm.Flow',
                            'name': 'HTTPS',
                            'description': '',
                            'outOfScope': false,
                            'reasonOutOfScope': '',
                            'hasOpenThreats': false,
                            'isBidirectional': false,
                            'isEncrypted': false,
                            'isPublicNetwork': false,
                            'protocol': 'HTTPS',
                            'threats': []
                        },
                        'id': '9febb44e-6836-4c9c-9ad3-50b04f088f4e',
                        'source': {
                            'cell': 'd451d00f-7f93-4b8e-99f4-469aaddb271b',
                            'port': '80875a0c-67c4-4d52-8b09-728beec42972'
                        },
                        'target': {
                            'cell': 'abf79300-add9-47ff-bb5f-1559aebba405',
                            'port': '0d9330b1-3d69-4ff9-8958-070477cc5e4c'
                        },
                        'vertices': [
                            {
                                'x': 640,
                                'y': 610
                            }
                        ]
                    },
                    {
                        'shape': 'flow',
                        'attrs': {
                            'line': {
                                'stroke': '#333333',
                                'targetMarker': {
                                    'name': 'block'
                                },
                                'sourceMarker': {
                                    'name': ''
                                },
                                'strokeDasharray': null
                            }
                        },
                        'width': 200,
                        'height': 100,
                        'zIndex': 10,
                        'labels': [
                            {
                                'markup': [
                                    {
                                        'tagName': 'ellipse',
                                        'selector': 'labelBody'
                                    },
                                    {
                                        'tagName': 'text',
                                        'selector': 'labelText'
                                    }
                                ],
                                'attrs': {
                                    'labelText': {
                                        'text': '',
                                        'textAnchor': 'middle',
                                        'textVerticalAnchor': 'middle'
                                    },
                                    'labelBody': {
                                        'ref': 'labelText',
                                        'refRx': '50%',
                                        'refRy': '60%',
                                        'fill': '#fff',
                                        'strokeWidth': 0
                                    }
                                },
                                'position': {
                                    'distance': 0.5,
                                    'args': {
                                        'keepGradient': true,
                                        'ensureLegibility': true
                                    }
                                }
                            }
                        ],
                        'connector': 'smooth',
                        'data': {
                            'type': 'tm.Flow',
                            'name': 'HTTP',
                            'description': '',
                            'outOfScope': false,
                            'reasonOutOfScope': '',
                            'hasOpenThreats': false,
                            'isBidirectional': false,
                            'isEncrypted': false,
                            'isPublicNetwork': false,
                            'protocol': 'HTTP',
                            'threats': []
                        },
                        'id': 'dd5bb736-2f70-41a6-8590-560078f29c5b',
                        'source': {
                            'cell': 'abf79300-add9-47ff-bb5f-1559aebba405',
                            'port': 'd3f5bb66-024e-4a0c-84e6-4501b4043000'
                        },
                        'target': {
                            'cell': '253870a2-b372-4419-95d0-5b05640e9723',
                            'port': '3439ffe7-f0be-4730-bfaa-0ad72cbf6ed8'
                        },
                        'vertices': []
                    },
                    {
                        'shape': 'flow',
                        'attrs': {
                            'line': {
                                'stroke': '#333333',
                                'targetMarker': {
                                    'name': 'block'
                                },
                                'sourceMarker': {
                                    'name': ''
                                },
                                'strokeDasharray': null
                            }
                        },
                        'width': 200,
                        'height': 100,
                        'zIndex': 10,
                        'labels': [
                            {
                                'markup': [
                                    {
                                        'tagName': 'ellipse',
                                        'selector': 'labelBody'
                                    },
                                    {
                                        'tagName': 'text',
                                        'selector': 'labelText'
                                    }
                                ],
                                'attrs': {
                                    'labelText': {
                                        'text': '',
                                        'textAnchor': 'middle',
                                        'textVerticalAnchor': 'middle'
                                    },
                                    'labelBody': {
                                        'ref': 'labelText',
                                        'refRx': '50%',
                                        'refRy': '60%',
                                        'fill': '#fff',
                                        'strokeWidth': 0
                                    }
                                },
                                'position': {
                                    'distance': 0.5,
                                    'args': {
                                        'keepGradient': true,
                                        'ensureLegibility': true
                                    }
                                }
                            }
                        ],
                        'connector': 'smooth',
                        'data': {
                            'type': 'tm.Flow',
                            'name': 'Websocket\nSecure',
                            'description': '',
                            'outOfScope': false,
                            'reasonOutOfScope': '',
                            'hasOpenThreats': false,
                            'isBidirectional': false,
                            'isEncrypted': false,
                            'isPublicNetwork': false,
                            'protocol': '',
                            'threats': []
                        },
                        'id': '0028f92c-8055-4914-95f9-fe3d916453bc',
                        'source': {
                            'cell': '8d84ce52-50f9-467e-b7dd-732b1f3e9c4c',
                            'port': '80875a0c-67c4-4d52-8b09-728beec42972'
                        },
                        'target': {
                            'cell': '253870a2-b372-4419-95d0-5b05640e9723',
                            'port': '0d9330b1-3d69-4ff9-8958-070477cc5e4c'
                        },
                        'vertices': []
                    },
                    {
                        'shape': 'flow',
                        'attrs': {
                            'line': {
                                'stroke': '#333333',
                                'targetMarker': {
                                    'name': 'block'
                                },
                                'sourceMarker': {
                                    'name': ''
                                },
                                'strokeDasharray': null
                            }
                        },
                        'width': 200,
                        'height': 100,
                        'zIndex': 10,
                        'labels': [
                            {
                                'markup': [
                                    {
                                        'tagName': 'ellipse',
                                        'selector': 'labelBody'
                                    },
                                    {
                                        'tagName': 'text',
                                        'selector': 'labelText'
                                    }
                                ],
                                'attrs': {
                                    'labelText': {
                                        'text': '',
                                        'textAnchor': 'middle',
                                        'textVerticalAnchor': 'middle'
                                    },
                                    'labelBody': {
                                        'ref': 'labelText',
                                        'refRx': '50%',
                                        'refRy': '60%',
                                        'fill': '#fff',
                                        'strokeWidth': 0
                                    }
                                },
                                'position': {
                                    'distance': 0.5,
                                    'args': {
                                        'keepGradient': true,
                                        'ensureLegibility': true
                                    }
                                }
                            }
                        ],
                        'connector': 'smooth',
                        'data': {
                            'type': 'tm.Flow',
                            'name': 'HTTPS',
                            'description': '',
                            'outOfScope': false,
                            'reasonOutOfScope': '',
                            'hasOpenThreats': false,
                            'isBidirectional': false,
                            'isEncrypted': false,
                            'isPublicNetwork': false,
                            'protocol': 'HTTPS',
                            'threats': []
                        },
                        'id': '6159b2f1-fcbc-41b1-9d62-1fab4b809e34',
                        'source': {
                            'cell': '3c8c5cb4-4973-454c-b561-3a1f1c737f6a',
                            'port': '80875a0c-67c4-4d52-8b09-728beec42972'
                        },
                        'target': {
                            'cell': '253870a2-b372-4419-95d0-5b05640e9723',
                            'port': '3439ffe7-f0be-4730-bfaa-0ad72cbf6ed8'
                        },
                        'vertices': []
                    },
                    {
                        'shape': 'flow',
                        'attrs': {
                            'line': {
                                'stroke': '#333333',
                                'targetMarker': {
                                    'name': 'block'
                                },
                                'sourceMarker': {
                                    'name': ''
                                },
                                'strokeDasharray': null
                            }
                        },
                        'width': 200,
                        'height': 100,
                        'zIndex': 10,
                        'labels': [
                            {
                                'markup': [
                                    {
                                        'tagName': 'ellipse',
                                        'selector': 'labelBody'
                                    },
                                    {
                                        'tagName': 'text',
                                        'selector': 'labelText'
                                    }
                                ],
                                'attrs': {
                                    'labelText': {
                                        'text': '',
                                        'textAnchor': 'middle',
                                        'textVerticalAnchor': 'middle'
                                    },
                                    'labelBody': {
                                        'ref': 'labelText',
                                        'refRx': '50%',
                                        'refRy': '60%',
                                        'fill': '#fff',
                                        'strokeWidth': 0
                                    }
                                },
                                'position': {
                                    'distance': 0.5,
                                    'args': {
                                        'keepGradient': true,
                                        'ensureLegibility': true
                                    }
                                }
                            }
                        ],
                        'connector': 'smooth',
                        'data': {
                            'type': 'tm.Flow',
                            'name': '',
                            'description': '',
                            'outOfScope': false,
                            'reasonOutOfScope': '',
                            'hasOpenThreats': false,
                            'isBidirectional': false,
                            'isEncrypted': false,
                            'isPublicNetwork': false,
                            'protocol': '',
                            'threats': []
                        },
                        'id': 'e5cad6eb-8e7a-45e2-b59a-61b5be27efb7',
                        'source': {
                            'cell': '08b3cbf4-fe41-437b-9401-44f16f79d273',
                            'port': 'd3f5bb66-024e-4a0c-84e6-4501b4043000'
                        },
                        'target': {
                            'cell': 'c8b51733-6465-4a45-aeee-b4c38d2fcf2c',
                            'port': '5376c37b-c00a-4991-b607-8406ac9bd925'
                        },
                        'vertices': []
                    },
                    {
                        'shape': 'flow',
                        'attrs': {
                            'line': {
                                'stroke': '#333333',
                                'targetMarker': {
                                    'name': 'block'
                                },
                                'sourceMarker': {
                                    'name': ''
                                },
                                'strokeDasharray': null
                            }
                        },
                        'width': 200,
                        'height': 100,
                        'zIndex': 10,
                        'labels': [
                            {
                                'markup': [
                                    {
                                        'tagName': 'ellipse',
                                        'selector': 'labelBody'
                                    },
                                    {
                                        'tagName': 'text',
                                        'selector': 'labelText'
                                    }
                                ],
                                'attrs': {
                                    'labelText': {
                                        'text': '',
                                        'textAnchor': 'middle',
                                        'textVerticalAnchor': 'middle'
                                    },
                                    'labelBody': {
                                        'ref': 'labelText',
                                        'refRx': '50%',
                                        'refRy': '60%',
                                        'fill': '#fff',
                                        'strokeWidth': 0
                                    }
                                },
                                'position': {
                                    'distance': 0.5,
                                    'args': {
                                        'keepGradient': true,
                                        'ensureLegibility': true
                                    }
                                }
                            }
                        ],
                        'connector': 'smooth',
                        'data': {
                            'type': 'tm.Flow',
                            'name': '',
                            'description': '',
                            'outOfScope': false,
                            'reasonOutOfScope': '',
                            'hasOpenThreats': false,
                            'isBidirectional': false,
                            'isEncrypted': false,
                            'isPublicNetwork': false,
                            'protocol': '',
                            'threats': []
                        },
                        'id': 'c8c06d6e-248b-4fd2-8292-b74e45cef672',
                        'source': {
                            'cell': 'abf79300-add9-47ff-bb5f-1559aebba405',
                            'port': '80875a0c-67c4-4d52-8b09-728beec42972'
                        },
                        'target': {
                            'cell': 'c8b51733-6465-4a45-aeee-b4c38d2fcf2c',
                            'port': 'dd4e71a7-9731-471d-ade8-795784806f0d'
                        },
                        'vertices': []
                    },
                    {
                        'shape': 'flow',
                        'attrs': {
                            'line': {
                                'stroke': '#333333',
                                'targetMarker': {
                                    'name': 'block'
                                },
                                'sourceMarker': {
                                    'name': ''
                                },
                                'strokeDasharray': null
                            }
                        },
                        'width': 200,
                        'height': 100,
                        'zIndex': 10,
                        'labels': [
                            {
                                'markup': [
                                    {
                                        'tagName': 'ellipse',
                                        'selector': 'labelBody'
                                    },
                                    {
                                        'tagName': 'text',
                                        'selector': 'labelText'
                                    }
                                ],
                                'attrs': {
                                    'labelText': {
                                        'text': '',
                                        'textAnchor': 'middle',
                                        'textVerticalAnchor': 'middle'
                                    },
                                    'labelBody': {
                                        'ref': 'labelText',
                                        'refRx': '50%',
                                        'refRy': '60%',
                                        'fill': '#fff',
                                        'strokeWidth': 0
                                    }
                                },
                                'position': {
                                    'distance': 0.5,
                                    'args': {
                                        'keepGradient': true,
                                        'ensureLegibility': true
                                    }
                                }
                            }
                        ],
                        'connector': 'smooth',
                        'data': {
                            'type': 'tm.Flow',
                            'name': '',
                            'description': '',
                            'outOfScope': false,
                            'reasonOutOfScope': '',
                            'hasOpenThreats': false,
                            'isBidirectional': false,
                            'isEncrypted': false,
                            'isPublicNetwork': false,
                            'protocol': '',
                            'threats': []
                        },
                        'id': '018b40b0-acda-485d-b277-35d56a818b7b',
                        'source': {
                            'cell': 'abf79300-add9-47ff-bb5f-1559aebba405',
                            'port': '3439ffe7-f0be-4730-bfaa-0ad72cbf6ed8'
                        },
                        'target': {
                            'cell': '08b3cbf4-fe41-437b-9401-44f16f79d273',
                            'port': 'd3f5bb66-024e-4a0c-84e6-4501b4043000'
                        },
                        'vertices': []
                    },
                    {
                        'shape': 'flow',
                        'attrs': {
                            'line': {
                                'stroke': '#333333',
                                'targetMarker': {
                                    'name': 'block'
                                },
                                'sourceMarker': {
                                    'name': ''
                                },
                                'strokeDasharray': null
                            }
                        },
                        'width': 200,
                        'height': 100,
                        'zIndex': 10,
                        'labels': [
                            {
                                'markup': [
                                    {
                                        'tagName': 'ellipse',
                                        'selector': 'labelBody'
                                    },
                                    {
                                        'tagName': 'text',
                                        'selector': 'labelText'
                                    }
                                ],
                                'attrs': {
                                    'labelText': {
                                        'text': '',
                                        'textAnchor': 'middle',
                                        'textVerticalAnchor': 'middle'
                                    },
                                    'labelBody': {
                                        'ref': 'labelText',
                                        'refRx': '50%',
                                        'refRy': '60%',
                                        'fill': '#fff',
                                        'strokeWidth': 0
                                    }
                                },
                                'position': {
                                    'distance': 0.5,
                                    'args': {
                                        'keepGradient': true,
                                        'ensureLegibility': true
                                    }
                                }
                            }
                        ],
                        'connector': 'smooth',
                        'data': {
                            'type': 'tm.Flow',
                            'name': '',
                            'description': '',
                            'outOfScope': false,
                            'reasonOutOfScope': '',
                            'hasOpenThreats': false,
                            'isBidirectional': false,
                            'isEncrypted': false,
                            'isPublicNetwork': false,
                            'protocol': '',
                            'threats': []
                        },
                        'id': 'b0753577-2520-4082-af88-039e276a6325',
                        'source': {
                            'cell': '08b3cbf4-fe41-437b-9401-44f16f79d273',
                            'port': '80875a0c-67c4-4d52-8b09-728beec42972'
                        },
                        'target': {
                            'cell': '7017429a-1f3e-412d-88ab-567afc096207',
                            'port': '3946c09a-a1e7-436b-b391-f28e7f589cc4'
                        },
                        'vertices': [
                            {
                                'x': 1260,
                                'y': 311
                            }
                        ]
                    },
                    {
                        'position': {
                            'x': 315,
                            'y': 517
                        },
                        'size': {
                            'width': 90,
                            'height': 90
                        },
                        'attrs': {
                            'text': {
                                'text': 'Browser'
                            },
                            'body': {
                                'stroke': '#333333',
                                'strokeWidth': 1.5,
                                'strokeDasharray': null
                            }
                        },
                        'visible': true,
                        'shape': 'process',
                        'ports': {
                            'groups': {
                                'top': {
                                    'position': 'top',
                                    'attrs': {
                                        'circle': {
                                            'r': 4,
                                            'magnet': true,
                                            'stroke': '#5F95FF',
                                            'strokeWidth': 1,
                                            'fill': '#fff',
                                            'style': {
                                                'visibility': 'hidden'
                                            }
                                        }
                                    }
                                },
                                'right': {
                                    'position': 'right',
                                    'attrs': {
                                        'circle': {
                                            'r': 4,
                                            'magnet': true,
                                            'stroke': '#5F95FF',
                                            'strokeWidth': 1,
                                            'fill': '#fff',
                                            'style': {
                                                'visibility': 'hidden'
                                            }
                                        }
                                    }
                                },
                                'bottom': {
                                    'position': 'bottom',
                                    'attrs': {
                                        'circle': {
                                            'r': 4,
                                            'magnet': true,
                                            'stroke': '#5F95FF',
                                            'strokeWidth': 1,
                                            'fill': '#fff',
                                            'style': {
                                                'visibility': 'hidden'
                                            }
                                        }
                                    }
                                },
                                'left': {
                                    'position': 'left',
                                    'attrs': {
                                        'circle': {
                                            'r': 4,
                                            'magnet': true,
                                            'stroke': '#5F95FF',
                                            'strokeWidth': 1,
                                            'fill': '#fff',
                                            'style': {
                                                'visibility': 'hidden'
                                            }
                                        }
                                    }
                                }
                            },
                            'items': [
                                {
                                    'group': 'top',
                                    'id': '3439ffe7-f0be-4730-bfaa-0ad72cbf6ed8'
                                },
                                {
                                    'group': 'right',
                                    'id': '80875a0c-67c4-4d52-8b09-728beec42972'
                                },
                                {
                                    'group': 'bottom',
                                    'id': 'd3f5bb66-024e-4a0c-84e6-4501b4043000'
                                },
                                {
                                    'group': 'left',
                                    'id': '0d9330b1-3d69-4ff9-8958-070477cc5e4c'
                                }
                            ]
                        },
                        'id': 'd451d00f-7f93-4b8e-99f4-469aaddb271b',
                        'zIndex': 11,
                        'data': {
                            'type': 'tm.Process',
                            'name': 'Browser',
                            'description': '',
                            'outOfScope': false,
                            'reasonOutOfScope': '',
                            'hasOpenThreats': false,
                            'handlesCardPayment': false,
                            'handlesGoodsOrServices': false,
                            'isWebApplication': false,
                            'privilegeLevel': '',
                            'threats': []
                        }
                    },
                    {
                        'position': {
                            'x': 320,
                            'y': 650
                        },
                        'size': {
                            'width': 90,
                            'height': 90
                        },
                        'attrs': {
                            'text': {
                                'text': 'Mobile App'
                            },
                            'body': {
                                'stroke': '#333333',
                                'strokeWidth': 1.5,
                                'strokeDasharray': null
                            }
                        },
                        'visible': true,
                        'shape': 'process',
                        'ports': {
                            'groups': {
                                'top': {
                                    'position': 'top',
                                    'attrs': {
                                        'circle': {
                                            'r': 4,
                                            'magnet': true,
                                            'stroke': '#5F95FF',
                                            'strokeWidth': 1,
                                            'fill': '#fff',
                                            'style': {
                                                'visibility': 'hidden'
                                            }
                                        }
                                    }
                                },
                                'right': {
                                    'position': 'right',
                                    'attrs': {
                                        'circle': {
                                            'r': 4,
                                            'magnet': true,
                                            'stroke': '#5F95FF',
                                            'strokeWidth': 1,
                                            'fill': '#fff',
                                            'style': {
                                                'visibility': 'hidden'
                                            }
                                        }
                                    }
                                },
                                'bottom': {
                                    'position': 'bottom',
                                    'attrs': {
                                        'circle': {
                                            'r': 4,
                                            'magnet': true,
                                            'stroke': '#5F95FF',
                                            'strokeWidth': 1,
                                            'fill': '#fff',
                                            'style': {
                                                'visibility': 'hidden'
                                            }
                                        }
                                    }
                                },
                                'left': {
                                    'position': 'left',
                                    'attrs': {
                                        'circle': {
                                            'r': 4,
                                            'magnet': true,
                                            'stroke': '#5F95FF',
                                            'strokeWidth': 1,
                                            'fill': '#fff',
                                            'style': {
                                                'visibility': 'hidden'
                                            }
                                        }
                                    }
                                }
                            },
                            'items': [
                                {
                                    'group': 'top',
                                    'id': '3439ffe7-f0be-4730-bfaa-0ad72cbf6ed8'
                                },
                                {
                                    'group': 'right',
                                    'id': '80875a0c-67c4-4d52-8b09-728beec42972'
                                },
                                {
                                    'group': 'bottom',
                                    'id': 'd3f5bb66-024e-4a0c-84e6-4501b4043000'
                                },
                                {
                                    'group': 'left',
                                    'id': '0d9330b1-3d69-4ff9-8958-070477cc5e4c'
                                }
                            ]
                        },
                        'id': '3c8c5cb4-4973-454c-b561-3a1f1c737f6a',
                        'zIndex': 12,
                        'data': {
                            'type': 'tm.Process',
                            'name': 'Mobile App',
                            'description': '',
                            'outOfScope': false,
                            'reasonOutOfScope': '',
                            'hasOpenThreats': false,
                            'handlesCardPayment': false,
                            'handlesGoodsOrServices': false,
                            'isWebApplication': false,
                            'privilegeLevel': '',
                            'threats': []
                        }
                    },
                    {
                        'position': {
                            'x': 430,
                            'y': 806
                        },
                        'size': {
                            'width': 100,
                            'height': 100
                        },
                        'attrs': {
                            'text': {
                                'text': 'Trading Bot'
                            },
                            'body': {
                                'stroke': '#333333',
                                'strokeWidth': 1.5,
                                'strokeDasharray': null
                            }
                        },
                        'visible': true,
                        'shape': 'process',
                        'ports': {
                            'groups': {
                                'top': {
                                    'position': 'top',
                                    'attrs': {
                                        'circle': {
                                            'r': 4,
                                            'magnet': true,
                                            'stroke': '#5F95FF',
                                            'strokeWidth': 1,
                                            'fill': '#fff',
                                            'style': {
                                                'visibility': 'hidden'
                                            }
                                        }
                                    }
                                },
                                'right': {
                                    'position': 'right',
                                    'attrs': {
                                        'circle': {
                                            'r': 4,
                                            'magnet': true,
                                            'stroke': '#5F95FF',
                                            'strokeWidth': 1,
                                            'fill': '#fff',
                                            'style': {
                                                'visibility': 'hidden'
                                            }
                                        }
                                    }
                                },
                                'bottom': {
                                    'position': 'bottom',
                                    'attrs': {
                                        'circle': {
                                            'r': 4,
                                            'magnet': true,
                                            'stroke': '#5F95FF',
                                            'strokeWidth': 1,
                                            'fill': '#fff',
                                            'style': {
                                                'visibility': 'hidden'
                                            }
                                        }
                                    }
                                },
                                'left': {
                                    'position': 'left',
                                    'attrs': {
                                        'circle': {
                                            'r': 4,
                                            'magnet': true,
                                            'stroke': '#5F95FF',
                                            'strokeWidth': 1,
                                            'fill': '#fff',
                                            'style': {
                                                'visibility': 'hidden'
                                            }
                                        }
                                    }
                                }
                            },
                            'items': [
                                {
                                    'group': 'top',
                                    'id': '3439ffe7-f0be-4730-bfaa-0ad72cbf6ed8'
                                },
                                {
                                    'group': 'right',
                                    'id': '80875a0c-67c4-4d52-8b09-728beec42972'
                                },
                                {
                                    'group': 'bottom',
                                    'id': 'd3f5bb66-024e-4a0c-84e6-4501b4043000'
                                },
                                {
                                    'group': 'left',
                                    'id': '0d9330b1-3d69-4ff9-8958-070477cc5e4c'
                                }
                            ]
                        },
                        'id': '8d84ce52-50f9-467e-b7dd-732b1f3e9c4c',
                        'zIndex': 13,
                        'data': {
                            'type': 'tm.Process',
                            'name': 'Trading Bot',
                            'description': 'written in Python',
                            'outOfScope': false,
                            'reasonOutOfScope': '',
                            'hasOpenThreats': false,
                            'handlesCardPayment': false,
                            'handlesGoodsOrServices': false,
                            'isWebApplication': false,
                            'privilegeLevel': '',
                            'threats': []
                        }
                    },
                    {
                        'position': {
                            'x': 881,
                            'y': 60.00000000000006
                        },
                        'size': {
                            'width': 100,
                            'height': 100
                        },
                        'attrs': {
                            'text': {
                                'text': 'ElectrumX'
                            },
                            'body': {
                                'stroke': '#333333',
                                'strokeWidth': 1.5,
                                'strokeDasharray': null
                            }
                        },
                        'visible': true,
                        'shape': 'process',
                        'ports': {
                            'groups': {
                                'top': {
                                    'position': 'top',
                                    'attrs': {
                                        'circle': {
                                            'r': 4,
                                            'magnet': true,
                                            'stroke': '#5F95FF',
                                            'strokeWidth': 1,
                                            'fill': '#fff',
                                            'style': {
                                                'visibility': 'hidden'
                                            }
                                        }
                                    }
                                },
                                'right': {
                                    'position': 'right',
                                    'attrs': {
                                        'circle': {
                                            'r': 4,
                                            'magnet': true,
                                            'stroke': '#5F95FF',
                                            'strokeWidth': 1,
                                            'fill': '#fff',
                                            'style': {
                                                'visibility': 'hidden'
                                            }
                                        }
                                    }
                                },
                                'bottom': {
                                    'position': 'bottom',
                                    'attrs': {
                                        'circle': {
                                            'r': 4,
                                            'magnet': true,
                                            'stroke': '#5F95FF',
                                            'strokeWidth': 1,
                                            'fill': '#fff',
                                            'style': {
                                                'visibility': 'hidden'
                                            }
                                        }
                                    }
                                },
                                'left': {
                                    'position': 'left',
                                    'attrs': {
                                        'circle': {
                                            'r': 4,
                                            'magnet': true,
                                            'stroke': '#5F95FF',
                                            'strokeWidth': 1,
                                            'fill': '#fff',
                                            'style': {
                                                'visibility': 'hidden'
                                            }
                                        }
                                    }
                                }
                            },
                            'items': [
                                {
                                    'group': 'top',
                                    'id': '3439ffe7-f0be-4730-bfaa-0ad72cbf6ed8'
                                },
                                {
                                    'group': 'right',
                                    'id': '80875a0c-67c4-4d52-8b09-728beec42972'
                                },
                                {
                                    'group': 'bottom',
                                    'id': 'd3f5bb66-024e-4a0c-84e6-4501b4043000'
                                },
                                {
                                    'group': 'left',
                                    'id': '0d9330b1-3d69-4ff9-8958-070477cc5e4c'
                                }
                            ]
                        },
                        'id': '3ed55b75-758d-4c2e-9381-67297b81349e',
                        'zIndex': 14,
                        'data': {
                            'type': 'tm.Process',
                            'name': 'ElectrumX',
                            'description': 'written in Python',
                            'outOfScope': false,
                            'reasonOutOfScope': '',
                            'hasOpenThreats': false,
                            'handlesCardPayment': false,
                            'handlesGoodsOrServices': false,
                            'isWebApplication': false,
                            'privilegeLevel': '',
                            'threats': []
                        }
                    },
                    {
                        'position': {
                            'x': 1170,
                            'y': 20
                        },
                        'size': {
                            'width': 112.5,
                            'height': 60
                        },
                        'attrs': {
                            'text': {
                                'text': 'Blockchain'
                            },
                            'body': {
                                'stroke': '#333333',
                                'strokeWidth': 1.5,
                                'strokeDasharray': null
                            }
                        },
                        'visible': true,
                        'shape': 'actor',
                        'ports': {
                            'groups': {
                                'top': {
                                    'position': 'top',
                                    'attrs': {
                                        'circle': {
                                            'r': 4,
                                            'magnet': true,
                                            'stroke': '#5F95FF',
                                            'strokeWidth': 1,
                                            'fill': '#fff',
                                            'style': {
                                                'visibility': 'hidden'
                                            }
                                        }
                                    }
                                },
                                'right': {
                                    'position': 'right',
                                    'attrs': {
                                        'circle': {
                                            'r': 4,
                                            'magnet': true,
                                            'stroke': '#5F95FF',
                                            'strokeWidth': 1,
                                            'fill': '#fff',
                                            'style': {
                                                'visibility': 'hidden'
                                            }
                                        }
                                    }
                                },
                                'bottom': {
                                    'position': 'bottom',
                                    'attrs': {
                                        'circle': {
                                            'r': 4,
                                            'magnet': true,
                                            'stroke': '#5F95FF',
                                            'strokeWidth': 1,
                                            'fill': '#fff',
                                            'style': {
                                                'visibility': 'hidden'
                                            }
                                        }
                                    }
                                },
                                'left': {
                                    'position': 'left',
                                    'attrs': {
                                        'circle': {
                                            'r': 4,
                                            'magnet': true,
                                            'stroke': '#5F95FF',
                                            'strokeWidth': 1,
                                            'fill': '#fff',
                                            'style': {
                                                'visibility': 'hidden'
                                            }
                                        }
                                    }
                                }
                            },
                            'items': [
                                {
                                    'group': 'top',
                                    'id': 'a343562e-6b0c-4994-b1c6-727f72b933dc'
                                },
                                {
                                    'group': 'right',
                                    'id': 'e49e59ac-7c66-44b4-afca-c22f7412c7d9'
                                },
                                {
                                    'group': 'bottom',
                                    'id': '09289b8f-872c-44cc-a738-0ff591b351dd'
                                },
                                {
                                    'group': 'left',
                                    'id': 'a946227e-c66c-499e-a9ee-afa53dd32496'
                                }
                            ]
                        },
                        'id': '3258392b-4882-4566-8b62-5813702f27b6',
                        'zIndex': 15,
                        'data': {
                            'type': 'tm.Actor',
                            'name': 'Blockchain',
                            'description': '',
                            'outOfScope': false,
                            'reasonOutOfScope': '',
                            'hasOpenThreats': false,
                            'providesAuthentication': false,
                            'threats': []
                        }
                    },
                    {
                        'position': {
                            'x': 881,
                            'y': 270
                        },
                        'size': {
                            'width': 100,
                            'height': 100
                        },
                        'attrs': {
                            'text': {
                                'text': 'Exchange\nWeb Site'
                            },
                            'body': {
                                'stroke': '#333333',
                                'strokeWidth': 1.5,
                                'strokeDasharray': null
                            }
                        },
                        'visible': true,
                        'shape': 'process',
                        'ports': {
                            'groups': {
                                'top': {
                                    'position': 'top',
                                    'attrs': {
                                        'circle': {
                                            'r': 4,
                                            'magnet': true,
                                            'stroke': '#5F95FF',
                                            'strokeWidth': 1,
                                            'fill': '#fff',
                                            'style': {
                                                'visibility': 'hidden'
                                            }
                                        }
                                    }
                                },
                                'right': {
                                    'position': 'right',
                                    'attrs': {
                                        'circle': {
                                            'r': 4,
                                            'magnet': true,
                                            'stroke': '#5F95FF',
                                            'strokeWidth': 1,
                                            'fill': '#fff',
                                            'style': {
                                                'visibility': 'hidden'
                                            }
                                        }
                                    }
                                },
                                'bottom': {
                                    'position': 'bottom',
                                    'attrs': {
                                        'circle': {
                                            'r': 4,
                                            'magnet': true,
                                            'stroke': '#5F95FF',
                                            'strokeWidth': 1,
                                            'fill': '#fff',
                                            'style': {
                                                'visibility': 'hidden'
                                            }
                                        }
                                    }
                                },
                                'left': {
                                    'position': 'left',
                                    'attrs': {
                                        'circle': {
                                            'r': 4,
                                            'magnet': true,
                                            'stroke': '#5F95FF',
                                            'strokeWidth': 1,
                                            'fill': '#fff',
                                            'style': {
                                                'visibility': 'hidden'
                                            }
                                        }
                                    }
                                }
                            },
                            'items': [
                                {
                                    'group': 'top',
                                    'id': '3439ffe7-f0be-4730-bfaa-0ad72cbf6ed8'
                                },
                                {
                                    'group': 'right',
                                    'id': '80875a0c-67c4-4d52-8b09-728beec42972'
                                },
                                {
                                    'group': 'bottom',
                                    'id': 'd3f5bb66-024e-4a0c-84e6-4501b4043000'
                                },
                                {
                                    'group': 'left',
                                    'id': '0d9330b1-3d69-4ff9-8958-070477cc5e4c'
                                }
                            ]
                        },
                        'id': '9b88cf3a-5bf8-42da-b7a3-5756a7412304',
                        'zIndex': 16,
                        'data': {
                            'type': 'tm.Process',
                            'name': 'Exchange\nWeb Site',
                            'description': 'written in React.js',
                            'outOfScope': false,
                            'reasonOutOfScope': '',
                            'hasOpenThreats': false,
                            'handlesCardPayment': false,
                            'handlesGoodsOrServices': false,
                            'isWebApplication': false,
                            'privilegeLevel': '',
                            'threats': []
                        }
                    },
                    {
                        'position': {
                            'x': 920,
                            'y': 470
                        },
                        'size': {
                            'width': 110,
                            'height': 110
                        },
                        'attrs': {
                            'text': {
                                'text': 'Exchange\nBackend'
                            },
                            'body': {
                                'stroke': '#333333',
                                'strokeWidth': 1.5,
                                'strokeDasharray': null
                            }
                        },
                        'visible': true,
                        'shape': 'process',
                        'ports': {
                            'groups': {
                                'top': {
                                    'position': 'top',
                                    'attrs': {
                                        'circle': {
                                            'r': 4,
                                            'magnet': true,
                                            'stroke': '#5F95FF',
                                            'strokeWidth': 1,
                                            'fill': '#fff',
                                            'style': {
                                                'visibility': 'hidden'
                                            }
                                        }
                                    }
                                },
                                'right': {
                                    'position': 'right',
                                    'attrs': {
                                        'circle': {
                                            'r': 4,
                                            'magnet': true,
                                            'stroke': '#5F95FF',
                                            'strokeWidth': 1,
                                            'fill': '#fff',
                                            'style': {
                                                'visibility': 'hidden'
                                            }
                                        }
                                    }
                                },
                                'bottom': {
                                    'position': 'bottom',
                                    'attrs': {
                                        'circle': {
                                            'r': 4,
                                            'magnet': true,
                                            'stroke': '#5F95FF',
                                            'strokeWidth': 1,
                                            'fill': '#fff',
                                            'style': {
                                                'visibility': 'hidden'
                                            }
                                        }
                                    }
                                },
                                'left': {
                                    'position': 'left',
                                    'attrs': {
                                        'circle': {
                                            'r': 4,
                                            'magnet': true,
                                            'stroke': '#5F95FF',
                                            'strokeWidth': 1,
                                            'fill': '#fff',
                                            'style': {
                                                'visibility': 'hidden'
                                            }
                                        }
                                    }
                                }
                            },
                            'items': [
                                {
                                    'group': 'top',
                                    'id': '3439ffe7-f0be-4730-bfaa-0ad72cbf6ed8'
                                },
                                {
                                    'group': 'right',
                                    'id': '80875a0c-67c4-4d52-8b09-728beec42972'
                                },
                                {
                                    'group': 'bottom',
                                    'id': 'd3f5bb66-024e-4a0c-84e6-4501b4043000'
                                },
                                {
                                    'group': 'left',
                                    'id': '0d9330b1-3d69-4ff9-8958-070477cc5e4c'
                                }
                            ]
                        },
                        'id': 'abf79300-add9-47ff-bb5f-1559aebba405',
                        'zIndex': 17,
                        'data': {
                            'type': 'tm.Process',
                            'name': 'Exchange\nBackend',
                            'description': 'written in Ruby',
                            'outOfScope': false,
                            'reasonOutOfScope': '',
                            'hasOpenThreats': false,
                            'handlesCardPayment': false,
                            'handlesGoodsOrServices': false,
                            'isWebApplication': false,
                            'privilegeLevel': '',
                            'threats': []
                        }
                    },
                    {
                        'position': {
                            'x': 820,
                            'y': 740
                        },
                        'size': {
                            'width': 100,
                            'height': 100
                        },
                        'attrs': {
                            'text': {
                                'text': 'Exchange\nAPI'
                            },
                            'body': {
                                'stroke': '#333333',
                                'strokeWidth': 1.5,
                                'strokeDasharray': null
                            }
                        },
                        'visible': true,
                        'shape': 'process',
                        'ports': {
                            'groups': {
                                'top': {
                                    'position': 'top',
                                    'attrs': {
                                        'circle': {
                                            'r': 4,
                                            'magnet': true,
                                            'stroke': '#5F95FF',
                                            'strokeWidth': 1,
                                            'fill': '#fff',
                                            'style': {
                                                'visibility': 'hidden'
                                            }
                                        }
                                    }
                                },
                                'right': {
                                    'position': 'right',
                                    'attrs': {
                                        'circle': {
                                            'r': 4,
                                            'magnet': true,
                                            'stroke': '#5F95FF',
                                            'strokeWidth': 1,
                                            'fill': '#fff',
                                            'style': {
                                                'visibility': 'hidden'
                                            }
                                        }
                                    }
                                },
                                'bottom': {
                                    'position': 'bottom',
                                    'attrs': {
                                        'circle': {
                                            'r': 4,
                                            'magnet': true,
                                            'stroke': '#5F95FF',
                                            'strokeWidth': 1,
                                            'fill': '#fff',
                                            'style': {
                                                'visibility': 'hidden'
                                            }
                                        }
                                    }
                                },
                                'left': {
                                    'position': 'left',
                                    'attrs': {
                                        'circle': {
                                            'r': 4,
                                            'magnet': true,
                                            'stroke': '#5F95FF',
                                            'strokeWidth': 1,
                                            'fill': '#fff',
                                            'style': {
                                                'visibility': 'hidden'
                                            }
                                        }
                                    }
                                }
                            },
                            'items': [
                                {
                                    'group': 'top',
                                    'id': '3439ffe7-f0be-4730-bfaa-0ad72cbf6ed8'
                                },
                                {
                                    'group': 'right',
                                    'id': '80875a0c-67c4-4d52-8b09-728beec42972'
                                },
                                {
                                    'group': 'bottom',
                                    'id': 'd3f5bb66-024e-4a0c-84e6-4501b4043000'
                                },
                                {
                                    'group': 'left',
                                    'id': '0d9330b1-3d69-4ff9-8958-070477cc5e4c'
                                }
                            ]
                        },
                        'id': '253870a2-b372-4419-95d0-5b05640e9723',
                        'zIndex': 18,
                        'data': {
                            'type': 'tm.Process',
                            'name': 'Exchange\nAPI',
                            'description': 'Node.js API',
                            'outOfScope': false,
                            'reasonOutOfScope': '',
                            'hasOpenThreats': false,
                            'handlesCardPayment': false,
                            'handlesGoodsOrServices': false,
                            'isWebApplication': false,
                            'privilegeLevel': '',
                            'threats': []
                        }
                    },
                    {
                        'position': {
                            'x': 1149,
                            'y': 547
                        },
                        'size': {
                            'width': 120,
                            'height': 60
                        },
                        'attrs': {
                            'text': {
                                'text': 'MongoDB'
                            },
                            'topLine': {
                                'strokeWidth': 1.5,
                                'strokeDasharray': null
                            },
                            'bottomLine': {
                                'strokeWidth': 1.5,
                                'strokeDasharray': null
                            }
                        },
                        'visible': true,
                        'shape': 'store',
                        'ports': {
                            'groups': {
                                'top': {
                                    'position': 'top',
                                    'attrs': {
                                        'circle': {
                                            'r': 4,
                                            'magnet': true,
                                            'stroke': '#5F95FF',
                                            'strokeWidth': 1,
                                            'fill': '#fff',
                                            'style': {
                                                'visibility': 'hidden'
                                            }
                                        }
                                    }
                                },
                                'right': {
                                    'position': 'right',
                                    'attrs': {
                                        'circle': {
                                            'r': 4,
                                            'magnet': true,
                                            'stroke': '#5F95FF',
                                            'strokeWidth': 1,
                                            'fill': '#fff',
                                            'style': {
                                                'visibility': 'hidden'
                                            }
                                        }
                                    }
                                },
                                'bottom': {
                                    'position': 'bottom',
                                    'attrs': {
                                        'circle': {
                                            'r': 4,
                                            'magnet': true,
                                            'stroke': '#5F95FF',
                                            'strokeWidth': 1,
                                            'fill': '#fff',
                                            'style': {
                                                'visibility': 'hidden'
                                            }
                                        }
                                    }
                                },
                                'left': {
                                    'position': 'left',
                                    'attrs': {
                                        'circle': {
                                            'r': 4,
                                            'magnet': true,
                                            'stroke': '#5F95FF',
                                            'strokeWidth': 1,
                                            'fill': '#fff',
                                            'style': {
                                                'visibility': 'hidden'
                                            }
                                        }
                                    }
                                }
                            },
                            'items': [
                                {
                                    'group': 'top',
                                    'id': '5376c37b-c00a-4991-b607-8406ac9bd925'
                                },
                                {
                                    'group': 'right',
                                    'id': '9efeb462-f589-4dff-bdf2-129329fd073e'
                                },
                                {
                                    'group': 'bottom',
                                    'id': '3946c09a-a1e7-436b-b391-f28e7f589cc4'
                                },
                                {
                                    'group': 'left',
                                    'id': 'dd4e71a7-9731-471d-ade8-795784806f0d'
                                }
                            ]
                        },
                        'id': 'c8b51733-6465-4a45-aeee-b4c38d2fcf2c',
                        'zIndex': 19,
                        'data': {
                            'type': 'tm.Store',
                            'name': 'MongoDB',
                            'description': '',
                            'outOfScope': false,
                            'reasonOutOfScope': '',
                            'hasOpenThreats': false,
                            'isALog': false,
                            'isEncrypted': false,
                            'isSigned': false,
                            'storesCredentials': false,
                            'storesInventory': false,
                            'threats': []
                        }
                    },
                    {
                        'position': {
                            'x': 1187,
                            'y': 160.00000000000006
                        },
                        'size': {
                            'width': 120,
                            'height': 60
                        },
                        'attrs': {
                            'text': {
                                'text': 'MySQL\nuser & config'
                            },
                            'topLine': {
                                'strokeWidth': 1.5,
                                'strokeDasharray': null
                            },
                            'bottomLine': {
                                'strokeWidth': 1.5,
                                'strokeDasharray': null
                            }
                        },
                        'visible': true,
                        'shape': 'store',
                        'ports': {
                            'groups': {
                                'top': {
                                    'position': 'top',
                                    'attrs': {
                                        'circle': {
                                            'r': 4,
                                            'magnet': true,
                                            'stroke': '#5F95FF',
                                            'strokeWidth': 1,
                                            'fill': '#fff',
                                            'style': {
                                                'visibility': 'hidden'
                                            }
                                        }
                                    }
                                },
                                'right': {
                                    'position': 'right',
                                    'attrs': {
                                        'circle': {
                                            'r': 4,
                                            'magnet': true,
                                            'stroke': '#5F95FF',
                                            'strokeWidth': 1,
                                            'fill': '#fff',
                                            'style': {
                                                'visibility': 'hidden'
                                            }
                                        }
                                    }
                                },
                                'bottom': {
                                    'position': 'bottom',
                                    'attrs': {
                                        'circle': {
                                            'r': 4,
                                            'magnet': true,
                                            'stroke': '#5F95FF',
                                            'strokeWidth': 1,
                                            'fill': '#fff',
                                            'style': {
                                                'visibility': 'hidden'
                                            }
                                        }
                                    }
                                },
                                'left': {
                                    'position': 'left',
                                    'attrs': {
                                        'circle': {
                                            'r': 4,
                                            'magnet': true,
                                            'stroke': '#5F95FF',
                                            'strokeWidth': 1,
                                            'fill': '#fff',
                                            'style': {
                                                'visibility': 'hidden'
                                            }
                                        }
                                    }
                                }
                            },
                            'items': [
                                {
                                    'group': 'top',
                                    'id': '5376c37b-c00a-4991-b607-8406ac9bd925'
                                },
                                {
                                    'group': 'right',
                                    'id': '9efeb462-f589-4dff-bdf2-129329fd073e'
                                },
                                {
                                    'group': 'bottom',
                                    'id': '3946c09a-a1e7-436b-b391-f28e7f589cc4'
                                },
                                {
                                    'group': 'left',
                                    'id': 'dd4e71a7-9731-471d-ade8-795784806f0d'
                                }
                            ]
                        },
                        'id': '7017429a-1f3e-412d-88ab-567afc096207',
                        'zIndex': 20,
                        'data': {
                            'type': 'tm.Store',
                            'name': 'MySQL\nuser & config',
                            'description': '',
                            'outOfScope': false,
                            'reasonOutOfScope': '',
                            'hasOpenThreats': false,
                            'isALog': false,
                            'isEncrypted': false,
                            'isSigned': false,
                            'storesCredentials': false,
                            'storesInventory': false,
                            'threats': []
                        }
                    },
                    {
                        'position': {
                            'x': 1077,
                            'y': 256
                        },
                        'size': {
                            'width': 110,
                            'height': 110
                        },
                        'attrs': {
                            'text': {
                                'text': 'Blockchain\nIntegration'
                            },
                            'body': {
                                'stroke': '#333333',
                                'strokeWidth': 1.5,
                                'strokeDasharray': null
                            }
                        },
                        'visible': true,
                        'shape': 'process',
                        'ports': {
                            'groups': {
                                'top': {
                                    'position': 'top',
                                    'attrs': {
                                        'circle': {
                                            'r': 4,
                                            'magnet': true,
                                            'stroke': '#5F95FF',
                                            'strokeWidth': 1,
                                            'fill': '#fff',
                                            'style': {
                                                'visibility': 'hidden'
                                            }
                                        }
                                    }
                                },
                                'right': {
                                    'position': 'right',
                                    'attrs': {
                                        'circle': {
                                            'r': 4,
                                            'magnet': true,
                                            'stroke': '#5F95FF',
                                            'strokeWidth': 1,
                                            'fill': '#fff',
                                            'style': {
                                                'visibility': 'hidden'
                                            }
                                        }
                                    }
                                },
                                'bottom': {
                                    'position': 'bottom',
                                    'attrs': {
                                        'circle': {
                                            'r': 4,
                                            'magnet': true,
                                            'stroke': '#5F95FF',
                                            'strokeWidth': 1,
                                            'fill': '#fff',
                                            'style': {
                                                'visibility': 'hidden'
                                            }
                                        }
                                    }
                                },
                                'left': {
                                    'position': 'left',
                                    'attrs': {
                                        'circle': {
                                            'r': 4,
                                            'magnet': true,
                                            'stroke': '#5F95FF',
                                            'strokeWidth': 1,
                                            'fill': '#fff',
                                            'style': {
                                                'visibility': 'hidden'
                                            }
                                        }
                                    }
                                }
                            },
                            'items': [
                                {
                                    'group': 'top',
                                    'id': '3439ffe7-f0be-4730-bfaa-0ad72cbf6ed8'
                                },
                                {
                                    'group': 'right',
                                    'id': '80875a0c-67c4-4d52-8b09-728beec42972'
                                },
                                {
                                    'group': 'bottom',
                                    'id': 'd3f5bb66-024e-4a0c-84e6-4501b4043000'
                                },
                                {
                                    'group': 'left',
                                    'id': '0d9330b1-3d69-4ff9-8958-070477cc5e4c'
                                }
                            ]
                        },
                        'id': '08b3cbf4-fe41-437b-9401-44f16f79d273',
                        'zIndex': 21,
                        'data': {
                            'type': 'tm.Process',
                            'name': 'Blockchain\nIntegration',
                            'description': '',
                            'outOfScope': false,
                            'reasonOutOfScope': '',
                            'hasOpenThreats': false,
                            'handlesCardPayment': false,
                            'handlesGoodsOrServices': false,
                            'isWebApplication': false,
                            'privilegeLevel': '',
                            'threats': []
                        }
                    }
                ]
            }
        ],
        'diagramTop': 1,
        'reviewer': 'A product security architect',
        'threatTop': 1
    }
};
