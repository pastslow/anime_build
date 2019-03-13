import {Howl, Howler} from 'howler';

const soundTheme = new Howl({
    src: ['assets/AUDIO/FAIRY_THEME.MP3'],
    volume: 0.1
});

const btnClick = new Howl({
    src: ['assets/AUDIO/BTN_CLICK.MP3'],
    volume: 0.1
});

const construct = new Howl({
    src: ['assets/AUDIO/CONSTRUCT.MP3'],
    volume: 0.1
});

const demolish = new Howl({
    src: ['assets/AUDIO/DEMOLISH.MP3'],
    volume: 0.1
});

const power_off = new Howl({
    src: ['assets/AUDIO/POWER_OFF.MP3'],
    volume: 0.1
});

const power_on = new Howl({
    src: ['assets/AUDIO/POWER_ON.MP3'],
    volume: 0.1
});

const ambient = new Howl({
    src: ['assets/AUDIO/AMBIENT.MP3'],
    loop: true,
    volume: 0.1
});

export{soundTheme};
export{btnClick};
export{construct};
export{demolish};
export{power_off};
export{power_on};
export{ambient};


