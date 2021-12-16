const mainColors = {
    green1: '#5C9970',
    green2: '#E0ECE4',
    grey1: '#5B5B5B',
    grey2: '#727272'
}

export const colors = {
  primary: mainColors.green1,
  secondary: mainColors.green2,
  white: 'white',
  text: {
    primaryGreen: mainColors.green1,
    primaryGrey: mainColors.grey1,
    secondaryGrey: mainColors.grey2,
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
