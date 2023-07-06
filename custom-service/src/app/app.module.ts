import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
import { cartService } from './cart.service';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ServerComponent } from './server/server.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    HomeComponent,
    LoginComponent,
    ServerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [cartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
