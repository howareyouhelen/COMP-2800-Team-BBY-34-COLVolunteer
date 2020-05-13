$(document).ready(()=>{
    console.log("in js file");
    loadrequests();
})

function loadrequests(){

    auth.onAuthStateChanged((user) => {
        console.log(user);

        if(user){
            db.collection("user").doc(user.uid).collection("requestForMe").get().then((querySnapshot) => {
                var x = 1;
                querySnapshot.forEach(function (doc) {
                    
                    var requesterId = doc.data().fromUserId;
                    db.collection("user").doc(requesterId).get().then((snap1 =>{
                        var requesterName = snap1.data().name;
                        var requesterAddress = snap1.data().address;
                        

                    
                    console.log(requesterName);
                    var message = doc.data().message;
                    var list = doc.data().list;
                    var docRef = doc.data().docRefid;
                    
                    console.log(message);
                    console.log(list);
                    console.log(requesterId);
                    console.log(requesterName);
                    console.log(requesterAddress);

                    var y = "card" + x;

                    var z = '<div class="card" id="' + y + '"></div>';
                    var z_id = '#' + y;

                    $("#item_cards").append(z);

                    var b = '<div class="card-body" id="' + y + 'body">';
                    var b_id = '#' + y + 'body';

                    $(z_id).append(b);

                    var c = '<h4 class="card-title" id="' + y + 'name">Requester: ' + requesterName + '</h4>';
                    var c_id = '#' + y + 'name';

                    $(b_id).append(c);

                    var d = '<h6 class="card-subtitle mb-2 text-muted" id="' + y + 'store">Requester\'s address: ' + requesterAddress + '</h6>';
                    var d_id = '#' + y + 'store';

                    $(b_id).append(d);

                    var f = '<p class="card-text" id="' + y + 'date"> Message: ' + message + '</p>';
                    var f_id = '#' + y + 'date';

                    var g = '<p class="card-text" id="' + y + 'list"> Items requested: ' + list + '</p>';
                    var g_id = '#' + y + 'list';

                    $(b_id).append(f);
                    $(b_id).append(g);
                    
                    

                    var h = '<button type="button" class="btn btn-success" id="' + y + 'acceptbutton" value = ' + docRef + '>' + 'Accept</button>';
                    $(b_id).append(h);

                    var i = '<button type="button" class="btn btn-danger" id="' + y + 'declinebutton" value = ' + docRef + '>' + 'Decline</button>';
                    $(b_id).append(i);
                    
                    
                    

                    x++;
                }))
                })
            })         
        }          
    });               
}
