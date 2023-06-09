//UC5
window.addEventListener('DOMContentLoaded', (event) => {
    createInnerHtml();
  });

const createInnerHtml = () => {
const headerHtml =
       `<th>Profile</th>
        <th>Name</th>
        <th>Gender</th>
        <th>Department</th>
        <th>Salary</th>
        <th>Start Date</th>
        <th>Actions</th>`;

let innerHtml = `${headerHtml}`;
let empPayrollList = createEmployeePayrollJSON();

for(const empPayrollData of empPayrollList){
innerHtml = `${innerHtml}
      <tr>
        <td><img class="profile" src="${empPayrollData._profileImage}" alt="profile_img-1"></td>
        <td>${empPayrollData._name}</td>
        <td>${empPayrollData._gender}</td>
        <td>${getDeptHtml(empPayrollData._department)}</td>
       
        <td>${empPayrollData._salary}</td>
        <td>${empPayrollData._startDate}</td>
        <td>
        <img name="${empPayrollData._id}" src="../assets/icons/delete-black-18dp.svg" alt="delete" id="1" onclick="remove(this)">
        <img name="${empPayrollData._id}" src="../assets/icons/create-black-18dp.svg" alt="edit" id="1" onclick="update(this)">
        </td>
    </tr>`;
}
document.querySelector('#table-display').innerHtml = innerHtml;
}

const createEmployeePayrollJSON = () => {
    let empPayrollListLocal = [
      {
        _name: 'Pooja',
        _gender: 'Female',
        _department: ['HR'],
        _salary: 350000,
        _startDate: '20 Jul 2022',
        _note: 'Test',
        _id: new Date().getTime(),
        _profileImage: '../assets/profile-images/Ellipse -4.png'
      },
      {
        _name: 'Chandu',
        _gender: 'Male',
        _department: [ 'Engineer' ],
        _salary: 400000,
        _startDate: '02 Mar 2021',
        _note: 'Test to JSON',
        _id: new Date().getTime(),
        _profileImage: '../assets/profile-images/Ellipse -3.png'
      }
    ];
    return empPayrollListLocal;
  }
  const getDeptHtml = (deptList) => {
    let deptHtml = '';
    for(const dept of deptList){
      deptHtml = `${deptHtml} <div class='dept-label'>${dept}</div>`
    }
    return deptHtml;
  }