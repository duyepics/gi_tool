function showTool(toolId) {
  document.querySelectorAll(".tool").forEach(t => t.classList.remove("active"));
  document.getElementById(toolId).classList.add("active");
}

function calculateResin() {
  const currentResin = parseFloat(document.getElementById("currentResin").value);
  const currentTime = new Date(document.getElementById("currentTime").value);
  const targetTime = new Date(document.getElementById("targetTime").value);

  if (isNaN(currentResin) || !currentTime || !targetTime) {
    document.getElementById("result").innerText = "⚠️ Vui lòng nhập đầy đủ thông tin!";
    return;
  }

  const resinRegenRate = 8; // phút/nhựa
  const diffMinutes = (targetTime - currentTime) / (1000 * 60);
  const recoveredResin = Math.floor(diffMinutes / resinRegenRate);

  let totalResin = currentResin + recoveredResin;
  if (totalResin > 200) totalResin = 200;

  document.getElementById("result").innerHTML =
    `⏳ Sau ${diffMinutes.toFixed(1)} phút, bạn sẽ có tổng cộng <b>${totalResin}</b> nhựa nguyên chất!`;
}
