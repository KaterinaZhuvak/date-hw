// class CountdownTimer {
//   constructor({ selector, targetDate }) {
//     this.selector = selector;
//     this.targetDate = new Date('Jul 17, 2025') ;
//     this.refs = {
//       days: document.querySelector(`${selector} [data-value="days"]`),
//       hours: document.querySelector(`${selector} [data-value="hours"]`),
//       mins: document.querySelector(`${selector} [data-value="mins"]`),
//       secs: document.querySelector(`${selector} [data-value="secs"]`),
//     };
//   }

//   start() {
//     this.updateTimer();
//     setInterval(() => {
//       this.updateTimer();
//     }, 1000);
//   }

//   updateTimer() {
//     const now = new Date().getTime();
//     const timeLeft = this.targetDate.getTime() - now;

//     const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
//     const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//     const mins = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
//     const secs = Math.floor((timeLeft % (1000 * 60)) / 1000);

//     this.refs.days.textContent = days;
//     this.refs.hours.textContent = String(hours).padStart(2, '0');
//     this.refs.mins.textContent = String(mins).padStart(2, '0');
//     this.refs.secs.textContent = String(secs).padStart(2, '0');
//   }
// }

// // Створюємо екземпляр таймера з налаштуваннями
// new CountdownTimer({
//   selector: '#timer-1',
//   targetDate: new Date('Jul 17, 2025'),
// }).start();
class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.targetDate = targetDate;
    this.timerElement = document.querySelector(selector);
    this.daysElement = this.timerElement.querySelector('[data-value="days"]');
    this.hoursElement = this.timerElement.querySelector('[data-value="hours"]');
    this.minsElement = this.timerElement.querySelector('[data-value="mins"]');
    this.secsElement = this.timerElement.querySelector('[data-value="secs"]');

    this.start();
  }

  start() {
    this.updateTimer(); // Оновлення таймера одразу при завантаженні
    this.intervalId = setInterval(() => {
      this.updateTimer();
    }, 1000);
  }

  updateTimer() {
    const currentTime = new Date();
    const time = this.targetDate - currentTime;

    if (time <= 0) {
      clearInterval(this.intervalId); // Зупинка таймера, коли досягнуто дати
      this.displayTime(0, 0, 0, 0);
      return;
    }

    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((time % (1000 * 60)) / 1000);

    this.displayTime(days, hours, mins, secs);
  }

  displayTime(days, hours, mins, secs) {
    this.daysElement.textContent = days;
    this.hoursElement.textContent = String(hours).padStart(2, '0');
    this.minsElement.textContent = String(mins).padStart(2, '0');
    this.secsElement.textContent = String(secs).padStart(2, '0');
  }
}

// Приклад використання
new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jul 17, 2019')
});