function updateClock(id, timeZone) {
  const timeOptions = { hour: '2-digit', minute: '2-digit', second: '2-digit' };
  const dateOptions = { day: '2-digit', month: '2-digit', year: 'numeric' };

  document.getElementById(id + "-time").textContent =
    new Date().toLocaleTimeString("en-GB", { ...timeOptions, timeZone });
  document.getElementById(id + "-date").textContent =
    new Date().toLocaleDateString("en-GB", { ...dateOptions, timeZone });
}

function startClocks() {
  // Pakistan (home + pakistan page)
  if (document.getElementById("pk-time")) updateClock("pk", "Asia/Karachi");

  // Others (specified page)
  if (document.getElementById("in-time")) updateClock("in", "Asia/Kolkata");
  if (document.getElementById("us-time")) updateClock("us", "America/New_York");
  if (document.getElementById("uk-time")) updateClock("uk", "Europe/London");
  if (document.getElementById("uae-time")) updateClock("uae", "Asia/Dubai");
}

setInterval(startClocks, 1000);
startClocks();
