let Barberella = {
    user: 'Matt',   // Which user made this profile
    name: 'Barberella', // Information like race, class, and name exist for the user to identify the profile.
    race: 'teifling',
    STR: 13,    // Stat affects carry weight
    size: 'medium', // Size affects carry weight(?)
    class: ['barbarian','monk'], // This exists as a list due to multi-classing
    'powerful build': 0, // 0 for no, 1 for yes, some classes can carry additional weight
    items: {
        /*
        Items are referenced by their names in lower case. 
        This will eventually pull stat block information from a repository.
        Each seperate item is an array that includes the item name and number of the item held.
        Some items are expected to exist in larger number - those have specific properties such as money and rope length.
        */
        items: [['padded armor',1],['short sword',1],['dagger',2],['sheild',1],['potion',1],['candle',3]],
        rations: 10,
        // water: 4, // in Liters (this may be added later)
        rope: 50    // length in feet
    },
    money: {
        // Weight of currency can be calculated from the number of specific coins
        copper: 0,
        silver: 0,
        electrum: 0,
        gold: 15,
        platinum: 0
     }
}

/*
STR determines the amount of weight a character can bear:
    Carrying Capacity is STR score (RAW) multiplied by 15lb.
    Push, Drag of Lift a weight in lb up to 2x your Carrying Capacity.
    For each size category above Medium, double the creature's Carrying Capacity and the amount it can Push, Drag, or Lift.
        For Tiny creatresn halve these weights.

Encumbrance Varient:
    Ignore the STR column of the armor table.
    If your carry weigtht is >5xSTR (RAW) then your are Encumbered and your speed drops by 10ft.
    If your carry weight is >10xSTR (RAW), up to max carry weight, then you are Heavily Encumbered and your speed drops by 20ft, 
    and your have disadvantage on all Ability Checks, Attack Rolls, and Saving Throws that use STR, DEX, or CON.

src: https://roll20.net/compendium/dnd5e/Ability%20Scores#content
*/