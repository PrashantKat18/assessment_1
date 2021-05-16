import { Component, OnInit } from '@angular/core';
// import { FormBuilder } from '@angular/forms';
import { AddProvider } from '../../services/add';
import { FormGroup, FormControl,FormBuilder,NgForm } from '@angular/forms';
@Component({
  selector: 'app-apply',
  templateUrl: './apply.component.html',
  styleUrls: ['./apply.component.scss']
})
export class ApplyComponent implements OnInit {
  applyForm: FormGroup;
  name:string=""
  mobile:string=""
  email:string=""
  city:string=""
  state:string=""
  constructor(  
    private formBuilder: FormBuilder,
    public addProvider: AddProvider,) {
      this.applyForm = formBuilder.group({
        name:new FormControl(),
        mobile:new FormControl(),
        email:new FormControl(),
        city:new FormControl(),
        state:new FormControl(),

      })
   
    }
  ngOnInit() {
  }

  onRegister(){
    this.applyForm.reset()
 }

//  $('#btnSave').click(function() {
//   $('#StudentModal').modal('hide');
// });

  // apply() {
  //   if (this.applyForm.valid) {
  //     this.addProvider.saveApply(this.applyForm.value)
  //       .then((res) => {
  //         this.onRegister();
  //       }).catch((err) => {
  //         console.log(err)
  //       });

  //   } else {
  //     console.log("Not Valid");
  //   }
  // }

}
