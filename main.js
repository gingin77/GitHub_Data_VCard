console.log("talking");

fetch('https://api.github.com/users/gingin77')
  .then(
    function(response){
      if (response.status !== 200){
        console.log('Looks like there was a problem. Status Code: ' + response.status);
        return;
      }

    // Get data fields
    response.json().then(function(data) {
      console.log(data.name);
      let name = data.name;
      console.log(name);
      console.log(`Name: ${name}`);







      let markup = `
        <h1> ${name}</h1>
        <div class="the_basics">
          <ul>
            <li>Name: ${name}</li>
            <li>Github URL ${githubname}</li>
            <li>Email: ${email}</li>
            <li>Company: ${company}</li>
            <li>Website: ${website}</li>
        </div>
        <div class="the_story">

        </div>
      `

      document.body.innerHTML = markup;
        });
      }
  )





// Fields to use
// current_user_url
//
// "current_user_url": "https://api.github.com/user",
// "emails_url": "https://api.github.com/user/emails",
