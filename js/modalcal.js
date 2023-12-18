// (() => {
//  const selectors = {
//   openModalBtn: '[data-modal-open]',
//   closeModalBtn: '[data-modal-close]',
//   modal: '[data-modal]',
//   nameInput: '[name="name"]',
//   phoneInput: '[name="phone"]',
//   dateInput: '[name="date"]',
//   timeInput: '[name="time"]',
//   calendarBtn: '[data-calendar-open]',
//   calendar: '[data-calendar]',
//   closeCalendarBtn: '[data-calendar-close]',
//   availableSlots: '.available',
//  };

//  const refs = Object.fromEntries(
//   Object.entries(selectors).map(([key, value]) => [
//    key,
//    document.querySelector(value),
//   ])
//  );

//  const daysOfWeek = [
//   'Sunday',
//   'Monday',
//   'Tuesday',
//   'Wednesday',
//   'Thursday',
//   'Friday',
//   'Saturday',
//  ];

//  function toggleModal() {
//   refs.modal.classList.toggle('is-hidden');
//  }

//  function handleSubmit(event) {
//   event.preventDefault();
//   const formData = new FormData(event.target);
//   const data = Object.fromEntries(formData.entries());
//   console.log('Form data:', data);
//   event.target.reset();
//   toggleModal();
//  }

//  function checkDayOfWeek(event) {
//   const date = new Date(event.target.value);
//   const dayOfWeek = daysOfWeek[date.getDay()];
//   if (dayOfWeek === 'Saturday' || dayOfWeek === 'Sunday') {
//    event.target.setCustomValidity('Please choose a weekday');
//   } else {
//    event.target.setCustomValidity('');
//   }
//  }

//  function openCalendar() {
//   refs.calendar.classList.remove('is-hidden');
//  }

//  function closeCalendar() {
//   refs.calendar.classList.add('is-hidden');
//  }

//  function handleSlotSelection(event) {
//   refs.availableSlots.forEach(slot => slot.classList.remove('selected'));
//   event.target.classList.add('selected');
//   refs.timeInput.value = event.target.parentNode.firstChild.innerText;
//  }

//  refs.openModalBtn.addEventListener('click', toggleModal);
//  refs.closeModalBtn.addEventListener('click', toggleModal);
//  refs.modal.addEventListener('submit', handleSubmit);
//  refs.dateInput.addEventListener('input', checkDayOfWeek);
//  refs.calendarBtn.addEventListener('click', openCalendar);
//  refs.closeCalendarBtn.addEventListener('click', closeCalendar);
//  refs.availableSlots.forEach(slot =>
//   slot.addEventListener('click', handleSlotSelection)
//  );
// })();
