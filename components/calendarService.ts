export default {
  formatDate(date: Date) {
    // Obtenir la date d'aujourd'hui
    const dayOfMonth = date.getDate();
    const formattedDayOfMonth = (dayOfMonth < 10) ? "0" + dayOfMonth : dayOfMonth;
    var today = new Date();

    // Comparer la date passée en argument avec la date d'aujourd'hui
    if (this.isSameDay(date, today)) {
      return `auj ${formattedDayOfMonth}`;
    } else if (this.isSameDay(date, new Date(today.getTime() + 24 * 60 * 60 * 1000))) {
      return `dem ${formattedDayOfMonth}`;
    } else if (this.isSameDay(date, new Date(today.getTime() - 24 * 60 * 60 * 1000))) {
      return `hier ${formattedDayOfMonth}`;
    } else {
      // Si ce n'est pas aujourd'hui, demain ni hier, afficher la date comme précédemment
      var daysOfWeek = ["dim", "lun", "mar", "mer", "jeu", "ven", "sam"];
      var dayName = daysOfWeek[date.getDay()];
      return dayName + " " + formattedDayOfMonth;
    }
  },

  // Fonction pour vérifier si deux dates sont le même jour
  isSameDay(date1: Date, date2: Date) {
    return (
        date1.getFullYear() === date2.getFullYear() &&
        date1.getMonth() === date2.getMonth() &&
        date1.getDate() === date2.getDate()
    );
  },

  createDateArray() {
    let dateArray = [];
    const today = new Date();

    for (let i = -7; i <= 7; i++) {
      let date = new Date(today);
      date.setDate(today.getDate() + i);
      dateArray.push(date);
    }
    return dateArray;
  }
};
