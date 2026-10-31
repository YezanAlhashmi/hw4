//Part 2: Contact form validation

function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;

    if (name === "" || email === "") {
        alert("Please fill out all required fields.");
        return false;
    }
    else {
        return true;
    }
}

// Part 3: Project description toggle

function toggleDescription(descId) {
    var desc = document.getElementById(descId);

    if (desc.style.display === "none") {
        desc.style.display = "block";
    }
    else {
        desc.style.display = "none";
    } 
}

//Part 4: Blockquote hover

function setupQuote() {
    var quote = document.getElementById("quote");

    if (quote !== null) {
        quote.addEventListener("mouseover", function () {
            quote.style.backgroundColor = "lightyellow";
        });

        quote.addEventListener("mouseout", function () {
            quote.style.backgroundColor = "";
        });
    }
}
setupQuote();

// Part 5: Footer timestamp

function addTimestamp() {
    var footer = document.getElementById("homeFooter");

    if (footer !== null) {
        var para = document.createElement("p");
        var datevar = new Date();
        var textvar = document.createTextNode("Page loaded on: " + datevar);
        para.appendChild(textvar);
        footer.appendChild(para);
    }
}
window.onload = addTimestamp;