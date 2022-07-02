export default [
    {
        type: 'label',
        props: {
            caption: 'Label 1',
            visible: true
        },
    },
    {
        type: 'panel',
        props: {
            width: 500,
            height: 200,
            visible: true
        },
        content: [
            {
                type: 'label',
                props: {
                    caption: 'lable 2',
                    visible: false
                }
            },
            {
                type: 'label',
                props: {
                    caption: 'lable 3',
                    visible: true
                }
            },
            {
                type: 'button',
                props: {
                    caption: 'button',
                    width: 60,
                    height: 30,
                    visible: true
                },
            },
            {
                type: 'panel',
                props: {
                    width: 100,
                    height: 100,
                    visible: true
                },
                content: [
                    {
                        type: 'label',
                        props: {
                            caption: 'deep 1',
                            visible: false
                        }
                    },
                    {
                        type: 'label',
                        props: {
                            caption: 'deep 2',
                            visible: true
                        }
                    },
                    {
                        type: 'button',
                        props: {
                            caption: 'deep',
                            width: 60,
                            height: 30,
                            visible: true
                        },
                    },
                    {
                        type: 'label',
                        props: {
                            caption: 'deep 3',
                            visible: true
                        }
                    },
                ]
            }
        ]
    },
    {
        type: 'label',
        props: {
            caption: 'test',
            visible: false
        },
    },
    {
        type: 'button',
        props: {
            caption: 'button',
            width: 100,
            height: 50,
            visible: true
        },
    }
];