function units(type) {
    const m = document.getElementById('m-box');
    const i = document.getElementById('i-box');

    if (type === 'metric') {
        m.style.display = 'block';
        i.style.display = 'none';
    } else {
        m.style.display = 'none';
        i.style.display = 'block';
    }
    calc();
}

function calc() {
    const isMetric = document.getElementById('m-box').style.display !== 'none';
    let w = 0;
    let h = 0;

    if (isMetric) {
        const hVal = parseFloat(document.getElementById('cm').value);
        const wVal = parseFloat(document.getElementById('kg').value);
        if (hVal > 0 && wVal > 0) {
            h = hVal / 100;
            w = wVal;
        }
    } else {
        const ft = parseFloat(document.getElementById('ft').value) || 0;
        const inch = parseFloat(document.getElementById('in').value) || 0;
        const lbs = parseFloat(document.getElementById('lbs').value);
        if ((ft + inch) > 0 && lbs > 0) {
            h = (ft * 12 + inch) * 0.0254;
            w = lbs / 2.20462;
        }
    }

    const score = document.getElementById('score');
    const status = document.getElementById('status');

    if (h > 0 && w > 0) {
        const bmi = w / (h * h);
        score.textContent = bmi.toFixed(2);

        if (bmi < 18.5) status.textContent = 'Underweight';
        else if (bmi < 25) status.textContent = 'Normal';
        else if (bmi < 30) status.textContent = 'Overweight';
        else status.textContent = 'Obese';
    } else {
        score.textContent = '0.00';
        status.textContent = 'Enter details';
    }
}

document.addEventListener('DOMContentLoaded', () => units('metric'));
