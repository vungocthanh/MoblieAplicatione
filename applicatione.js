let properties = function (soanTin) {
   this.soanTin = soanTin;

   this.getSoanTin = function () {
      return this.soanTin;
   }
let Methodes = function(read,sent,seen){
   this.readMes = read;
   this.sentMes = sent;
   this.seenMes = seen;

   this.setReadMes = function(read){
      this.readMes = read;
   }
   this.getReadMes = function(){
      return this.readMes;
   }
   this.setSentMes = function(){
      
   }
   this.getSentMes = function(){
      
   }

}
