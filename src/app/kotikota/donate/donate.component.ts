import { Component, OnInit } from '@angular/core';

@Component({
  selector: "app-donate",
  templateUrl: "./donate.component.html",
  styleUrls: ["./donate.component.css"]
})
export class DonateComponent implements OnInit {
  private items = [
    {
      title: "Lorem ipsum dolor sit amet.",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, ipsa, quidem qui ea, incidunt error sit quos aliquam culpa eveniet aperiam dolores est optio illum quasi rem voluptatibus rerum ex repellat eius. Ullam, veritatis commodi! Dolores nulla quo explicabo porro."
    },
    {
      title: "Lorem ipsum dolor sit amet.",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, ipsa, quidem qui ea, incidunt error sit quos aliquam culpa eveniet aperiam dolores est optio illum quasi rem voluptatibus rerum ex repellat eius. Ullam, veritatis commodi! Dolores nulla quo explicabo porro."
    },
    {
      title: "Lorem ipsum dolor sit amet.",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, ipsa, quidem qui ea, incidunt error sit quos aliquam culpa eveniet aperiam dolores est optio illum quasi rem voluptatibus rerum ex repellat eius. Ullam, veritatis commodi! Dolores nulla quo explicabo porro."
    },
    {
      title: "Lorem ipsum dolor sit amet.",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, ipsa, quidem qui ea, incidunt error sit quos aliquam culpa eveniet aperiam dolores est optio illum quasi rem voluptatibus rerum ex repellat eius. Ullam, veritatis commodi! Dolores nulla quo explicabo porro."
    },
  ];

  constructor() {}

  ngOnInit() {}
}
