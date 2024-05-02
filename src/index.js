const plugin = require('tailwindcss/plugin')

const components = require('../dist/components')
const utilities = require('../dist/utilities')

module.exports = plugin(
    function ({ addUtilities, addComponents }) {
        addUtilities(utilities)
        addComponents(components)
    },
)
