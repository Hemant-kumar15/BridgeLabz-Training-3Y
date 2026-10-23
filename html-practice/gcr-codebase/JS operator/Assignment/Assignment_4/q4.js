function addField() {
    let name = document.getElementById("fieldName").value.trim();
    let type = document.getElementById("fieldType").value;

    if (name === "") {
        alert("Enter a field label.");
        return;
    }

    let label = document.createElement("label");
    label.textContent = name + ": ";

    let input = document.createElement("input");
    input.type = type;
    input.name = name;

    let line = document.createElement("div");
    line.appendChild(label);
    line.appendChild(input);
    line.appendChild(document.createElement("br"));

    document.getElementById("myForm").appendChild(line);
    document.getElementById("fieldName").value = "";
}