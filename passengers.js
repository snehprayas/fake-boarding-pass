// passengers.js

const passengers = {
  "B001": {
    name: "Alice",
    phone: "1234567890",
    gender: "F",
    return: {
      train: "SP101",
      from: "DELHI",
      to: "MATHURA",
      date: "2025-09-10",
      time: "09:30",
      coach: "C1",
      seat: "12A"
    },
    onward: {
      train: "SP102",
      from: "MATHURA",
      to: "DELHI",
      date: "2025-09-11",
      time: "17:45",
      coach: "C2",
      seat: "14B"
    }
  },
  "B002": {
    name: "Bob",
    phone: "9876543210",
    gender: "M",
    return: {
      train: "SP201",
      from: "DELHI",
      to: "AGRA",
      date: "2025-09-12",
      time: "10:00",
      coach: "C3",
      seat: "21C"
    },
    onward: {
      train: "SP202",
      from: "AGRA",
      to: "DELHI",
      date: "2025-09-13",
      time: "18:30",
      coach: "C4",
      seat: "22D"
    }
  }
};
