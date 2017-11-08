const API_URL = 'https://frozen-bastion-82082.herokuapp.com/v1/api/first_contact_info/'

$(document).ready(
  storeContactInfo,
);

var contactInfo = {};

function storeContactInfo() {
  $(".submit-btn").on("click", function(event) {
    event.preventDefault()
    let firstName = $("#firstName").val();
    let email = $("#email").val();
    let phone = $("#phone").val();
    contactInfo = {
      "first_name": firstName,
      "email": email,
      "phone": phone
    };
    fetch(API_URL, {
        method: "post",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(contactInfo)
      })
      .then((response) => {
        alert('Thank you!')
      });
  });
};
