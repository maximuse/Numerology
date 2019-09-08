$('#calculate').click(function() {
    let name = $('#name').val();
    let birthDate = $('#birthDate').val().replace(/-/g, '');
    let data = new Map([
        [1, 'initiative, leadership, individuality, courage, executive ability|selfishness, laziness, aggressiveness, egotism'],
        [2, 'co-operation, harmony, love, partnership, diplomacy|over sensitive, tactlessness, timidity, vacillation'],
        [3, 'artistic and creativity, self-expression, imagination, sociability, cheerfulness|pessimism, loose talks, exaggeration'],
        [4, 'constructive, systematic, practicality, order, builder, industrious|lack of imagination, argumentative, extreme seriousness, ill health'],
        [5, 'constructive freedom, sexuality, versatility, knowledge, entertainment and amusement|changeability, carelessness, restlessness, nervousness, jack of all trades'],
        [6, 'artist, responsibility, love of home and children, welfare of others, unselfish|sensitiveness, coldness, nervousness, skepticism, must learn to be alone, not lonely'],
        [7, 'spirituality, occult, analysis, scientific research, wisdom|selfishness, laziness, aggressiveness, egotism'],
        [8, 'executive ability, organization, authority, judgment, administration|impatience, love of recognition, lack of humanitarianism, too much materialism'],
        [9, 'philanthropic nature, humanitarianism, sympathy, selflessness, divine life, generous|moody and impulsive, must learn selfishness, carelessness in money matters, inclination for high living'],
        [11, 'intuition, illumination, inspiration, spirituality, prophetic ability|too much sensitiveness, nervous tension, impracticality, must learn to mingle with public'],
        [22, 'materialism, spiritual master, practical, luminary|conflict between inner feelings and practicality, attraction for black magic'],
        [33, 'educator, passionate, responsible, kind, wise, powerful, conscious, enlightened|sensitiveness, coldness, nervousness, skepticism']
    ]);

    if (!name) {
        alert('Please enter your name!');
    }
    else if (!birthDate) {
        alert('Please enter your date of birth!')
    }
    else {
        let number = sum(birthDate);
        let qualities = data.get(number).split('|');
        let positiveQualities = qualities[0];
        let negativeQualities = qualities[1];
        let result = 'Dear ' + name +'!<br><br>Your Life Path Number is ' + number + '.<br><br>Positive qualities: ' + positiveQualities + '<br>Negative qualities: ' + negativeQualities + '<br><br><br>';

        $('#result').html(result);
    }
});

function sum(n) {
    let result = 0;

    if ((parseInt(n) <= 9 && parseInt(n) >= 1) || (parseInt(n) === 11) || (parseInt(n) === 22) || (parseInt(n) === 33)) {
        return parseInt(n);
    }
    else {
        for (let i = 0; i < n.length; i++) {
            result += parseInt(n[i]);
        }

        result = sum(result.toString());
    }

    return parseInt(result);
}