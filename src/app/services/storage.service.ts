import { Injectable } from '@angular/core';
import { ClassLead } from './classes.service';
@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private localstorage: Storage;
  
  constructor() {
    this.localstorage = window.localStorage;
  }

  salvar(leads: ClassLead) {
    if (!leads.id) {
      leads.id = this.idNext();
    }
    this.localstorage.setItem(String(leads.id), JSON.stringify(leads));

  }
  private idNext(): number {
    let id = JSON.parse(this.localstorage.getItem('leads') || '{}');
    if (id) {
      id.count = id.count + 1;
      this.localstorage.setItem('leads', JSON.stringify(id));
    } else {
      id = 1;
      this.localstorage.setItem('leads', JSON.stringify(id));
    }
    return id.count;
  }

  public getLead(): ClassLead[] {
    const viewList: ClassLead[] = [];
    const keys = Object.keys(this.localstorage);
    for (const key of keys) {
      const regExpOnlyNumber = new RegExp(/^[0-9]*$/);
      if (key !== 'leads' && regExpOnlyNumber.test(key)) {
        const auxLead: ClassLead = JSON.parse(this.localstorage.getItem(key) || '{}');
        viewList.push(auxLead);
      }
    }
    return viewList;
  }
}
