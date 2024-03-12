import { scenarios as level1Options } from './scenario/level-1.js';
import { scenarios as level2Options } from './scenario/level-2.js';
import { scenarios as level3Options } from './scenario/level-3.js';

export const scenarios = () => {
    const optionsByLevel = {
        "1": level1Options,
        "2": level2Options,
        "3": level3Options,
    };

    const selectedLevel = __ENV.LEVEL;
    return optionsByLevel[selectedLevel];
};
