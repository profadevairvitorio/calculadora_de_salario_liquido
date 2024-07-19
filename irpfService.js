function calculateIRPF(grossSalary) {
    const irpfRates = [
        { limit: 1903.98, rate: 0, deduction: 0 },
        { limit: 2826.65, rate: 0.075, deduction: 142.80 },
        { limit: 3751.05, rate: 0.15, deduction: 354.80 },
        { limit: 4664.68, rate: 0.225, deduction: 636.13 },
        { limit: Infinity, rate: 0.275, deduction: 869.36 }
    ];

    let irpf = 0;

    for (let i = 0; i < irpfRates.length; i++) {
        if (grossSalary <= irpfRates[i].limit) {
            irpf = grossSalary * irpfRates[i].rate - irpfRates[i].deduction;
            break;
        }
    }

    return irpf < 0 ? 0 : irpf;
}
