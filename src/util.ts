import type {Character} from "./classes"

const validateID = (id: string): boolean => {
    let re:RegExp = /^[A-Za-z]+[\w\-\:\.]*$/;
    return re.test(id);
}

const validateCharacter = (c: Character) => {
    let isValid = true;
    let errors = [];
    if (c.id==="" || !validateID(c.id)) {
        isValid=false;
        errors.push(`Invalid ID: "${c.id}" for character.`);
    }
    return {isValid, errors};
}

export {validateID, validateCharacter};