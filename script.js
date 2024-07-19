function calculateNetSalary() {
    const grossSalary = parseFloat(document.getElementById('grossSalary').value);
    const specialDiscounts = parseFloat(document.getElementById('specialDiscounts').value) || 0;

    if (isNaN(grossSalary)) {
        document.getElementById('result').innerText = 'Por favor, insira um valor válido para o salário bruto.';
        return;
    }

    const inss = calculateINSS(grossSalary);
    const irpf = calculateIRPF(grossSalary);

    const netSalary = grossSalary - inss - irpf - specialDiscounts;

    document.getElementById('result').innerHTML = `
        <p>Salário Bruto: R$ ${grossSalary.toFixed(2)}</p>
        <p>INSS: R$ ${inss.toFixed(2)}</p>
        <p>IRPF: R$ ${irpf.toFixed(2)}</p>
        <p>Descontos Especiais: R$ ${specialDiscounts.toFixed(2)}</p>
        <p><strong>Salário Líquido: R$ ${netSalary.toFixed(2)}</strong></p>
    `;
}
