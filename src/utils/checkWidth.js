export default function checkWidth(width) {
  if (width <= 350) {
    return [0, 300, 600];
  } else if (width <= 400) {
    return [0, 200, 400];
  } else if (width <= 600) {
    return [0, 100, 200];
  } else if (width <= 800) {
    return [0, 75, 150];
  } else {
    return [0, 37, 75];
  }
}