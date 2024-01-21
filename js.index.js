const data = {
    "banks": [
        {
            "name": "Bank of Springfield",
            "clients": "5000",
            "location": "123 Main St, Springfield, IL",
            "overall_score": 25,
            "opening_hours": "9:00 AM - 5:00 PM",
            "loan_interest_rate": "3.5%"
        },
        {
            "name": "Capital City Bank",
            "clients": "4500",
            "location": "456 Elm St, Capital City, CA",
            "overall_score": 55,
            "opening_hours": "8:30 AM - 4:30 PM",
            "loan_interest_rate": "4.0%"
        },
        {
            "name": "Metro Financial",
            "clients": "4700",
            "location": "789 Oak St, Metroville, NY",
            "overall_score": 85,
            "opening_hours": "10:00 AM - 7:00 PM",
            "loan_interest_rate": "3.75%"
        },
        {
            "name": "Riverside Savings & Loan",
            "clients": "5500",
            "location": "101 River Rd, Riverside, TX",
            "overall_score": 11,
            "opening_hours": "9:00 AM - 6:00 PM",
            "loan_interest_rate": "3.9%"
        }
    ]
};

const cardsContainer = document.getElementById("bankCardsContainer");
const searchInput = document.getElementById("searchInput");

const likesCountElement = document.getElementById("likesCount");
let likesCount = 0;

searchInput.addEventListener("input", searchBanks);

window.addToFavorites = function (button) {
    if (button.classList.contains("liked")) {
        likesCount--;
        button.classList.remove("liked");
    } else {
        likesCount++;
        button.classList.add("liked");
    }
    likesCountElement.textContent = `❤️ ${likesCount}`;
};
function searchBanks() {
    const query = document.getElementById("searchInput").value.toLowerCase();
    const filteredBanks = data.banks.filter(bank => {
        return bank.name.toLowerCase().includes(query);
    });

    cardsContainer.innerHTML = '';

    filteredBanks.forEach(bank => {
        const bankCard = createBankCard(bank);
        cardsContainer.appendChild(bankCard);
    });
  if (query === "") {
        data.banks.forEach(bank => {
            const bankCard = createBankCard(bank);
            cardsContainer.appendChild(bankCard);
        });
    }
}

function createBankCard(bank) {
    const bankCard = document.createElement("div");
    bankCard.classList.add("bank-card");

    const dollarSign = document.createElement("div");
    dollarSign.classList.add("dollar-sign");
    dollarSign.textContent = "💵";

    const nameElement = document.createElement("div");
    nameElement.classList.add("name");
    nameElement.textContent = `${bank.name}`;

    const clientsElement = document.createElement("div");
    clientsElement.classList.add("clients");
    clientsElement.textContent = `Clients: ${bank.clients}`;

    const locationElement = document.createElement("div");
    locationElement.classList.add("location");
    locationElement.textContent = `Location: ${bank.location}`;

    const scoreElement = document.createElement("div");
    scoreElement.classList.add("score");
    scoreElement.textContent = `Score: ${bank.overall_score}`;

    const openingElement = document.createElement("div");
    openingElement.classList.add("opening");
    openingElement.textContent = `Opening Hours: ${bank.opening_hours}`;

    const loanElement = document.createElement("div");
    loanElement.classList.add("loan");
    loanElement.textContent = `Loan Interest: ${bank.loan_interest_rate}`;

    const buttonElement = document.createElement("button");
    buttonElement.classList.add("favorite");
    buttonElement.textContent = "Favorites";
    buttonElement.onclick = function () {
        addToFavorites(buttonElement);
    };

    // Přidáme třídy pro stylování podle score
    if (bank.overall_score <= 30) {
        scoreElement.classList.add("score-blue");
        bankCard.classList.add("card-blue");
    } else if (bank.overall_score <= 55) {
        scoreElement.classList.add("score-orange");
        bankCard.classList.add("card-orange");
    } else {
        scoreElement.classList.add("score-green");
        bankCard.classList.add("card-green");
    }

    bankCard.appendChild(nameElement);
    bankCard.appendChild(clientsElement);
    bankCard.appendChild(openingElement);
    bankCard.appendChild(locationElement);
    bankCard.appendChild(scoreElement);
    bankCard.appendChild(loanElement);
    bankCard.appendChild(buttonElement);
    bankCard.appendChild(dollarSign);

    return bankCard;
};

data.banks.forEach(bank => {
    const bankCard = createBankCard(bank);
    cardsContainer.appendChild(bankCard);
});