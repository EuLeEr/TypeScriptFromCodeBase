document.getElementById("app").innerHTML = `
<h1>Hello Parcel!</h1>
<div>
  Look
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>
  for more info about Parcel.
</div>
`;
interface User {
  firstName: string;
  lastName: string;
}
const user: User = { firstName: "Евгений", lastName: "Ермолов" };
document.getElementById("app").innerHTML =
  document.getElementById("app").innerHTML +
  `
<div>
<p></p>
Copyright ${user.firstName} ${user.lastName}
</div>
`;
