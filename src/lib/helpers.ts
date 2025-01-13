export function formatNumber(num: number) {
  if (num >= 1_000_000) {
    return (num / 1_000_000).toFixed(1).replace(".0", "") + "M";
  } else if (num >= 1000) {
    return (num / 1000).toFixed(1).replace(".0", "") + "k";
  }
  return num.toString();
}
