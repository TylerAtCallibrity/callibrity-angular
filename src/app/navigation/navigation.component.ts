import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  public static readonly ABOUT_US:string  = "About Us";
  public static readonly SERVICES:string  = "Services";
  public static readonly PEOPLE:string    = "People";
  public static readonly COMMUNITY:string = "Community";
  public static readonly CAREERS:string   = "Careers";
  public static readonly BLOG:string      = "Blog";
  public static readonly CONTACT:string   = "Contact";

  constructor() { }

  ngOnInit() {
  }

  getAboutUsLinkText(){
    return NavigationComponent.ABOUT_US;
  }

  getServicesLinkText(){
    return NavigationComponent.SERVICES;
  }

  getPeopleLinkText(){
    return NavigationComponent.PEOPLE;
  }

  getCommunityLinkText(){
    return NavigationComponent.COMMUNITY;
  }

  getCareersLinkText(){
    return NavigationComponent.CAREERS;
  }

  getBlogLinkText(){
    return NavigationComponent.BLOG;
  }

  getContactLinkText(){
    return NavigationComponent.CONTACT;
  }

}
