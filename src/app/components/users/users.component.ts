import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private _activatedRoute:ActivatedRoute) { }

  id:string = '';

  ngOnInit(): void {

    this.getUsersIndex();
  }

  getUsersIndex() {
    this._activatedRoute.params.subscribe((parameter) => {
      const _id = parameter['id']; 
      
      if(!!_id) {
        this.id = _id;
        console.log('Id from url is: '+this.id);
      }
      else {
        this.id = 'Empty';
      }
    });
  }
}
