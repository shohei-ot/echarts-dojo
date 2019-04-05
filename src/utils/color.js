import palette from 'google-palette'

export const genColors = (name, count) => {
  return palette(name, count).map(hex => `#${hex}`)
}

/**
 * 指定された数の16進数のカラーコードを配列で返す
 *
 * @param len 1以上の数値
 */
const getColors = function getColors(len) {
  const res = []

  if (len < 1) {
    return res
  }

  switch (true) {
    case len <= 4:
      res.push(...genColors('tol-dv', 4))
      break
    default:
      res.push(...genColors('tol-dv', len))
  }
  return res.filter((_, i) => i < len)
}

export default getColors
