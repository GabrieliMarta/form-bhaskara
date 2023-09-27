document.getElementById("bhaskaraForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const a = parseFloat(document.getElementById("a").value);
    const b = parseFloat(document.getElementById("b").value);
    const c = parseFloat(document.getElementById("c").value);

    const discriminante = b * b - 4 * a * c;

    if (discriminante < 0) {
        document.getElementById("resultado").innerHTML = "Não há raízes reais.";
    } else {
        const x1 = (-b + Math.sqrt(discriminante)) / (2 * a);
        const x2 = (-b - Math.sqrt(discriminante)) / (2 * a);

        document.getElementById("resultado").innerHTML = "Raiz 1: " + x1 + "<br>Raiz 2: " + x2;
    }
});