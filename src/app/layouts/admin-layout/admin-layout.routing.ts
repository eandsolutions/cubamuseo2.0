import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
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
    { path: 'home', component: HomeComponent},
    { path: 'superior-collection/:id', component: SuperiorCollectionComponent },
    { path: 'inferior-collection/:id', component: InferiorCollectionComponent },
    { path: 'samples', component: SamplesComponent },
    { path: 'gallery-samples/:id', component: GallerySamplesComponent },
    { path: 'inferior-samples/:id', component: InferiorSamplesComponent },
    { path: 'stamps', component: StampComponent },
    { path: 'gallery-stamp/:id', component: GalleryStampComponent },
    { path: 'inferior-stamp/:id', component: InferiorStampComponent },
    { path: 'postcards', component: PostcardsComponent },
    { path: 'gallery-postcards/:id', component: GalleryPostcardsComponent },
    { path: 'store', component: StoreComponent },
    { path: 'gallery-store/:id', component: GalleryStoreComponent },
    { path: 'gallery-store/:id', component: GalleryStoreComponent },
    { path: 'item-sale-store/:id', component: ItemSaleStoreComponent },
    { path: 'search/:query', component: SearchComponent },

    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'table-list',     component: TableListComponent },
    { path: 'typography',     component: TypographyComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'upgrade',        component: UpgradeComponent },
];
