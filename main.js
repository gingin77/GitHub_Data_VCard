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
      // console.log(data.name);
      let name = data.name;
      let login = data.login;
      // let email = data.email;
      let company = data.company;
      let website = data.blog;
      let story = data.bio;
      let gravatar = data.avatar_url;




      console.log(name);
      // console.log(`Name: ${name}`);


      let markup = `
        <div class="wrapper">
            <h1>${name}</h1>
            <div class="content">
                <div class="the_basics">
                  <h2>The Basics</h2>
                  <ul>
                    <li>Name: ${name}</li>
                    <li>Github URL: ${login}</li>
                    <li>Email: ginniehench@gmail.com</li>
                    <li>Company: ${company}</li>
                    <li>Website: ${website}</li>
                </div>
                  <div class="the_story">
                    <h2>The Story</h2>
                    <p>${story}</p>
                  </div>
                  <div class="gravatar">
                    <img src="${gravatar}">
                  </div>
            </div>
        </div>
        <footer></footer>

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
