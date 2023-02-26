import {Component, Inject} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {ApiService} from "../../services/api.service";

@Component({
  selector: 'app-co',
  templateUrl: './co.component.html',
  styleUrls: ['./co.component.scss']
})
export class CoComponent {

  public loginForm: FormGroup;

  constructor(
    @Inject(FormBuilder) private fb: FormBuilder,
    @Inject(ApiService) private api: ApiService,
    @Inject(Router) private router: Router
  ) {
    this.loginForm = this.fb.group(
      {
        email: [''],
        motdepasse: ['']
      }
    );
  }

  public login(): void {
    this.api.getjwt(this.loginForm.get('email')?.value, this.loginForm.get('motdepasse')?.value);
  }
}
