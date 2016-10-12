import '../app.css';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';


import { StageModule } from '../components/stage';


if(process.env.ENV === 'production') {
	enableProdMode();
}

platformBrowserDynamic().bootstrapModule(StageModule);
