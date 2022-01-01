const mainColors = {
    green1: '#5C9970',
    green2: '#E0ECE4',
    green3: '#ACCDB7',
    grey1: '#5B5B5B',
    grey2: '#727272',
    grey3: '#686868',
    grey4: '#A8A8A8',
    light: '#F5F5F5'
}

export const colors = {
  primary: mainColors.green1,
  secondary: mainColors.green2,
  greenLighter: mainColors.green3,
  white: 'white',
  light: mainColors.light,
  text: {
    primaryGreen: mainColors.green1,
    primaryGrey: mainColors.grey1,
    secondaryGrey: mainColors.grey2,
    grey3: mainColors.grey3,
    greyLighter: mainColors.grey4,
    menuActive: mainColors.green1,
    menuInactive: mainColors.green3
  },
  button: {
    border: mainColors.green1,
    primary: {
      background: mainColors.green1,
      text: 'white',
    },
    secondary: {
      background: 'white',
      text: mainColors.green1,
    },
  },
  input: {
      blur: {
          border: mainColors.grey2,
          label: mainColors.grey1
    },
      focus: {
          border: mainColors.green1,
          label: mainColors.green1

      }
  }
};
