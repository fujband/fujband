import React, {useContext} from 'react'

import SettingsContext from '../../context/settings/settingsContext'

import themeStyle from './assets/Theme.module.scss'

const Theme = () => {
  const settingsContext = useContext(SettingsContext)
  const {setTheme, theme} = settingsContext

  const options = [
    {
      name: 'light',
      iconPath: 'M78.83333,0v21.5h14.33333v-21.5zM30.26237,20.12826l-10.13411,10.13411l15.20117,15.20117l10.13411,-10.13411zM141.73763,20.12826l-15.20117,15.20117l10.13411,10.13411l15.20117,-15.20117zM86,35.83333c-27.6214,0 -50.16667,22.54527 -50.16667,50.16667c0,27.6214 22.54527,50.16667 50.16667,50.16667c27.6214,0 50.16667,-22.54527 50.16667,-50.16667c0,-27.6214 -22.54527,-50.16667 -50.16667,-50.16667zM86,50.16667c19.87509,0 35.83333,15.95824 35.83333,35.83333c0,19.87509 -15.95825,35.83333 -35.83333,35.83333c-19.87509,0 -35.83333,-15.95825 -35.83333,-35.83333c0,-19.87509 15.95824,-35.83333 35.83333,-35.83333zM0,78.83333v14.33333h21.5v-14.33333zM150.5,78.83333v14.33333h21.5v-14.33333zM35.32943,126.53646l-15.20117,15.20117l10.13411,10.13411l15.20117,-15.20117zM136.67057,126.53646l-10.13411,10.13411l15.20117,15.20117l10.13411,-10.13411zM78.83333,150.5v21.5h14.33333v-21.5z'
    },
    {
      name: 'dark',
      iconPath: 'M78.83333,0v21.5h14.33333v-21.5zM26.56706,16.43294l-10.13411,10.13411l29.49251,29.49251c-6.28799,8.36254 -10.09212,18.68982 -10.09212,29.94043c0,27.65617 22.5105,50.16667 50.16667,50.16667c11.25061,0 21.57789,-3.80413 29.94043,-10.09212l29.49252,29.49251l10.13411,-10.13411l-29.45052,-29.45052c0.0298,-0.03977 0.0683,-0.07212 0.09798,-0.11198l-10.27409,-10.28809c-0.0293,0.04463 -0.06849,0.08148 -0.09798,0.12598l-49.55078,-49.55078c0.0445,-0.02949 0.08134,-0.06868 0.12598,-0.09798l-10.28809,-10.27409c-0.03986,0.02968 -0.0722,0.06818 -0.11198,0.09798zM141.73763,20.12826l-15.20117,15.20117l10.13411,10.13411l15.20117,-15.20117zM86,35.83333c-5.84083,0 -11.41841,1.04846 -16.6429,2.89746l11.91179,11.91178c1.56233,-0.20783 3.11145,-0.47591 4.73112,-0.47591c19.7585,0 35.83333,16.07483 35.83333,35.83333c0,1.61967 -0.26808,3.16878 -0.47591,4.73112l11.91178,11.91179c1.849,-5.21733 2.89746,-10.80207 2.89746,-16.64291c0,-27.65617 -22.5105,-50.16667 -50.16667,-50.16667zM56.17155,66.30566l49.52279,49.52278c-5.6548,3.76223 -12.402,6.00489 -19.69434,6.00489c-19.7585,0 -35.83333,-16.07483 -35.83333,-35.83333c0,-7.29234 2.24265,-14.03954 6.00488,-19.69434zM0,78.83333v14.33333h21.5v-14.33333zM150.5,78.83333v14.33333h21.5v-14.33333zM35.32943,126.53646l-15.20117,15.20117l10.13411,10.13411l15.20117,-15.20117zM78.83333,150.5v21.5h14.33333v-21.5z'
    }
  ]

  const onChange = (option) => {
    setTheme(option)
    localStorage.setItem('theme', option)
  }

  return (
    <div className={themeStyle.selection}>
      <h3 className={themeStyle.selection_title}>Výběr motivu</h3>
      <ul className={themeStyle.options}>
        {options.map(option => (
          <li
            key={option.name}
            onClick={() => onChange(option.name)}
            className={`${themeStyle.options_item} ${theme === option.name && themeStyle.options_item_active}`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="32" height="32" viewBox="0 0 172 172" fill="#ffffff">
              <path d={option.iconPath} />
            </svg>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Theme
