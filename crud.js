let users=[];
    let editingIndex = -1; 

    document.querySelector('.userForm').addEventListener('submit',function(e){
     e.preventDefault();
     const inputName=document.querySelector('#name').value
      const inputPhone=document.querySelector('#phone').value
       const inputEmail=document.querySelector('#email').value

       if(editingIndex===-1){
       users.push({inputName,inputPhone,inputEmail});
       }
       else{
          users[editingIndex]={inputName,inputPhone,inputEmail};
          editingIndex=-1;
       }
       this.reset();
       renderTable();
    });

    function renderTable(){
        const tbody=document.querySelector('#table tbody');
        tbody.innerHTML='';

        users.forEach((user,index)=>{
         const row=document.createElement("tr");

         row.innerHTML=`
         <td>${user.inputName}</td>
         <td>${user.inputPhone}</td>
         <td>${user.inputEmail}</td>
         <td><button onclick="editUser(${index})">Edit</button>
            </td>
            <td><button onclick="deleteUser(${index})">Delete</button>
            </td>
            
        `;
        tbody.appendChild(row);
        });
    }
    function editUser(index){
        const user=users[index];
        document.querySelector('#name').value=user.inputName;
        document.querySelector('#phone').value=user.inputPhone;
        document.querySelector('#email').value=user.inputEmail;
        editingIndex=index;
    }

    function deleteUser(index){
        users.splice(index,1);
        renderTable();
    }

