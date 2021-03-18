enum Gender {
    Male, Female,
}

class Emote {
    id: string = "";
    idle: string;
    talking: string;
    pre_animation: string;
    custom_blink: any;
    constructor() { }
};

class Character {
    id: string = "";
    profile_picture: string;
    name: string = "";
    description: string = "";
    gender: Gender = Gender.Male;
    emotes: { [id: string]: Emote } = {};
    custom_blink: any;
    editing: boolean = false;
    constructor() { }
};

export { Character, Emote, Gender }