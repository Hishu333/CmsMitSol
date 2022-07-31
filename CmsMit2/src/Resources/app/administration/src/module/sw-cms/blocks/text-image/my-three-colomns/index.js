import './component';
import './preview';


Shopware.Service('cmsService').registerCmsBlock({
    name: 'my-three-colomns',
    category: 'text',
    label: 'My three colomns',
    component: 'sw-cms-block-my-three-colomns',
    previewComponent: 'sw-cms-preview-my-three-colomns',
    defaultConfig: {
        marginBottom: '20px',
        marginTop: '20px',
        marginLeft: '20px',
        marginRight: '20px',
        sizingMode: 'boxed'
    },
    slots: {
        'col-1': 'text',
        'col-2': 'text',
        'col-3': 'text'
    }
});