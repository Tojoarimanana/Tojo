document.getElementById('equation-form').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const a = document.getElementById('a').value.trim();
    const b = document.getElementById('b').value.trim();
    const c = document.getElementById('c').value.trim();
  
    const resultDiv = document.getElementById('result');
  
    // Vérification des champs vides
    if (!a || !b || !c) {
      resultDiv.textContent = 'Please fill in all fields.';
      resultDiv.style.color = 'red';
      return;
    }
  
    // Conversion des valeurs en nombres
    const aNum = parseFloat(a);
    const bNum = parseFloat(b);
    const cNum = parseFloat(c);
  
    // Vérification des entrées valides
    if (isNaN(aNum) || isNaN(bNum) || isNaN(cNum)) {
      resultDiv.textContent = 'Please enter valid numbers.';
      resultDiv.style.color = 'red';
      return;
    }
  
    // Vérification si ce n'est pas une équation quadratique
    if (aNum === 0) {
      resultDiv.textContent = 'This is not a quadratic equation (a ≠ 0).';
      resultDiv.style.color = 'red';
      return;
    }
  
    // Calcul du discriminant
    const discriminant = bNum * bNum - 4 * aNum * cNum;
  
    let result;
    if (discriminant > 0) {
      // Deux racines réelles distinctes
      const root1 = (-bNum + Math.sqrt(discriminant)) / (2 * aNum);
      const root2 = (-bNum - Math.sqrt(discriminant)) / (2 * aNum);
      result = `Two real roots: x₁ = ${root1}, x₂ = ${root2}`;
      resultDiv.style.color = 'blue';
    } else if (discriminant === 0) {
      // Une racine réelle unique
      const root = -bNum / (2 * aNum);
      result = `One real root: x = ${root}`;
      resultDiv.style.color = 'blue';
    } else {
      // Racines complexes (discriminant < 0)
      const realPart = -bNum / (2 * aNum);
      const imaginaryPart = Math.sqrt(-discriminant) / (2 * aNum);
      result = `Two complex roots: x₁ = ${realPart} + ${imaginaryPart}i, x₂ = ${realPart} - ${imaginaryPart}i`;
      resultDiv.style.color = 'blue';
    }
  
    resultDiv.textContent = result;
  });
  