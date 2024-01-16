const data ={
    "banks": [
        {
            "name": "Bank of Springfield",
            "location": "123 Main St, Springfield, IL",
            "overall_score": 85,
            "opening_hours": "9:00 AM - 5:00 PM",
            "loan_interest_rate": "3.5%"
        },
        {
            "name": "Capital City Bank",
            "location": "456 Elm St, Capital City, CA",
            "overall_score": 78,
            "opening_hours": "8:30 AM - 4:30 PM",
            "loan_interest_rate": "4.0%"
        },
        {
            "name": "Metro Financial",
            "location": "789 Oak St, Metroville, NY",
            "overall_score": 92,
            "opening_hours": "10:00 AM - 7:00 PM",
            "loan_interest_rate": "3.75%"
        },
        {
            "name": "Riverside Savings & Loan",
            "location": "101 River Rd, Riverside, TX",
            "overall_score": 81,
            "opening_hours": "9:00 AM - 6:00 PM",
            "loan_interest_rate": "3.9%"
        }
    ]
}

function createBankCard(bankData) {
    // Vytvoření elementu div pro kartu
    const cardElement = document.createElement('div');
    cardElement.className = 'bank-card';

    // Vytvoření obsahu karty
    const cardContent = `
    <h2>${bankData.name}</h2>
    <p>Účet: ${bankData.accountNumber}</p>
    <p>Zůstatek: ${bankData.balance} ${bankData.currency}</p>
  `;

    // Přidání obsahu do karty
    cardElement.innerHTML = cardContent;

    // Přidání karty do dokumentu
    document.body.appendChild(cardElement);
}

// Zavolání funkce pro vytvoření karty pro danou banku
createBankCard(bankData);
