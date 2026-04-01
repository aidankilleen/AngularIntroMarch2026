import { Component, inject, OnInit, signal } from '@angular/core';
import { MembersService } from '../members-service';
import { Member } from '../member';
import { JsonPipe } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ButtonDirective, ButtonModule } from "primeng/button";
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';

@Component({
  selector: 'app-members-page',
  imports: [JsonPipe, TableModule, ButtonDirective, FormsModule, ButtonModule, InputTextModule, CheckboxModule],
  template: `
  <div class="card">
    <h2>Members</h2>
    <p-table 
      [value]="members()"
      stripedRows
      showGridlines
      editMode="row"
      dataKey="id">
      <ng-template
        pTemplate="header">
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Email</th>
          <th>Active</th>
          <th>Controls</th>
        </tr>
      </ng-template>
      <ng-template 
        pTemplate="body"
        let-member
        let-editing="editing"
        let-ri="rowIndex">
        <tr [pEditableRow]="member">
          <td>{{member.id}}</td>
          <td pEditableColumn>
            <p-cellEditor>
              <ng-template pTemplate="input">
                <input [(ngModel)]="member.name"/>
              </ng-template>
              <ng-template pTemplate="output">
                {{member.name}}
              </ng-template>
            </p-cellEditor>
          </td>
          <td>{{member.email}}</td>
          <td>{{member.active}}</td>
          
          <td>
            @if(!editing) {
            <button 
              icon="pi pi-pencil" 
              pInitEditableRow
              pButton
              severity="primary" 
              (click)="onRowEditInit(member)"></button>
            } @else { 
            <button 
              icon="pi pi-check" 
              pButton 
              severity="success" 
              pSaveEditableRow
              (click)="onRowEditSave(member)"></button>
            <button 
              icon="pi pi-times" 
              pButton 
              severity="secondary" 
              pCancelEditableRow
              (click)="onRowEditCancel(member, ri)">

            </button>
            }
          </td>
        </tr>
      </ng-template>
    </p-table>
    <hr>
    
  </div>
  `,
  styleUrl: './members-page.css',
})
export class MembersPage implements OnInit {

  members = signal<Member[]>([]);

  clonedMembers:Member[] = [];

  ngOnInit(): void {
    
    this.membersService.getMembers()
      .subscribe({
        next: data => {
          this.members.set(data);
          console.log(this.members);
        }, 
        error: error => {

        }
      })
  }

  membersService: MembersService = inject(MembersService);

  onRowEditInit(member:Member) {
    //alert(JSON.stringify(member));
    this.clonedMembers.push({...member});
  }
  onRowEditCancel(member: Member, rowIndex:number) {
    const originalMember = this.clonedMembers.filter(m=>m.id==member.id);

    if (!originalMember) {
      return;
    }

    console.log(`cancelling... ${rowIndex}`);

    let list:Member[] = this.members();

    list[rowIndex] = originalMember[0];

    this.members.update((rows:Member[])=>{
      const copy = [...rows];
      copy[rowIndex] = originalMember[0];
      return copy;
    })
  }
  onRowEditSave(member:Member) {

    this.membersService.updateMember(member)
      .subscribe({
        next: (updatedMember:Member) => {
          this.members.update(
            (rows) => rows.map(
              row => row.id === updatedMember.id ? updatedMember : row ))
        }, 
        error: err => {}
      })
  }
}
