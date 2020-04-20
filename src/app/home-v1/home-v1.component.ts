import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-v1',
  templateUrl: './home-v1.component.html',
  styleUrls: ['./home-v1.component.css']
})
export class HomeV1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  public myLocalDataList = [
    {
      name: "Burgers",
      description: "A flat round cake of minced beef that is fried or grilled and typically served in a bread roll; a hamburger."
    }, {
      name: "Sandwiches",
      description: "an item of food consisting of two pieces of bread with a filling between them, eaten as a light meal."
    }, {
      name: "French Fries",
      description: "French fries, or simply fries; chips, finger chips, or french-fried potatoes are batonnet or allumette-cut deep-fried potatoes"
    }, {
      name: "Milkshakes",
      description: "a cold drink made of milk, a sweet flavouring such as fruit or chocolate"
    }, {
      name: "Taco",
      description: "a Mexican dish consisting of a folded or rolled tortilla filled with various mixtures, such as seasoned mince, chicken, or beans."
    }, {
      name: "Biscuit",
      description: "a small baked unleavened cake, typically crisp, flat, and sweet."
    }, {
      name: "Cookies",
      description: "a sweet biscuit."
    }, {
      name: "Hot Dog",
      description: "The hot dog or dog is a grilled or steamed link-sausage sandwich where the sausage is served in the slit of a partially sliced bun."
    }, {
      name: "Pizza",
      description: "Pizza is a savory dish of Italian origin."
    }, {
      name: "Pancake",
      description: "A pancake is a flat cake, often thin and round, prepared from a starch-based batter that may contain eggs, milk and butter."
    }
  ];

  public search2 = '';

  selectedTempStatic(item) {
    this.search2 = item;
  }


}
