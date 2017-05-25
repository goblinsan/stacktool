import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {ProdConfig} from './blocks/config/prod.config';
import {StackAppModule} from './stackApp.module';

ProdConfig();

if (module['hot']) {
    module['hot'].accept();
}

// platformBrowserDynamic().bootstrapModule(StacktoolAppModule);
platformBrowserDynamic().bootstrapModule(StackAppModule);
