const form = document.getElementById("my-form");

form.addEventListener('submit', StoreuserData);
form.addEventListener('click', deleteelment);

function StoreuserData(e) {
  // get user input
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const telephone = document.getElementById('phonenumber').value;

  e.preventDefault();

  // retrieve existing user data from local storage
  //let existingUserData = localStorage.getItem('userData');
  //if (existingUserData === null) {
    // if there is no existing data, create an empty array
    //existingUserData = [];
  //} else {
    // if there is existing data, parse it from JSON to array
    //existingUserData = JSON.parse(existingUserData);
  //}

  // add new user data to the array
    const newUser = {
    name: name,
    email: email,
    phonenumber: telephone,
  };
  //existingUserData.push(newUser);

  // store the updated user data in local storage
  //localStorage.setItem('userData', JSON.stringify(existingUserData));

  // display a success message to the user
  //alert('User data stored successfully!');
  axios.post("https://crudcrud.com/api/cfc93094d65549bcbb80fe33bbc4be69/appointmentData", newUser)
   .then((response)=> console.log(response));

  // add new user to the screen
  showuseronscreen(newUser);
}

function showuseronscreen(newUser){
    const element=document.createElement('li');
    element.textContent=newUser.name+'-'+newUser.email+'-'+newUser.phonenumber;
    form.appendChild(element);
    const del=document.createElement('button');
    del.classList.add('delete');
    del.textContent='delete';
    del.addEventListener('click', function() {
        if(confirm('Are You Sure?')){
            var li = del.parentElement;
            form.removeChild(li);
        }
    });
    const edit=document.createElement('button');
    edit.classList.add('edit');
    edit.textContent='edit';
    edit.addEventListener('click',function() {
        const li = edit.parentElement;
        const name = li.textContent.split('-')[0];
        const email = li.textContent.split('-')[1];
        const phone = li.textContent.split('-')[2];
        document.getElementById('name').value = name;
        document.getElementById('email').value = email;
        document.getElementById('phonenumber').value = phone;
        form.removeChild(li);
        form.removeChild(del);
        form.removeChild(edit);
    });
    element.appendChild(del);
    element.appendChild(edit);
}
