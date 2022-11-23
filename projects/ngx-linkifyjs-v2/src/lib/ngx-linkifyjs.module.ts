import {CommonModule} from '@angular/common';
import {Inject, InjectionToken, ModuleWithProviders, NgModule} from '@angular/core';
// TODO REMOVE ME
// import * as linkify from 'linkifyjs';
// import hashtag from 'linkify-plugin-hashtag';
// import mention from 'linkify-plugin-mention';

import {NgxLinkifyjsService} from './service/ngx-linkifyjs.service';
import {NgxLinkifyjsPipe} from './pipes/ngx-linkifyjs.pipe';

// Export module's public API
export {Link} from './interfaces/ngx-linkifyjs.interface';
import {NgxLinkifyjsConfig} from './interfaces/ngx-linkifyjs.interface';

export {LinkType} from './enum/linktype.enum';
export {NgxLinkifyOptions} from './interfaces/ngx-linkifyjs.interface';
export {NgxLinkifyjsPipe} from './pipes/ngx-linkifyjs.pipe';
export {NgxLinkifyjsService} from './service/ngx-linkifyjs.service';

export const NgxLinkifyjsConfigToken = new InjectionToken<NgxLinkifyjsConfig>('NgxLinkifyjsConfig');
export const DEFAULT_CONFIG: NgxLinkifyjsConfig = {enableHash: true, enableMention: true};

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [NgxLinkifyjsPipe],
  declarations: [NgxLinkifyjsPipe]
})
export class NgxLinkifyjsModule {

  static forRoot(config: NgxLinkifyjsConfig = DEFAULT_CONFIG): ModuleWithProviders<NgxLinkifyjsModule> {
    return {
      ngModule: NgxLinkifyjsModule,
      providers:
        [
          NgxLinkifyjsService,
          {
            provide: NgxLinkifyjsConfigToken,
            useValue: config
          },
        ]
    };
  }

  constructor(@Inject(NgxLinkifyjsConfigToken)
              public config: NgxLinkifyjsConfig) {
    // TODO REMOVE ME
    // if (config.enableHash) {
    //   hashtag(linkify);
    // }
    //
    // if (config.enableMention) {
    //   mention(linkify);
    // }
  }

}
