function result_displayer() {

}

document.getElementById("button").onclick = function(){
    let perpendicular;
    let base;
    let hypotenuse;
    let hyp_block;
    
    perpendicular = document.getElementById("perpendicular").value;
    perpendicular = parseFloat(perpendicular);
    
    base = document.getElementById("base").value;
    base = parseFloat(base);

    hypotenuse = (perpendicular**2 + base**2)**0.5;
    //hypotenuse = hypotenuse.toString();

    hyp_block = document.querySelector("#hyp");
    let label = document.createElement("label");
    label.textContent = "The hypotenuse: ";

    hyp_block.appendChild(document.createElement("br"));
    hyp_block.appendChild(document.createElement("br"));

    hyp_block.appendChild(label);
    
    let textbox = document.createElement("input");
    textbox.setAttribute("value", hypotenuse);
    textbox.setAttribute("size", 30);
    textbox.setAttribute("readonly", true);
    hyp_block.appendChild(textbox);

}