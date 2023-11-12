const tableBody = document.querySelector("#employee-table tbody");
const tableRow = document.createElement("tr");


const nameCell = document.createElement("td");
const empIdCell = document.createElement("td");
const departmentCell = document.createElement("td");
const experienceCell = document.createElement("td");
const emailCell = document.createElement("td");
const mobileCell = document.createElement("td");
const roleCell = document.createElement("td");
const deleteCell = document.createElement("td");


nameCell.textContent = "John Doe";
empIdCell.textContent = 12345;
departmentCell.textContent = "Frontend";
experienceCell.textContent = 3;
emailCell.textContent = "";
mobileCell.textContent = 9876543210;
roleCell.textContent = "Junior";
deleteCell.innerHTML = "<button class='delete-button'>Delete</button>";


tableRow.appendChild(nameCell);
tableRow.appendChild(empIdCell);
tableRow.appendChild(departmentCell);
tableRow.appendChild(experienceCell);
tableRow.appendChild(emailCell);
tableRow.appendChild(mobileCell);
tableRow.appendChild(roleCell);
tableRow.appendChild(deleteCell);


tableBody.appendChild(tableRow);
