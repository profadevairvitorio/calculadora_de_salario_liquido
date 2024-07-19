function calculateINSS(grossSalary) {
    const inssRates = [
        { limit: 1302.00, rate: 0.075 },
        { limit: 2571.29, rate: 0.09 },
        { limit: 3856.94, rate: 0.12 },
        { limit: 7507.49, rate: 0.14 }
    ];

    let inss = 0;
    let remainingSalary = grossSalary;

    for (let i = 0; i < inssRates.length; i++) {
        const rateLimit = i === 0 ? inssRates[i].limit : inssRates[i].limit - inssRates[i - 1].limit;
        const applicableSalary = Math.min(remainingSalary, rateLimit);

        inss += applicableSalary * inssRates[i].rate;
        remainingSalary -= applicableSalary;

        if (remainingSalary <= 0) break;
    }

    return inss;
}
