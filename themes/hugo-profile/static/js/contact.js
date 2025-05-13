async function handleFormspreeSubmit(event) {
  event.preventDefault();
  var form = document.getElementById("feedback-form");
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      if (response.ok) {
        feedbackAlert("success", "Thanks for your submission!");
        form.reset();
      } else {
        response.json().then((data) => {
          var errMessage = data.errors;
          for (var i = 0; i < errMessage.length; i++) {
            feedbackAlert("danger", errMessage[i].message);
          }
        });
      }
    })
    .catch((error) => {
      feedbackAlert("danger", "Oops! There was a problem submitting your form");
    });
}

function feedbackAlert(type, message) {
  var feedbackFormStatus = document.getElementById("feedback-form-status");
  var alert = `<div class="alert alert-${type} d-flex align-items-center" role="alert">
                     <svg class="bi flex-shrink-0 me-2" role="img" aria-label="Success:">
                        <use xlink:href="#check-circle-fill" />
                    </svg>
                    <div>${message}</div>
                    <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
                </div>`;
  feedbackFormStatus.innerHTML = alert;

  // Remove alert after 3 seconds
  setTimeout(function () {
    feedbackFormStatus.innerHTML = "";
  }, 3000);
}
