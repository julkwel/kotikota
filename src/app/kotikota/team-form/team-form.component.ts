import { Component, OnInit } from "@angular/core";
import { NgForm, NgModel } from "@angular/forms";

@Component({
  selector: "app-team-form",
  templateUrl: "./team-form.component.html",
  styleUrls: ["./team-form.component.css"]
})
export class TeamFormComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  onSubmit(f: HTMLFormElement) {
    console.log(f.value);
  }
}
