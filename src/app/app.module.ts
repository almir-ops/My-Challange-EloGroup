import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PoModule } from '@po-ui/ng-components';
import { PoTemplatesModule } from '@po-ui/ng-templates';
import { LoginComponent } from './login/login.component';
import { PanelleadsComponent } from './panelleads/panelleads.component';
import { PoStorageModule } from '@po-ui/ng-storage';
import { FormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { StorageService } from './services/storage.service';
 
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PanelleadsComponent,
    
  ],
  imports: [
    DragDropModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    PoModule,
    PoTemplatesModule,
    PoStorageModule.forRoot(),
  ],
  providers: [
    StorageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
