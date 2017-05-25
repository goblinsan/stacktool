import './vendor.ts';

import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {Ng2Webstorage} from 'ng2-webstorage';
import {HttpModule} from '@angular/http';

import {StacktoolSharedModule, UserRouteAccessService} from './shared';
import {StacktoolHomeModule} from './home/home.module';
import {StacktoolAdminModule} from './admin/admin.module';
import {StacktoolAccountModule} from './account/account.module';
import {StacktoolEntityModule} from './entities/entity.module';

import {customHttpProvider} from './blocks/interceptor/http.provider';
import {PaginationConfig} from './blocks/config/uib-pagination.config';

import {ActiveMenuDirective, ErrorComponent, FooterComponent, JhiMainComponent, LayoutRoutingModule, NavbarComponent, PageRibbonComponent, ProfileService} from './layouts';

@NgModule({
    imports: [
        BrowserModule,
        LayoutRoutingModule,
        HttpModule,
        Ng2Webstorage.forRoot({ prefix: 'jhi', separator: '-'}),
        StacktoolSharedModule,
        StacktoolHomeModule,
        StacktoolAdminModule,
        StacktoolAccountModule,
        StacktoolEntityModule
    ],
    declarations: [
        JhiMainComponent,
        NavbarComponent,
        ErrorComponent,
        PageRibbonComponent,
        ActiveMenuDirective,
        FooterComponent
    ],
    providers: [
        ProfileService,
        customHttpProvider(),
        PaginationConfig,
        UserRouteAccessService
    ],
    bootstrap: [ JhiMainComponent ]
})
export class StacktoolAppModule {}
