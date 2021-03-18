<script lang="ts">
    import {validateCharacter} from "../util"
    import { Character, Gender } from "../classes";
    import GenderIcon from "./GenderIcon.svelte";
    import OptionalText from "./OptionalText.svelte";
    import {
        FASTCard,
        FASTTextField,
        FASTTextArea,
        FASTButton,
        FASTRadioGroup,
        FASTRadio,
    } from "@microsoft/fast-components";
    {
        FASTCard;
        FASTTextField;
        FASTTextArea;
        FASTButton;
        FASTRadioGroup;
        FASTRadio;
    }

    export let character: Character;
    export let characterMap: {[id: string]: Character} = {};

    let changed: Character = {...character};

    const hasIDChanged = () => {return changed.id!==character.id;};

    const genderChange = (e) => {
        changed.gender =
            e.currentTarget.value === "Male" ? Gender.Male : Gender.Female;
    };
    const nameChange = (e) => (changed.name = e.target.value);
    const descChange = (e) => (changed.description = e.target.value);
    const IDChange = (e) => (changed.id = e.target.value);

    const editCharacter = () => {
        if (character.editing===false) {
            character.editing = true;
        } else {
            let {isValid, errors} = validateCharacter(changed);
            if (isValid) {
                isValid = hasIDChanged()?(characterMap[changed.id]==undefined):true;
                if (isValid) {
                    if (hasIDChanged()) {
                        characterMap[changed.id] = changed;
                        characterMap[character.id] = undefined;
                    }
                    character={...changed};
                    character.editing = false;
                } else {
                    errors.push(`Character ID "${changed.id}" already exists.`);
                    alert(errors);
                }
            } else {
                alert(errors);
            }
        }
    };
</script>

<fast-card>
    <div class="profile-picture-container padded">
        {#if !character.editing}
            {#if character.profile_picture}
                <img
                    src={character.profile_picture}
                    alt={character.name}
                    class="character-profile-picture centered"
                />
            {:else}
                <img
                    src="https://spng.pngfind.com/pngs/s/16-168465_aws-simple-icons-non-service-specific-user-default.png"
                    alt={character.name}
                    class="character-profile-picture centered"
                />
            {/if}
        {:else}
            <fast-button class="img-btn">Edit</fast-button>
        {/if}
    </div>
    <div class="padded">
        {#if !character.editing}
            <h4>
                <OptionalText content={character.id} />
            </h4>
            <h2>
                <OptionalText content={character.name} />
                <GenderIcon gender={character.gender} />
            </h2>
            <p>
                <OptionalText content={character.description} />
            </p>
        {:else}
            <fast-text-field
                class="id-field"
                placeholder="ID"
                value={character.id}
                on:input={IDChange}
            />
            <fast-text-field
                class="name-field"
                placeholder="Name"
                value={character.name}
                on:input={nameChange}
            />
            <fast-radio-group on:change={genderChange}>
                <fast-radio value="Male">Male</fast-radio>
                <fast-radio value="Female">Female</fast-radio>
            </fast-radio-group>
            <fast-text-area
                class="description-field"
                placeholder="Description"
                value={character.description}
                on:input={descChange}
            />
        {/if}
        <fast-button on:click={editCharacter}
            >{!character.editing ? "Edit" : "Stop Editing"}</fast-button
        >
    </div>
</fast-card>

<style>
    .padded {
        padding: 10px;
    }
    .character-profile-picture {
        max-height: 128px;
        max-width: 128px;
    }
    .centered {
        display: block;
        margin-left: auto;
        margin-right: auto;
    }
    .description-field {
        width: 100%;
    }
    .name-field {
        width: 100%;
    }
</style>
