const names = [
  "Raghav Kapur",
  "Elon Musk",
  "Jeff Bezoz",
  "Harry Potter",
  "Hermione Granger",
  "Steve Jobs",
  "Steve Rogers",
  "Tony Stark",
  "Manish Mohta",
  "Deepak Sharma",
  "Rohan Seth",
  "Ranbir Chopra",
  "Asif Mehmood",
  "Bruce Banner",
  "Thor Odinson",
  "Hank Pym",
  "Peter Parker",
  "Scott Lang",
];
const email = [
  "xyz.gmail.com",
  "abc@yahoo.com",
  "123@hotmail.com",
  "helloworld@gmail.com",
  "console.log@gmail.com",
];
const phone = [
  "9845892312",
  "9828341239",
  "7674729856",
  "6739561837",
  "9988663388",
];
const status = ["Open", "Closed", "In Progress", "On Hold"];
const source = ["Manually Added", "Web Form", "Intercom", "Bulk Upload"];
const company = [
  "McDonalds",
  "KFC",
  "Starbucks",
  "Gillette",
  "Nintendo",
  "Sony",
  "MasterCard",
  "Pizza Hut",
];

const genDate = () => {
  const date = new Date();
  return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
};

const dataModel = [
  {
    name: `${names[Math.floor(Math.random() * names.length)]}`,
    email: `${email[Math.floor(Math.random() * email.length)]}`,
    phone: `${phone[Math.floor(Math.random() * phone.length)]}`,
    status: `${status[Math.floor(Math.random() * status.length)]}`,
    source: `${source[Math.floor(Math.random() * source.length)]}`,
    date: genDate(),
    company: `${company[Math.floor(Math.random() * company.length)]}`,
  },
];

const populate = async () => {
  try {
    const res = await fetch("http://localhost:5000/userData", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(dataModel[0]),
    });
  } catch (error) {
    console.log(error);
  }
};

populate();