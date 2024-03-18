const getAccountNumber = async () => {
  const res = await fetch(
    "https://customer-analytics-34146.my.salesforce-sites.com/services/apexrest/createAccount",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: "Ishita Sharma",
        email: "ishita2166.be21@chitkara.edu.in",
        rollNumber: 2110992166,
        phone: 9888301186,
      }),
    }
  );

  return await res.json();
};

const buyStocks = async () => {
  const { accountNumber } = await getAccountNumber();
  console.log(accountNumber);
  const res = await fetch(
    "https://customer-analytics-34146.my.salesforce-sites.com/services/apexrest/buyStocks",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "bfhl-auth": 2110992166,
      },
      body: JSON.stringify({
        company: "Bajaj Finserv Ltd",
        currentPrice: 1572,
        accountNumber: accountNumber,
        githubRepoLink:
          "https://github.com/ishitasharma999/Bajaj-Salesforce-Qualifier1/",
      }),
    }
  );

  return await res.json();
};

buyStocks().then((res) => console.log(res));
