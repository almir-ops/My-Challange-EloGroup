import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { PoModalAction } from '@po-ui/ng-components';
import { PoNotificationService } from '@po-ui/ng-components';
import { PoModalComponent } from '@po-ui/ng-components';
import { NgForm } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { PoCheckboxGroupOption } from '@po-ui/ng-components';
import { StorageService } from '../services/storage.service';
import { ClassLead, StatusLista } from '../services/classes.service';

@Component({
  selector: 'app-panelleads',
  templateUrl: './panelleads.component.html',
  styleUrls: ['./panelleads.component.css']
})
export class PanelleadsComponent implements OnInit {

  leads!: ClassLead;
  items: Array<any> = []
  optionsCheckBox: Array<any> = [];
  @ViewChild('optionsForm', { static: true }) form!: NgForm;
  @ViewChild(PoModalComponent, { static: true }) poModal!: PoModalComponent;
  todo: any[] = [];
  done: any[] = [];
  todos: any[] = [];
  close: PoModalAction = {
    action: () => {
      this.closeModal();
    },
    label: 'Close',
    danger: true
  };

  confirm: PoModalAction = {
    action: () => {
      this.proccessOrder();
    },
    label: 'Confirm'
  };

  public readonly CheckOptions: Array<PoCheckboxGroupOption> = [
    { value: 'Todas', label: 'Selecionar todos' },
    { value: 'RPA', label: 'RPA' },
    { value: 'Produto Digital', label: 'Produto Digital' },
    { value: 'Analytics', label: 'Analytics' },
    { value: 'BPM', label: 'BPM' }
  ];
  constructor(private storageService: StorageService, private poNotification: PoNotificationService, private router: Router) {
    this.leads = new ClassLead();
  }


  ngOnInit() {
    const viewList = this.storageService.getLead();
    this.todo = viewList.filter(value => value.status === StatusLista.Client);
    this.done = viewList.filter(value => value.status === StatusLista.Dados);
    this.todos = viewList.filter(value => value.status === StatusLista.Agendados);
  }

  savelead() {
    if (this.leads.nome !== undefined && this.leads.email !== undefined && this.leads.telefone !== undefined) {
      this.storageService.salvar(this.leads)
      this.poNotification.success(`Adicionado com sucesso`);
      this.refresh();
      return;
    } else {
      this.poNotification.error(`Preencha os campos corretamente!`);

    }

  }

  refresh(): void {
  }


  drop(event: CdkDragDrop<any[]>) {

    if (event.previousContainer === event.container) {

      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      console.log(this.todo);
      console.log(this.done);
      console.log(this.todos);
      this.atualiza(event);
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

  atualiza(event: CdkDragDrop<any[]>) {
    const previousList = [event.previousContainer.data];
    const index = event.previousIndex;
    const data = previousList[0][index];
    if (data.status === StatusLista.Client) {
      data.status = StatusLista.Dados;
    } else if (data.status === StatusLista.Dados) {
      data.status = StatusLista.Agendados;
    }
    this.storageService.salvar(data);
  }

  noReturnPredicate() {
    return false;
  }
  closeModal() {
    this.form.reset();
    this.poModal.close();
  }

  restore() {
    this.form.reset();
  }

  openQuestionnaire() {
    this.poModal.open();
  }

  private proccessOrder() {
    if (this.form.invalid) {
    } else {
      this.confirm.loading = true;

      setTimeout(() => {
        this.confirm.loading = false;
        this.closeModal();
      }, 700);
    }
  }
}
