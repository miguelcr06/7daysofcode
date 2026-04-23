let chosenArea = '';
let chosenTech = '';
let chosenSpecial = '';
let techList = [];

function nextStep(step) {
    if (step === 1) {
        chosenArea = document.getElementById("area_choice").value;
        if (!chosenArea) {
            alert("Por favor, selecione uma área.");
            return;
        }
        document.getElementById("daythree_result").innerHTML = `Você escolheu: ${chosenArea}<br>`;
        document.getElementById("step1").style.display = "none";
        document.getElementById("step2").style.display = "block";
        let label = document.getElementById("tech_label");
        if (chosenArea === "Front-End") {
            label.innerHTML = "Quer aprender React ou Vue?";
            document.getElementById("tech_choice").innerHTML = '<option value="">Selecione</option><option value="React">React</option><option value="Vue">Vue</option>';
        } else {
            label.innerHTML = "Quer aprender C# ou Java?";
            document.getElementById("tech_choice").innerHTML = '<option value="">Selecione</option><option value="C#">C#</option><option value="Java">Java</option>';
        }
    } else if (step === 2) {
        chosenTech = document.getElementById("tech_choice").value;
        if (!chosenTech) {
            alert("Por favor, selecione uma tecnologia.");
            return;
        }
        document.getElementById("daythree_result").innerHTML += `Tecnologia: ${chosenTech}<br>`;
        document.getElementById("step2").style.display = "none";
        document.getElementById("step3").style.display = "block";
    } else if (step === 3) {
        chosenSpecial = document.getElementById("special_choice").value;
        if (!chosenSpecial) {
            alert("Por favor, selecione uma opção.");
            return;
        }
        let specialText = chosenSpecial === "especializar" ? "Especializar-se" : "Tornar-se Fullstack";
        document.getElementById("daythree_result").innerHTML += `Decisão: ${specialText}<br>`;
        document.getElementById("step3").style.display = "none";
        document.getElementById("step4").style.display = "block";
    }
}

function addTech() {
    let tech = document.getElementById("tech_input").value.trim();
    if (!tech) {
        alert("Por favor, digite uma tecnologia.");
        return;
    }
    techList.push(tech);
    let list = document.getElementById("tech_list");
    let li = document.createElement("li");
    li.textContent = tech;
    list.appendChild(li);
    document.getElementById("tech_input").value = "";
    alert(`Que legal! ${tech} é uma tecnologia muito interessante!`);
    document.getElementById("daythree_result").innerHTML += `Tecnologia adicionada: ${tech}<br>`;
}

function finishTech() {
    if (techList.length === 0) {
        alert("Adicione pelo menos uma tecnologia.");
        return;
    }
    let summary = `Resumo final: Área ${chosenArea}, Tecnologia ${chosenTech}, ${chosenSpecial === "especializar" ? "Especializar" : "Fullstack"}. Tecnologias para aprender: ${techList.join(", ")}.`;
    document.getElementById("daythree_result").innerHTML += "<br>" + summary;
    document.getElementById("retry_button").style.display = "block";
}

function retryGame() {
    chosenArea = '';
    chosenTech = '';
    chosenSpecial = '';
    techList = [];
    document.getElementById("daythree_result").innerHTML = '';
    document.getElementById("tech_list").innerHTML = '';
    document.getElementById("tech_input").value = '';
    document.getElementById("area_choice").value = '';
    document.getElementById("tech_choice").innerHTML = '<option value="">Selecione</option>';
    document.getElementById("special_choice").value = '';
    document.getElementById("step1").style.display = "block";
    document.getElementById("step2").style.display = "none";
    document.getElementById("step3").style.display = "none";
    document.getElementById("step4").style.display = "none";
    document.getElementById("retry_button").style.display = "none";
}