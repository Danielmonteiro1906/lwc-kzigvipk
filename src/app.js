import { LightningElement } from "lwc";

export default class App extends LightningElement {
 name = "Daniel Monteiro";
 tel = "1515481655";
 cpf = "2598745632";
 Idade = 41;
 email = "dm_monteiro@hotmail.com";
 Insta = "https://www.instagram.com/daniel_monteiro_oficial/";
 linkedin = "https://www.linkedin.com/in/daniel-monteiro-40ba64139/";
 trailhed = "https://trailblazer.me/id/dmonteiro12";
 visible = true;
 trocarDiv(){
   this.visible = !this.visible;
 }
 alteraValores(){
   this.name = "Anna Carolina";
   this.tel = "5489853234";
   this.cpf = "85622545499";
   this.Idade = 25;
   this.email = "annacarol@gamil.com";
 }
}
