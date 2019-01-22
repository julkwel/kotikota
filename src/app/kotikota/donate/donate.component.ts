import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-donate",
  templateUrl: "./donate.component.html",
  styleUrls: ["./donate.component.css"]
})
export class DonateComponent implements OnInit {
  cards = [
    {
      title: "Card Title 1",
      description:
        "Some quick example text to build on the card title and make up the bulk of the card content",
      buttonText: "Button",
      img:
        "../../../assets/Kôtikôta.png"
    },
    {
      title: "Card Title 2",
      description:
        "Some quick example text to build on the card title and make up the bulk of the card content",
      buttonText: "Button",
      img:
        "../../../assets/Kôtikôta.png"
    },
    {
      title: "Card Title 3",
      description:
        "Some quick example text to build on the card title and make up the bulk of the card content",
      buttonText: "Button",
      img:
        "../../../assets/Kôtikôta.png"
    },
    {
      title: "Card Title 4",
      description:
        "Some quick example text to build on the card title and make up the bulk of the card content",
      buttonText: "Button",
      img:
        "../../../assets/Kôtikôta.png"
    },
    {
      title: "Card Title 5",
      description:
        "Some quick example text to build on the card title and make up the bulk of the card content",
      buttonText: "Button",
      img:
        "../../../assets/Kôtikôta.png"
    }
  ];
  slides: any = [[]];
  chunk(arr, chunkSize) {
    let R = [];
    for (let i = 0, len = arr.length; i < len; i += chunkSize) {
      R.push(arr.slice(i, i + chunkSize));
    }
    return R;
  }
  ngOnInit() {
    this.slides = this.chunk(this.cards, 3);
  }
}
