let friends =[];









//anonymous functions
$().ready(() =>{
    $("#add").click(()=>{
        let fname=$("#iname").val();
        let femail=$("#iemail").val();
        let fphone=$("#iphone").val();
        let friend = {
            name:fname, email:femail,phone:fphone
        };
        friends.push(friend);
        display();
    });
});
const display=()=>{
    let tbody = $("tbody");
    tbody.empty();
    for(let friend of friends){
        let tr=$("<tr></tr>");
        let tdName= $(`<td>${friend.name}`);
        tr.append(tdName);
        let tdEmail= $(`<td>${friend.email}`);
        tr.append(tdEmail);
        let tdPhone= $(`<td>${friend.phone}`);
        tr.append(tdPhone);
        tbody.append(tr);
    }
}
/*const readyFn = () =>{
    console.log("jquery is ready");
}
$().ready(readyFn);*/