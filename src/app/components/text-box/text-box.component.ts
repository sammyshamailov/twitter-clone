import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-box',
  templateUrl: './text-box.component.html',
  styleUrls: ['./text-box.component.css']
})
export class TextBoxComponent implements OnInit {
  tweetContent = '';

  constructor() { }

  postTweet() {
    // TODO call a service.
    console.log(this.tweetContent);
    this.tweetContent = '';
  }

  ngOnInit() {
  }

}