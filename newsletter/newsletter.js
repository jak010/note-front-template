

function handleNewsLetterFormSubmit(event) {
  event.preventDefault(); // 기본 동작(페이지 리로딩)을 막습니다.
  console.log("?")
    
    let username = document.getElementById("newsletter_email")
    console.log(username.value)

    let url = "https://0d40-1-230-134-25.ngrok-free.app/api/v1/slack/subscribe?"
    
    
    fetch(url+ new URLSearchParams({
        username: username.value
    }), {
        method : "GET",
        headers: {
            'Content-Type': 'application/json; charset=utf-8',
            'Accept': 'application/json',
            "Access-Control-Allow-Origin" : "*",
            "Origin": location.origin
            
        },
    })
}
