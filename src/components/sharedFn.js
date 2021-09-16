export function transCreatedAt(millisec) {
  const today = new Date(millisec);
  const yyyy = today.getFullYear();
  const monthOfToday = today.getMonth();
  const dateOfToday = today.getDate();
  // const dayOfToday = today.getDay();
  const hoursOfToday = today.getHours();
  const minutesOfToday = today.getMinutes();
  const secondsOfToday = today.getSeconds();

  let mm = Number(monthOfToday) + 1;
  let dd = String(dateOfToday).padStart(2, "0");
  let hh;
  let min;
  let sec;
  mm = String(mm).padStart(2, "0");
  hh = String(hoursOfToday).padStart(2, "0");
  min = String(minutesOfToday).padStart(2, "0");
  sec = String(secondsOfToday).padStart(2, "0");

  return `${yyyy}-${mm}-${dd};${hh}:${min}:${sec}`;
}
