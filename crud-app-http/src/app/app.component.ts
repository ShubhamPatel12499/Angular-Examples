import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent{
  title= "crud-app"

    users!: any[];
    newUser = {
      userName: '',
      email: '',
      mobileNo: '',
      address: ''
    };
    editingUser: any;
  
    constructor(private http: HttpClient) {
      this.getUsers();
    }
  
    getUsers(): void {
      this.http.get<any[]>('https://process-web-backend.onrender.com/users/getUser').subscribe(users => {
        this.users = users;
      });
    }

    createUser(): void {
      this.http.post<any>('https://process-web-backend.onrender.com/users/addUser', this.newUser).subscribe(
        () => {
          this.getUsers();
          this.newUser = {
            userName: '',
            email: '',
            mobileNo: '',
            address: ''
          };
        },
        (error) => {
          console.error(error);
        }
      );
    }

    editUser(user: any): void {
      this.editingUser = { ...user };
    }

    updateUser(): void {
      if (this.editingUser) {
        const url = `https://process-web-backend.onrender.com/users/${this.editingUser._id}`;
        this.http.patch<any>(url, this.editingUser).subscribe(
          () => {
            this.getUsers();
            this.editingUser = null;
          },
          (error) => {
            console.error(error);
          }
        );
      }
    }
  
    cancelEdit(): void {
      this.editingUser = null;
    }
  
    deleteUser(id: string): void {
      this.http.delete(`https://process-web-backend.onrender.com/users/${id}`).subscribe(() => {
        this.getUsers();
      });
    }
  }
