export default function powerChanger(power) {
  if (power.length <= 4) {
    return power;
  }
  if (power.length === 5) {
    const change = `${power.slice(0, 1)}만 ${power.slice(1)} `;
    return change;
  }
  if (power.length === 6) {
    const change = `${power.slice(0, 2)}만 ${power.slice(2)} `;
    return change;
  }
  if (power.length === 7) {
    const change = `${power.slice(0, 3)}만 ${power.slice(3)} `;
    return change;
  }

  if (power.length === 8) {
    const change = `${power.slice(0, 4)}만 ${power.slice(4)} `;
    return change;
  }
  if (power.length === 9) {
    const change = `${power.slice(0, 1)}억 ${power.slice(1, 5)}만 ${power.slice(
      5
    )} `;
    return change;
  }
  if (power.length === 10) {
    const change = `${power.slice(0, 2)}억 ${power.slice(2, 6)}만 ${power.slice(
      6
    )} `;
    return change;
  }
}
