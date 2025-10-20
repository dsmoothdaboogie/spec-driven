import { Component, signal } from '@angular/core';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-builder',
  imports: [FormsModule],
  providers: [provideHttpClient()],
  template: `
  <section>
    <input placeholder="URL" [(ngModel)]="url" />
    <select [(ngModel)]="method">
      <option>GET</option><option>POST</option><option>PUT</option><option>DELETE</option>
    </select>
    <button (click)="send()">Send</button>
    <pre *ngIf="resp() as r">{{ r | json }}</pre>
  </section>
  `
})
export class BuilderComponent {
  url = 'http://localhost:4000/echo';
  method: any = 'GET';
  resp = signal<any>(null);
  constructor(private http: HttpClient) {}
  async send() {
    const body = this.method === 'GET' ? undefined : '';
    const out = await this.http.post('/proxy', { method: this.method, url: this.url, headers: {}, body }).toPromise();
    this.resp.set(out);
  }
}
