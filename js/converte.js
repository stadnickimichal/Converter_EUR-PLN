document.addEventListener("DOMContentLoaded", function(){
    var converter={
        conv: $(".conv"),
        btn: $(".conv__btn")[0],
        
        currentDate: function(){
            var time= new Date();
            return time.getFullYear()+"."+time.getMonth()+"."+time.getDate()+" "+time.getHours()+":"+time.getMinutes();
        },
        calculate: function(){
            var getValue= $(".conv__input").val();
            var rate= 4.2*(1+(Math.floor(Math.random()*100))/1000);
            return Math.floor(getValue*rate*100)/100;
        },
        showResult: function(){
            this.conv.after("<p class='time'><i class='fa fa-clock-o' aria-hidden='true'></i> "+this.currentDate()+"</p>");
            this.conv.after("<div><div class='prev'><p>PLN AMOUNT</p>"+this.calculate()+"</div></div>");
        },
        bind: function(){
            this.btn.addEventListener('click',this.showResult.bind(this));
        }
    };
    converter.bind();
});