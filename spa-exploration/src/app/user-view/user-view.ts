import { Component, input, output, signal } from '@angular/core';
import { User } from '../users-service';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-user-view',
  imports: [JsonPipe],
  templateUrl: 'user-view.html',
  styleUrl: './user-view.css',
})
export class UserView {

  user = input<User>();
  saved = output<User>();

  editingUser = signal<User>({id:0, name:"", email:"", active:false});
  //name:string = "Alice";
  name = signal<string>("Alice");
  editing = signal<boolean>(false);

  onChange(value:string) {
    this.name.set(value);
  }

  onReset() {
    this.name.set("");
  }

  onEdit() {
    let u = this.user();
    let c:User = {...u};
    this.editingUser.set(c);
    this.editing.set(true);
  }
  onNameChange(value:string) {
    console.log(value);

    let user = this.editingUser();
    user.name = value;
    this.editingUser.set(user);
  }
  onSave() {
    this.editing.set(false);
    this.saved.emit(this.editingUser());
  }
  onCancel() {
    this.editing.set(false);
  }

}
