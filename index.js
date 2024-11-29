var temp=-1
function addQuote(){
    var quote='';
    var qts=["“Be yourself; everyone else is already taken. ”<br>― Frank Zappa","“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”<br>― Albert Einstein","“Without music, life would be a mistake.”<br>― Marcus Tullius Cicero","“So many books, so little time.”<br>― Bernard M. Baruch","“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”<br>― Bernard M. Baruch","“You only live once, but if you do it right, once is enough.”<br>― Dr. Seuss","“In three words I can sum up everything I've learned about life: it goes on.”<br>― Dr. Seuss","“If you tell the truth, you don't have to remember anything.”<br>― Dr. Seuss","“A friend is someone who knows all about you and still loves you.”<br>― Mae West","“To live is the rarest thing in the world. Most people exist, that is all.”<br>― Mark Twain","“Live as if you were to die tomorrow. Learn as if you were to live forever.”<br>― C.S. Lewis, The Four Loves"];
    var choice=Math. floor(Math. random()*10) + 1;
    while(choice==temp){
        choice=Math. floor(Math. random()*10) + 1;
    }
    temp=choice
    quote+=qts[choice]
    document.getElementById("demo").innerHTML=quote;
 
}