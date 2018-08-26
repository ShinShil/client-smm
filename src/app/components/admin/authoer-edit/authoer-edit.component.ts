import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authoer-edit',
  templateUrl: './authoer-edit.component.html',
  styleUrls: ['./authoer-edit.component.scss']
})
export class AuthoerEditComponent implements OnInit {
  editAuthor: IAuthorModel;

  viewModel = [
    {
      name: 'about',
      label: 'Обо мне'
    },
    {
      name: 'awards',
      label: 'Награды'
    },
    {
      name: 'education',
      label: 'Образование'
    },
    {
      name: 'workExperience',
      label: 'Рабочая опыт'
    }
  ];

  ngOnInit(): void {
    this.editAuthor = {
      about: 'lorem',
      awards: 'Hello world',
      education: 'Education',
      workExperience: 'work experience'
    }
  }
}

