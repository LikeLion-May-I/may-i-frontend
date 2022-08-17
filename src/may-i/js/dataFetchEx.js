
window.onload = () => {

    console.log('data.data'); 

    fetch("http://may-i-server.o-r.kr:8000/profile/get-apply-request-all-for-reporter/", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "5a6fd5a0f759438916a2739a34940abc372c31fb",
        }
    }).then((response) => response.json()).then((data) => {

        console.log(data.data); 
        const interviewWrap = document.querySelector('#interviewWrap')
        for(div of data.data){
            const interviewDiv = `<a class="flex p-3 justify-around text-base text-black w-full space-x-10" href="/interview/get-interview/${div.id}}">
                                    <p>${div.name}</p>
                                    <p>${div.title}</p>
                                    <p>${div.deadline}</p>
                                    <p>${div.is_send}</p>
                                    
                            </a>`
            interviewWrap.innerHTML += interviewDiv
                    
        } 


    });
 


}


const clickBtn = () => {

    fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((response) => response.json())
    .then((data) => {

        console.log((data))

    });

}


