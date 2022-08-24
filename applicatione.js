var prompt = require('prompt-sync')();

let Mobile = function(battery,composerMemory,sentMemory,inboxMemory,status){
   this.battery = battery;
   this.composerMemory = composerMemory;
   this.sentMemory = sentMemory;
   this.inboxMemory = inboxMemory;
   this.status = status;

   this.setBattery = function(){
      this.battery = battery;
   }
   this.getBattery = function(){
      return this.battery;
   }
   this.isOn = function(){
      if ( this.battery > 0){
         return true;
         return false;
      }
   }
   this.turnOn = function(){
      this.status = true;
   }
   this.turnOff = function(){
      this.status = false;
   }
   this.composeMsg = function(){
      this.composerMemory = prompt("compose mail:")
   }
   this.receiveMsg = function(fromMobile){
      this.inboxMemory = fromMobile.composerMemory;
   }
   this.sendMsg = function(toMobile){
      this.sentMemory = this.composerMemory;
      toMobile.inboxMemory = this.composerMemory;
   }
   this.showMsg =function(currentMobile){
      return currentMobile.inboxMemory;
   }
}
let Iphone = new Mobile(80,'','','',true);
let Nokia = new Mobile(50,'','','',true);

// Nokia.composeMsg();
// Nokia.sendMsg(Iphone);
// Iphone.receiveMsg(Nokia);
// console.log("Iphone.inboxMemory: " + Iphone.inboxMemory);
// console.log("Iphone.showMsg(Iphone): " + Iphone.showMsg(Iphone));// hello iPhone

Iphone.composeMsg();
Iphone.sendMsg(Nokia);
Nokia.receiveMsg(Iphone);
console.log("Nokia.inboxMemory: " + Nokia.inboxMemory);
console.log("Nokia.showMsg(Nokia): " + Nokia.showMsg(Nokia));// hello Nokia