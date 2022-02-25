export default class BookstoreService {
  data = [
    {
      id: 1,
      title: "Production-Ready Microservices",
      author: "Susan J. Fower",
      price: 40,
      coverImage: "https://cdn1.ozone.ru/s3/multimedia-5/c360/6048392933.jpg",
    },
    {
      id: 2,
      title: "Release It",
      author: "Michael T. Nygard",
      price: 43,
      coverImage: "https://cdn1.ozone.ru/s3/multimedia-a/c360/6065903122.jpg",
    },
  ];
  getBooks() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() < 0.75) {
          resolve(this.data);
        } else {
          reject(new Error("Something bad happend"));
        }
      }, 700);
    });
  }
}
