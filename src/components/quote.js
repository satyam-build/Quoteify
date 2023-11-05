import React, { useEffect, useState } from 'react'
import icon from './content_copy_FILL0_wght400_GRAD0_opsz24.png'
import tweetX from './icons8-twitterx-150.png'
function Quote(props) {
  const colors = ["rgb(115,168,87)","rgb(251,105,100)","rgb(52,34,36)","rgb(243,156,18)","rgb(71,46,50)","rgb(44,62,80)","rgb(119,177,169)","rgb(155,89,182)","rgb(39,174,96)","rgb(22,160,133)","rgb(189,187,153)","RGB(255, 250, 240)","RGB(248, 243, 234)","RGB(45, 40, 35)","RGB(234, 228, 222)","RGB(213, 208, 198)","RGB(50, 45, 40)","RGB(10, 5, 0","RGB(173, 168, 150)","RGB(178, 173, 156)"]
  let [quote,settQuote]=useState("");
  let [author,setAuthor]=useState("");
  let [colour,setColour]=useState("grey");
    const quotes = [
["The only way to do great work is to love what you do." , "Steve Jobs"],
["In three words I can sum up everything I've learned about life: it goes on." , "Robert Frost"],
["Success is not final, failure is not fatal: It is the courage to continue that counts." , "Winston Churchill"],
["The only limit to our realization of tomorrow will be our doubts of today." , "Franklin D. Roosevelt"],
["In the middle of every difficulty lies opportunity." , "Albert Einstein"],
["Don't watch the clock; do what it does. Keep going." , "Sam Levenson"],
["The greatest glory in living lies not in never falling, but in rising every time we fall." , "Nelson Mandela'"],
["The only thing we have to fear is fear itself." ,"Franklin D. Roosevelt"],
["Life is what happens when you're busy making other plans." , "John Lennon"],
["The best way to predict the future is to create it." , "Peter Drucker"],
["The only person you are destined to become is the person you decide to be." , "Ralph Waldo Emerson"],
["It does not matter how slowly you go as long as you do not stop." , "Confucius"],
["Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time." , "Thomas Edison"],
["Happiness can be found even in the darkest of times if one only remembers to turn on the light." , "J.K. Rowling"],
["The biggest risk is not taking any risk. In a world that's changing quickly, the only strategy that is guaranteed to fail is not taking risks." ,"Mark Zuckerberg"],
["The only way to do great work is to love what you do." , "Steve Jobs"],
["If you can dream it, you can do it." , "Walt Disney"],
["Don't let what you can't do interfere with what you can do." , "John Wooden"],
["The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart." , "Helen Keller"],
["Life is like riding a bicycle. To keep your balance, you must keep moving." , "Albert Einstein"],
["The only thing that is constant is change." , "Heraclitus"],
["If you want to go fast, go alone. If you want to go far, go together." , "African proverb"],
["Be the change you wish to see in the world." , "Mahatma Gandhi"],
["The future belongs to those who believe in the beauty of their dreams." , "Eleanor Roosevelt"],
["The only way to predict the future is to create it." , "Peter Drucker"],
["The best way to find out if you can trust somebody is to trust them." , "Ernest Hemingway"],
["If you want to live a happy life, tie it to a goal, not to people or things." , "Albert Einstein"],
["The only thing that is worse than being blind is having sight but no vision." , "Helen Keller"],
["The journey of a thousand miles begins with a single step." , "Lao Tzu"]
    ];

      const newQuote =()=>{
        
      let counter = Math.floor(Math.random()*29);
      settQuote(quotes[counter][0]);
      setAuthor(quotes[counter][1]);
      let val = Math.floor(Math.random()*11);
      console.log(colors[val])
      setColour(colors[val]);
        props.Colorgetter(colors[val]);
    }

    useEffect(()=>{
      newQuote();
    },[])
  
    const handleCopy=()=>{
      navigator.clipboard.writeText(quote);
      props.showalert(" Quote copied","Success !");
      console.log(quote);
    }
  return (
    <div className='container'>
    <div  id="quote-box" style={{display:"block",position:"absolute",backgroundColor:"whitesmoke",padding:"40px",left:"30%",top:"25%" , width:"inherit",maxWidth:"800px",borderRadius:"10px"}}>
        <div className='imagediv' style={{margin:"0 0 30px 0 ",display:"flex", justifyContent:"flex-end", alignItems : "center",cursor:"pointer"}}>
          <img onClick={handleCopy} src={icon} alt="" />
        </div>
        <div id="text" style={{textAlign:"center",fontSize:"35px",fontWeight:600,color:`${colour}`}}>
            " {quote} "
        </div>
        <div id="author" style={{textAlign:"right", margin:"20px 20px 0 0",fontSize:"23px",color:`${colour}`}}>
         - {author}
        </div>
        <div  style={{margin:"30px 20px 30px 20px ",display:"flex", justifyContent:"space-between", alignItems : "center",cursor:"pointer"}}>
        <div className='button' id="tweet-quote" ><a href="https://twitter.com/intent/tweet" target="_blank" rel="noreferrer" style={{color:"whitesmoke",padding:"15px 15px 18px 15px",backgroundColor:`${colour}`, textDecoration:"none"}}><img src={tweetX} style={{width:"50px"}} alt="" /></a></div>
        <div className='button' id="new-quote" style={{color:"whitesmoke",padding:"15px",backgroundColor:`${colour}`}} onClick={newQuote}>New Quote</div>
        </div>
    </div>
    </div>
  )
}

export default Quote;