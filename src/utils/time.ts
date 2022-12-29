export function TimeToSecond(time: string) {
  const [h = "0", m = "0", s = "0"] = time.split(":");
  const hS = Number(h) * 60 * 60;
  const mS = Number(m) * 60;
  const sS = Number(s);
  return hS + mS + sS;
}
