var reInflect = require("re_inflect"),
    capitalizeString = require("capitalize_string");


module.exports = function capitalize(string, allWords) {
    var parts, i;

    if (allWords !== false) {
        parts = string.match(reInflect),
            i = parts.length;

        while (i--) {
            parts[i] = capitalizeString(parts[i]);
        }

        return parts.join(" ");
    }

    return capitalizeString(string.match(reInflect).join(" "));
};
