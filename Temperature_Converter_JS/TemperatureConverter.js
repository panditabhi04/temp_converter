const CalculateTemp = () => {
    const numberTemp = document.getElementById('temp').value;
    //  console.log(numberTemp);

    const tempSelected = document.getElementById('temp_diff');
    const valueTemp = temp_diff.options[tempSelected.selectedIndex]
        .value;
    //  console.log(valueTemp);
    const celToFah = (cel) => {
        const Fahrenheit = Math.round((cel * 9 / 5) + 32);
        return Fahrenheit;
    }
    const fahtocel = (cel) => {
        const Celsius = Math.round((cel - 32) * 5 / 9);
        return Celsius;
    }

    let result;

    if (valueTemp == 'cel') {
        result = celToFah(numberTemp);
        document.getElementById('resultContainer').innerHTML = `=${result}Fahrenheit`
    } else {
        result = fahtocel(numberTemp);
        document.getElementById('resultContainer').innerHTML = `=${result}Celsius`
    }
}