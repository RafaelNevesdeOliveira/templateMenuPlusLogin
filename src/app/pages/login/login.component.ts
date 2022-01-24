import { Component, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public loginForm!: FormGroup;
  public btnDisabled?: boolean;
  public usuarioAutenticado: boolean = false;
  public isLoading: boolean = false;
  public hideForm: boolean = false;

  mostrarMenuEmitter = new EventEmitter<boolean>();

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  iniciaFormulario() {
    this.loginForm = this.formBuilder.group({
      username: [
        '',
        [
          Validators.required,
          Validators.maxLength(50),
          Validators.minLength(6),
        ],
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.maxLength(15),
          Validators.minLength(6),
        ],
      ],
    });
  }

  fazerLogin() {
    this.hideForm = !this.hideForm;
    this.isLoading = true
    this.router.navigate(['/admin']);
  }

  // #region VALIDATION

  verificaValidacoesForm(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach((campo) => {
      let controle = formGroup.get(campo);
      controle?.markAsTouched();
      if (controle instanceof FormGroup) {
        this.verificaValidacoesForm(controle);
      }
    });
  }

  verificaValidTouched(campo: any) {
    return (
      !this.loginForm.get(campo)?.valid && this.loginForm.get(campo)?.touched
    );
  }

  aplicaCssErro(campo: any) {
    return {
      'has-error': this.verificaValidTouched(campo),
      'has- ': this.verificaValidTouched(campo),
    };
  }
}
