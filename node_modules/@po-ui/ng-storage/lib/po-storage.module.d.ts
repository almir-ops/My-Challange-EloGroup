import { ModuleWithProviders } from '@angular/core';
import { PoStorageConfig } from './services/po-storage-config.interface';
import * as i0 from "@angular/core";
/**
 * @description
 *
 * Módulo do componente PoStorage responsável por manipular o storage do browser.
 */
export declare class PoStorageModule {
    static forRoot(storageConfig?: PoStorageConfig): ModuleWithProviders<PoStorageModule>;
    static ɵfac: i0.ɵɵFactoryDeclaration<PoStorageModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<PoStorageModule, never, never, never>;
    static ɵinj: i0.ɵɵInjectorDeclaration<PoStorageModule>;
}
