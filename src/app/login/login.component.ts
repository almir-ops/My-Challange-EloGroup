import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PoStorageService } from '@po-ui/ng-storage';
import { PoDialogService, PoNotificationService } from '@po-ui/ng-components';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  confirmNewPassword!: string;
  help: string = 'Letras maiúsculas e minúsculas, caracteres especiais e numeros)';
  newPassword!: string;
  password: any;
  usuario: any;
  pattern: '^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[$@$!%*?&])[A-Za-z\\d$@$!%*?&]{8,}' = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[$@$!%*?&])[A-Za-z\\d$@$!%*?&]{8,}";

  constructor(private router: Router, private storage: PoStorageService,
    public notify: PoNotificationService, private poAlert: PoDialogService) { }

    ngOnInit(): void { }

  setPassword() {
    if (this.confirmNewPassword === this.password && this.password.length > 8) {
      this.storage.set('user', { name: this.usuario, password: this.password })
        .then(() => {
          if (this.usuario) {
            
              this.router.navigate(['/painel']);
              this.notify.success('Usuario Logado com Sucesso!')
          
          } else {
            this.poAlert.alert({
              title: 'Usuário invalido',
              message: 'Preencha os campos corretamente'
            });
          }
        });

    } else if (this.confirmNewPassword != this.password) {
      this.poAlert.alert({
        title: 'Senha incorreta',
        message: 'As senhas não correponde',
      });
    } else {
      console.log("aqui")
    }
  }



}
