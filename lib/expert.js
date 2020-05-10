export function getAllPostIds() {
    return [
        {
            params: {
                id: 'julie-maxwell'
            }
        },
        {
            params: {
                id: 'maya-parker'
            }
        },
        {
            params: {
                id: 'hadiya-hussein'
            }
        },
        {
            params: {
                id: 'devika-patel'
            }
        },
        {
            params: {
                id: 'aisha-malhotra'
            }
        }
    ]
}

export function getPostData(id) {
    var expertData = {};
    expertData.id = id;
    switch (id) {
        case 'julie-maxwell':
            expertData.first_name = 'Julie';
            expertData.last_name = 'Maxwell';
            expertData.title = 'Architect';
            expertData.image = '/images/placeholders/square-1.webp';
            break;
        case 'maya-parker':
            expertData.first_name = 'Maya';
            expertData.last_name = 'Parker';
            expertData.title = 'Painter';
            expertData.image = '/images/placeholders/square-2.webp';
            break;
        case 'hadiya-hussein':
            expertData.first_name = 'Hadiya';
            expertData.last_name = 'Hussein';
            expertData.title = 'Actress';
            expertData.image = '/images/placeholders/square-3.webp';
            break;
        case 'devika-patel':
            expertData.first_name = 'Devika';
            expertData.last_name = 'Patel';
            expertData.title = 'Physicist';
            expertData.image = '/images/placeholders/square-4.webp';
            break;
        case 'aisha-malhotra':
            expertData.first_name = 'Aisha';
            expertData.last_name = 'Malhotra';
            expertData.title = 'Photographer';
            expertData.image = '/images/placeholders/square-5.webp';
            break;
    }
    return expertData;
}