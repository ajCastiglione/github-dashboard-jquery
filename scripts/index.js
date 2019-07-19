const $ = jQuery;
const api = "https://api.github.com";

function getUser() {
  return new Promise((resolve, reject) => {
    fetch(`${api}/users/ajcastiglione`)
      .then(res => res.json())
      .then(res => resolve(res))
      .catch(e => reject(e));
  });
}

function setInformation(name, avatar) {
  let nameField = $("#name"),
    profileImage = $("#avatar");
  nameField.text(name);
  profileImage.attr("src", avatar);
}

$(async function() {
  let profile = await getUser();
  console.log(profile);
  setInformation(profile.name, profile.avatar_url);
});
