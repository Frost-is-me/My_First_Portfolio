function Reccommendation() {
    var rec_name = document.getElementById("name").value;
    var rec_input = document.getElementById("text").value;
    if(!rec_name.trim() || !rec_input.trim()) {
        return false;
    }
    var new_rec = document.createElement("li");
    var new_p = document.createElement("p");
    new_p.textContent = rec_name;
    new_rec.appendChild(new_p);
    new_rec.appendChild(document.createTextNode(" " + rec_input));
    var Reccommendation_list = document.getElementById("recommendation_list");
    Reccommendation_list.appendChild(new_rec);
    document.getElementById("name").value = "";
    document.getElementById("text").value = "";
    alert("Thank you for your recommendation!");
}