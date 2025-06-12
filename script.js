// פונקציה ליצירת אפקט ריפל
function createRipple(event) {
  const button = event.currentTarget;
  const ripple = document.createElement('span');
  const rect = button.getBoundingClientRect();
  const size = Math.max(rect.width, rect.height);
  const x = event.clientX - rect.left - size / 2;
  const y = event.clientY - rect.top - size / 2;
  ripple.classList.add('ripple');
  ripple.style.width = ripple.style.height = size + 'px';
  ripple.style.left = x + 'px';
  ripple.style.top = y + 'px';
  button.appendChild(ripple);
  // הסרת הריפל לאחר האנימציה
  setTimeout(() => {
    ripple.remove();
  }, 600);
}

// הוספת אפקט ריפל לכל הכפתורים
document.querySelectorAll('.circle-button').forEach(button => {
  button.addEventListener('click', createRipple);
});

// העברה לדף מפת ישראל
document.getElementById("btn-map").addEventListener("click", function (event) {
  setTimeout(() => {
    window.location.href = "map.html";
  }, 200); // עיכוב קטן לראות את האפקט
});

// העברה לדף ציר זמן
document.getElementById("btn-timeline").addEventListener("click", function (event) {
  setTimeout(() => {
    window.location.href = "timeline.html";
  }, 200);
});

// העברה לדף שאלונים
document.getElementById("btn-quiz").addEventListener("click", function (event) {
  setTimeout(() => {
    window.location.href = "quiz.html";
  }, 200);
});

// העברה לדף אודות - כפתור חדש
document.getElementById("btn-about").addEventListener("click", function (event) {
  setTimeout(() => {
    window.location.href = "about.html";
  }, 200);
});

// אפקט הובר עם צליל (אופציונלי)
document.querySelectorAll('.circle-button').forEach(button => {
  button.addEventListener('mouseenter', function() {
    this.style.transform = 'scale(1.15) translateY(-8px)';
  });
  button.addEventListener('mouseleave', function() {
    this.style.transform = 'scale(1) translateY(0)';
  });
});