import { Routes } from '@angular/router';

import { HomeComponent } from 'app/home/home.component';
import { SuperiorCollectionComponent } from 'app/collections/superior-collection/superior-collection.component';
import { InferiorCollectionComponent } from 'app/collections/inferior-collection/inferior-collection.component';
import { SamplesComponent } from 'app/samples/samples/samples.component';
import { GallerySamplesComponent } from 'app/samples/gallery-samples/gallery-samples.component';
import { InferiorSamplesComponent } from 'app/samples/inferior-samples/inferior-samples.component';
import { GalleryStampComponent } from 'app/stamps/gallery-stamp/gallery-stamp.component';
import { InferiorStampComponent } from 'app/stamps/inferior-stamp/inferior-stamp.component';
import { StampsModule } from 'app/stamps/stamps.module';
import { StampComponent } from 'app/stamps/stamp/stamp.component';
import { PostcardsComponent } from 'app/postcards/postcards/postcards.component';
import { GalleryPostcardsComponent } from 'app/postcards/gallery-postcards/gallery-postcards.component';
import { StoreComponent } from 'app/store/store/store.component';
import { GalleryStoreComponent } from 'app/store/gallery-store/gallery-store.component';
import { ItemSaleStoreComponent } from 'app/store/item-sale-store/item-sale-store.component';
import { SearchComponent } from 'app/search/search/search.component';

export const AdminLayoutRoutes: Routes = [
    // {
    //   path: '',
    //   children: [ {
    //     path: 'dashboard',
    //     component: DashboardComponent
    // }]}, {
    // path: '',
    // children: [ {
    //   path: 'userprofile',
    //   component: UserProfileComponent
    // }]
    // }, {
    //   path: '',
    //   children: [ {
    //     path: 'icons',
    //     component: IconsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'notifications',
    //         component: NotificationsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'maps',
    //         component: MapsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'typography',
    //         component: TypographyComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'upgrade',
    //         component: UpgradeComponent
    //     }]
    // }
    {
        path: 'home',
        component: HomeComponent,
        data: {
            title: 'home',
            breadcrumb: [
                {
                    label: 'Inicio',
                    url: ''
                }
            ]
        },
    },

    {
        path: 'superior-collection/:id',
        component: SuperiorCollectionComponent,
        data: {
            title: 'superior',
            breadcrumb: [
                {
                    label: 'Inicio',
                    url: '/home'
                },
                {
                    label: '{{dynamicText}}', // necesito el nombre en la url
                    url: ''
                }
            ]
        },
    },
    {
        path: 'inferior-collection/:id', //necesito id de la superior y nombre
        component: InferiorCollectionComponent,
        data: {
            title: 'inferior',
            breadcrumb: [
                {
                    label: 'Inicio',
                    url: '/home'
                },
                {
                    label: 'Página',
                    url: ''
                },
                {
                    label: 'Colección {{id}}',
                    url: ''
                }
            ]
        },
    },
    {
        path: 'samples',
        component: SamplesComponent,
        data: {
            title: 'home',
            breadcrumb: [
                {
                    label: 'Inicio',
                    url: '/home'
                },
                {
                    label: 'Muestras',
                    url: ''
                }
            ]
        },
    },
    {
        path: 'gallery-samples/:id',
        component: GallerySamplesComponent,
        data: {
            title: 'home',
            breadcrumb: [
                {
                    label: 'Inicio',
                    url: '/home'
                },
                {
                    label: 'Muestras',
                    url: '/samples'
                },
                {
                    label: 'Galería', //la categoria
                    url: ''
                }
            ]
        },

    },
    {
        path: 'inferior-samples/:id',
        component: InferiorSamplesComponent,
        data: {
            title: 'home',
            breadcrumb: [
                {
                    label: 'Inicio',
                    url: '/home'
                },
                {
                    label: 'Muestras',
                    url: '/samples'
                },
                {
                    label: 'Galería', //la categoria y el ids
                    url: '/gallery-sample'
                },
                {
                    label: 'Muestra {{id}}', //la categoria
                    url: ''
                }
            ]
        },


    },
    {
        path: 'stamps',
        component: StampComponent,
        data: {
            title: 'home',
            breadcrumb: [
                {
                    label: 'Inicio',
                    url: '/home'
                },
                {
                    label: 'Estampas',
                    url: ''
                }
            ]
        },
    },
    {
        path: 'gallery-stamp/:id',
        component: GalleryStampComponent,
        data: {
            title: 'home',
            breadcrumb: [
                {
                    label: 'Inicio',
                    url: '/home'
                },
                {
                    label: 'Estampas',
                    url: '/stamps'
                },
                {
                    label: 'Galería', //la categoria
                    url: ''
                }
            ]
        },
    },
    {
        path: 'inferior-stamp/:id',
        component: InferiorStampComponent,
        data: {
            title: 'home',
            breadcrumb: [
                {
                    label: 'Inicio',
                    url: '/home'
                },
                {
                    label: 'Estampas',
                    url: '/stamps'
                },
                {
                    label: 'Galería', //la categoria y el ids
                    url: '/gallery-stamp'
                },
                {
                    label: 'Estampa {{id}}', //nombre
                    url: ''
                }
            ]
        },
    },
    {
        path: 'postcards',
        component: PostcardsComponent,
        data: {
            title: 'home',
            breadcrumb: [
                {
                    label: 'Inicio',
                    url: '/home'
                },
                {
                    label: 'Postales',
                    url: ''
                }
            ]
        },
    },
    { path: 'gallery-postcards/:id',
     component: GalleryPostcardsComponent,
     data: {
        title: 'home',
        breadcrumb: [
            {
                label: 'Inicio',
                url: '/home'
            },
            {
                label: 'Postales',
                url: '/postcards'
            },
            {
                label: 'Galería {{id}}', //nombre carpeta
                url: ''
            }
        ]
    },
     },
    { path: 'store', component: StoreComponent },
    { path: 'gallery-store/:id', component: GalleryStoreComponent },
    { path: 'gallery-store/:id', component: GalleryStoreComponent },
    { path: 'item-sale-store/:id', component: ItemSaleStoreComponent },
    { path: 'search/:query', component: SearchComponent },


];
