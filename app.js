const github = new Github;
const searchUser = document.getElementById('searchUser');
searchUser.addEventListener('keyup', (e) => {
    //Get input text
    const userText = e.target.value;
    if(userText !== '') {
        console.log("User Text: ", userText);
        //Make Http call
        github.getProfile(userText)
            .then(data => {
                console.log("Data: ", data);
                if(data.profile.message === 'Not Found') {
                    //Show Alert

                } else {
                    //Show Profile

                }
            })
    } else {
        //Clear Profile 


    }
});