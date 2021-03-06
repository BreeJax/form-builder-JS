// The Form Data
let formData = [
  // For demonstration purposes,
  // the first form element has been added to the HTML file as a comment
  // compare the input in the HTML file with the contents of this first object
  {
    "type": "text",
    "label": "First Name",
    "id": "user-first-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "text",
    "label": "Last Name",
    "id": "user-last-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "email",
    "label": "Email Address",
    "id": "user-email",
    "icon": "fa-envelope",
    "options": []
  },
  {
    "type": "text",
    "label": "Current Website URL",
    "id": "user-website",
    "icon": "fa-globe",
    "options": []
  },
  {
    "type": "select",
    "label": "Select Language",
    "id": "user-language",
    "icon": "",
    "options": [
      {
        "label": "Select Language",
        "value": "SL"
      },
      {
        "label": "English",
        "value": "EN"
      },
      {
        "label": "French",
        "value": "FR"
      },
      {
        "label": "Spanish",
        "value": "SP"
      },
      {
        "label": "Chinese",
        "value": "CH"
      },
      {
        "label": "Japanese",
        "value": "JP"
      }
    ]
  },
  {
    "type": "textarea",
    "label": "Your Comment",
    "id": "user-comment",
    "icon": "fa-comments",
    "options": []
  },
  {
    "type": "tel",
    "label": "Mobile Number",
    "id": "user-mobile",
    "icon": "fa-mobile-phone",
    "options": []
  },
  {
    "type": "tel",
    "label": "Home Number",
    "id": "user-phone",
    "icon": "fa-phone",
    "options": []
  }
];

// HINTS:
// As you can see, we access the first element in the array
// with [0] and then grab the property "label" using the "." operator
( function(){
  // Select the first element from the array
  let first = formData[ 0 ];
  // Log the first object
  console.log( first );
  // Log the string "First Name"
  console.log( first.label );
} )();


// -------- Your Code Goes Below this Line --------
for (let i = 0; i < formData.length; i++) {
  // console.log(formData[i])
  if (formData[i].type === "textarea") {
    let textarea = document.createElement("textarea")
    textarea.placeholder= formData[i].label
    document.getElementById("fields").appendChild(textarea)
  }
  if (formData[i].type === "select") {

    let select = document.createElement("select")
    let sl = document.createElement("option")
    sl.value = 0;
    sl.innerHTML = formData[i].label
    select.appendChild(sl)

    for (let j = 0; j < formData[i].options.length; j++) {
      let opt = document.createElement("option")
      opt.innerHTML = formData[i].options[j].label
      opt.value = formData[i].options[j].value
      select.appendChild(opt)
    }
    document.getElementById("fields").appendChild(select)
  }  else {
    let element = document.createElement("input")
    element.placeholder= formData[i].label
    document.getElementById("fields").appendChild(element)
  }
}





// <input type="text" placeholder="First Name" id="firstnameInput">
// <input type="text" placeholder="Last Name" id="lastnameInput">
// <input type="text" placeholder="Email" id="emailInput">
// <input type="text" placeholder="Current website url" id="urlInput">
// <select placeholder="Select language..." id="language">
//     <option value="English">English</option>
//     <option value="Español">Español</option>
//     <option value="Français">Français</option>
//     <option value="عربى">عربى</option>
// </select>
// <textarea name="your comment" id="your-comment" placeholder="Your comment" cols="30" rows="10"></textarea>
// <input type="phonenumber" placeholder="Mobile Number" id="mobileNumber">
// <input type="phonenumber" placeholder="Home Number" id="homeNumber">




//
