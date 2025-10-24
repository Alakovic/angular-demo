import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { Navbar } from "../navbar/navbar";


@Component({
    selector: 'app-landingPage',
    standalone: true,
    imports: [CommonModule,Navbar],
    template: `
    <section>
        <div><app-navbar></app-navbar></div>
        <div class="headline">
            <h1 class="fontRaleway"> SAKURA RAMEN </h1>
            <h2  class="fontRaleway">BEST RAMEN IN TOWN</h2>
        </div>
    </section>
    `,
    styleUrls: ['./landingPage.component.scss'],
})

export class LandingPageComponent {

}