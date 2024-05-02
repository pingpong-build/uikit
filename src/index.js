const plugin = require('tailwindcss/plugin')

const components = require('../dist/components')
const utilities = require('../dist/utilities')

module.exports = plugin(
    function ({ addUtilities, addComponents, theme }) {
        addUtilities(utilities)
        addComponents(components)
    },
    {
        theme: {
            extend: {
                fontFamily: {
                    montserrat: ['Montserrat', 'sans-serif'],
                },
                colors: {
                    'pp-blue': '#91ADAA',
                    'pp-cream': '#FDEFD9',
                    'pp-dark-gray': '#3D3D3D',
                    'pp-green': '#8EB65C',
                    'pp-light-yellow': '#F7E3C2',
                    'pp-red': '#ED5B42',
                    'pp-yellow': '#F2B984',
                    'pp-spry': '#F7CA3A',
                    'pp-disable': '#D1C4AF',
                }
            }
        }
    }
)
